export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-6 rounded-b-3xl shadow-lg">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-start gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-400" />
        <span className="text-black font-bold text-xl">Interview Prep</span>
      </div>
    </header>
  );
}