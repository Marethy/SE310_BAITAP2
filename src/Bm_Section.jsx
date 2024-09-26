import './App.css';


const Bm_Section = () => {
  return (
    <div 
      className="max-w-sm mx-auto bg-gray-100 bg-cover bg-center backdrop-blur-8xl" 
      style={{ backgroundImage: "url('https://baomoi-static.bmcdn.me/web/styles/img/global-map.png')" }}
    >
      <div className=" bg-opacity-80 p-4 rounded">
        <div className="text-xl font-bold text-red-600 mb-4">Địa Phương</div>
        <div className="mb-4">
          <select className="block w-full p-2 border border-gray-300 rounded">
            <option>TP. HCM</option>
          </select>
        </div>

        {/* News Items */}
        <div className="space-y-4">
          {/* News Item */}
          <div className="flex items-center">
            <img src="https://photo-baomoi.bmcdn.me/w100_r1x1/2024_09_24_207_50264094/49764971f33e1a60432f.jpg.webp" alt="news" className="w-16 h-16 object-cover rounded mr-4" />
            <div>
              <a href="#" className="font-semibold text-lg text-black hover:underline">
                TP HCM tổ chức Đối thoại Hữu nghị và Diễn đàn Kinh tế TPHCM
              </a>
               <div className="flex items-center text-sm text-gray-500 mt-2">
                <img
                className="w-15 h-6 object-cover mr-2"
                src="https://photo-baomoi.bmcdn.me/274c96dbe3990ac75388.png"
                alt="Icon"
                />
                </div>
            </div>
          </div>

          {/* News Item */}
          <div className="flex items-center">
            <img src="https://photo-baomoi.bmcdn.me/w100_r1x1/2024_09_25_15_50272298/33a15e8ee5c10c9f55d0.jpg.webp" alt="news" className="w-16 h-16 object-cover rounded mr-4" />
            <div>
              <a href="#" className="font-semibold text-lg text-black hover:underline">
                Xúc tiến kinh tế TP HCM - Trùng Khánh
              </a>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <img
                className="w-15 h-5 object-cover mr-2"
                src="https://photo-baomoi.bmcdn.me/0b89da8919caf094a9db.png"
                alt="Icon"
                />
                </div>
            </div>
          </div>

          {/* News Item */}
          <div className="flex items-center">
            <img src="https://photo-baomoi.bmcdn.me/w100_r1x1/2024_09_26_15_50281927/86ea4c77f83811664829.jpg.webp" alt="news" className="w-16 h-16 object-cover rounded mr-4" />
            <div>
              <a href="#" className="font-semibold text-lg text-black hover:underline">
                Thúc đẩy kinh tế TP HCM phát triển bền vững
              </a>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <img
                className="w-15 h-5 object-cover mr-2"
                src="https://photo-baomoi.bmcdn.me/0b89da8919caf094a9db.png"
                alt="Icon"
                />
                <p className="mr-2">1 giờ</p>
                </div>
            </div>
          </div>

          {/* News Item */}
          <div className="flex items-center">
            <img src="https://photo-baomoi.bmcdn.me/w100_r1x1/2024_09_26_15_50280943/d3d04fb2fbfd12a34bec.jpg.webp" alt="news" className="w-16 h-16 object-cover rounded mr-4" />
            <div>
              <a href="#" className="font-semibold text-lg text-black hover:underline">
                Cờ tướng nữ TP HCM giữ ngôi vị số 1
              </a>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <img
                className="w-15 h-5 object-cover mr-2"
                src="https://photo-baomoi.bmcdn.me/0b89da8919caf094a9db.png"
                alt="Icon"
                />
                <p className="mr-2">5 giờ</p>
                </div>
            </div>
          </div>

          {/* News Item */}
          <div className="flex items-center">
            <img src="https://photo-baomoi.bmcdn.me/w100_r1x1/2024_09_24_15_50263214/04153fdc84936dcd3482.jpg.webp" alt="news" className="w-16 h-16 object-cover rounded mr-4" />
            <div>
              <a href="#" className="font-semibold text-lg text-black hover:underline">
                Công an TP HCM bắt DJ Bé Vi
              </a>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <img
                className="w-15 h-5 object-cover mr-2"
                src="https://photo-baomoi.bmcdn.me/0b89da8919caf094a9db.png"
                alt="Icon"
                />
                </div>
            </div>
          </div>
        </div>

        {/* View more */}
        <div className="mt-4 ml-60">
          <a href="#" className="text-black hover:underline">Xem thêm</a>
        </div>
      </div>
    </div>
  );
};

export default Bm_Section;
