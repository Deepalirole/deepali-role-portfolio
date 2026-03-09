import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Machine learning model predicting customer churn using Random Forest and Logistic Regression with 87% accuracy.',
      tech: ['Python', 'Scikit-learn', 'SQL', 'Power BI'],
      github: 'https://github.com/deepalirole/customer-churn-prediction',
      featured: true
    },
    {
      title: 'Fake Review Detection System',
      description: 'NLP-based classification model to detect fake product reviews using TF-IDF and machine learning models.',
      tech: ['Python', 'NLP', 'Scikit-learn'],
      github: 'https://github.com/deepalirole/fake-review-detection',
      featured: true
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'Computer vision system that automatically marks attendance using OpenCV with real-time face detection.',
      tech: ['Python', 'OpenCV'],
      github: 'https://github.com/Deepalirole/REAL-TIME-ATTENDANCE-AUTOMATION-SYSTEM',
      featured: false
    },
    {
      title: 'Retail Management',
      description: 'Comprehensive retail management system with inventory tracking, sales analytics, and customer management features.',
      tech: ['n8n', 'Automation'],
      github: 'https://github.com/Deepalirole/Retail-Management',
      featured: false
    }
  ]

  const getTechColor = (tech) => {
    const colors = {
      'Python': 'bg-blue-600',
      'Scikit-learn': 'bg-orange-600',
      'SQL': 'bg-blue-500',
      'Power BI': 'bg-yellow-600',
      'NLP': 'bg-green-600',
      'OpenCV': 'bg-green-500',
      'Data Analytics': 'bg-indigo-600',
      'n8n': 'bg-orange-500',
      'Automation': 'bg-purple-600'
    }
    return colors[tech] || 'bg-gray-600'
  }

  return (
    <section id="projects" className="section-padding bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my machine learning and AI projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden card-hover backdrop-blur-sm ${
                project.featured ? 'ring-2 ring-blue-500/50' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 text-center">
                  Featured Project
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 ${getTechColor(tech)} text-white text-sm rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/deepalirole"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
