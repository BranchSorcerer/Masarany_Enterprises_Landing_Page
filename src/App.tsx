import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="./me_logo.png" alt="Masarany Enterprises Logo" className="w-10 h-10" />
            <div>
              <div className="text-2xl font-bold text-gray-900">Masarany Enterprises</div>
              <span className="sub-logo">AI & Software Innovation Studio</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Masarany Enterprises
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                AI & Software Innovation Studio
              </h2>
              <p className="hero-sub">
                Building intelligent tools for the next decade.
              </p>
              <p className="hero-description text-lg text-gray-600 leading-relaxed">
                We design, build, and launch modern AI‑powered web applications — including Futuroo, our flagship career discovery platform. Our focus is simple: create intelligent, elegant tools that solve real problems for students, creators, and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="cta-button bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 group">
                  <span className="font-semibold">Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl transform rotate-3 opacity-10"></div>
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
          </div>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="service bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI‑Powered Web Applications</h3>
              <p className="text-gray-600 leading-relaxed">
                We build intelligent apps that leverage machine learning, natural language processing, and automation to deliver real value. From recommendation engines to AI‑assisted workflows, we create tools that think with you.
              </p>
            </div>

            <div className="service bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Software & MVP Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Have an idea? We turn concepts into fully functional products. Fast, modern, scalable — perfect for founders, startups, and teams who need to launch quickly and iterate.
              </p>
            </div>

            <div className="service bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboards, Analytics & Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                We design dashboards, internal tools, and automation systems that streamline operations and help teams work smarter. Data‑driven, user‑friendly, and built for growth.
              </p>
            </div>

            <div className="service bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Strategy & Technical Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Not sure where to start? We help you define your product, choose the right technologies, and build a roadmap that aligns with your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            About Us
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Masarany Enterprises is a small, focused studio dedicated to building intelligent digital products. We combine modern engineering, thoughtful design, and AI‑driven capabilities to create tools that are fast, scalable, and genuinely useful.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to turn ideas into real, working products — from concept to deployment. Whether it's a student‑facing platform like Futuroo or a custom tool for a growing business, we build with clarity, purpose, and long‑term vision.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Have a project in mind or want to collaborate?
          </p>
          <p className="text-lg text-gray-600">
            Email us at: <strong>masaranyenterprises@gmail.com</strong>
          </p>
          <a href="mailto:masaranyenterprises@gmail.com" className="cta-button bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:scale-105 inline-flex items-center justify-center space-x-2 font-semibold">
            <span>Send an Email</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 text-center space-y-4">
        <p className="text-xl font-bold">Masarany Enterprises</p>
        <p className="text-gray-400">AI & Software Innovation Studio</p>
        <p className="text-gray-400">Building intelligent tools for the next decade.</p>
        <p className="text-gray-400">📧 masaranyenterprises@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
