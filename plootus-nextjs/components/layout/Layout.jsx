import NavBar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: '80px' }}>{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
