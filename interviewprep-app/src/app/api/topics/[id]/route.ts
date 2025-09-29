import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const topic = await prisma.topic.findUnique({ where: { id } });
  if (!topic) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(topic);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const body = await request.json();
  const { title, content, published } = body;
  const topic = await prisma.topic.update({ where: { id }, data: { title, content, published } });
  return NextResponse.json(topic);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  await prisma.topic.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
