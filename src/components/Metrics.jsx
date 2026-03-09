import { 
  FaProjectDiagram, FaBrain, FaChartLine, FaAward, FaFolder,
  FaBullseye, FaNetworkWired, FaMedal
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Metrics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const metrics = [
    {
      icon: FaFolder,
      value: 6,
      suffix: '+',
      label: 'AI & Data Projects',
      description: 'Real-world machine learning and analytics projects',
      color: '#3B82F6'
    },
    {
      icon: FaBrain,
      value: 4,
      suffix: '',
      label: 'ML Models Built',
      description: 'Classification and predictive models',
      color: '#8B5CF6'
    },
    {
      icon: FaBullseye,
      value: 87,
      suffix: '%',
      label: 'Best Model Accuracy',
      description: 'Achieved on customer churn prediction model',
      color: '#10B981'
    },
    {
      icon: FaMedal,
      value: 5,
      suffix: '+',
      label: 'Certifications',
      description: 'AI, data analytics, and BI certifications',
      color: '#F59E0B'
    },
    {
      icon: FaNetworkWired,
      value: 5,
      suffix: '+',
      label: 'AI Domains Explored',
      description: 'Machine Learning, NLP, Generative AI, Data Analytics, Automation',
      color: '#EC4899'
    }
  ]

  const certifications = [
    {
      organization: 'TCS',
      color: '#FF6B00',
      title: 'GenAI Powered Data Analytics Job Simulation'
    },
    {
      organization: 'NPTEL',
      color: '#FF6F00',
      title: 'Data Analytics with Python'
    },
    {
      organization: 'IBM',
      color: '#054ADA',
      title: 'Machine Learning'
    },
    {
      organization: 'LinkedIn Learning',
      color: '#0A66C2',
      title: 'Advanced Power BI (DAX)'
    },
    {
      organization: 'Academic Excellence',
      color: '#8B5CF6',
      title: 'Academic Excellence Award – 2025'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-16 bg-gray-800/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">ML Metrics & Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Quantifying my journey in machine learning and AI
          </p>
        </div>
        
        {/* AI Focus Areas */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-3 bg-gray-800/60 border border-gray-700/50 rounded-full backdrop-blur-sm">
            <span className="text-gray-400 text-sm font-medium">AI Focus Areas</span>
            <div className="w-1 h-4 bg-gray-600"></div>
            <span className="text-blue-400 text-sm">Machine Learning</span>
            <span className="text-gray-500">•</span>
            <span className="text-purple-400 text-sm">NLP</span>
            <span className="text-gray-500">•</span>
            <span className="text-pink-400 text-sm">Generative AI</span>
            <span className="text-gray-500">•</span>
            <span className="text-green-400 text-sm">Data Analytics</span>
            <span className="text-gray-500">•</span>
            <span className="text-orange-400 text-sm">Automation</span>
          </div>
        </div>
        
        {/* Enhanced Metrics Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 10px 30px ${metric.color}20`,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800/60 rounded-xl p-6 text-center border border-gray-700/50 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${metric.color}10 0%, transparent 100%)`
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="mb-4 flex justify-center"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <metric.icon 
                    className="w-8 h-8 transition-colors duration-300"
                    style={{ color: metric.color }}
                  />
                </motion.div>
                
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {inView && (
                    <CountUp 
                      end={metric.value} 
                      duration={2}
                      suffix={metric.suffix}
                    />
                  )}
                </div>
                
                <div className="text-sm font-semibold text-gray-300 mb-2">
                  {metric.label}
                </div>
                
                <div className="text-xs text-gray-400 leading-relaxed">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-800/40 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Achievements & Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              >
                <div 
                  className="px-3 py-1 rounded-full text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: cert.color }}
                >
                  {cert.organization}
                </div>
                <span className="text-gray-300 text-sm">{cert.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Metrics
