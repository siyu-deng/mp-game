import CompetitionDetail from './CompetitionDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

export default function CompetitionPage({ params }: { params: { id: string } }) {
  return <CompetitionDetail competitionId={params.id} />;
}