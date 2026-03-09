import { FaCalendarAlt, FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'GenAI Engineer Intern',
      company: 'Vyaas AI',
      period: '',
      description: 'Worked on LLM-based AI agents and workflow automation systems. Developed and implemented generative AI solutions for enterprise clients.',
      achievements: [
        'Built AI agents using large language models',
        'Implemented workflow automation systems',
        'Optimized model performance and response times'
      ],
      link: '/Deepali_Experience_Certificate.pdf'
    },
    {
      title: 'Data Analyst Intern',
      company: 'Syscorp Technology',
      period: '',
      description: 'Performed SQL analysis and developed dashboards for business insights. Created data visualizations and reports for stakeholders.',
      achievements: [
        'Developed interactive Power BI dashboards',
        'Performed complex SQL queries and data analysis',
        'Created automated reporting systems'
      ],
      link: 'https://syscorp.in/'
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey in AI and data analytics
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl border border-gray-700 p-8 card-hover backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <FaBuilding className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    {exp.period && (
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {exp.link && (
                  <a
                    href={exp.link}
                    target={exp.link.includes('http') ? '_blank' : '_self'}
                    rel={exp.link.includes('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>{exp.link.includes('http') ? 'Company' : 'Experience Certificate'}</span>
                  </a>
                )}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">Open to Opportunities</h3>
            <p className="text-gray-300 mb-4">
              I'm actively seeking full-time opportunities in AI/ML Engineering, Data Science, or related roles where I can apply my skills to solve challenging problems.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:deepalirole2004@gmail.com"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
