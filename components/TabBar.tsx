
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TabBar() {
  const pathname = usePathname();

  const tabs = [
    { href: '/', icon: 'ri-home-line', activeIcon: 'ri-home-fill', label: '首页' },
    { href: '/competitions', icon: 'ri-trophy-line', activeIcon: 'ri-trophy-fill', label: '赛事活动' },
    { href: '/profile', icon: 'ri-user-line', activeIcon: 'ri-user-fill', label: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 px-0 z-50 safe-area-pb">
      <div className="grid grid-cols-3 h-16 max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link key={tab.href} href={tab.href} className="flex flex-col items-center justify-center space-y-1 h-full">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`${isActive ? tab.activeIcon : tab.icon} text-lg ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
              </div>
              <span className={`text-xs ${isActive ? 'text-blue-500 font-medium' : 'text-gray-400'}`} suppressHydrationWarning={true}>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
