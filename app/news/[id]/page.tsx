
import NewsDetail from './NewsDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function NewsPage({ params }: { params: { id: string } }) {
  return <NewsDetail newsId={params.id} />;
}
