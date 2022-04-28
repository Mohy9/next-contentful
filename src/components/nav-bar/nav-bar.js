import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <div className="navbar__logo">
          <Image src="/logo.svg" width={80} height={50} alt="logo" />
        </div>
      </Link>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default NavBar;
