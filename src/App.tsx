import { Outlet } from 'react-router-dom';
import { TopNav } from './components/organisms/TopNav';
import { Footer } from './components/organisms/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ink focus:text-on-primary focus:rounded-pill focus:no-underline"
      >
        Skip to main content
      </a>
      <TopNav />
      <div id="main-content" className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
