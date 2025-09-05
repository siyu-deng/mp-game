
'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function SportsData() {
  const [activeTab, setActiveTab] = useState('概览');

  const tabs = ['概览', '步数', '活动', '成就'];

  const overviewData = {
    totalSteps: 1580000,
    totalDistance: 1106,
    totalCalories: 47280,
    activeDays: 186,
    avgStepsPerDay: 8495,
    bestDay: 15680,
    streakDays: 12
  };

  const weeklySteps = [
    { day: '周一', steps: 8234 },
    { day: '周二', steps: 9876 },
    { day: '周三', steps: 7532 },
    { day: '周四', steps: 10234 },
    { day: '周五', steps: 8765 },
    { day: '周六', steps: 12456 },
    { day: '周日', steps: 9123 }
  ];

  const achievements = [
    { name: '健步达人', description: '累计步数达到100万步', date: '2024-01-15', icon: '🏆' },
    { name: '连续打卡王', description: '连续30天达成目标', date: '2024-01-10', icon: '📅' },
    { name: '距离挑战者', description: '单日步行距离超过15公里', date: '2024-01-05', icon: '🎯' },
    { name: '早起鸟儿', description: '连续7天早上6点前开始運動', date: '2024-01-01', icon: '🌅' }
  ];

  const maxSteps = Math.max(...weeklySteps.map(d => d.steps));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="运动数据" />
      
      <div className="pt-16 pb-8 px-4">
        {/* Tab Bar */}
        <div className="flex bg-white rounded-full p-1 mb-6 shadow-sm">
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

        {activeTab === '概览' && (
          <div className="space-y-6">
            {/* Today's Stats */}
            <Card className="bg-gradient-to-r from-blue-500 to-green-500">
              <CardContent className="p-6">
                <div className="text-center text-white">
                  <h2 className="text-sm mb-2">今日步数</h2>
                  <div className="text-4xl font-bold mb-2">8,234</div>
                  <div className="text-sm text-blue-100">目标：10,000步 (82%)</div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                    <div className="bg-white h-2 rounded-full" style={{ width: '82%' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {(overviewData.totalSteps / 10000).toFixed(1)}万
                  </div>
                  <div className="text-xs text-gray-500">总步数</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {overviewData.totalDistance}
                  </div>
                  <div className="text-xs text-gray-500">总距离(公里)</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {overviewData.totalCalories}
                  </div>
                  <div className="text-xs text-gray-500">总消耗(卡路里)</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {overviewData.activeDays}
                  </div>
                  <div className="text-xs text-gray-500">活跃天数</div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">运动表现</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">日均步数</span>
                    <span className="font-medium">{overviewData.avgStepsPerDay.toLocaleString()}步</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">最佳单日</span>
                    <span className="font-medium text-green-600">{overviewData.bestDay.toLocaleString()}步</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">连续打卡</span>
                    <span className="font-medium text-blue-600">{overviewData.streakDays}天</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === '步数' && (
          <div className="space-y-6">
            {/* Weekly Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">本周步数统计</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weeklySteps.map((data, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 text-xs text-gray-500">{data.day}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                              style={{ width: `${(data.steps / maxSteps) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-16 text-xs text-right font-medium">
                        {data.steps.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">步数目标</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">每日目标</span>
                    <span className="font-medium">10,000步</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">本周完成</span>
                    <span className="font-medium text-green-600">5/7天</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">本月完成</span>
                    <span className="font-medium text-blue-600">18/20天</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === '活动' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">活动统计</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                    <div className="text-xs text-gray-500">参与活动</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">6</div>
                    <div className="text-xs text-gray-500">完成活动</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">2</div>
                    <div className="text-xs text-gray-500">进行中</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">8</div>
                    <div className="text-xs text-gray-500">获得勋章</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">积分统计</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">总积分</span>
                    <span className="font-bold text-xl text-blue-600">12,580</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">本月获得</span>
                    <span className="font-medium text-green-600">+1,250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">已兑换</span>
                    <span className="font-medium text-gray-600">2,100</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === '成就' && (
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{achievement.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">{achievement.description}</p>
                      <p className="text-xs text-gray-400">获得时间: {achievement.date}</p>
                    </div>
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-yellow-600 text-sm" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
