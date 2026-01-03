import { Globe, Zap, Users, ArrowRight, CheckCircle, Code, Brain, Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/me_logo.png" alt="Masarany Enterprises Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-gray-900">Masarany Enterprises</span>
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
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  AI-Powered Innovation
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building the Future, One App at a Time
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We craft cutting-edge, AI-enabled applications that transform businesses worldwide.
                Modern solutions that create real impact for clients across the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 group">
                  <span className="font-semibold">Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2">
                  <span className="font-semibold">Explore Services</span>
                </a>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">High Impact</span>
                </div>
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">30+</div>
              <div className="text-gray-400">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge solutions powered by AI and modern technologies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Integration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your business with intelligent automation, machine learning models, and AI-powered insights that drive real results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom AI Models</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Natural Language Processing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Predictive Analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom App Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beautiful, scalable applications built with modern frameworks. Web, mobile, and desktop solutions tailored to your needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Web Applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Mobile Apps (iOS & Android)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cloud Integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end digital transformation services that modernize your operations and accelerate growth in the digital age.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Process Automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Legacy System Modernization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Strategy Consulting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Innovation workspace"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Innovation Meets Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Masarany Enterprises, we believe in the power of technology to transform businesses and lives.
                Our team of expert developers, designers, and AI specialists work together to create solutions
                that are not just functional, but extraordinary.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With clients spanning across continents, we've proven that great ideas combined with cutting-edge
                technology can break boundaries and create lasting impact. Every project we undertake is treated
                as a partnership, ensuring your vision becomes reality.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-lg p-2">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Expert Team</div>
                    <div className="text-sm text-gray-600">Seasoned professionals</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-lg p-2">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Global Presence</div>
                    <div className="text-sm text-gray-600">Worldwide clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Let's build something extraordinary together. Join businesses worldwide who trust
            Masarany Enterprises to bring their vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="mailto:hello@masarany.com" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center space-x-2 font-semibold">
              <span>View Our Work</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/me_logo.png" alt="Masarany Enterprises Logo" className="w-8 h-8" />
                <span className="text-xl font-bold">Masarany Enterprises</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building the future with AI-powered solutions and modern technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">AI Integration</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">App Development</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Digital Transformation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="mailto:hello@masarany.com" className="hover:text-blue-400 transition-colors">hello@masarany.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Masarany Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
