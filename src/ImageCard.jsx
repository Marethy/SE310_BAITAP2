import './App.css'

const ImageCard = ()=> {
    return (
      <div className="max-w-1xl mx-10 p-4 rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-90 object-cover"
          src="https://photo-baomoi.bmcdn.me/w250_r3x2/2024_09_25_83_50273724/10b46eb0d5ff3ca165ee.jpg.webp"
          alt="Gold Rings"
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">
            Tăng hơn 1 triệu đồng/lượng chỉ sau 1 ngày, giá vàng nhẫn cao chưa từng có
          </h2>
          <div className="text-gray-500 text-sm flex items-center">
            <img
              src="https://photo-baomoi.bmcdn.me/6eede58338c0d19e88d1.png"
              alt="VietNews logo"
              className="w-30 h-6 mr-2"
            />
            • 1 giờ trước • 720 liên quan
          </div>
        </div>
      </div>
    );
  }
  export default ImageCard;
