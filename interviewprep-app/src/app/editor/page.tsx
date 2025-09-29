"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Editor = dynamic(() => import('@tiptap/react').then((m) => m.EditorContent), { ssr: false });

export default function EditorPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/topics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    if (res.ok) router.push('/');
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Add Topic</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content (markdown or html)"
          className="w-full border rounded px-3 py-2 h-64"
        />
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </div>
      </form>
    </main>
  );
}
