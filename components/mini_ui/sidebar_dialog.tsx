import React from 'react';

interface SidebarDialogProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (status: boolean) => void;
}

const SidebarDialog: React.FC<SidebarDialogProps> = ({ children, open, onOpenChange }) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
          onClick={() => onOpenChange(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[250px] min-w-[200px] bg-white shadow-lg transform transition-transform duration-300
          ${ open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4 flex justify-between items-right bg-gray-100">
          <button
            onClick={() => onOpenChange(false)}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Close Sidebar"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default SidebarDialog;