import './App.css';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) { // Bạn có thể điều chỉnh giá trị này theo chiều cao của NavBar
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-teal-500 text-white ${isSticky ? 'fixed top-0 left-0 w-full z-10' : ''}`}>
      <div className="container mx-auto flex justify-between px-4">
        <div className="flex items-center space-x-4">
          <a href="/" className="px-4 py-2 bg-teal-500 text-white hover:bg-teal-600">
            NÓNG
          </a>
          <div className="border-l border-white h-full"></div> {/* White Divider */}
          <a href="/" className="px-4 py-2 bg-teal-500 text-white hover:bg-teal-600">
            MỚI
          </a>
          <div className="border-l border-white h-full"></div> {/* White Divider */}
          <a href="/" className="px-4 py-2 bg-teal-500 text-white hover:bg-teal-600">
            VIDEO
          </a>
          <div className="border-l border-white h-full"></div> {/* White Divider */}
          <a href="/" className="px-4 py-2 bg-teal-500 text-white hover:bg-teal-600 whitespace-nowrap">
            CHỦ ĐỀ
          </a>
        </div>

        <div className="flex space-x-1 py-2">
          <a href="/" className="px-2 py-1 rounded-2xl border border-white hover:bg-teal-400 text-sm">
            # Năng lượng tích cực
          </a>
          <a href="/" className="px-2 py-1 rounded-2xl border border-white hover:bg-teal-400 text-sm">
            # Khám phá Việt Nam
          </a>
          <a href="/" className="px-2 py-1 rounded-2xl border border-white hover:bg-teal-400 text-sm">
            # Khám phá Thế Giới
          </a>
        </div>

        <button className="py-4 flex flex-col items-center justify-between w-10 h-12 bg-teal-600 text-white hover:bg-teal-700">
          <div className="w-4 h-1 bg-gray-200 mb-1"></div>
          <div className="w-4 h-1 bg-gray-200 mb-1"></div>
          <div className="w-4 h-1 bg-gray-200"></div>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
