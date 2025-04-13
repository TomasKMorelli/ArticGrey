import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export const Footer = ({
  footer,
  header,
  publicStoreDomain,
}: FooterProps) => {
  return <div>Footer</div>;
};

export default Footer;
