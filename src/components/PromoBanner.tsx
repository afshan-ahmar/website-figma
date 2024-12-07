export default function PromoBanner() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-2 space-y-8 md:space-y-0">
        {/* Text Content */}
        <div className="max-w-lg">
          <p className="text-green-400 font-semibold mb-2">Categories</p>
          <h1 className="text-4xl font-bold leading-tight">
            Enhance Your Music Experience
          </h1>
          <div className="flex space-x-4 mt-6">
            <div className="text-center">
              <span className="text-3xl font-bold">23</span>
              <p className="text-sm">Hours</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">05</span>
              <p className="text-sm">Days</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">59</span>
              <p className="text-sm">Minutes</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">35</span>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded">
            Buy Now!
          </button>
        </div>
  
        {/* Product Image */}
        <div className="w-full md:w-1/3 mr-[60px]">
          <img
            src="/images/soundsystem.jpg"
            alt="JBL Speaker"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    );
  }