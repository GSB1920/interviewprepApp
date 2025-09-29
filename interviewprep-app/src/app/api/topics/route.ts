import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  const topics = await prisma.topic.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(topics);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content } = body;
  if (!title || !content) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

  const topic = await prisma.topic.create({ data: { title, content } });
  return NextResponse.json(topic, { status: 201 });
}
