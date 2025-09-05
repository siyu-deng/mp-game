
'use client';

import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const newsData = {
  '1': {
    id: 1,
    title: '2024年河南省全民健身线上运动会正式启动',
    type: '赛事报道',
    image: 'https://readdy.ai/api/search-image?query=Henan%20province%20sports%20event%20young%20people%20running%20marathon%20sports%20competition%20vibrant%20colorful%20athletic%20competition%20outdoor%20stadium%20energetic%20healthy%20lifestyle%20modern%20photography%20style%20bright%20lighting&width=400&height=240&seq=24&orientation=landscape',
    time: '2024-01-15',
    author: '河南省体育新闻中心',
    content: `
      <p>2024年河南省全民健身线上运动会于今日正式启动，本次活动由河南省体育局主办，旨在推动全省全民健身事业发展，提高河南人民身体素质。</p>
      
      <p>活动将持续3个月，涵盖健步走、广场舞、太极拳、虚拟路线等多个项目，预计将有超过100万河南人参与。参与者可通过手机APP报名参加各项活动，实时记录运动数据，获得积分奖励。</p>
      
      <h3>主要活动项目：</h3>
      <ul>
        <li><strong>健步走挑战：</strong>每日步数达标即可获得积分，连续打卡还有额外奖励</li>
        <li><strong>广场舞大赛：</strong>上传舞蹈视频参与评比，优秀作品将获得专属勋章</li>
        <li><strong>太极拳表演：</strong>传承中原武术文化，弘扬河南武术精神</li>
        <li><strong>虚拟路线：</strong>用脚步丈量河南大地和世界各地的著名路线</li>
      </ul>
      
      <p>本次活动采用全线上模式，打破地域限制，让全省各地市的人民都能参与到全民健身中来。同时，活动还设置了丰富的奖励机制，包括积分兑换、电子勋章、实物奖品等。</p>
      
      <p>活动组委会表示，希望通过这次线上运动会，激发全省人民参与体育运动的热情，养成良好的运动习惯，共同建设健康河南。</p>
    `
  },
  '2': {
    id: 2,
    title: '河南省推进全民健身数字化发展指导意见',
    type: '政策文件',
    image: 'https://readdy.ai/api/search-image?query=Henan%20digital%20fitness%20technology%20policy%20document%20illustration%20modern%20clean%20design%20blue%20and%20green%20gradient%20background%20professional%20style%20government%20policy&width=400&height=240&seq=25&orientation=landscape',
    time: '2024-01-12',
    author: '河南省政策研究部',
    content: `
      <p>为贯彻落实《河南省全民健身条例》，加快推进全省全民健身与数字技术深度融合，构建智慧化健身服务体系，现提出以下指导意见：</p>
      
      <h3>一、建设河南省数字化健身平台</h3>
      <p>建立统一的河南省全民健身数字化服务平台，整合全省各类健身资源，为全省人民提供便民服务。平台应具备活动报名、数据记录、社交互动、奖励兑换等功能。</p>
      
      <h3>二、完善河南省健身数据标准</h3>
      <p>制定适合河南省情的健身数据采集、存储、交换标准，确保数据的准确性和可比性。建立健身数据安全保护体系，保障用户隐私。</p>
      
      <h3>三、推广智能健身设备在河南的应用</h3>
      <p>鼓励全省使用智能穿戴设备、健身APP等科技产品，提高运动数据的准确性和便利性。支持河南本地企业开发适合不同人群的智能健身产品。</p>
      
      <h3>四、加强河南省数字化健身服务</h3>
      <p>发展在线健身指导、远程健康监测等服务模式，满足全省不同人群的个性化健身需求。建立河南省健身指导员数字化培训体系。</p>
      
      <p>各地市要结合当地实际情况，制定具体实施方案，确保各项措施落地见效，推动河南省全民健身事业高质量发展。</p>
    `
  },
  '3': {
    id: 3,
    title: '河南省健步走活动参与人数突破50万人次',
    type: '新闻资讯',
    image: 'https://readdy.ai/api/search-image?query=Henan%20walking%20fitness%20app%20smartphone%20people%20exercising%20outdoor%20Central%20Plains%20park%20healthy%20lifestyle%20modern%20illustration%20vibrant%20colors%20energetic%20atmosphere&width=400&height=240&seq=26&orientation=landscape',
    time: '2024-01-10',
    author: '河南省数据统计中心',
    content: `
      <p>自河南省健步走活动开展以来，得到了全省广大市民的积极响应。截至目前，活动累计参与人数已超过50万，总步数达到200亿步，平均每人每日步数超过8000步。</p>
      
      <h3>河南省参与数据统计</h3>
      <ul>
        <li>累计参与人数：502,456人</li>
        <li>总步数：20,123,400,000步</li>
        <li>平均日步数：8,245步</li>
        <li>连续打卡7天以上：285,543人</li>
        <li>月度排名前100：获得专属勋章</li>
      </ul>
      
      <p>活动不仅提高了河南人民的运动积极性，也促进了全民健身理念在中原大地的传播。许多参与者表示，通过健步走活动养成了良好的运动习惯，身体素质明显改善。</p>
      
      <h3>河南用户反馈</h3>
      <p>来自郑州的参与者李女士表示："这个活动让我每天都有运动的动力，现在走路已经成为我们河南人生活的一部分。"</p>
      
      <p>洛阳的张先生说："通过APP记录步数很方便，还能和全省的朋友们比较，增加了运动的趣味性。"</p>
      
      <p>活动组织方表示，将继续优化活动内容，增加更多河南特色的互动环节，让更多河南人参与到健步走活动中来。</p>
    `
  }
};

interface NewsDetailProps {
  newsId: string;
}

export default function NewsDetail({ newsId }: NewsDetailProps) {
  const router = useRouter();
  const news = newsData[newsId as keyof typeof newsData];

  if (!news) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <NavBar title="资讯详情" showBack onBack={() => router.back()} />
        <div className="pt-16 px-4 flex items-center justify-center min-h-[400px]">
          <p className="text-gray-500">资讯不存在</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="资讯详情" showBack onBack={() => router.back()} />
      
      <div className="pt-16 pb-8 px-4">
        <Card className="overflow-hidden">
          <div className="relative">
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/90 text-gray-700">
                {news.type}
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-6">
            <h1 className="text-xl font-bold text-gray-900 mb-4 leading-7">{news.title}</h1>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center">
                <i className="ri-user-line mr-1" />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line mr-1" />
                <span>{news.time}</span>
              </div>
            </div>
            
            <div 
              className="prose prose-sm max-w-none text-gray-700 leading-6"
              dangerouslySetInnerHTML={{ __html: news.content }}
              style={{
                lineHeight: '1.6'
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}