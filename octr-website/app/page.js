export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-32 text-center">
        <h1 className="text-5xl font-bold mb-4">Buildings That Optimize Themselves</h1>
        <p className="text-xl mb-8">15-30% energy savings with AI-powered autonomous HVAC optimization. Zero capital investment.</p>
        <a href="/contact" className="inline-block bg-white text-teal-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
          Schedule Demo
        </a>
      </section>

      {/* Why OCTR Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why OCTR?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded shadow">
              <h3 className="text-2xl font-bold text-teal-600 mb-3">15-30% Energy Savings</h3>
              <p className="text-gray-600">Proven autonomous optimization reduces energy costs without capital investment.</p>
            </div>
            <div className="bg-white p-8 rounded shadow">
              <h3 className="text-2xl font-bold text-teal-600 mb-3">Immediate ROI</h3>
              <p className="text-gray-600">Payback period of 6-18 months. Positive cash flow from day one.</p>
            </div>
            <div className="bg-white p-8 rounded shadow">
              <h3 className="text-2xl font-bold text-teal-600 mb-3">Physics-Informed AI</h3>
              <p className="text-gray-600">Combined with machine learning for explainable, trustworthy decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded shadow border-l-4 border-teal-600">
              <h3 className="text-xl font-bold mb-3">HVAC Energy Optimizer</h3>
              <p className="text-gray-600 mb-4">Autonomous HVAC control using reinforcement learning and physics-informed neural networks.</p>
              <p className="text-3xl font-bold text-teal-600">10-30% Savings</p>
            </div>
            <div className="bg-white p-8 rounded shadow border-l-4 border-teal-600">
              <h3 className="text-xl font-bold mb-3">AloT Sensor Network</h3>
              <p className="text-gray-600 mb-4">Multi-physics sensors for buildings with incomplete BAS coverage.</p>
              <p className="text-3xl font-bold text-teal-600">15-25% Savings</p>
            </div>
            <div className="bg-white p-8 rounded shadow border-l-4 border-teal-600">
              <h3 className="text-xl font-bold mb-3">ESG Asset Management</h3>
              <p className="text-gray-600 mb-4">Unified carbon accounting and compliance reporting for investors.</p>
              <p className="text-3xl font-bold text-teal-600">Custom ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Buildings?</h2>
        <a href="/contact" className="inline-block bg-white text-teal-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
          Schedule a Demo
        </a>
      </section>
    </main>
  )
}
