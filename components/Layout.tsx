import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex bg-neutral-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-800 p-6">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="text-neutral-400 hover:text-white">
              Overview
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-neutral-400 hover:text-white">
              Prologue
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-neutral-400 hover:text-white">
              Getting Started
            </a>
          </li>
          {/* Add more nav items here */}
        </ul>
      </nav>
    </aside>
  );
}

function Header() {
  return (
    <header className="bg-neutral-800 p-6 border-b border-neutral-700">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Agon - Laravel Multipurpose Agency</h1>
        <div className="space-x-4">
          <button className="bg-neutral-700 p-2 rounded-full hover:bg-neutral-600">
            {/* Icons or links */}
          </button>
        </div>
      </div>
    </header>
  );
}
