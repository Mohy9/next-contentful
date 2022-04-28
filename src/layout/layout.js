import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer/footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="layout__page-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};
