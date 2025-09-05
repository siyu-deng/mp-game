
'use client';

import NavBar from '@/components/NavBar';
import TabBar from '@/components/TabBar';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function NewsPage() {
  const newsData = [
    {
      id: 1,
      title: '2024年河南省全民健身线上运动会正式启动',
      type: '赛事报道',
      image: 'https://readdy.ai/api/search-image?query=Henan%20province%20sports%20event%20young%20people%20running%20marathon%20sports%20competition%20vibrant%20colorful%20athletic%20competition%20outdoor%20stadium%20energetic%20healthy%20lifestyle%20modern%20photography%20style%20bright%20lighting&width=300&height=180&seq=1&orientation=landscape',
      time: '2024-01-15',
      summary: '本次线上运动会将持续3个月，涵盖健步走、广场舞、太极拳等多个项目，面向全省人民开放...',
      content: '2024年河南省全民健身线上运动会于今日正式启动，本次活动由河南省体育局主办，旨在推动全省全民健身事业发展，提高全省人民身体素质。活动将持续3个月，涵盖健步走、广场舞、太极拳、虚拟路线等多个项目，预计将有超过100万河南人参与。'
    },
    {
      id: 2,
      title: '河南省推进全民健身数字化发展指导意见',
      type: '政策文件',
      image: 'https://readdy.ai/api/search-image?query=Henan%20digital%20fitness%20technology%20policy%20document%20illustration%20modern%20clean%20design%20blue%20and%20green%20gradient%20background%20professional%20style%20government%20policy&width=300&height=180&seq=2&orientation=landscape',
      time: '2024-01-12',
      summary: '加快推进河南省全民健身与数字技术深度融合，构建智慧化健身服务体系...',
      content: '为贯彻落实《河南省全民健身条例》，加快推进全省全民健身与数字技术深度融合，构建智慧化健身服务体系，现提出以下指导意见：一是建设数字化健身平台，二是完善健身数据标准，三是推广智能健身设备应用。'
    },
    {
      id: 3,
      title: '河南省健步走活动参与人数突破50万人次',
      type: '新闻资讯',
      image: 'https://readdy.ai/api/search-image?query=Henan%20walking%20fitness%20app%20smartphone%20people%20exercising%20outdoor%20Central%20Plains%20park%20healthy%20lifestyle%20modern%20illustration%20vibrant%20colors%20energetic%20atmosphere&width=300&height=180&seq=3&orientation=landscape',
      time: '2024-01-10',
      summary: '截至目前，河南省健步走活动累计参与人数已超过50万，总步数达到200亿步...',
      content: '自河南省健步走活动开展以来，得到了全省广大市民的积极响应。截至目前，活动累计参与人数已超过50万，总步数达到200亿步，平均每人每日步数超过8000步。活动不仅提高了河南人民的运动积极性，也促进了全民健身理念的传播。'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="最新资讯" showBack />
      
      <div className="pt-16 pb-20 px-4">
        <div className="flex flex-col gap-4">
          {newsData.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex gap-3 p-3">
                    <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                      <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 rounded-full">{news.type}</Badge>
                        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{news.time}</span>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 leading-5">{news.title}</h4>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-4">{news.summary}</p>
                    </div>
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