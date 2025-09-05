
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

function CompetitionsContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  
  const [activeTab, setActiveTab] = useState('线上运动会');
  const [selectedProvince, setSelectedProvince] = useState('全省');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showProvinceDropdown, setShowProvinceDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState('全部');

  useEffect(() => {
    if (typeParam === '线下赛事') {
      setActiveTab('线下赛事');
    } else if (typeParam === '线上运动会') {
      setActiveTab('线上运动会');
    }
  }, [typeParam]);

  const activities = [
    {
      id: 1,
      title: '郑州市青少年飞盘体验',
      type: '线下赛事',
      image: 'https://readdy.ai/api/search-image?query=Zhengzhou%20youth%20frisbee%20sports%20experience%20vibrant%20young%20people%20playing%20frisbee%20outdoor%20park%20energetic%20colorful%20modern%20athletic%20design&width=320&height=180&seq=50&orientation=landscape',
      status: '已结束',
      startDate: '2022.07.07',
      endDate: '2022.08.07',
      participants: '3,256',
      category: '体验'
    },
    {
      id: 2,
      title: '郑州市春季马拉松交流赛（业余组）',
      type: '线下赛事',
      image: 'https://readdy.ai/api/search-image?query=Zhengzhou%20spring%20marathon%20amateur%20group%20running%20competition%20athletes%20outdoor%20track%20vibrant%20energetic%20sports%20event%20Central%20Plains&width=320&height=180&seq=51&orientation=landscape',
      status: '进行中',
      startDate: '2023.01.10',
      endDate: '2023.02.10',
      participants: '8,945',
      category: '交流赛'
    },
    {
      id: 3,
      title: '河南省太极拳表演赛',
      type: '线上运动会',
      image: 'https://readdy.ai/api/search-image?query=Henan%20tai%20chi%20martial%20arts%20performance%20people%20practicing%20traditional%20chinese%20exercise%20peaceful%20serene%20outdoor%20Central%20Plains%20park%20morning%20exercise%20healthy%20lifestyle&width=400&height=240&seq=32&orientation=landscape',
      status: '报名中',
      startDate: '2024.01.15',
      endDate: '2024.03.15',
      participants: '15,632',
      category: '线上'
    },
    {
      id: 4,
      title: '线上健步走挑战赛',
      type: '线上运动会',
      image: 'https://readdy.ai/api/search-image?query=Online%20walking%20challenge%20fitness%20competition%20digital%20steps%20tracking%20healthy%20lifestyle%20vibrant%20colors%20modern%20app%20design&width=320&height=180&seq=55&orientation=landscape',
      status: '已报名',
      startDate: '2024.02.01',
      endDate: '2024.02.29',
      participants: '25,847',
      category: '健步走'
    },
    {
      id: 5,
      title: '河南省线上广场舞大赛',
      type: '线上运动会',
      image:"https://readdy.ai/api/search-image?query=Henan%20square%20dancing%20competition%20people%20dancing%20outdoor%20community%20fitness%20vibrant%20colorful%20energetic%20healthy%20lifestyle%20modern%20photography%20style%20Central%20Plains%20culture&width=400&height=240&seq=31&orientation=landscape",
      status: '评比中',
      startDate: '2024.01.10',
      endDate: '2024.02.15',
      participants: '2,156',
      category: '视频活动'
    },
    {
      id: 7,
      title: '开封古城文化跑活动',
      type: '线下赛事',
      image: 'https://readdy.ai/api/search-image?query=Kaifeng%20ancient%20city%20cultural%20running%20event%20historical%20architecture%20traditional%20Chinese%20buildings%20runners%20healthy%20lifestyle%20heritage&width=320&height=180&seq=54&orientation=landscape',
      status: '报名中',
      startDate: '2024.03.01',
      endDate: '2024.03.31',
      participants: '2,145',
      category: '文化跑'
    }
  ];

  const provinces = [
    '全省',
    '郑州市', 
    '开封市',
    '洛阳市',
    '许昌市',
    '新乡市',
    '南阳市',
    '周口市',
    '商丘市',
    '平顶山市'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '报名中': return 'bg-blue-500 text-white';
      case '已报名': return 'bg-purple-500 text-white';
      case '进行中': return 'bg-green-500 text-white';
      case '即将开始': return 'bg-orange-500 text-white';
      case '已结束': return 'bg-gray-400 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  const filteredActivities = activities.filter(activity => activity.type === activeTab);

  const dates = [
    { date: '2.5', day: '日' },
    { date: '2.6', day: '一' },
    { date: '2.7', day: '二' },
    { date: '2.8', day: '三' },
    { date: '2.9', day: '四' },
    { date: '2.10', day: '五' },
    { date: '2.11', day: '六' }
  ];

  const calendarDays = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, null, null, null]
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <NavBar title="河南省全民健身运动大会" />
      
      <div className="pt-16 pb-20">
        {/* Search Bar */}
        <div className="px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="请输入活动名称"
              className="w-full py-3 pl-10 pr-4 text-sm placeholder-gray-500 bg-gray-100 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <i className="absolute text-gray-400 transform -translate-y-1/2 ri-search-line left-3 top-1/2" />
          </div>
        </div>

        {/* Date Filter */}
        <div className="px-4 mb-4">
          <div className="p-4 bg-gray-50 rounded-2xl">
            {!showCalendar ? (
              <div className="flex items-center space-x-3 overflow-x-hidden">
                <button 
                  className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-900 bg-white border shadow-sm rounded-xl"
                  onClick={() => setSelectedDate('全部')}
                >
                  全部
                </button>
                <div className="flex items-center flex-1 min-w-0 space-x-3">
                  {dates.map((item) => (
                    <button
                      key={item.date}
                      onClick={() => setSelectedDate(item.date)}
                      className={`text-center p-2 rounded-lg transition-colors flex-shrink-0 ${
                        selectedDate === item.date ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-sm font-medium">{item.date}</div>
                      <div className="mt-1 text-xs opacity-70">{item.day}</div>
                    </button>
                  ))}
                  <button 
                    className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-400 transition-colors hover:text-gray-600"
                    onClick={() => setShowCalendar(true)}
                  >
                    <i className="text-lg ri-arrow-down-s-line" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-white shadow-sm rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900">2023年2月</h4>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600">
                      <i className="ri-arrow-left-s-line" />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600">
                      <i className="ri-arrow-right-s-line" />
                    </button>
                    <button 
                      className="flex items-center justify-center w-8 h-8 ml-2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowCalendar(false)}
                    >
                      <i className="ri-arrow-up-s-line" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mb-2 text-xs text-center text-gray-500">
                  <div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div>
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((week, weekIndex) => 
                    week.map((day, dayIndex) => (
                      <button
                        key={`${weekIndex}-${dayIndex}`}
                        className={`h-10 flex items-center justify-center text-sm rounded-lg transition-colors relative ${
                          day === 7 ? 'bg-gray-500 text-white' : 
                          day ? 'hover:bg-gray-100 text-gray-700' : ''
                        }`}
                        disabled={!day}
                      >
                        {day}
                        {day && day <= 11 && <div className="absolute w-1 h-1 mt-6 bg-gray-400 rounded-full" />}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Category Tabs and Province Selector */}
        <div className="px-4 mb-6">
          <div className="flex items-center gap-3">
            {/* Activity Type Selector */}
            <div className="flex flex-1 p-1 bg-gray-100 rounded-2xl">
              <button
                onClick={() => setActiveTab('线上运动会')}
                className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
                  activeTab === '线上运动会' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500'
                }`}
              >
                线上运动会
              </button>
              <button
                onClick={() => setActiveTab('线下赛事')}
                className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
                  activeTab === '线下赛事' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500'
                }`}
              >
                线下赛事
              </button>
            </div>

            {/* Province Selector */}
            <div className="relative flex-shrink-0">
              <button 
                className="flex items-center justify-between bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100 min-w-[100px]"
                onClick={() => setShowProvinceDropdown(!showProvinceDropdown)}
              >
                <span className="text-sm text-gray-900">{selectedProvince}</span>
                <i className={`ri-arrow-down-s-line text-gray-400 text-sm transition-transform ml-2 ${showProvinceDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showProvinceDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[120px] z-10">
                  {provinces.map((province) => (
                    <button
                      key={province}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        selectedProvince === province ? 'text-blue-500 bg-blue-50' : 'text-gray-700'
                      }`}
                      onClick={() => {
                        setSelectedProvince(province);
                        setShowProvinceDropdown(false);
                      }}
                    >
                      {province}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Activities List */}
        <div className="px-4">
          <div className="space-y-4">
            {filteredActivities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden transition-shadow bg-white shadow-sm hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="object-cover w-full h-44" 
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={`text-xs px-2 py-1 rounded ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="mb-2 text-lg font-semibold leading-6 text-gray-900">{activity.title}</h4>
                    
                    <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span>活动时间：</span>
                        <span>{activity.startDate} - {activity.endDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center">
                          <i className="mr-1 ri-user-line" />
                          {activity.participants}人参与
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {activity.category}
                        </Badge>
                      </div>
                      
                      <Link href={`/competitions/${activity.id}`}>
                        <Button size="sm" className="px-4">
                          {activity.status === '报名中' ? '立即报名' : 
                           activity.status === '已报名' ? '查看详情' : '查看详情'}
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

export default function Competitions() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-gray-500">加载中...</div>
    </div>}>
      <CompetitionsContent />
    </Suspense>
  );
}
