import Image from 'next/image';
import React, {FC} from 'react';

interface HomeProps{

}

const Home: FC<HomeProps> = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0">
        <Image src="/hall5.jpg" 
        style={{ opacity: 0.9 }}
        alt="background image" fill className="h-screen w-screen object-cover" />
      </div>

      {/* Upper Section with Left, Middle, and Right Panels */}
      <div className="flex z-10 mt-10">

        {/* Left Panel */}
        <div className="p-8 opacity-70 backdrop-blur-md backdrop-filter w-[200px] h-[600px] rounded-l-[30px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
          {/* Left panel content */}
        </div>

        {/* Main Content Box (Middle Box) */}
        <div className="relative">
          {/* Box at the top of the middle box with margin at the top */}
          <div className="absolute top-0 inset-x-0 mx-auto p-4 mt-4 opacity-80 backdrop-blur-md backdrop-filter w-[900px] rounded-[10px]"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            {/* Content inside the box at the top */}
          </div>
          <div className="p-8 opacity-30 backdrop-blur-md backdrop-filter w-[1000px] h-[600px] relative rounded-r-[30px]"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            {/* Your content inside the box */}

            {/* Four boxes placed horizontally in the middle with top margin */}
            <div className="flex justify-between mt-8">
              {/* Box 1 */}
              <div className="w-[200px] h-[100px] p-4 opacity-80 backdrop-blur-md backdrop-filter rounded-[15px] mt-20"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                {/* Content inside Box 1 */}
              </div>

              {/* Box 2 */}
              <div className="w-[200px] h-[100px] p-4 opacity-80 backdrop-blur-md backdrop-filter rounded-[15px] mt-20"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                {/* Content inside Box 2 */}
              </div>

              {/* Box 3 */}
              <div className="w-[200px] p-4 opacity-80 backdrop-blur-md backdrop-filter rounded-[15px] mt-20"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                {/* Content inside Box 3 */}
              </div>

              {/* Box 4 */}
              <div className="w-[200px] p-4 opacity-90 backdrop-blur-md backdrop-filter rounded-[15px] mt-20"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                {/* Content inside Box 4 */}
              </div>
            </div>

          </div>
          

          {/* Box at the bottom of the middle box */}
          <div className="absolute bottom-0 inset-x-0 mx-auto p-4 opacity-60 backdrop-blur-md backdrop-filter w-[950px] h-[350px] rounded-[15px] mt-20"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            {/* Content inside the box at the bottom */}
          </div>
        </div>
        

      </div>

      {/* Box below the three boxes with some distance */}
      <div className="mt-8 mb-8 p-8 opacity-50 backdrop-blur-md backdrop-filter w-[1200px] h-[10px] rounded-[15px]"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
          {/* Box inside the box below the three boxes and positioned horizontally at the left */}
        <div className=" absolute left-0 top-0 w-[150px] h-[40px] p-4 opacity-70 backdrop-blur-md backdrop-filter rounded-[15px] mt-3"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
          {/* Content inside the box inside the box below the three boxes */}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[500px] h-[40px] p-4 opacity-80 backdrop-blur-md backdrop-filter rounded-[15px]"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
      {/* Content inside the centered box */}
    </div>
  </div>
  <div className="absolute right-0 top-0 flex">
    {/* Box 1 on the right */}
    <div className="w-[100px] h-[40px] p-4 opacity-70 backdrop-blur-md backdrop-filter rounded-[15px] mt-3 ml-4"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
      {/* Content inside Box 1 on the right */}
    </div>

    {/* Box 2 on the right */}
    <div className="w-[45px] h-[40px] p-4 opacity-70 backdrop-blur-md backdrop-filter rounded-full mt-3 ml-4"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
      {/* Content inside Box 2 on the right */}
    </div>
  </div>
          
        {/* Content inside the box below the three boxes */}
        
      </div>
      
    </div>
  );
}

export default Home;
