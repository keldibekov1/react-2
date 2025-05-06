import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full h-[500px] mt-[89px]">
      <div className="absolute inset-0 bg-[url('./assets/footer.png')] bg-cover bg-no-repeat bg-center" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center">
        <h2 className="text-3xl mb-2">Stay in Touch</h2>
        <div className="w-[150px] h-[2px] bg-white mb-6" />

        <div className="flex w-[500px] h-[60px] max-w-full">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-[375px] h-[50px] px-4 text-black bg-white rounded-l-[3px] outline-none"
          />
          <button className="w-[125px] h-[50px] bg-[#ffffff99] text-white rounded-r-[3px] hover:bg-amber-200">
            Submit
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-[#232F3899] text-white py-6">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <h1 className="font-Lora font-normal text-[26px] leading-[26px]">
            Escape.
          </h1>
          <ul className="flex gap-10">
            <li>
              <span className="font-Oxygen font-normal text-[11px] uppercase text-right">
                Home
              </span>
            </li>
            <li>
              <span className="font-Oxygen font-normal text-[11px] uppercase text-right">
                Categories
              </span>
            </li>
            <li>
              <span className="font-Oxygen font-normal text-[11px] uppercase text-right">
                About
              </span>
            </li>
            <li>
              <span className="font-Oxygen font-normal text-[11px] uppercase text-right">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
