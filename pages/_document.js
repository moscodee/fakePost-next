import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <header>
        <div className="header_container">
          <div className="header_logo">FakePost</div>
          <div className="header_navbar">
            <Link href="/" className="nav_link">
              Home
            </Link>
            <Link href="/posts" className="nav_link">
              Posts
            </Link>
          </div>
        </div>
      </header>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
