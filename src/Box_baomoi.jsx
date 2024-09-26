import './App.css';

const Box_baomoi = () => {
    return (
        <div className="max-w-sm mx-auto bg-gray-200 shadow-lg rounded-lg overflow-hidden"> {/* Gray background added here */}
            <div className="flex items-center p-4">
                <img
                    src="https://static-cttcp.cdnchinhphu.vn/baochinhphu/image/logo_bcp.png"
                    alt="Logo"
                    className="w-10 h-10 mr-5 ml-4"
                />
                <h2 className="text-white text-xl font-bold">THÔNG TIN CHÍNH PHỦ</h2>
            </div>
            <div className="flex p-4">
                <img
                    src="https://bcp.cdnchinhphu.vn/zoom/102_64/334894974524682240/2024/9/24/202409241639451400dsc7283-17271908894891496515026-0-0-1250-2000-crop-1727191183169851593558.jpg"
                    alt="Chính phủ"
                    className="w-4/10 h-20 mr-4" // Adjust width of image as needed
                />
                <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                        <p className="text-gray-700 font-bold">
                            Đầu tư vốn nhà nước tại Ngân hàng VCB khẳng định vai trò sếu đầu đàn trong ngành tài chính ngân hàng.
                        </p>
                    </div>
                </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 mt-2 mx-2">
                <li>HorecFex Việt Nam 2024 - Mang đến công nghệ mới nhất cho ngành khách sạn.</li>
                <li>Tuyên Quang: Đòn lực khắc phục thiệt hại và giúp người dân sớm ổn định đời sống sau cơn bão số 4.</li>
            </ul>
        </div>
    );
};

export default Box_baomoi;
