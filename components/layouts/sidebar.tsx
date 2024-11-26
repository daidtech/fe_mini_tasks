'use client';
import { useState } from "react";
import MiniSidebarContent from "./mini_sidebar_content";
import { useDispatch, useSelector } from 'react-redux';
import { selectHiddenSidebar, setHidden } from "@/store/slices/sidebarSlice";
import SidebarDialog from "@/components/mini_ui/sidebar_dialog";

export default function Sidebar() {
  const [sidebarWidth, setSidebarWidth] = useState(250); // Initial width
  const isHiddenSidebar = useSelector(selectHiddenSidebar)
  const dispatch = useDispatch();

  const limitHidden = 50
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
      dispatch(setHidden(newWidth < limitHidden));
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
      style={{ width: sidebarWidth, display: isHiddenSidebar ? 'none' : '' }}
      className="sidebar relative border bg-gray-200 h-full ps-3 pt-3 hidden lg:block">
      <MiniSidebarContent />
      {/* Resize handle */}
      <div
        className="absolute -right-3 top-0 h-full w-[2px] bg-red-200 cursor-ew-resize bg-transparent transition-colors hover:bg-border group-hover/sidebar:bg-border/40"
        onMouseDown={handleMouseDown}
      />
    </aside>
  )
}