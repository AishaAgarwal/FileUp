import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image src="/hall5.jpg" alt="background image" fill className="h-screen w-screen object-cover" />
      </div>
      <div className="flex z-10">

        {/* Left Panel */}
        <div className="p-8 opacity-70 backdrop-blur-md backdrop-filter w-[200px] h-[500px] rounded-l-[30px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
          {/* Left panel content */}
        </div>

        {/* Main Content Box (Middle Box) */}
        <div className="p-8 opacity-30 backdrop-blur-md backdrop-filter w-[800px] h-[500px] relative"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
          {/* Your content inside the box */}
          <h1 className="text-2xl font-bold text-white">Box Content</h1>
          <p className="mt-4 text-sm text-white">lorem ipsom Box Content</p>
        </div>

        {/* Right Panel */}
        <div className="p-8 opacity-70 backdrop-blur-md backdrop-filter w-[200px] h-[500px] rounded-r-[30px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
          {/* Right panel content */}
        </div>
      </div>
    </div>
  );
}
