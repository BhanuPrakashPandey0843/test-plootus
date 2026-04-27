import NavBar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import { LoginSignupProvider } from '../auth/LoginSignupContext';

export default function Layout({ children }) {
  return (
    <LoginSignupProvider>
      <NavBar />
      <main style={{ paddingTop: '80px' }}>{children}</main>
      <Footer />
      <CookieBanner />
    </LoginSignupProvider>
  );
}
