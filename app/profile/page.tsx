
'use client';

import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Profile() {
  const userInfo = {
    name: '运动达人',
    avatar: 'https://readdy.ai/api/search-image?query=young%20energetic%20person%20avatar%20profile%20picture%20fitness%20enthusiast%20healthy%20lifestyle%20smiling%20friendly%20modern%20portrait%20style%20vibrant%20colors&width=80&height=80&seq=14&orientation=squarish',
    level: 'LV.8',
    points: 12580,
    totalSteps: 1580000,
    badges: 8,
    achievements: 15
  };

  const badges = [
    {
      id: 1,
      name: '健步达人',
      icon: 'https://readdy.ai/api/search-image?query=walking%20achievement%20badge%20medal%20icon%203D%20illustration%20golden%20award%20fitness%20milestone%20reward%20design%20isolated%20on%20white%20background&width=60&height=60&seq=15&orientation=squarish',
      description: '累计步数达到100万步',
      isWearing: true
    },
    {
      id: 2,
      name: '舞蹈之星',
      icon: 'https://readdy.ai/api/search-image?query=dancing%20achievement%20badge%20medal%20icon%203D%20illustration%20silver%20award%20fitness%20milestone%20reward%20design%20isolated%20on%20white%20background&width=60&height=60&seq=16&orientation=squarish',
      description: '广场舞大赛获奖',
      isWearing: false
    },
    {
      id: 3,
      name: '太极大师',
      icon: 'https://readdy.ai/api/search-image?query=tai%20chi%20achievement%20badge%20medal%20icon%203D%20illustration%20bronze%20award%20martial%20arts%20milestone%20reward%20design%20isolated%20on%20white%20background&width=60&height=60&seq=17&orientation=squarish',
      description: '太极拳表演赛优秀奖',
      isWearing: false
    },
    {
      id: 4,
      name: '路线探索者',
      icon: 'https://readdy.ai/api/search-image?query=route%20exploration%20achievement%20badge%20medal%20icon%203D%20illustration%20colorful%20award%20travel%20milestone%20reward%20design%20isolated%20on%20white%20background&width=60&height=60&seq=18&orientation=squarish',
      description: '完成5条虚拟路线',
      isWearing: false
    }
  ];

  const menuItems = [
    { icon: 'ri-trophy-line', title: '我的活动', subtitle: '查看参与记录', href: '/my-activities' },
    { icon: 'ri-line-chart-line', title: '运动数据', subtitle: '详细统计分析', href: '/sports-data' },
    { icon: 'ri-gift-line', title: '积分商城', subtitle: '兑换精美礼品', href: '/points-shop' },
    { icon: 'ri-settings-line', title: '设置', subtitle: '个人设置', href: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="我的" />
      
      <div className="pt-16 pb-20 px-4">
        {/* User Profile */}
        <Card className="mb-6 overflow-hidden bg-gradient-to-r from-blue-500 to-green-500">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                <img src={userInfo.avatar} alt="头像" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h2 className="text-lg font-semibold text-white">{userInfo.name}</h2>
                  <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                    {userInfo.level}
                  </Badge>
                </div>
                <p className="text-blue-100 text-sm">运动让生活更美好</p>
              </div>
              <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30">
                编辑
              </Button>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-white">{userInfo.points.toLocaleString()}</div>
                <div className="text-xs text-blue-100">积分</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">{(userInfo.totalSteps / 10000).toFixed(1)}万</div>
                <div className="text-xs text-blue-100">总步数</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">{userInfo.badges}</div>
                <div className="text-xs text-blue-100">勋章</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">{userInfo.achievements}</div>
                <div className="text-xs text-blue-100">成就</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">电子勋章</CardTitle>
              <Link href="/badges" className="text-blue-500 text-sm font-medium">
                查看全部 <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              {badges.map((badge) => (
                <div key={badge.id} className="text-center">
                  <div className="relative mb-2">
                    <div className="w-12 h-12 mx-auto rounded-full overflow-hidden bg-gray-50 p-1">
                      <img src={badge.icon} alt={badge.name} className="w-full h-full object-cover" />
                    </div>
                    {badge.isWearing && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white text-xs" />
                      </div>
                    )}
                  </div>
                  <h4 className="text-xs font-medium text-gray-900 mb-1">{badge.name}</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">{badge.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <div className="flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card className="hover:shadow-md transition-shadow border-gray-100">
                <CardContent className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-white text-sm`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 mb-0.5">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>
                    <i className="ri-arrow-right-s-line text-gray-400 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <TabBar />
    </div>
  );
}
