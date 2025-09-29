"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from './screens/Header';
import SideBar from './screens/Sidebar';

type Topic = {
  id: number;
  title: string;
  content: string;
  published: boolean;
};

export default function Home() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    fetch('/api/topics')
      .then((r) => r.json())
      .then(setTopics)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <aside className="w-64">
          <SideBar />
        </aside>
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Topics</h1>
            <Link href="/editor" className="bg-blue-600 text-white px-4 py-2 rounded">
              Add Topic
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {topics.map((t) => (
              <div key={t.id} className="bg-white p-4 rounded shadow-sm">
                <h2 className="text-xl font-semibold">{t.title}</h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{t.content}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}