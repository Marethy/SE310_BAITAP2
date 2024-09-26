import React, { useState } from 'react';
import './App.css'; 

const PartnerLogos = () => {
    // Mảng URL hình ảnh logo
    const logos = [
        'https://photo-baomoi.bmcdn.me/26dc73b3aef047ae1ee1.png',
        'https://photo-baomoi.bmcdn.me/b306c969142afd74a43b.png',
        'https://photo-baomoi.bmcdn.me/0268cca18fee66b03fff.png',
        'https://photo-baomoi.bmcdn.me/8b131a7dc73e2e60772f.png',
        'https://photo-baomoi.bmcdn.me/4e023e6de32e0a70533f.png',
        'https://photo-baomoi.bmcdn.me/a1493a27e7640e3a5775.png',
        'https://photo-baomoi.bmcdn.me/d01baf7472379b69c226.png',
        'https://photo-baomoi.bmcdn.me/bb071048550abc54e51b.png',
        'https://photo-baomoi.bmcdn.me/3700446f992c7072293d.png',
        'https://photo-baomoi.bmcdn.me/0b89da8919caf094a9db.png',
    ];

    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="bg-gray-100 px-10 p-2" style={{
            backgroundImage: `url('https://baomoi-static.bmcdn.me/web/styles/img/pls-bg-1.png')`,
            backgroundSize: 'cover', // Để phủ kín toàn bộ khu vực
            backgroundRepeat: 'no-repeat', // Để ngăn chặn lặp lại hình ảnh
            backgroundPosition: 'center', // Để căn giữa hình ảnh
        }}>
            <h2 className="text-sm font-semibold mb-4 text-black">ĐỐI TÁC CHÍNH THỨC</h2>
            <div 
                className="overflow-hidden"
                onMouseEnter={() => setIsHovering(true)} // Tạm dừng animation khi di chuột vào
                onMouseLeave={() => setIsHovering(false)} // Tiếp tục animation khi rời chuột
            >
                <div className={`flex ${isHovering ? 'pause-slider' : 'animate-slider'} whitespace-nowrap`}>
                    {logos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-28 h-14 mx-2 flex items-center justify-center p-4 bg-white border border-gray-400 rounded-md"> {/* Điều chỉnh kích thước logo và thêm kiểu dáng */}
                            <img src={logo} alt={`Logo ${index + 1}`} className="object-contain h-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnerLogos;
