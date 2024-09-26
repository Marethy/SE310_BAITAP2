import './App.css'

const Bm_Card = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-1xl mx-10">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            className="w-full h-40 object-cover rounded-md"
            src="https://photo-baomoi.bmcdn.me/w250_r3x2/2024_09_25_293_50278231/bcd35e01ea4e03105a5f.jpg.webp"
            alt="News 1"
          />
          <h2 className="mt-4 font-semibold text-base">
            Lực lượng Hezbollah tuyên bố tấn công vào trụ sở cơ quan tình báo Israel
          </h2>
          <div className="flex items-center mt-2 text-sm text-gray-500">
          <div className="flex items-center text-sm text-gray-500 mt-2">
        <img
          className="w-20 h-5 object-cover mr-2"
          src="https://photo-baomoi.bmcdn.me/d1c2f8ad25eeccb095ff.png "
          alt="Icon"
        />
        <p className="mr-2"> 21 giờ</p>
      
      </div>
          </div>
        </div>
  
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            className="w-full h-40 object-cover rounded-md"
            src="https://photo-baomoi.bmcdn.me/w250_r3x2/2024_09_25_114_50278610/7ca06779d3363a686327.jpg.webp"
            alt="News 2"
          />
          <h2 className="mt-4 font-semibold text-base">
            Thủy điện Trị An xả tràn cao nhất từ đầu năm đến nay
          </h2>
          <div className="flex items-center mt-2 text-sm text-gray-500">
          <div className="flex items-center text-sm text-gray-500 mt-2">
        <img
          className="w-20 h-5 object-cover mr-2"
          src="https://photo-baomoi.bmcdn.me/f12dd0420d01e45fbd10.png "
          alt="Icon"
        />
        <p className="mr-2"> 3 giờ</p>
      
      </div>
          </div>
        </div>
  
        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            className="w-full h-40 object-cover rounded-md"
            src="https://photo-baomoi.bmcdn.me/w250_r3x2/2024_09_25_83_50278153/1ad24c03f84c1112485d.jpg.webp"
            alt="News 3"
          />
          <h2 className="mt-4 font-semibold text-base">
            Varane giải nghệ: Chạm đáy ở Man Utd, rời đi vẫn không hết vận đen
          </h2>
          <div className="flex items-center mt-2 text-sm text-gray-500">
          <div className="flex items-center text-sm text-gray-500 mt-2">
        <img
          className="w-20 h-5 object-cover mr-2"
          src="https://photo-baomoi.bmcdn.me/6eede58338c0d19e88d1.png "
          alt="Icon"
        />
        <p className="mr-2"> 4 giờ</p>
      
      </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Bm_Card;
  