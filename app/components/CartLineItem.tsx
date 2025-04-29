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

export function CartLineItem({ line, layout }: { line: CartLine; layout: CartLayout }) {
  const { id, merchandise } = line;
  const { product, title, image, selectedOptions } = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  const { close } = useAside();

  return (
    <li className="w-full  bg-[#F9F9F9] p-4 rounded-xl flex flex-col gap-4 sm:gap-6 xl:gap-6 2xl:gap-6">
      <div className="bg-white p-2 sm:p-5 xl:p-6 2xl:p-6 rounded-lg flex flex-col sm:flex-row gap-4 sm:gap-6 xl:gap-6 shadow-sm">
        {image && (
          <Image
            alt={title}
            data={image}
            width={100}
            height={100}
            className="rounded-md w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
        )}

        <div className="flex flex-col justify-between w-full gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <Link
              prefetch="intent"
              to={lineItemUrl}
              onClick={() => layout === 'aside' && close()}
              className="text-base sm:text-sm xl:text-base font-semibold hover:underline max-w-[90%] break-words"
            >
              {product.title}
            </Link>

            <ProductPrice price={line?.cost?.totalAmount} />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-2">
            <CartLineQuantity line={line} />

            <div className="border-dashed border-2 border-gray-300 rounded-md px-3 py-2 text-xs sm:text-sm text-gray-700 flex items-center gap-2 sm:mt-0">
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
