
import VirtualRouteDetail from './VirtualRouteDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default function VirtualRoutePage({ params }: { params: { id: string } }) {
  return <VirtualRouteDetail routeId={params.id} />;
}