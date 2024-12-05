import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const groups = await db.getStudyGroups();
    return NextResponse.json(groups);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch study groups' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const group = await db.createStudyGroup(data);
    return NextResponse.json(group);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create study group' },
      { status: 500 }
    );
  }
}