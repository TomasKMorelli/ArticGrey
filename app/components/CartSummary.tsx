import type {CartApiQueryFragment} from 'storefrontapi.generated';
import type {CartLayout} from '~/components/CartMain';
import {Money, type OptimisticCart} from '@shopify/hydrogen';



type CartSummaryProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
  layout: CartLayout;

};

export function CartSummary({cart, layout,  }: CartSummaryProps) {
  if (!cart) return null;

  return (
    <div className="w-full mt-6 px-4 sm:px-8 xl:px-[30px] 2xl:px-[30px]">
      <div className="flex justify-between items-center mb-2 sm:mb-3 xl:mb-4">
        <p className="font-semibold text-base sm:text-lg xl:text-xl">Subtotal</p>
        <p className="font-semibold text-base sm:text-lg xl:text-xl">
          {cart.cost?.subtotalAmount?.amount ? (
            <Money data={cart.cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </p>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 mb-4">
        Tax included. Shipping calculated at checkout.
      </p>

      {cart.checkoutUrl && (
        <div className="mt-4">
          <a
            href={cart.checkoutUrl}
            target="_self"
            className="block w-full bg-black text-white py-3 sm:py-3.5 xl:py-4 rounded-xl text-center font-semibold text-sm sm:text-base hover:opacity-90 transition"
          >
            Checkout
          </a>
        </div>
      )}
    </div>
  );
}