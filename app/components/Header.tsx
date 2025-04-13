
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

export const Header = ({
  header,
  cart,
  isLoggedIn,
  publicStoreDomain,
}: HeaderProps) => {
  return (
    <div>
      {/* Acá iría  NavBar */}
      NavBar
    </div>
  );
};

