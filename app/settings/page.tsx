
'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    activity: true,
    achievement: true,
    daily: false,
    ranking: true
  });

  const [privacy, setPrivacy] = useState({
    showProfile: true,
    showRanking: true,
    shareData: false
  });

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handlePrivacyChange = (key: string) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const settingSections = [
    {
      title: '账户设置',
      items: [
        { icon: 'ri-user-line', label: '个人信息', href: '/profile/edit' },
        { icon: 'ri-lock-line', label: '修改密码', href: '/profile/password' },
        { icon: 'ri-phone-line', label: '绑定手机', href: '/profile/phone' },
        { icon: 'ri-mail-line', label: '邮箱设置', href: '/profile/email' }
      ]
    },
    {
      title: '运动设置',
      items: [
        { icon: 'ri-target-line', label: '运动目标', href: '/settings/goals' },
        { icon: 'ri-map-pin-line', label: '位置权限', href: '/settings/location' },
        { icon: 'ri-smartphone-line', label: '数据同步', href: '/settings/sync' },
        { icon: 'ri-calendar-line', label: '提醒时间', href: '/settings/reminders' }
      ]
    },
    {
      title: '其他',
      items: [
        { icon: 'ri-question-line', label: '帮助中心', href: '/help' },
        { icon: 'ri-feedback-line', label: '意见反馈', href: '/feedback' },
        { icon: 'ri-information-line', label: '关于我们', href: '/about' },
        { icon: 'ri-file-list-line', label: '用户协议', href: '/terms' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="设置" />
      
      <div className="pt-16 pb-8 px-4">
        {/* Notification Settings */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">通知设置</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">活动通知</div>
                  <div className="text-xs text-gray-500">活动开始、结束等提醒</div>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                    notifications.activity ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handleNotificationChange('activity')}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform mt-0.5 ${
                    notifications.activity ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">成就通知</div>
                  <div className="text-xs text-gray-500">获得勋章、完成目标等</div>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                    notifications.achievement ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handleNotificationChange('achievement')}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform mt-0.5 ${
                    notifications.achievement ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">每日提醒</div>
                  <div className="text-xs text-gray-500">每日运动打卡提醒</div>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                    notifications.daily ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handleNotificationChange('daily')}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform mt-0.5 ${
                    notifications.daily ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">排名通知</div>
                  <div className="text-xs text-gray-500">排名变化通知</div>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                    notifications.ranking ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handleNotificationChange('ranking')}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform mt-0.5 ${
                    notifications.ranking ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">隐私设置</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">公开个人资料</div>
                  <div className="text-xs text-gray-500">其他用户可查看您的基本信息</div>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                    privacy.showProfile ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handlePrivacyChange('showProfile')}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform mt-0.5 ${
                    privacy.showProfile ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">显示排名</div>
                  <div className="text-xs text-gray-500">在排行榜中显示您的成绩</div>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                    privacy.showRanking ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handlePrivacyChange('showRanking')}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform mt-0.5 ${
                    privacy.showRanking ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">数据分享</div>
                  <div className="text-xs text-gray-500">允许与第三方应用分享数据</div>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                    privacy.shareData ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handlePrivacyChange('shareData')}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform mt-0.5 ${
                    privacy.shareData ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Setting Sections */}
        {settingSections.map((section, sectionIndex) => (
          <Card key={sectionIndex} className="mb-6">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <i className={`${item.icon} text-gray-500`} />
                      <span className="text-sm text-gray-900">{item.label}</span>
                    </div>
                    <i className="ri-arrow-right-s-line text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Logout Button */}
        <div className="mt-8">
          <Button variant="outline" className="w-full text-red-500 border-red-200 hover:bg-red-50">
            退出登录
          </Button>
        </div>
      </div>
    </div>
  );
}
