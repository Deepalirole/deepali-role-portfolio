const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed text-justify">
              I am an AI Engineer with proven expertise in developing intelligent systems that solve complex business problems. My technical foundation in machine learning, data analysis, and artificial intelligence enables me to deliver impactful solutions that drive measurable results.
            </p>
            
            <p className="text-lg text-gray-200 leading-relaxed text-justify">
              With advanced proficiency in Python, machine learning frameworks, and data analytics, I specialize in building production-ready predictive models, natural language processing systems, and computer vision applications. I excel at integrating traditional ML techniques with cutting-edge generative AI technologies to create comprehensive AI solutions.
            </p>
            
            <p className="text-lg text-gray-200 leading-relaxed text-justify">
              My portfolio includes successful implementations of customer churn prediction models achieving 87% accuracy, face recognition systems for automated attendance, and interactive business intelligence dashboards that transform raw data into actionable insights. I am committed to leveraging data-driven decision making to solve real-world challenges and deliver measurable business value.
            </p>
          </div>
          
          <div className="bg-gray-700/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">Core Focus Areas</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Machine Learning</h4>
                  <p className="text-gray-400 text-sm">Building predictive models and classification systems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Natural Language Processing</h4>
                  <p className="text-gray-400 text-sm">Text analysis, sentiment analysis, and language models</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Computer Vision</h4>
                  <p className="text-gray-400 text-sm">Image processing and facial recognition systems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Data Analytics</h4>
                  <p className="text-gray-400 text-sm">Business intelligence and data visualization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">AI Automation</h4>
                  <p className="text-gray-400 text-sm">Building automated workflows and AI integrations for efficient data and business processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
