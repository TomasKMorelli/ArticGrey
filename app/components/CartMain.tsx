import {useOptimisticCart} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {CartLineItem} from '~/components/CartLineItem';
import {CartSummary} from './CartSummary';
import {X} from 'lucide-react';

export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
};

export function CartMain({layout, cart: originalCart}: CartMainProps) {
  const cart = useOptimisticCart(originalCart);

  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;
  const cartHasItems = cart?.totalQuantity && cart?.totalQuantity > 0;

  return (
    <div className={className}>
      <CartEmpty hidden={linesCount} layout={layout} />
      <div className="cart-details">
        <CartHeader cartCount={cart?.totalQuantity ?? 0} />
        <ShippingProgress />
        <div aria-labelledby="cart-lines">
          <ul className="flex flex-col gap-4">
            {(cart?.lines?.nodes ?? []).map((line) => (
              <CartLineItem key={line.id} line={line} layout={layout} />
            ))}
          </ul>
        </div>
        {cartHasItems && <CartSummary cart={cart} layout={layout} />}
      </div>
    </div>
  );
}

function CartEmpty({
  hidden = false,
}: {
  hidden: boolean;
  layout?: CartMainProps['layout'];
}) {
  const {close} = useAside();
  return (
    <div hidden={hidden}>
      <br />
      <p>Looks like you haven’t added anything yet, let’s get you started!</p>
      <br />
      <Link to="/collections" onClick={close} prefetch="viewport">
        Continue shopping →
      </Link>
    </div>
  );
}

function CartHeader({cartCount}: {cartCount: number}) {
  const {close} = useAside();
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-[30px] pt-[26px] pb-[24px]">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold">Your Bag</h2>
        <span className="text-xs text-white bg-black rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      </div>
      <button onClick={close} aria-label="Close cart">
        <X className="w-6 h-6 text-gray-500 hover:text-black" />
      </button>
    </div>
  );
}
function ShippingProgress() {
  return (
    <div className="px-[30px] pt-4 pb-6 text-center">
      <p className="text-sm mb-2">
        You are <strong>$45.44 away</strong> from eligible for free shipping
      </p>
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-2 bg-black rounded-full"
          style={{ width: '43%' }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>$0</span>
        <span>$80</span>
      </div>
    </div>
  );
}
