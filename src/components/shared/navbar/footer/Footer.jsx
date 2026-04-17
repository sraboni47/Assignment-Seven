import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center">
        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">KeenKeeper</h1>

        {/* DESCRIPTION */}
        <p className="text-sm  text-gray-300  mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* SOCIAL LINKS */}
        <h3 className="mb-4 font-medium">Social Links</h3>

        <div className="flex justify-center gap-4 mb-10">
          {/* Instagram */}
          <div className="bg-white rounded-full">
            <img src="/images/instagram.png" alt="instagram" />
          </div>

          {/* Facebook */}
          <div className="bg-white  rounded-full">
            <img src="/images/facebook.png" alt="facebook" />
          </div>

          {/* Twitter */}
          <div className="bg-white rounded-full">
            <img src="/images/twitter.png" alt="twitter" />
          </div>
        </div>

        {/* LINE */}
        <div className="border-t border-white/20 mb-6"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <p className="cursor-pointer hover:text-white">Privacy Policy</p>
            <p className="cursor-pointer hover:text-white">Terms of Service</p>
            <p className="cursor-pointer hover:text-white">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
