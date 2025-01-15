import { ReactNode } from 'react';
// import Sidebar from '../Sidebar';
import TheSidebar from './TheSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <TheSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4">
          <h1 className="text-lg font-semibold">Dashboard Header</h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
        <footer className="bg-white shadow px-6 py-4">
          <p className="text-sm text-gray-600">Dashboard Footer</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
