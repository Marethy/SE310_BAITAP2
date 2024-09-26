import './App.css';
import NavBar from './NavBar'; // Import NavBar
import ImageCard from './ImageCard';
import Bm_Card from './Bm_Card';
import SideBar from './SideBar';
import PartnerLogos from './PartnerLogos';
import Box_baomoi from './Box_baomoi';
import Bm_Card2 from './Bm_Card2';
import Bm_Section from './Bm_Section';
import Banner from './Banner';

const Layout = () => {
  return (
    <div>
      {/* Thêm NavBar ở trên cùng */}
      <NavBar />

      {/* Phần layout chính */}
      <div className="flex">
        {/* Container cho ImageCard và Bm_Card */}
        <div className="pl-20 w-2/3 flex flex-col">
          {/* ImageCard ở trên cùng */}
          <div className="flex-none">
            <ImageCard />
          </div>
          {/* Bm_Card ở dưới cùng */}
          <div className="flex-none">
            <Bm_Card />
          </div>

          <div className="flex-none">
            <Bm_Card2 />
          </div>
        </div>

        {/* Sidebar và các thành phần phụ */}
        <div className="w-1/3 flex flex-col pr-10">
          <div className="flex-none">
            <SideBar />
          </div>
          <div className="flex-none px-10 py-5">
            <PartnerLogos />
          </div>

          <div className="flex-none pb-10">
            <Banner />
          </div>

          <div className="flex-none">
            <Box_baomoi />
          </div>
          <div className="flex-none p-8">
            <Bm_Section />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
