import React, { ReactNode } from 'react'; 
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row min-h-screen">
      <Topbar /> 
      <Sidebar /> 
      <div className="flex-grow p-4 ml-16 mt-20">
        {children}
      </div>
    </div>
  );
}

export default Layout;
