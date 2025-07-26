"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({}) => {
  const pathname = usePathname();

  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav>
          <ul className="flex  justify-around items-center">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/redirect">
              <li>Redirect</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/products/add">
              <li>Add Products</li>
            </Link>
            <Link href="/posts">
              <li>posts</li>
            </Link>
            <Link href="/meals?search=">
              <li>Meals</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
    
  }
  else{
    return <div></div>
  }
};

export default Navbar;
