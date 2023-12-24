import Image from "next/image";
import React, { FC } from "react";
// import searchIcon from "/search .svg";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/hall5.jpg"
          style={{ opacity: 0.9 }}
          alt="background image"
          fill
          className="h-screen w-screen object-cover"
        />
      </div>

      {/* Upper Section with Left, Middle, and Right Panels */}
      <div className="flex z-10 mt-10">
        {/* Left Panel */}
        <div
          className="p-8 opacity-70 backdrop-blur-md backdrop-filter w-[200px] h-[600px] rounded-l-[30px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          {/* Left panel content */}
          <div className="mt-4 flex items-center">
            <span className="text-white text-sm">
              &#60; &nbsp;Touch Settings
            </span>
          </div>
          <div className="p-1 mt-4 flex items-center justify-center">
            <div className="w-[400px] h-[40px] opacity-80 backdrop-blur-md backdrop-filter rounded-md flex items-center justify-start pl-2">
              {/* Content inside the box */}
              <span className="text-white text-sm">Your Profile</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-white text-sm mb-8">Central Command</p>
            <p className="text-white text-sm mb-8">Notifications</p>
            <p className="text-white text-sm mb-8">Display &amp; wallpaper</p>
            <p className="text-white text-sm mb-8">Passwords</p>
            <p className="text-white text-sm mb-8">Parental Control</p>
            <p className="text-white text-sm mb-8">My Apps</p>
          </div>
        </div>

        {/* Main Content Box (Middle Box) */}
        <div className="relative">
          {/* Box at the top of the middle box with margin at the top */}
          <div
            className="absolute top-0 inset-x-0 mx-auto p-4 mt-4 opacity-80 backdrop-blur-[2px] backdrop-filter w-[900px] h - [200px] rounded-[10px]"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            {/* Content inside the box at the top */}
            <div className="flex items-center">
              <Image src="search.svg" height={32} width={32} alt="search" />
              <span className="ml-2 text-white">Search</span>
             
            </div>
           
          </div>
         
          <div
            className="p-8 opacity-40 backdrop-blur-[90px] backdrop-filter w-[1000px] h-[600px] relative rounded-r-[30px] text-white"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            {/* Your content inside the box */}
            <div className="mt-20 left 20 text-white text-2xl font-bold mb-2">&#62; &nbsp;My Files</div>
            {/* Four boxes placed horizontally in the middle with top margin */}
            <div className="flex justify-between text-white">
              {/* Box 1 */}
              <div
                className="w-[200px] h-[100px] p-4 opacity-120 backdrop-blur-[50px] backdrop-filter rounded-[15px] mt-0 text-white"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                {/* Content inside Box 1 */}
                <div className="flex items-center">
              <Image src="folder.svg" height={32} width={32} alt="search" className="mr-auto" />
              <Image src="dots.svg" height={32} width={32} alt="search" className="ml-auto" />
              
             
            </div>
            <span className="ml-2 text-white">Touch</span>
            <br />
            <span className="ml-2 text-white">2358 items</span>

              </div>

              {/* Box 2 */}
              <div
                className="w-[200px] h-[100px] p-4 opacity-100 backdrop-blur-[50px] backdrop-filter rounded-[15px] mt-0"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                {/* Content inside Box 2 */}
                <div className="flex items-center">
              <Image src="folder.svg" height={32} width={32} alt="search" className="mr-auto" />
              <Image src="dots.svg" height={32} width={32} alt="search" className="ml-auto" />
              
             
            </div>
            <span className="ml-2 text-white">Documents</span>
            <br />
            <span className="ml-2 text-white">2358 items</span>

              </div>

              {/* Box 3 */}
              <div
                className="w-[200px] h-[100px] p-4 opacity-100 backdrop-blur-[50px] backdrop-filter rounded-[15px] mt-0"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                {/* Content inside Box 3 */}
                <div className="flex items-center">
              <Image src="dropbox.svg" height={32} width={32} alt="search" className="mr-auto" />
              <Image src="dots.svg" height={32} width={32} alt="search" className="ml-auto" />
              
             
            </div>
            <span className="ml-2 text-white">Dropbox</span>
            <br />
            <span className="ml-2 text-white">External Storage</span>

              </div>

              {/* Box 4 */}
              <div
                className="w-[200px] h-[100px] p-4 opacity-100 backdrop-blur-[50px] backdrop-filter rounded-[15px] mt-0"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                {/* Content inside Box 4 */}
                <div className="flex items-center">
              <Image src="drive.svg" height={32} width={32} alt="search" className="mr-auto" />
              <Image src="dots.svg" height={32} width={32} alt="search" className="ml-auto" />
              
             
            </div>
            <span className="ml-2 text-white">Google Drive</span>
            <br />
            <span className="ml-2 text-white">External Storage</span>

              </div>
            </div>
          </div>

          {/* Box at the bottom of the middle box */}
          <div
            className="absolute bottom-0 inset-x-0 mx-auto p-4 opacity-90 backdrop-blur-md backdrop-filter w-[950px] h-[330px] rounded-[15px] mt-20"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            {/* Content inside the box at the bottom */}
            <div className="absolute top-5 left-0 mb-4 ml-8 font-bold text-white">
              Recent Files
            </div>
            <div className="flex absolute left-10 top-10 inset-x-0 mx-auto mt-8 text-white">
  <div className="w-1/4 pr-4">Files</div>
  <div className="w-1/4 pr-4">Date</div>
  <div className="w-1/4 pr-4">Size</div>
  <div className="w-1/4 pr-4">Kind</div>
</div>

<div className="flex absolute left-7 top-20 inset-x-0 mx-auto mt-8 text-white">
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
  <Image src="adobe.svg" height={20} width={20} alt="search" />
    <span className="ml-2 text-white">Instructor</span>
  </div>
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
    <span className="ml-2 text-white">27 February 2023, 7:45 p.m.</span>
  </div>
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
    <span className="ml-2 text-white">46 MB</span>
  </div>
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
    <span className="ml-2 text-white">PDF</span>
  </div>
</div>

<div className="flex absolute left-7 top-40 inset-x-0 mx-auto mt-8 text-white">
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
  <Image src="cash.svg" height={20} width={20} alt="search" />
    <span className="ml-2 text-white top-30">Cashflow Records</span>
  </div>
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
    <span className="ml-2 text-white">28 February 2023</span>
  </div>
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
    <span className="ml-2 text-white">30 MB</span>
  </div>
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
    <span className="ml-2 text-white">PPT</span>
  </div>
</div>

{/* Add similar blocks for "Doc" and "Article" rows */}

<div className="flex absolute left-7 top-60 inset-x-0 mx-auto mt-8 text-white">
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
  <Image src="word.svg" height={20} width={20} alt="search" />
    <span className="ml-2 text-white top-30">Proposal Doc</span>
  </div>
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
    <span className="ml-2 text-white">28 February 2023, 7.50p.m.</span>
  </div>
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
    <span className="ml-2 text-white">30 MB</span>
  </div>
  <div className="w-1/4 pr-4 border-b border-white flex items-center">
    <span className="ml-2 text-white">PPT</span>
  </div>
</div>

            
          </div>
        </div>
      </div>

      {/* Box below the three boxes with some distance */}
      <div
        className="mt-8 mb-8 p-8 opacity-50 backdrop-blur-md backdrop-filter w-[1200px] h-[10px] rounded-[15px]"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        {/* Box inside the box below the three boxes and positioned horizontally at the left */}
        <div
          className=" absolute left-0 top-0 w-[150px] h-[40px] p-4 opacity-70 backdrop-blur-md backdrop-filter rounded-[15px] mt-3 flex items-center text-white"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        >
          {/* Content inside the box inside the box below the three boxes */}
          <Image src="avatar2.svg" height={32} width={32} alt="search" className="mr-auto" />
          <span className="text-white text-sm">Hello &nbsp;</span>
            <br />
            <span className="text-white text-sm">Aisha</span>

        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-[500px] h-[40px] p-4 opacity-80 backdrop-blur-[2px] backdrop-filter rounded-[15px] flex items-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            {/* Content inside the centered box */}
            <div className="flex items-center">
  <Image src="spotify.svg" height={32} width={32} alt="search" className="mr-2" />
  <span className="text-white text-sm">See yoe </span>
</div>
          </div>
        </div>
        <div className="absolute right-0 top-0 flex">
          {/* Box 1 on the right */}
          <div
            className="w-[100px] h-[40px] p-4 opacity-70 backdrop-blur-md backdrop-filter rounded-[15px] mt-3 ml-4 flex items-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          >
            {/* Content inside Box 1 on the right */}
            <Image src="work.svg" height={32} width={32} alt="search" className="mr-auto" />
          <span className="text-white text-sm">Work</span>
           
          </div>

          {/* Box 2 on the right */}
          <div
            className="w-[45px] h-[40px] p-4 opacity-70 backdrop-blur-md backdrop-filter rounded-full mt-3 ml-4 flex items-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          >
            {/* Content inside Box 2 on the right */}
            <Image src="avatar.svg" height={60} width={60} alt="search" />
            

          </div>
        </div>

        {/* Content inside the box below the three boxes */}
      </div>
    </div>
  );
};

export default Home;
