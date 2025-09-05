'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const activities = {
  '1': {
    id: 1,
    title: '新春健步走挑战赛',
    type: '健步走',
    description: '每日步数达标，赢取丰厚奖品',
    status: '报名中',
    participants: '8,532',
    endTime: '2024-02-28',
    rewards: '积分奖励',
    image: 'https://readdy.ai/api/search-image?query=walking%20challenge%20fitness%20competition%20people%20exercising%20outdoor%20park%20healthy%20lifestyle%20vibrant%20colors%20modern%20athletic%20design%20energetic%20atmosphere&width=400&height=200&seq=19&orientation=landscape',
    rules: [
      '每日步数达到8000步即可获得积分奖励',
      '连续打卡7天可获得额外奖励',
      '月度排名前100名可获得专属勋章',
      '活动期间累计步数排名前10名可获得实物奖品'
    ],
    requirements: [
      '需要授权获取步数数据',
      '每日步数自动同步',
      '确保运动数据真实有效'
    ]
  }
};

interface SignupFormProps {
  activityId: string;
}

export default function SignupForm({ activityId }: SignupFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    agreement: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activity = activities[activityId as keyof typeof activities];

  if (!activity) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <NavBar title="活动报名" showBack onBack={() => router.back()} />
        <div className="pt-16 px-4 flex items-center justify-center min-h-[400px]">
          <p className="text-gray-500">活动不存在</p>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert('请同意活动规则和隐私政策');
      return;
    }

    setIsSubmitting(true);
    
    // 模拟提交
    setTimeout(() => {
      setIsSubmitting(false);
      alert('报名成功！请在活动页面查看参与状态');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="活动报名" showBack onBack={() => router.back()} />
      
      <div className="pt-16 pb-8 px-4">
        {/* Activity Info */}
        <Card className="mb-6 overflow-hidden">
          <div className="relative">
            <img 
              src={activity.image} 
              alt={activity.title} 
              className="w-full h-40 object-cover" 
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/90 text-gray-700">
                {activity.type}
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <h1 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h1>
            <p className="text-gray-600 mb-4">{activity.description}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <i className="ri-user-line mr-1" />
                {activity.participants}人已报名
              </span>
              <span className="flex items-center">
                <i className="ri-time-line mr-1" />
                截止{activity.endTime}
              </span>
            </div>
            
            <div className="flex items-center text-sm text-blue-600">
              <i className="ri-gift-line mr-1" />
              <span>{activity.rewards}</span>
            </div>
          </CardContent>
        </Card>

        {/* Rules */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">活动规则</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {activity.rules.map((rule, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <span className="flex-shrink-0 w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">参与要求</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {activity.requirements.map((req, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <i className="ri-checkbox-circle-line text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">报名信息</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="请输入您的真实姓名"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  手机号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="请输入您的手机号码"
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  所在城市 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="请输入您所在的城市"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <label htmlFor="agreement" className="text-sm text-gray-600">
                  我已阅读并同意 <span className="text-blue-500 underline">活动规则</span> 和 <span className="text-blue-500 underline">隐私政策</span>
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? '提交中...' : '立即报名'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
