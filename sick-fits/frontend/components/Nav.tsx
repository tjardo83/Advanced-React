import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Nav = () => (
  <nav>
    <Link href="/products">Products</Link>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/account">Account</Link>
  </nav>
);

export default Nav;
