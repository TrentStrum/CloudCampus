import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - StudyGroup',
  description: 'Example dashboard for the StudyGroup platform',
};

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Total Study Groups</div>
          </div>
          <div className="text-2xl font-bold">12</div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Active Sessions</div>
          </div>
          <div className="text-2xl font-bold">3</div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Resources Shared</div>
          </div>
          <div className="text-2xl font-bold">24</div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Upcoming Events</div>
          </div>
          <div className="text-2xl font-bold">2</div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-xl border">
          <div className="p-6">
            <h3 className="font-semibold">Recent Activity</h3>
            <p className="text-sm text-muted-foreground">
              Your study group activity from the past week
            </p>
          </div>
        </div>
        <div className="col-span-3 rounded-xl border">
          <div className="p-6">
            <h3 className="font-semibold">Upcoming Sessions</h3>
            <p className="text-sm text-muted-foreground">
              Your scheduled study sessions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}