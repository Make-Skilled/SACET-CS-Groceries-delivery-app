const LandingPage = () => {
    const features = [
      { emoji: "⏰", title: "Quick Delivery", description: "Get your groceries in under 2 hours" },
      { emoji: "⭐", title: "Premium Quality", description: "Hand-picked fresh products" },
      { emoji: "🛒", title: "Easy Shopping", description: "User-friendly mobile app" },
      { emoji: "🚚", title: "Live Tracking", description: "Track your order in real-time" }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://th.bing.com/th/id/OIP.cQPFq227Zymr4GDwmhHx7QHaEK?w=294&h=180&c=7&r=0&o=5&pid=1.7" 
              alt="Fresh Groceries"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white p-6 max-w-2xl">
                <h1 className="text-5xl font-bold mb-6">Fresh Groceries Delivered</h1>
                <p className="text-2xl">Get farm-fresh produce and groceries delivered to your doorstep</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-green-500 mb-4 text-3xl font-bold">{feature.emoji}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="bg-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Shopping Now</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get fresh groceries delivered to your doorstep. Download our app today!
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Download App
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
  
        {/* Contact Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>📞</span>
              <span>Need help? Call us at 1-800-GROCERY</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LandingPage;