


const products = [
    { id: 1, name: 'Canon DSLR Camera', price: '$599', image: '/images/camera.jpg' },
    { id: 2, name: 'Gaming Laptop', price: '$1099', image: '/images/laptop.jpg' },
    { id: 3, name: 'Creative Speakers', price: '$199', image: '/images/stereo2.jpg' },
    { id: 4, name: 'Winter Jacket', price: '$149', image: '/images/pinkjacket.jpg' },
    { id: 5, name: 'Electric Car', price: '$99', image: '/images/cart.png' },
    { id: 6, name: 'Soccer Cleats', price: '$49', image: '/images/Cart (1).png' },
  ];
  
  export default function ProductGrid() {
    return (
      <section className="py-10">
        <h3 className="text-center text-3xl font-bold mb-6">Explore Our Products</h3>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t" />
              <div className="p-4">
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p className="text-gray-700">{product.price}</p>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }