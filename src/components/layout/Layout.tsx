import React, { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable';
import { cn } from '@/lib/utils';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <ResizablePanelGroup
      direction="horizontal"
    >
      <ResizablePanel
        defaultSize={20}
        minSize={15}
        maxSize={25}
        collapsible={true}
        collapsedSize={4}
        onCollapse={() => setIsCollapsed(true)}
        onExpand={() => setIsCollapsed(false)}
        className={cn(isCollapsed && "min-w-[60px] transition-all duration-300 ease-in-out", "h-screen")}
      >
        <Sidebar isCollapsed={isCollapsed} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <div className="p-2">
          {children}
        </div>
        <Footer />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Layout;
