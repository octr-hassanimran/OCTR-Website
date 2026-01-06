'use client';

import { FiCheck } from 'react-icons/fi';

export default function Solutions() {
  return (
    <main className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Solutions</h1>
          <p className="text-xl opacity-95">
            Three integrated products. One unified AI platform for autonomous building optimization.
          </p>
        </div>
      </section>

      {/* HVAC Energy Optimizer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">HVAC Energy Optimizer</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our flagship product uses reinforcement learning combined with physics-informed neural networks
              to autonomously control your HVAC system in real-time.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              It learns your building’s unique thermal behavior and continuously optimizes setpoints,
              schedules, and equipment operation to minimize energy while maintaining comfort.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>10-30% HVAC energy savings without capital investment</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Works with existing BAS (BACnet, Modbus, OPC-UA)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Maintains comfort within ±0.5°C</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Optimizes 20+ control strategies (OSS, TSM, pressure reset, staging, etc.)</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Typical Impact</h3>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-teal-600">20%</p>
                <p className="text-gray-600 text-sm">Average energy savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">7-12M</p>
                <p className="text-gray-600 text-sm">Payback period</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">24/7</p>
                <p className="text-gray-600 text-sm">Autonomous optimization</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-teal-600">0</p>
                <p className="text-gray-600 text-sm">CapEx required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AloT Sensor Network */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-10 rounded-2xl shadow-lg order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">What It Measures</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Temperature & humidity</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>CO₂ & indoor air quality</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Occupancy & motion</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Equipment vibration, current, and power</span>
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>15-25% additional energy savings on top of HVAC optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Predictive maintenance and fault detection</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Improved comfort and indoor air quality for occupants</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">AloT Sensor Network</h2>
            <p className="text-lg text-gray-700 mb-4">
              For buildings with incomplete or outdated BAS coverage, our AloT network fills the gaps with
              wireless, battery-powered sensors and edge intelligence.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The network streams real-time data to the OCTR platform, enabling deeper optimization,
              better comfort, and predictive maintenance across your portfolio.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Wireless mesh network, no rewiring required</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>5+ year battery life per sensor</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Local edge processing, cloud learning</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ESG Asset Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">ESG Asset Management Platform</h2>
            <p className="text-lg text-gray-700 mb-4">
              A unified dashboard for energy, carbon, and ESG performance across your real estate portfolio.
              Designed for asset managers, REITs, and institutional investors.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The platform aggregates data from all your buildings and automatically generates investor-ready reports,
              decarbonization roadmaps, and compliance evidence.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Automated carbon accounting (Scope 1 & 2)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>ESG dashboards for asset and portfolio level</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Compliance evidence for LEED, WELL, and other certifications</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Support for green financing and sustainability-linked loans</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Who It’s For</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Real estate asset managers</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>REITs and property funds</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Corporate sustainability and ESG teams</span>
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Outcomes</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Transparent ESG performance for investors</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Higher asset valuations through decarbonization</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-teal-600 mt-1" />
                <span>Data-driven net-zero roadmaps</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">See All Three in Action</h2>
          <p className="text-xl mb-8 opacity-95">
            Book a live demo to see how HVAC optimization, sensors, and ESG management work together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Schedule a Demo
          </a>
        </div>
      </section>
    </main>
  );
}
