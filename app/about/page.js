export default function About() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About OCTR Technologies</h1>
          <p className="text-xl">Decarbonizing the built environment through AI-powered building optimization</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">To decarbonize the built environment through autonomous AI-powered building optimization. We believe that intelligent buildings can operate sustainably and profitably—simultaneously.</p>

          <h2 className="text-4xl font-bold mb-8 mt-16">Impact by Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-600">50+</p>
              <p className="text-gray-600">Buildings Optimized</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-600">2.5M</p>
              <p className="text-gray-600">MWh Saved</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-600">$15M+</p>
              <p className="text-gray-600">Operating Costs Reduced</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-600">4</p>
              <p className="text-gray-600">Continents</p>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-8 mt-16">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-xl font-bold mb-2">Byunggu Yoo</h3>
              <p className="text-teal-600 font-semibold mb-2">CEO</p>
              <p className="text-sm text-gray-600">M.S. Real Estate Development, Columbia University</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-xl font-bold mb-2">Hassan Imran</h3>
              <p className="text-teal-600 font-semibold mb-2">CTO</p>
              <p className="text-sm text-gray-600">Ph.D. Engineering, University of Cambridge</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-xl font-bold mb-2">Yeongho Lee</h3>
              <p className="text-teal-600 font-semibold mb-2">Engineering Lead</p>
              <p className="text-sm text-gray-600">Ph.D. Mechanical Engineering, Seoul National University</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-xl font-bold mb-2">Joshua Han</h3>
              <p className="text-teal-600 font-semibold mb-2">Operations Lead</p>
              <p className="text-sm text-gray-600">B.Sc. Management, University of Manchester</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
