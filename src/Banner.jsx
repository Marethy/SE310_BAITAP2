import './App.css';

const Banner = () => {
  return (
    <div className="mt-4 px-10"> {/* Margin-top for spacing */}
      <img 
        src="https://baomoi-static.bmcdn.me/events/banner_hcm_02-min.png" // Replace with your image URL
        alt="Additional Content"
        className="w-full h-auto object-cover" // Make sure it scales correctly
      />
    </div>
  );
};

export default Banner;
