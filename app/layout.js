import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Personal Website",
  description: "A simple personal website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <div className="container">
          <header className="header">
            <nav className="nav">
              <Link href="/" style={{ fontWeight: 'bold' }}>Arnav Harve</Link>
              <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/projects">Projects</Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="footer">
            &copy; {new Date().getFullYear()} Personal Website
          </footer>
        </div>
      </body>
    </html>
  );
}
