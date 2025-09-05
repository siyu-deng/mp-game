
'use client';

interface NavBarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

export default function NavBar({ title, showBack = false, onBack }: NavBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-100 px-4 py-3 z-50">
      <div className="flex items-center justify-between h-8">
        {showBack ? (
          <button onClick={onBack} className="w-8 h-8 flex items-center justify-center">
            <i className="ri-arrow-left-line text-lg text-gray-600" />
          </button>
        ) : (
          <div className="w-8" />
        )}
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        <div className="w-8" />
      </div>
    </div>
  );
}
