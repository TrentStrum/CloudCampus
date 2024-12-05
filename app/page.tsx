import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <GraduationCap className="h-16 w-16 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to StudyGroup
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join our collaborative learning platform where students and educators
            come together to share knowledge, resources, and achieve academic
            success.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/auth/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}