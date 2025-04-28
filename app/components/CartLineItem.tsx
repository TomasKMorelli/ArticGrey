import {CartForm, Image, type OptimisticCartLine} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {ProductPrice} from './ProductPrice';
import {useAside} from './Aside';
import {useVariantUrl} from '~/lib/variants';
import {RotateCcw} from 'lucide-react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import type {CartLayout} from '~/components/CartMain';
import type {CartLineUpdateInput} from '@shopify/hydrogen/storefront-api-types';

type CartLine = OptimisticCartLine<CartApiQueryFragment>;

export function CartLineItem({line, layout}: {line: CartLine; layout: CartLayout}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  const {close} = useAside();

  return (
    <li className="w-full bg-[#F9F9F9] p-4 rounded-xl flex flex-col gap-3">
      <div className="bg-white p-4 rounded-lg flex gap-4 items-start shadow-sm">
        {image && (
          <Image
            alt={title}
            data={image}
            width={80}
            height={80}
            className="rounded-md"
          />
        )}
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between items-start">
            <Link
              prefetch="intent"
              to={lineItemUrl}
              onClick={() => layout === 'aside' && close()}
              className="text-sm font-semibold hover:underline"
            >
              {product.title}
            </Link>
            <ProductPrice price={line?.cost?.totalAmount} />
          </div>

          <div className="flex items-center justify-between mt-4">
            <CartLineQuantity line={line} />
            <div className="border-dashed border-2 border-gray-300 rounded-md px-3 py-2 flex items-center gap-2 text-xs text-gray-700">
              <RotateCcw className="w-4 h-4" />
              Subscribe & Save 10%
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
function CartLineQuantity({line}: {line: CartLine}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity, isOptimistic} = line;
  const prevQuantity = Math.max(0, quantity - 1);
  const nextQuantity = quantity + 1;

  return (
    <div className="flex items-center gap-2">
      <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
        <button
          aria-label="Decrease quantity"
          disabled={quantity <= 1 || !!isOptimistic}
          className="border rounded w-8 h-8 flex items-center justify-center text-lg"
        >
          −
        </button>
      </CartLineUpdateButton>
      <span className="text-sm">{quantity}</span>
      <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
        <button
          aria-label="Increase quantity"
          disabled={!!isOptimistic}
          className="border rounded w-8 h-8 flex items-center justify-center text-lg"
        >
          +
        </button>
      </CartLineUpdateButton>
    </div>
  );
}
function CartLineUpdateButton({children, lines}: {children: React.ReactNode; lines: CartLineUpdateInput[]}) {
  return (
    <CartForm route="/cart" action={CartForm.ACTIONS.LinesUpdate} inputs={{lines}}>
      {children}
    </CartForm>
  );
}
