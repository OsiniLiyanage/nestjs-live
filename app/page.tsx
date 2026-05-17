import Link from 'next/link';
import UserForm from './Components/UserForm';
import SecretTest from './Components/SecretTest';
import HelloCard from './Components/HelloCard';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold mb-4">User Form</h1>
        <UserForm />
        <HelloCard />
        {/* <SecretTest /> */}
        <div className="pt-2">
          <Link href="/mbti" className="inline-block rounded bg-indigo-600 px-4 py-2 text-white">Learn about MBTI</Link>
        </div>
      </div>
    </main>
  );
}
