import SubMainContentArea from "./subMainContentArea/subMainContentArea"
import SubSidebar from "./subSidebar/subSidebar"  

export default function prepScreen() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-100 border-r">
        <SubSidebar />
      </aside>
      <main className="flex-1 p-4">
        <SubMainContentArea />
      </main>
    </div>
  );
}