import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { StudyGroupCard } from '@/components/study-groups/study-group-card';
import { getStudyGroups } from '@/lib/api/study-groups';

export const metadata: Metadata = {
  title: 'Study Groups - StudyGroup',
  description: 'Manage your study groups',
};

export default async function StudyGroupsPage() {
  const groups = await getStudyGroups();

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Study Groups</h2>
        <Button asChild>
          <Link href="/dashboard/groups/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Group
          </Link>
        </Button>
      </div>
      {groups.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed">
          <h3 className="text-xl font-semibold">No study groups found</h3>
          <p className="text-sm text-muted-foreground">
            Create your first study group to get started
          </p>
          <Button asChild className="mt-4">
            <Link href="/dashboard/groups/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Group
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <StudyGroupCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
}