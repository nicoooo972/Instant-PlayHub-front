import React, { ReactNode, useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable';
import { cn } from '@/lib/utils';
import Footer from './Footer';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarRef = useRef<any>(null);

  const toggleCollapse = () => {
    if (isCollapsed) {
      sidebarRef.current?.expand();
    } else {
      sidebarRef.current?.collapse();
    }
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen">
      <ResizablePanelGroup direction="horizontal" className='h-full'>
        <ResizablePanel
        ref={sidebarRef}
          defaultSize={20}
          minSize={15}
          maxSize={25}
          collapsible={true}
          collapsedSize={4}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className={cn(isCollapsed && "min-w-[60px]", "transition-all duration-300 ease-in-out")}
        >
          <Sidebar isCollapsed={isCollapsed} />
        </ResizablePanel>
        <ResizableHandle withHandle isCollapsed={isCollapsed} onToggle={toggleCollapse} />
        <ResizablePanel defaultSize={80}>
          <ScrollArea className='h-full'>
            <div className="pr-1">
              {children}
              <Footer />
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Layout;
