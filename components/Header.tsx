import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer "}
        />
      </Link>
    </header>
  );
}

export default Header;
