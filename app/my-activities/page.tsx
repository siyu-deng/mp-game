
'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function MyActivities() {
  const [activeTab, setActiveTab] = useState('参与中');

  const tabs = ['参与中', '已完成', '未开始'];

  const activities = {
    '参与中': [
      {
        id: 1,
        title: '新春健步走挑战赛',
        type: '健步走',
        image: 'https://readdy.ai/api/search-image?query=walking%20challenge%20fitness%20competition%20people%20exercising%20outdoor%20park%20healthy%20lifestyle%20vibrant%20colors%20modern%20athletic%20design&width=280&height=160&seq=24&orientation=landscape',
        progress: 65,
        currentValue: '65,432步',
        targetValue: '100,000步',
        daysLeft: 15,
        points: 1200
      },
      {
        id: 2,
        title: '万里长城虚拟行走',
        type: '虚拟路线',
        image: 'https://readdy.ai/api/search-image?query=great%20wall%20of%20china%20virtual%20walking%20route%20fitness%20challenge%20landscape%20beautiful%20scenery%20traditional%20architecture&width=280&height=160&seq=25&orientation=landscape',
        progress: 15,
        currentValue: '3,164公里',
        targetValue: '21,097公里',
        daysLeft: 350,
        points: 750
      }
    ],
    '已完成': [
      {
        id: 3,
        title: '城市漫步-北京',
        type: '虚拟路线',
        image: 'https://readdy.ai/api/search-image?query=beijing%20city%20walking%20tour%20landmarks%20temple%20architecture%20modern%20cityscape%20vibrant%20colors%20urban%20exploration&width=280&height=160&seq=26&orientation=landscape',
        completedDate: '2024-01-20',
        finalValue: '50公里',
        points: 500,
        reward: '北京探索者勋章'
      },
      {
        id: 4,
        title: '元旦健康跑',
        type: '健步走',
        image: 'https://readdy.ai/api/search-image?query=new%20year%20healthy%20running%20fitness%20people%20exercising%20outdoor%20celebration%20energetic%20healthy%20lifestyle%20vibrant%20colors&width=280&height=160&seq=27&orientation=landscape',
        completedDate: '2024-01-01',
        finalValue: '15,680步',
        points: 300,
        reward: '新年运动达人'
      }
    ],
    '未开始': [
      {
        id: 5,
        title: '太极拳表演赛',
        type: '视频活动',
        image: 'https://readdy.ai/api/search-image?query=tai%20chi%20martial%20arts%20performance%20people%20practicing%20traditional%20chinese%20exercise%20peaceful%20serene%20outdoor%20park&width=280&height=160&seq=28&orientation=landscape',
        startDate: '2024-03-01',
        endDate: '2024-03-31',
        estimatedPoints: 800
      }
    ]
  };

  const currentActivities = activities[activeTab as keyof typeof activities];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="我的活动" />
      
      <div className="px-4 pt-16 pb-8">
        {/* Stats Overview */}
        <Card className="mb-6 bg-gradient-to-r from-blue-500 to-green-500">
          <CardContent className="p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">活动统计</h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-xs text-blue-100">总参与</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-xs text-blue-100">已完成</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2,550</div>
                <div className="text-xs text-blue-100">总积分</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tab Bar */}
        <div className="flex p-1 mb-6 bg-white rounded-full shadow-sm">
          {tabs.map((tab) => (
            <Button
              key={tab}
              size="sm"
              variant={activeTab === tab ? "default" : "ghost"}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 rounded-full ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Activities List */}
        <div className="space-y-4">
          {currentActivities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden transition-shadow hover:shadow-md">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="flex-shrink-0 w-24 h-20 overflow-hidden">
                    <img src={activity.image} alt={activity.title} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="mb-1 text-sm font-medium text-gray-900">{activity.title}</h4>
                        <Badge variant="secondary" className="text-xs">{activity.type}</Badge>
                      </div>
                      <div className="flex items-center text-xs text-blue-600">
                        <i className="mr-1 ri-coin-line" />
                        <span>
                          {activeTab === '参与中' ? `${'points' in activity ? activity.points : 0}积分` :
                           activeTab === '已完成' ? `获得${'points' in activity ? activity.points : 0}积分` :
                           `预计${'estimatedPoints' in activity ? activity.estimatedPoints : 0}积分`}
                        </span>
                      </div>
                    </div>
                    
                    {activeTab === '参与中' && 'progress' in activity && (
                      <div>
                        <div className="flex items-center justify-between mb-2 text-xs text-gray-500">
                          <span>{activity.currentValue} / {activity.targetValue}</span>
                          <span>{activity.daysLeft}天剩余</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full"
                            style={{ width: `${activity.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                    
                    {activeTab === '已完成' && 'completedDate' in activity && (
                      <div className="text-xs text-gray-500">
                        <div className="mb-1">完成时间：{activity.completedDate}</div>
                        <div className="mb-1">最终成绩：{activity.finalValue}</div>
                        <div className="flex items-center text-green-600">
                          <i className="mr-1 ri-award-line" />
                          <span>{activity.reward}</span>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === '未开始' && 'startDate' in activity && (
                      <div className="text-xs text-gray-500">
                        <div className="mb-1">开始时间：{activity.startDate}</div>
                        <div>结束时间：{activity.endDate}</div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {currentActivities.length === 0 && (
          <div className="py-12 text-center">
            <i className="mb-2 text-4xl text-gray-300 ri-trophy-line" />
            <p className="text-gray-500">暂无{activeTab}的活动</p>
          </div>
        )}
      </div>
    </div>
  );
}
