
'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  const [activeStatsFilter, setActiveStatsFilter] = useState('政策发布');

  const bannerData = {
    title: '全民健身走活动',
    subtitle: '火热进行中，欢迎参加',
    participants: '50万+',
    totalSteps: '200亿步'
  };

  const quickActions = [
    {
      id: 1,
      title: '线上运动会',
      icon: 'ri-trophy-line',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20style%20online%20sports%20competition%20trophy%20vibrant%20blue%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20playful%20and%20friendly%20aesthetic&width=100&height=100&seq=21&orientation=squarish',
      href: '/competitions?type=线上运动会'
    },
    {
      id: 2,
      title: '线下赛事活动',
      icon: 'ri-calendar-event-line',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20style%20offline%20sports%20event%20calendar%20vibrant%20green%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20isolated%20on%20white%20background%2C%20centered%20composition%2C%20playful%20and%20friendly%20aesthetic&width=100&height=100&seq=22&orientation=squarish',
      href: '/competitions?type=线下赛事'
    }
  ];

  const newsCategories = ['政策发布', '体育资讯', '全民健身'];

  const newsData = [
    {
      id: 1,
      title: '河南省体育局关于印发《河南省促进体育产业高质量发展行动方案（2022—2025年）》的通知',
      type: '政策发布',
      time: '8月17日',
      summary: '为促进全省体育产业高质量发展，加快建设体育河南，根据《中华人民共和国体育法》、《加快建设体育河南实施方案》（豫政〔2022〕24号）、《河南省人民...',
      category: '政策发布'
    },
    {
      id: 2,
      title: '数字"群码"2025体育河南',
      type: '体育资讯',
      time: '8月10日',
      summary: '河南省人民政府近日印发《加快建设中原体育产业发展方案》（以下简称《方案》），提出到2025年，全省体育产业总规模达到2000亿元...',
      category: '体育资讯'
    },
    {
      id: 3,
      title: '2024年河南省全民健身线上运动会圆满结束',
      type: '全民健身',
      time: '8月8日',
      summary: '历时3个月的河南省全民健身线上运动会于今日圆满落下帷幕，全省共有超过100万人次参与各项赛事活动，累计完成运动打卡500万次...',
      category: '全民健身'
    },
    {
      id: 4,
      title: '河南省推进全民健身设施建设新举措',
      type: '政策发布',
      time: '8月5日',
      summary: '省政府办公厅印发《关于加强全民健身场地设施建设发展群众体育的实施意见》，提出到2025年，人均体育场地面积达到2.6平方米...',
      category: '政策发布'
    }
  ];

  const filteredNews = newsData.filter(news => 
    activeStatsFilter === '政策发布' ? true : news.category === activeStatsFilter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar title="河南省全民健身运动大会" />
      
      <div className="pt-16 pb-20 px-4">
        {/* Banner Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 mb-6 p-6">
          <div className="relative z-10 text-white">
            <h2 className="text-xl font-bold mb-1">{bannerData.title}</h2>
            <p className="text-blue-100 text-sm mb-4">{bannerData.subtitle}</p>
            <div className="w-20 h-1 bg-orange-400 rounded-full" />
          </div>
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full" />
          <div className="absolute -right-1 -bottom-1 w-10 h-10 bg-white/10 rounded-full" />
        </div>

        {/* Quick Actions */}
        <Card className="mb-6 overflow-hidden">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <Link key={action.id} href={action.href}>
                  <div className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 mb-3 overflow-hidden rounded-xl">
                      <img 
                        src={action.image} 
                        alt={action.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{action.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* City Activity */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">城市活力值</h3>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-32 flex items-center justify-center">
                <Button variant="secondary" className="bg-white/80">
                  点击查看
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* News Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">精彩资讯</h3>
          
          {/* Category Filter */}
          <div className="flex space-x-1 mb-4">
            {newsCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveStatsFilter(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeStatsFilter === category
                    ? 'text-gray-900 border-b-2 border-orange-400'
                    : 'text-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News List */}
          <div className="space-y-4">
            {filteredNews.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-600">
                        {news.type}
                      </Badge>
                      <span className="text-xs text-gray-400">{news.time}</span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2 leading-5">
                      {news.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-3 leading-4">
                      {news.summary}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <TabBar />
    </div>
  );
}
