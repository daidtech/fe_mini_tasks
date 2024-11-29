import React from 'react';

interface SidebarDialogProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (status: boolean) => void;
}

const SidebarDialog: React.FC<SidebarDialogProps> = ({ children, open, onOpenChange }) => {
  return (
    <div
      style={{display: open ? 'block' : 'none'}}
      className='hidden'
    >
      {/* overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
          onClick={() => onOpenChange(true)}
        />
      )}
      {/* content */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[250px] min-w-[200px] bg-white shadow-lg transform transition-transform duration-300
          ${ open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarDialog;