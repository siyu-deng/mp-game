
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const competitionData = {
  '1': {
    id: 1,
    title: '郑州市青少年飞盘体验',
    type: '飞盘体验',
    image: 'https://readdy.ai/api/search-image?query=Zhengzhou%20youth%20frisbee%20sports%20experience%20vibrant%20young%20people%20playing%20frisbee%20outdoor%20park%20energetic%20colorful%20modern%20athletic%20design&width=320&height=180&seq=50&orientation=landscape',
    description: '青春飞扬，体验飞盘运动的魅力',
    status: '已结束',
    participants: '3,256',
    endTime: '2022-08-07',
    rewards: '参与证书',
    startTime: '2022-07-07',
    organizer: '郑州市体育局',
    location: '郑州市奥体中心',
    content: `
      <h3>活动介绍</h3>
      <p>郑州市青少年飞盘体验活动是面向青少年群体的新兴体育项目推广活动，旨在让更多青少年了解和体验飞盘运动的乐趣，培养团队协作精神和身体协调能力。</p>
      
      <h3>活动内容</h3>
      <ul>
        <li><strong>基础教学：</strong>飞盘投掷技巧、接盘技巧学习</li>
        <li><strong>团队游戏：</strong>飞盘传递、目标投掷等趣味活动</li>
        <li><strong>友谊赛：</strong>分组进行简单的飞盘比赛</li>
        <li><strong>技能展示：</strong>优秀学员飞盘技巧展示</li>
      </ul>
      
      <h3>参与对象</h3>
      <ul>
        <li>年龄范围：12-18岁青少年</li>
        <li>身体健康，无运动限制</li>
        <li>对新兴体育项目有兴趣</li>
        <li>需家长陪同或签署同意书</li>
      </ul>
      
      <h3>活动特色</h3>
      <ul>
        <li><strong>专业指导：</strong>邀请专业飞盘教练现场指导</li>
        <li><strong>免费参与：</strong>所有活动内容完全免费</li>
        <li><strong>装备提供：</strong>现场提供专业飞盘用具</li>
        <li><strong>安全保障：</strong>配备专业医疗团队现场保障</li>
      </ul>
      
      <h3>收获与奖励</h3>
      <ul>
        <li><strong>参与证书：</strong>所有参与者获得活动参与证书</li>
        <li><strong>技能提升：</strong>掌握飞盘运动基本技能</li>
        <li><strong>团队精神：</strong>培养合作意识和团队精神</li>
        <li><strong>健康体魄：</strong>增强身体协调性和反应能力</li>
      </ul>
    `
  },
  '2': {
    id: 2,
    title: '郑州市春季马拉松交流赛（业余组）',
    type: '马拉松',
    image: 'https://readdy.ai/api/search-image?query=Zhengzhou%20spring%20marathon%20amateur%20group%20running%20competition%20athletes%20outdoor%20track%20vibrant%20energetic%20sports%20event%20Central%20Plains&width=320&height=180&seq=51&orientation=landscape',
    description: '春暖花开，畅跑中原大地',
    status: '进行中',
    participants: '8,945',
    endTime: '2023-02-10',
    rewards: '完赛奖牌',
    startTime: '2023-01-10',
    organizer: '郑州市体育局',
    location: '郑州奥体中心',
    content: `
      <h3>赛事介绍</h3>
      <p>郑州市春季马拉松交流赛是面向业余跑步爱好者的线下赛事，旨在推广全民健身运动，展示中原地区的春季风光，为广大跑步爱好者提供交流平台。</p>
      
      <h3>赛程设置</h3>
      <ul>
        <li><strong>全程马拉松：</strong>42.195公里，限时6小时</li>
        <li><strong>半程马拉松：</strong>21.0975公里，限时3小时</li>
        <li><strong>10公里健康跑：</strong>适合初学者参与</li>
        <li><strong>5公里家庭跑：</strong>亲子共同参与</li>
      </ul>
      
      <h3>参赛要求</h3>
      <ul>
        <li>年满18周岁（家庭跑除外）</li>
        <li>身体健康，无心脏病等疾病</li>
        <li>提交半年内体检报告</li>
        <li>购买人身意外保险</li>
      </ul>
      
      <h3>赛道特色</h3>
      <ul>
        <li><strong>起点：</strong>郑州奥体中心体育场</li>
        <li><strong>途经：</strong>如意湖、CBD商务区、郑东新区</li>
        <li><strong>终点：</strong>郑州奥体中心体育场</li>
        <li><strong>补给站：</strong>每5公里设置补给点</li>
      </ul>
      
      <h3>奖励设置</h3>
      <ul>
        <li><strong>完赛奖励：</strong>所有完赛选手获得完赛奖牌</li>
        <li><strong>名次奖励：</strong>各组别前3名获得奖杯+奖金</li>
        <li><strong>纪念品：</strong>参赛包含技术T恤、号码布等</li>
        <li><strong>成绩证书：</strong>电子成绩证书可下载</li>
      </ul>
    `
  },
  '3': {
    id: 3,
    title: '河南省太极拳表演赛',
    type: '视频活动',
    image: 'https://readdy.ai/api/search-image?query=Henan%20tai%20chi%20martial%20arts%20performance%20people%20practicing%20traditional%20chinese%20exercise%20peaceful%20serene%20outdoor%20Central%20Plains%20park%20morning%20exercise%20healthy%20lifestyle&width=400&height=240&seq=32&orientation=landscape',
    description: '传承中原武术文化，弘扬河南武术精神',
    status: '未开始',
    participants: '0',
    endTime: '2024-03-15',
    rewards: '专属称号',
    startTime: '2024-02-20',
    organizer: '河南省武术协会',
    location: '河南省（线上展示）',
    videos: [],
    content: `
      <h3>活动介绍</h3>
      <p>河南省太极拳表演赛旨在传承和弘扬中原武术文化，展示太极拳这一中华传统武术的魅力，提高全省人民对传统文化的认知和参与度。</p>
      
      <h3>参赛项目</h3>
      <ul>
        <li><strong>24式简化太极拳：</strong>适合初学者</li>
        <li><strong>42式太极拳：</strong>中级水平</li>
        <li><strong>传统太极拳：</strong>陈式、杨式等传统套路</li>
        <li><strong>太极剑：</strong>器械表演</li>
      </ul>
      
      <h3>参赛要求</h3>
      <ul>
        <li>表演时长3-8分钟</li>
        <li>动作标准，体现太极拳特色</li>
        <li>服装整洁，建议穿太极服</li>
        <li>可配背景音乐</li>
      </ul>
      
      <h3>评选标准</h3>
      <ul>
        <li><strong>技术水平（40%）：</strong>动作准确性、流畅性</li>
        <li><strong>精神面貌（30%）：</strong>神韵、气质表现</li>
        <li><strong>整体效果（30%）：</strong>协调统一、观赏性</li>
      </ul>
      
      <h3>奖励设置</h3>
      <ul>
        <li><strong>太极大师：</strong>前10名获得专属称号</li>
        <li><strong>太极高手：</strong>前50名获得荣誉证书</li>
        <li><strong>太极新秀：</strong>前100名获得纪念勋章</li>
      </ul>
    `
  },
  '4': {
    id: 4,
    title: '运动健将榜',
    type: '健步走',
    image: 'https://readdy.ai/api/search-image?query=Online%20walking%20challenge%20fitness%20competition%20digital%20steps%20tracking%20healthy%20lifestyle%20vibrant%20colors%20modern%20app%20design&width=320&height=180&seq=55&orientation=landscape',
    description: '每日健步走排行榜',
    status: '已报名',
    participants: '3700',
    endTime: '2024-02-29',
    rewards: '排名奖励',
    startTime: '2024-02-01',
    organizer: '河南省体育局',
    location: '线上活动',
    isLeaderboard: true,
    userStats: {
      todaySteps: 1176,
      monthCheckIns: 1,
      monthAvgSteps: 3686,
      monthTotalSteps: 40556,
      userRank: 2152,
      totalParticipants: 3700,
      userName: '我是李边请'
    },
    leaderboard: [
      { rank: 1, name: '清风明月', steps: 31276, avatar: '1' },
      { rank: 2, name: '李立风', steps: 31176, avatar: '2' },
      { rank: 3, name: '平淡人生', steps: 31076, avatar: '3' },
      { rank: 4, name: '李三和小小', steps: 31006, avatar: '4' },
      { rank: 5, name: '李诗情', steps: 30176, avatar: '5' },
      { rank: 6, name: '万里一', steps: 30006, avatar: '6' }
    ],
    content: `
      <h3>活动介绍</h3>
      <p>线上健步走挑战赛是以日常步数为核心的健身竞赛活动，通过每日步数统计和排名展示，激励参与者保持运动习惯。</p>
      
      <h3>排名规则</h3>
      <ul>
        <li>每日6:00-23:59记录有效步数</li>
        <li>按月累计步数进行排名</li>
        <li>实时更新个人和省内排名</li>
        <li>数据来源于手机计步或智能穿戴设备</li>
      </ul>
      
      <h3>奖励机制</h3>
      <ul>
        <li><strong>每日奖励：</strong>达到目标步数获得积分</li>
        <li><strong>周排名：</strong>前100名获得周冠军徽章</li>
        <li><strong>月排名：</strong>前50名获得月度奖励</li>
        <li><strong>连续打卡：</strong>连续记录获得额外奖励</li>
      </ul>
    `
  },
  '5': {
    id: 5,
    title: '河南省线上广场舞大赛',
    type: '视频活动',
    image:"https://readdy.ai/api/search-image?query=Henan%20square%20dancing%20competition%20people%20dancing%20outdoor%20community%20fitness%20vibrant%20colorful%20energetic%20healthy%20lifestyle%20modern%20photography%20style%20Central%20Plains%20culture&width=400&height=240&seq=31&orientation=landscape",
    description: '展示舞姿，传播健康生活',
    status: '评比中',
    participants: '2,156',
    endTime: '2024-02-15',
    rewards: '电子勋章',
    startTime: '2024-01-10',
    organizer: '河南省文化和体育厅',
    location: '河南省（线上展示）',
    videos: [
      {
        id: 1,
        title: '郑州市二七区广场舞团《花好月圆》',
        author: '舞动青春队',
        thumbnail: 'https://readdy.ai/api/search-image?query=Zhengzhou%20square%20dancing%20team%20performing%20beautiful%20choreography%20vibrant%20costumes%20traditional%20Chinese%20dance%20outdoor%20community%20center&width=160&height=120&seq=41&orientation=landscape',
        likes: 1254,
        views: 8965,
        duration: '4:32',
        liked: false
      },
      {
        id: 2,
        title: '洛阳牡丹广场《中原风情舞》',
        author: '牡丹花开队',
        thumbnail: 'https://readdy.ai/api/search-image?query=Luoyang%20peony%20square%20traditional%20dance%20team%20colorful%20costumes%20Central%20Plains%20cultural%20performance%20elegant%20movements&width=160&height=120&seq=42&orientation=landscape',
        likes: 2186,
        views: 12456,
        duration: '3:45',
        liked: true
      },
      {
        id: 3,
        title: '开封古城《宋韵飞扬》',
        author: '古城韵律队',
        thumbnail: 'https://readdy.ai/api/search-image?query=Kaifeng%20ancient%20city%20square%20dance%20traditional%20Song%20Dynasty%20theme%20elegant%20movements%20historical%20architecture%20background&width=160&height=120&seq=43&orientation=landscape',
        likes: 987,
        views: 6543,
        duration: '5:12',
        liked: false
      },
      {
        id: 4,
        title: '新乡市健身公园《太行欢歌》',
        author: '太行山队',
        thumbnail: 'https://readdy.ai/api/search-image?query=Xinxiang%20fitness%20park%20square%20dancing%20energetic%20performance%20mountain%20theme%20vibrant%20costumes%20outdoor%20exercise&width=160&height=120&seq=44&orientation=landscape',
        likes: 1456,
        views: 9876,
        duration: '4:18',
        liked: false
      }
    ],
    content: `
      <h3>活动介绍</h3>
      <p>河南省线上广场舞大赛是展示中原文化特色的全民健身活动，采用线上视频展示的形式，鼓励全省人民通过广场舞这一群众喜闻乐见的运动方式，展示河南人民的精神风貌。</p>
      
      <h3>参赛要求</h3>
      <ul>
        <li>参赛者需为河南省居民</li>
        <li>舞蹈时长3-5分钟</li>
        <li>可个人或团体参赛（团体不超过20人）</li>
        <li>舞蹈内容健康向上，体现河南特色</li>
        <li>上传高清视频到指定平台</li>
      </ul>
      
      <h3>评选标准</h3>
      <ul>
        <li><strong>舞蹈技巧（30%）：</strong>动作标准度、协调性</li>
        <li><strong>创意编排（25%）：</strong>编舞创新、队形变化</li>
        <li><strong>服装造型（20%）：</strong>服装搭配、整体形象</li>
        <li><strong>地方特色（25%）：</strong>河南文化元素融入</li>
      </ul>
      
      <h3>奖项设置</h3>
      <ul>
        <li><strong>金奖：</strong>10个名额，奖金3000元+电子勋章</li>
        <li><strong>银奖：</strong>20个名额，奖金2000元+电子勋章</li>
        <li><strong>铜奖：</strong>30个名额，奖金1000元+电子勋章</li>
        <li><strong>优秀奖：</strong>100个名额，纪念品+电子勋章</li>
      </ul>
    `
  }
};

interface CompetitionDetailProps {
  competitionId: string;
}

export default function CompetitionDetail({ competitionId }: CompetitionDetailProps) {
  const router = useRouter();
  const [likedVideos, setLikedVideos] = useState<number[]>([]);
  const competition = competitionData[competitionId as keyof typeof competitionData];

  if (!competition) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <NavBar title="活动详情" showBack onBack={() => router.back()} />
        <div className="pt-16 px-4 flex items-center justify-center min-h-[400px]">
          <p className="text-gray-500">活动不存在</p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case '报名中': return 'success';
      case '评比中': return 'warning';
      case '进行中': return 'default';
      case '未开始': return 'secondary';
      case '已结束': return 'error';
      default: return 'secondary';
    }
  };

  const handleLike = (videoId: number) => {
    setLikedVideos(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const isVideoActivity = competition.type === '视频活动';
  const hasVideos = isVideoActivity && 'videos' in competition && competition.videos && competition.videos.length > 0;
  const isLeaderboard = 'isLeaderboard' in competition && competition.isLeaderboard;

  // 如果是健步走排行榜页面，显示特殊布局
  if (isLeaderboard) {
    const leaderboardData = competition as any; // 类型断言
    return (
      <div className="min-h-screen bg-gray-100">
        <NavBar title="运动健将榜" showBack onBack={() => router.back()} />
        
        <div className="px-4 pt-16 pb-8">
          {/* 我的成绩 */}
          <div className="mb-4">
            <h3 className="mb-3 text-lg font-medium text-gray-800">我的成绩：</h3>
            
            {/* 今日步数 */}
            <Card className="mb-4">
              <CardContent className="p-6 text-center">
                <div className="mb-2 text-3xl font-bold text-gray-900">{leaderboardData.userStats.todaySteps}</div>
                <div className="text-sm text-gray-500">今日步数</div>
              </CardContent>
            </Card>
            
            {/* 月度统计 */}
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{leaderboardData.userStats.monthCheckIns}</div>
                    <div className="mt-1 text-xs text-gray-500">本月登录天数</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{leaderboardData.userStats.monthAvgSteps}</div>
                    <div className="mt-1 text-xs text-gray-500">本月日均步数</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{leaderboardData.userStats.monthTotalSteps}</div>
                    <div className="mt-1 text-xs text-gray-500">本月总步数</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 我的排名 */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">我的排名：</h3>
            <button className="flex items-center text-sm text-gray-500">
              <span>省排名</span>
              <i className="ml-1 ri-arrow-down-s-line" />
            </button>
          </div>

          {/* 排行榜 */}
          <Card>
            <CardContent className="p-0">
              {/* 当前用户排名 */}
              <div className="p-4 border-b border-gray-100 bg-blue-50">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 font-medium text-white bg-gray-300 rounded-full">
                    我
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{leaderboardData.userStats.userName}</div>
                    <div className="text-sm text-gray-500">
                      第{leaderboardData.userStats.userRank}名/共{leaderboardData.userStats.totalParticipants}名
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-orange-500">{leaderboardData.userStats.todaySteps}</div>
                    <div className="text-xs text-gray-500">步</div>
                  </div>
                </div>
              </div>

              {/* 排行榜列表 */}
              {leaderboardData.leaderboard.map((user: any) => (
                <div key={user.rank} className="p-4 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 mr-3 font-medium text-white bg-gray-300 rounded-full">
                      {user.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">
                        第{user.rank}名/共{leaderboardData.userStats.totalParticipants}名
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-orange-500">{user.steps}</div>
                      <div className="text-xs text-gray-500">步</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <NavBar title="活动详情" showBack onBack={() => router.back()} />
      
      <div className="px-4 pt-16 pb-8">
        <Card className="mb-6 overflow-hidden">
          <div className="relative">
            <img 
              src={competition.image} 
              alt={competition.title} 
              className="object-cover w-full h-48" 
            />
            <div className="absolute flex space-x-2 top-4 left-4">
              <Badge variant="secondary" className="text-gray-700 bg-white/90">
                {competition.type}
              </Badge>
              <Badge variant={getStatusColor(competition.status)}>
                {competition.status}
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-6">
            <h1 className="mb-3 text-xl font-bold leading-7 text-gray-900">{competition.title}</h1>
            <p className="mb-4 text-gray-600">{competition.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="flex items-center text-gray-600">
                <i className="mr-2 text-blue-500 ri-calendar-line" />
                <div>
                  <div className="text-xs text-gray-400">开始时间</div>
                  <div>{competition.startTime}</div>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="mr-2 text-red-500 ri-calendar-check-line" />
                <div>
                  <div className="text-xs text-gray-400">结束时间</div>
                  <div>{competition.endTime}</div>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="mr-2 text-green-500 ri-user-line" />
                <div>
                  <div className="text-xs text-gray-400">参与人数</div>
                  <div>{competition.participants}人</div>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="mr-2 text-purple-500 ri-building-line" />
                <div>
                  <div className="text-xs text-gray-400">主办方</div>
                  <div>{competition.organizer}</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 mb-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
              <div className="flex items-center">
                <i className="mr-2 text-orange-500 ri-gift-line" />
                <span className="text-sm font-medium text-gray-700">奖励：{competition.rewards}</span>
              </div>
              <div className="flex items-center">
                <i className="mr-2 text-red-500 ri-map-pin-line" />
                <span className="text-sm text-gray-600">{competition.location}</span>
              </div>
            </div>
            
            <div className="flex mb-6 space-x-3">
              {competition.status === '报名中' && (
                <Button className="flex-1">
                  <i className="mr-2 ri-edit-line" />
                  立即报名
                </Button>
              )}
              {competition.status === '进行中' && (
                <Button className="flex-1">
                  <i className="mr-2 ri-play-line" />
                  参与活动
                </Button>
              )}
              {competition.status === '未开始' && (
                <Button variant="secondary" className="flex-1">
                  <i className="mr-2 ri-notification-line" />
                  活动提醒
                </Button>
              )}
              <Button variant="secondary" size="sm" className="px-4">
                <i className="ri-share-line" />
              </Button>
            </div>

            {/* Video Section for Video Activities */}
            {hasVideos && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="flex items-center text-lg font-semibold text-gray-900">
                    <i className="mr-2 text-blue-500 ri-video-line" />
                    参赛视频
                  </h3>
                  <span className="text-sm text-gray-500">{competition.videos.length}个作品</span>
                </div>
                
                <div className="space-y-4">
                  {competition.videos.map((video) => (
                    <Card key={video.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex">
                          <div className="relative flex-shrink-0 w-32 h-24">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <i className="text-2xl text-white ri-play-circle-line" />
                            </div>
                            <div className="absolute px-1 text-xs text-white rounded bottom-1 right-1 bg-black/70">
                              {video.duration}
                            </div>
                          </div>
                          
                          <div className="flex flex-col justify-between flex-1 p-3">
                            <div>
                              <h4 className="mb-1 text-sm font-medium text-gray-900 line-clamp-2">
                                {video.title}
                              </h4>
                              <p className="mb-2 text-xs text-gray-500">{video.author}</p>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3 text-xs text-gray-500">
                                <span className="flex items-center">
                                  <i className="mr-1 ri-eye-line" />
                                  {video.views}
                                </span>
                                <span className="flex items-center">
                                  <i className="mr-1 ri-heart-line" />
                                  {video.likes + (likedVideos.includes(video.id) ? 1 : 0)}
                                </span>
                              </div>
                              
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => handleLike(video.id)}
                                className={`px-2 py-1 ${
                                  video.liked || likedVideos.includes(video.id) 
                                    ? 'text-red-500' 
                                    : 'text-gray-500'
                                }`}
                              >
                                <i className={`${
                                  video.liked || likedVideos.includes(video.id) 
                                    ? 'ri-heart-fill' 
                                    : 'ri-heart-line'
                                } text-sm`} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {isVideoActivity && competition.status !== '未开始' && (
              <div className="mb-6">
                <Button variant="secondary" className="w-full">
                  <i className="mr-2 ri-upload-line" />
                  上传我的参赛视频
                </Button>
              </div>
            )}
            
            <div 
              className="leading-6 prose-sm prose text-gray-700 max-w-none"
              dangerouslySetInnerHTML={{ __html: competition.content }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
