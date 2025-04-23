import Link from "next/link";
import "./Header.scss";
import Theme from "../theme/Theme";
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="#contact-us">Contact us</Link>
          </li>
          <li>
            <Link href="#service-area">Our service area</Link>
          </li>
        </ul>
      </nav>
      <Theme />
    </header>
  );
}
