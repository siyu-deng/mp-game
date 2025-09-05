'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const routesData = {
  '1': {
    id: 1,
    title: '黄河河南段徒步之旅',
    type: '挑战路线',
    distance: '1206公里',
    participants: '25,789',
    image: 'https://readdy.ai/api/search-image?query=Yellow%20River%20Henan%20section%20beautiful%20landscape%20traditional%20Chinese%20architecture%20Central%20Plains%20scenery%20walking%20fitness%20challenge%20vibrant%20colors%20modern%20athletic%20design&width=400&height=240&seq=36&orientation=landscape',
    description: '沿着母亲河的足迹，感受中原大地的厚重历史。这条路线将带您领略黄河在河南段的壮美风光，从三门峡到濮阳，每一步都充满中原文化的深厚底蕴。',
    difficulty: '困难',
    estimatedDays: '120天',
    points: 3000,
    status: '进行中',
    progress: 25,
    checkpoints: [
      { name: '三门峡', distance: '0公里', completed: true },
      { name: '洛阳龙门', distance: '150公里', completed: true },
      { name: '郑州黄河大桥', distance: '300公里', completed: true },
      { name: '开封黄河段', distance: '450公里', completed: false },
      { name: '新乡黄河故道', distance: '600公里', completed: false },
      { name: '濮阳黄河湿地', distance: '1206公里', completed: false }
    ],
    rewards: [
      '完成10%：黄河探索者勋章',
      '完成25%：中原行者勋章',
      '完成50%：黄河守护者勋章',
      '完成100%：母亲河传奇勋章 + 1500积分'
    ],
    tips: [
      '建议每日步数8000-15000步',
      '可以分段完成，不需要连续',
      '了解黄河文化，感受中原历史',
      '邀请河南老乡一起参与可获得额外奖励'
    ]
  },
  '2': {
    id: 2,
    title: '中原古道探索',
    type: '风景路线',
    distance: '800公里',
    participants: '18,456',
    image: 'https://readdy.ai/api/search-image?query=Central%20Plains%20ancient%20road%20Henan%20traditional%20architecture%20historical%20journey%20beautiful%20scenery%20temples%20pagodas%20vibrant%20colors%20adventure%20travel&width=400&height=240&seq=37&orientation=landscape',
    description: '追寻中原古道，领略河南历史文化名城风光',
    difficulty: '中等',
    estimatedDays: '80天',
    points: 2000,
    status: '可参与',
    progress: 0,
    checkpoints: [
      { name: '洛阳白马寺', distance: '0公里', completed: false },
      { name: '登封少林寺', distance: '120公里', completed: false },
      { name: '安阳殷墟', distance: '300公里', completed: false },
      { name: '开封大相国寺', distance: '500公里', completed: false },
      { name: '南阳武侯祠', distance: '650公里', completed: false },
      { name: '信阳鸡公山', distance: '800公里', completed: false }
    ],
    rewards: [
      '完成20%：古道寻踪勋章',
      '完成50%：中原文化使者勋章',
      '完成100%：古道传承者勋章 + 1000积分'
    ],
    tips: [
      '适合历史文化爱好者',
      '每个检查点都有详细的历史介绍',
      '可以了解河南深厚的文化底蕴'
    ]
  }
};

interface VirtualRouteDetailProps {
  routeId: string;
}

export default function VirtualRouteDetail({ routeId }: VirtualRouteDetailProps) {
  const router = useRouter();
  const [isJoining, setIsJoining] = useState(false);
  const route = routesData[routeId as keyof typeof routesData];

  if (!route) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <NavBar title="路线详情" showBack onBack={() => router.back()} />
        <div className="pt-16 px-4 flex items-center justify-center min-h-[400px]">
          <p className="text-gray-500">路线不存在</p>
        </div>
      </div>
    );
  }

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

  const handleJoinRoute = async () => {
    setIsJoining(true);
    setTimeout(() => {
      setIsJoining(false);
      alert('成功加入路线！开始您的虚拟旅程吧！');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="路线详情" showBack onBack={() => router.back()} />
      
      <div className="pt-16 pb-8 px-4">
        {/* Route Header */}
        <Card className="mb-6 overflow-hidden">
          <div className="relative">
            <img 
              src={route.image} 
              alt={route.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="absolute top-4 left-4 flex space-x-2">
              <Badge variant="secondary" className="bg-white/90 text-gray-700">
                {route.type}
              </Badge>
              <Badge className={getDifficultyColor(route.difficulty)}>
                {route.difficulty}
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge variant={getStatusColor(route.status)}>
                {route.status}
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-6">
            <h1 className="text-xl font-bold text-gray-900 mb-3">{route.title}</h1>
            <p className="text-gray-600 mb-4 leading-6">{route.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <i className="ri-route-line mr-2 text-blue-500" />
                <span>总距离 {route.distance}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line mr-2 text-blue-500" />
                <span>预计 {route.estimatedDays}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-user-line mr-2 text-blue-500" />
                <span>{route.participants}人参与</span>
              </div>
              <div className="flex items-center">
                <i className="ri-coin-line mr-2 text-blue-500" />
                <span>{route.points}积分奖励</span>
              </div>
            </div>

            {route.progress > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">当前进度</span>
                  <span className="font-medium text-gray-900">{route.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${route.progress}%` }}
                  />
                </div>
              </div>
            )}
            
            <Button 
              className="w-full" 
              onClick={handleJoinRoute}
              disabled={isJoining}
            >
              {isJoining ? '加入中...' : 
               route.status === '可参与' ? '开始挑战' : 
               route.status === '进行中' ? '继续挑战' : '查看详情'}
            </Button>
          </CardContent>
        </Card>

        {/* Checkpoints */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <i className="ri-map-pin-line mr-2 text-blue-500" />
              路线检查点
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {route.checkpoints.map((checkpoint, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mr-3 ${
                      checkpoint.completed 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {checkpoint.completed ? '✓' : index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{checkpoint.name}</h4>
                      <p className="text-sm text-gray-500">{checkpoint.distance}</p>
                    </div>
                  </div>
                  {checkpoint.completed && (
                    <Badge variant="secondary" className="text-xs">已完成</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rewards */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <i className="ri-gift-line mr-2 text-blue-500" />
              奖励机制
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {route.rewards.map((reward, index) => (
                <div key={index} className="flex items-start text-sm text-gray-600">
                  <i className="ri-medal-line text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  {reward}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <i className="ri-lightbulb-line mr-2 text-blue-500" />
              参与提示
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {route.tips.map((tip, index) => (
                <div key={index} className="flex items-start text-sm text-gray-600">
                  <i className="ri-information-line text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}