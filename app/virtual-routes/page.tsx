
'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function VirtualRoutes() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [searchVisible, setSearchVisible] = useState(false);

  const filters = ['全部', '热门推荐', '新手路线', '挑战路线', '风景路线'];

  const routes = [
    {
      id: 1,
      title: '黄河河南段徒步之旅',
      type: '挑战路线',
      distance: '1206公里',
      participants: '25,789',
      image: 'https://readdy.ai/api/search-image?query=Yellow%20River%20Henan%20section%20beautiful%20landscape%20traditional%20Chinese%20architecture%20Central%20Plains%20scenery%20walking%20fitness%20challenge%20vibrant%20colors%20modern%20athletic%20design&width=300&height=180&seq=30&orientation=landscape',
      description: '沿着母亲河的足迹，感受中原大地的厚重历史',
      difficulty: '困难',
      estimatedDays: '120天',
      points: 3000,
      status: '进行中',
      progress: 25
    },
    {
      id: 2,
      title: '中原古道探索',
      type: '风景路线',
      distance: '800公里',
      participants: '18,456',
      image: 'https://readdy.ai/api/search-image?query=Central%20Plains%20ancient%20road%20Henan%20traditional%20architecture%20historical%20journey%20beautiful%20scenery%20temples%20pagodas%20vibrant%20colors%20adventure%20travel&width=300&height=180&seq=31&orientation=landscape',
      description: '追寻中原古道，领略河南历史文化名城风光',
      difficulty: '中等',
      estimatedDays: '80天',
      points: 2000,
      status: '可参与',
      progress: 0
    },
    {
      id: 3,
      title: '河南名山登高',
      type: '热门推荐',
      distance: '500公里',
      participants: '35,678',
      image: 'https://readdy.ai/api/search-image?query=Henan%20famous%20mountains%20hiking%20beautiful%20peaks%20Central%20Plains%20landscape%20temple%20architecture%20vibrant%20colors%20mountain%20climbing%20adventure&width=300&height=180&seq=32&orientation=landscape',
      description: '登遍河南名山，从嵩山到云台山',
      difficulty: '困难',
      estimatedDays: '60天',
      points: 2500,
      status: '可参与',
      progress: 0
    },
    {
      id: 4,
      title: '郑州城市漫步',
      type: '新手路线',
      distance: '100公里',
      participants: '42,345',
      image: 'https://readdy.ai/api/search-image?query=Zhengzhou%20city%20walking%20tour%20modern%20cityscape%20Central%20Plains%20urban%20landmarks%20beautiful%20architecture%20vibrant%20colors%20urban%20exploration%20fitness&width=300&height=180&seq=33&orientation=landscape',
      description: '漫步郑州城，探索中原都市的现代与传统',
      difficulty: '简单',
      estimatedDays: '10天',
      points: 500,
      status: '已完成',
      progress: 100
    },
    {
      id: 5,
      title: '洛阳古都寻迹',
      type: '风景路线',
      distance: '200公里',
      participants: '28,567',
      image: 'https://readdy.ai/api/search-image?query=Luoyang%20ancient%20capital%20historical%20sites%20traditional%20Chinese%20architecture%20temples%20peony%20flowers%20Central%20Plains%20beautiful%20scenery%20vibrant%20colors&width=300&height=180&seq=34&orientation=landscape',
      description: '游览千年古都洛阳，感受牡丹花城的魅力',
      difficulty: '简单',
      estimatedDays: '20天',
      points: 800,
      status: '可参与',
      progress: 0
    },
    {
      id: 6,
      title: '开封府历史巡礼',
      type: '风景路线',
      distance: '150公里',
      participants: '22,134',
      image: 'https://readdy.ai/api/search-image?query=Kaifeng%20historical%20sites%20ancient%20Chinese%20architecture%20Song%20Dynasty%20culture%20Central%20Plains%20traditional%20buildings%20vibrant%20colors%20historical%20journey&width=300&height=180&seq=35&orientation=landscape',
      description: '穿越开封府，重温北宋古都的辉煌历史',
      difficulty: '简单',
      estimatedDays: '15天',
      points: 600,
      status: '可参与',
      progress: 0
    }
  ];

  const filteredRoutes = activeFilter === '全部' 
    ? routes 
    : routes.filter(route => route.type === activeFilter);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '简单': return 'text-green-600 bg-green-100';
      case '中等': return 'text-yellow-600 bg-yellow-100';
      case '困难': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '可参与': return 'success';
      case '进行中': return 'warning';
      case '已完成': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="虚拟路线" />
      
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <div className="px-4 mb-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 p-6">
            <div className="relative z-10 text-white">
              <h2 className="text-2xl font-bold mb-2">虚拟路线挑战</h2>
              <p className="text-purple-100 mb-4">用脚步丈量世界，在运动中探索未知</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <i className="ri-map-pin-line mr-1" />
                  <span>100+ 精选路线</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-user-line mr-1" />
                  <span>50万+ 参与者</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/10 rounded-full" />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="px-4 mb-6">
          <div className="flex items-center space-x-3 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                size="sm"
                variant={activeFilter === filter ? "default" : "secondary"}
                onClick={() => setActiveFilter(filter)}
                className="whitespace-nowrap"
              >
                {filter}
              </Button>
            ))}
            <Button 
              size="sm" 
              variant="secondary" 
              className="flex items-center whitespace-nowrap"
              onClick={() => setSearchVisible(!searchVisible)}
            >
              <i className="ri-search-line mr-1" />
              搜索
            </Button>
          </div>
          
          {searchVisible && (
            <div className="mt-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索路线名称..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          )}
        </div>

        {/* Routes List */}
        <div className="px-4">
          <div className="space-y-4">
            {filteredRoutes.map((route) => (
              <Card key={route.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={route.image} 
                      alt={route.title} 
                      className="w-full h-36 object-cover" 
                    />
                    <div className="absolute top-3 left-3 flex space-x-2">
                      <Badge variant="secondary" className="text-xs bg-white/90 text-gray-700">
                        {route.type}
                      </Badge>
                      <Badge 
                        className={`text-xs ${getDifficultyColor(route.difficulty)}`}
                      >
                        {route.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant={getStatusColor(route.status)} className="text-xs">
                        {route.status}
                      </Badge>
                    </div>
                    
                    {route.progress > 0 && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-white/90 rounded-full p-2">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-600">进度</span>
                            <span className="font-medium text-gray-900">{route.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full transition-all duration-300"
                              style={{ width: `${route.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{route.title}</h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{route.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <i className="ri-route-line mr-1" />
                        <span>总距离 {route.distance}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-time-line mr-1" />
                        <span>预计 {route.estimatedDays}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-user-line mr-1" />
                        <span>{route.participants}人参与</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-coin-line mr-1" />
                        <span>{route.points}积分奖励</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-blue-600">
                        <i className="ri-gift-line mr-1" />
                        <span>完成可获得专属勋章</span>
                      </div>
                      <Link href={`/virtual-routes/${route.id}`}>
                        <Button size="sm">
                          {route.status === '可参与' ? '开始挑战' : 
                           route.status === '进行中' ? '继续挑战' : '查看详情'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <TabBar />
    </div>
  );
}
