import type {CartApiQueryFragment} from 'storefrontapi.generated';
import type {CartLayout} from '~/components/CartMain';
import {Money, type OptimisticCart} from '@shopify/hydrogen';

type CartSummaryProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
  layout: CartLayout;
};

export function CartSummary({cart, layout}: CartSummaryProps) {
  if (!cart) return null;

  return (
    <div className="w-full mt-6 px-[30px]">
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-lg">Subtotal</p>
        <p className="font-semibold text-lg">
          {cart.cost?.subtotalAmount?.amount ? (
            <Money data={cart.cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-4">
        Tax included. Shipping calculated at checkout.
      </p>

      {cart.checkoutUrl && (
        <div className="mt-4">
          <a
            href={cart.checkoutUrl}
            target="_self"
            className="block w-full bg-black text-white py-3 rounded-xl text-center font-semibold hover:opacity-90 transition"
          >
            Checkout
          </a>
        </div>
      )}
    </div>
  );
}
