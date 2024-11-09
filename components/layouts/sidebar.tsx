'use client';
import { useState } from "react";

export default function Sidebar() {
  const [sidebarWidth, setSidebarWidth] = useState(200); // Initial width
  const minWidth = 200;
  const maxWidth = 500;

  const handleMouseDown = (e: React.MouseEvent) => {
    const startX = e.clientX;
    const startWidth = sidebarWidth;
    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.clientX - startX);
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <aside
      style={{ width: sidebarWidth }}
      className="sidebar relative border bg-gray-200 min-w-[200px] h-full">
        sidebar
      {/* Resize handle */}
      <div
        className="absolute right-0 top-0 h-full w-[2px] cursor-ew-resize bg-transparent transition-colors hover:bg-border group-hover/sidebar:bg-border/40"
        onMouseDown={handleMouseDown}
      />
    </aside>
  )
}