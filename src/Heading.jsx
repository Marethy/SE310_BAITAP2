import './App.css'

function Heading() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://baomoi-static.bmcdn.me/web/styles/img/bm-logo.png" // Replace with your logo path
            alt="Báo Mới Logo"
            className="h-12"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-6 flex justify-center">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Nhập nội dung tìm kiếm"
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-2 top-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Icons (User, Grid Menu) */}
        <div className="flex items-center space-x-4">
          {/* User Icon */}
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m4-6a4 4 0 110-8 4 4 0 014 4zm7-4h-.79a1.75 1.75 0 01-1.71-1.21A6.022 6.022 0 0015 6.5h-.28m0 0A6.022 6.022 0 009.5 9.29M9.2 9.5a1.75 1.75 0 01-1.71 1.21H6.5"
              />
            </svg>
          </button>

          {/* Grid Menu Icon */}
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5zM14 14h5v5h-5z"
              />
            </svg>
          </button>
        </div>
      </div>

      
    </header>
  );
}

export default Heading;
