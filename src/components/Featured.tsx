export default function Featured(){
return (
  
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Featured Heading */}
      <div className="text-left mb-6">
        <h2 className="text-red-500 font-semibold text-xl">Featured</h2>
        <h1 className="text-3xl font-bold">New Arrival</h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/images/blackcontroller.jpg"
            alt="PlayStation 5"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">PlayStation 5</h3>
            <p className="text-sm text-gray-600">Pre-order now!</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/images/lady.jpg"
            alt="Women's Collections"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Women's Collections</h3>
            <p className="text-sm text-gray-600">Stylish and trendy.</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/images/soundsystem.jpg"
            alt="Speakers"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Speakers</h3>
            <p className="text-sm text-gray-600">High-quality sound.</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/images/gucci.jpg"
            alt="Perfume"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Perfume</h3>
            <p className="text-sm text-gray-600">Long-lasting fragrance.</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white px-6 py-3 text-lg rounded">
          View All Products
        </button>
      </div>
    </div>
  );
}