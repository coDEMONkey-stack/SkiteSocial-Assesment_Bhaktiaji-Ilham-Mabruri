import React, { useState } from 'react';
import Link from 'next/link';

const SidebarPanel: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: '/images/icon/home.svg', path: '/dashboard' },
    { name: 'Products', icon: '/images/icon/products.svg', path: '/dashboard/products' },
    { name: 'Sales', icon: '/images/icon/chart.svg', path: '/dashboard/sales' },
    { name: 'Settings', icon: '/images/icon/settings.svg', path: '/dashboard/settings' },
  ];

  return (
    <div className={`flex flex-col h-auto bg-[#3B97CB] text-white ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      <button
        className="text-2xl p-4 focus:outline-none"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <img src="/images/icon/menu.svg" alt="Menu" className="w-50" />
      </button>
      <div className="flex flex-col mt-4 space-y-1">
        {menuItems.map((item) => (
          <Link href={item.path} key={item.name}>
            <div
              className={`flex items-center p-4 text-white hover:bg-white hover:text-blue-500 ${isCollapsed ? 'justify-center' : ''}`}
            >
              <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6" />
              {!isCollapsed && <span className="ml-4">{item.name}</span>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarPanel;
