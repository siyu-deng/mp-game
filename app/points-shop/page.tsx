
'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function PointsShop() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [userPoints] = useState(12580);

  const categories = ['全部', '电子勋章', '实物奖品', '优惠券', '会员特权'];

  const products = [
    {
      id: 1,
      name: '健步达人勋章',
      category: '电子勋章',
      image: 'https://readdy.ai/api/search-image?query=walking%20achievement%20badge%20medal%20icon%203D%20illustration%20golden%20award%20fitness%20milestone%20reward%20design%20isolated%20on%20white%20background&width=200&height=200&seq=29&orientation=squarish',
      points: 500,
      description: '专属健步走勋章，彰显运动成就',
      stock: '无限量',
      popular: true
    },
    {
      id: 2,
      name: '运动蓝牙耳机',
      category: '实物奖品',
      image: 'https://readdy.ai/api/search-image?query=bluetooth%20wireless%20sports%20headphones%20earbuds%20fitness%20exercise%20modern%20design%20product%20photography%20white%20background&width=200&height=200&seq=30&orientation=squarish',
      points: 8000,
      description: '专业运动耳机，防水防汗设计',
      stock: '15件',
      popular: false
    },
    {
      id: 3,
      name: '虚拟马拉松完赛勋章',
      category: '电子勋章',
      image: 'https://readdy.ai/api/search-image?query=marathon%20finisher%20medal%20badge%20icon%203D%20illustration%20silver%20award%20running%20achievement%20reward%20design%20isolated%20on%20white%20background&width=200&height=200&seq=31&orientation=squarish',
      points: 1200,
      description: '完成虚拟马拉松的荣誉象征',
      stock: '无限量',
      popular: true
    },
    {
      id: 4,
      name: '健身房体验券',
      category: '优惠券',
      image: 'https://readdy.ai/api/search-image?query=gym%20fitness%20center%20voucher%20coupon%20ticket%20modern%20design%20clean%20white%20background%20fitness%20equipment%20illustration&width=200&height=200&seq=32&orientation=squarish',
      points: 2000,
      description: '知名连锁健身房3天体验券',
      stock: '50张',
      popular: false
    },
    {
      id: 5,
      name: '运动水杯',
      category: '实物奖品',
      image: 'https://readdy.ai/api/search-image?query=sports%20water%20bottle%20fitness%20hydration%20modern%20design%20product%20photography%20clean%20white%20background%20colorful&width=200&height=200&seq=33&orientation=squarish',
      points: 3000,
      description: '保温运动水杯，容量750ml',
      stock: '25件',
      popular: false
    },
    {
      id: 6,
      name: 'VIP会员月卡',
      category: '会员特权',
      image: 'https://readdy.ai/api/search-image?query=VIP%20membership%20card%20premium%20gold%20design%20luxury%20fitness%20club%20modern%20clean%20white%20background&width=200&height=200&seq=34&orientation=squarish',
      points: 5000,
      description: '享受专属VIP功能和特权',
      stock: '100张',
      popular: true
    }
  ];

  const filteredProducts = activeCategory === '全部' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const canAfford = (points: number) => userPoints >= points;

  const handleExchange = (productId: number, productName: string, points: number) => {
    if (!canAfford(points)) {
      alert('积分不足，无法兑换');
      return;
    }
    
    if (confirm(`确认兑换 ${productName}？\n需要消耗 ${points} 积分`)) {
      alert('兑换成功！请在"我的奖品"中查看');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="积分商城" />
      
      <div className="pt-16 pb-8 px-4">
        {/* Points Display */}
        <Card className="mb-6 bg-gradient-to-r from-blue-500 to-green-500">
          <CardContent className="p-6">
            <div className="text-center text-white">
              <h2 className="text-sm mb-2">我的积分</h2>
              <div className="text-4xl font-bold mb-2">{userPoints.toLocaleString()}</div>
              <div className="text-sm text-blue-100">通过运动获得更多积分</div>
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                variant={activeCategory === category ? "default" : "secondary"}
                onClick={() => setActiveCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-32 object-cover bg-gray-50" 
                  />
                  {product.popular && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="destructive" className="text-xs">热门</Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-blue-600">
                      <i className="ri-coin-line mr-1 text-sm" />
                      <span className="text-sm font-bold">{product.points}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      库存{product.stock}
                    </Badge>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full text-xs"
                    disabled={!canAfford(product.points)}
                    onClick={() => handleExchange(product.id, product.name, product.points)}
                  >
                    {canAfford(product.points) ? '立即兑换' : '积分不足'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-gift-line text-4xl text-gray-300 mb-2" />
            <p className="text-gray-500">该分类暂无商品</p>
          </div>
        )}

        {/* Exchange History */}
        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">兑换记录</CardTitle>
              <Button variant="outline" size="sm">
                查看全部
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">健步达人勋章</span>
                </div>
                <div className="text-xs text-gray-500">-500积分</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm">运动达人勋章</span>
                </div>
                <div className="text-xs text-gray-500">-800积分</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-sm">健身房体验券</span>
                </div>
                <div className="text-xs text-gray-500">-2000积分</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
