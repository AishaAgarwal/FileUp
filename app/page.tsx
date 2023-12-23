import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image src="/hall5.jpg" alt="background image" fill className="h-screen w-screen object-cover" />
      </div>
      <div className="flex z-10">

        {/* Left Panel */}
        <div className="p-8 opacity-70 backdrop-blur-md backdrop-filter w-[200px] h-[600px] rounded-l-[30px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
          {/* Left panel content */}
        </div>

        {/* Main Content Box (Middle Box) */}
        <div className="relative">
          {/* Box at the top of the middle box with margin at the top */}
          <div className="absolute top-0 inset-x-0 mx-auto p-4 mt-4 opacity-80 backdrop-blur-md backdrop-filter w-[750px] rounded-[10px]"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            {/* Content inside the box at the top */}
          </div>
          <div className="p-8 opacity-50 backdrop-blur-md backdrop-filter w-[800px] h-[600px] relative"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            {/* Your content inside the box */}
            {/* <h1 className="text-2xl font-bold text-white">Box Content</h1>
            <p className="mt-4 text-sm text-white">lorem ipsom Box Content</p> */}

            {/* Four boxes placed horizontally in the middle */}
            <div className="flex justify-between mt-8">
              {/* Box 1 */}
              <div className="w-[150px] h-[150px] p-4 opacity-80 backdrop-blur-md backdrop-filter rounded-[15px]"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                {/* Content inside Box 1 */}
              </div>

              {/* Box 2 */}
              <div className="w-[150px] p-4 opacity-80 backdrop-blur-md backdrop-filter rounded-[15px]"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                {/* Content inside Box 2 */}
              </div>

              {/* Box 3 */}
              <div className="w-[150px] p-4 opacity-80 backdrop-blur-md backdrop-filter rounded-[15px]"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                {/* Content inside Box 3 */}
              </div>

              {/* Box 4 */}
              <div className="w-[150px] p-4 opacity-80 backdrop-blur-md backdrop-filter rounded-[15px]"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                {/* Content inside Box 4 */}
              </div>
            </div>

          </div>

          {/* Box at the bottom of the middle box */}
          <div className="absolute bottom-0 inset-x-0 mx-auto p-4 opacity-80 backdrop-blur-md backdrop-filter w-[750px] h-[350px] rounded-[15px]"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            {/* Content inside the box at the bottom */}
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-8 opacity-70 backdrop-blur-md backdrop-filter w-[200px] h-[600px] rounded-r-[30px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
          {/* Right panel content */}
        </div>
      </div>
    </div>
  );
}
