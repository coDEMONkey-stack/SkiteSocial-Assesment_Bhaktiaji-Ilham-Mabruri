import React from 'react';

const HeaderPanel: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-end space-x-2 text-blue-500">
      </div>
      <div className="ml-auto flex items-end gap-3 text-right text-blue-500">
        <div className="bg-[#3B97CB] rounded-sm p-1">
          <img src="/images/icon/user.svg" className="w-5" />
        </div>
        <span className="text-[#0099EE] p-1 font-semibold underline">John Doe</span>
      </div>
    </div>
  )
};

export default HeaderPanel;
