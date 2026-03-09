import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'deepalirole2004@gmail.com',
      href: 'mailto:deepalirole2004@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/deepalirole',
      href: 'https://github.com/deepalirole',
      color: 'text-gray-400'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/deepali-role-782918249',
      href: 'https://www.linkedin.com/in/deepali-role-782918249/',
      color: 'text-blue-600'
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Let's connect and discuss opportunities in AI, Machine Learning, and Data Science
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.label !== 'Email' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <div className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform duration-200`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Message Form */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault()
              window.location.href = 'mailto:deepalirole2004@gmail.com'
            }}>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-gray-700 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in hearing about new opportunities, exciting projects, or collaborations in the AI/ML space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:deepalirole2004@gmail.com"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/deepalirole"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
