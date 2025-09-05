
import SignupForm from './SignupForm';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default function SignupPage({ params }: { params: { id: string } }) {
  return <SignupForm activityId={params.id} />;
}