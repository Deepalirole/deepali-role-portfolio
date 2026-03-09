import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaProjectDiagram, FaBrain, FaAward } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import NeuralBackground from './NeuralBackground'

const Hero = () => {


  
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Deepali_Role_Resume.pdf'
    link.download = 'Deepali_Role_Resume.pdf'
    link.click()
  }

  const techStack = ['Python', 'TensorFlow', 'PyTorch', 'Power BI', 'LangChain']

  const quickStats = [
    { icon: FaProjectDiagram, value: '6+', label: 'AI Projects' },
    { icon: FaBrain, value: '4', label: 'ML Models' },
    { icon: FaAward, value: '5+', label: 'Certifications' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Neural Network Background */}
      <NeuralBackground />
    
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-100">
              Deepali Role
            </h1>

            {/* Typing Animation */}
            <div className="text-2xl sm:text-3xl font-semibold mb-6 gradient-text">

              <TypeAnimation
                sequence={[
                  "AI Engineer",
                  2000,
                  "Machine Learning Engineer",
                  2000,
                  "Generative AI Developer",
                  2000,
                  "Data Analytics Specialist",
                  2000
                ]}
                speed={50}
                repeat={Infinity}
              />

            </div>

            {/* Description */}
            <p className="text-lg text-gray-100 mb-8 max-w-xl leading-relaxed">
              AI Engineer specializing in Machine Learning, NLP, and Generative AI.
              I build intelligent systems, predictive models, and data-driven solutions.
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">

              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-xs text-gray-100 font-medium"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">

              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg"
              >
                View Projects
              </motion.button>

              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold flex items-center gap-2 justify-center"
              >
                <FaDownload />
                Download Resume
              </motion.button>

            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

              {quickStats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-purple-500/30 rounded-lg"
                >
                  <stat.icon className="text-purple-400" />

                  <div>
                    <div className="text-white font-bold text-sm">{stat.value}</div>
                    <div className="text-gray-200 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}

            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">

              <a
                href="https://github.com/deepalirole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaGithub size={26} />
              </a>

              <a
                href="https://www.linkedin.com/in/deepali-role-782918249/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaLinkedin size={26} />
              </a>

            </div>

          </motion.div>


          {/* RIGHT SIDE - NEURAL NETWORK VISUALIZATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-96 h-96">
              
              {/* Neural Network Container */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Central Node */}
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="8"
                  fill="url(#lineGradient)"
                  filter="url(#glow)"
                  animate={{
                    r: [8, 10, 8],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Primary Nodes */}
                {[
                  { x: 25, y: 25 },
                  { x: 75, y: 25 },
                  { x: 25, y: 75 },
                  { x: 75, y: 75 }
                ].map((node, index) => (
                  <g key={index}>
                    <motion.circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r="5"
                      fill="#3B82F6"
                      animate={{
                        r: [5, 6, 5],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2 + index * 0.5,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <motion.circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r="3"
                      fill="#ffffff"
                      animate={{
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 2 + index * 0.5,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </g>
                ))}
                
                {/* Secondary Nodes */}
                {[
                  { x: 35, y: 40 },
                  { x: 65, y: 40 },
                  { x: 35, y: 60 },
                  { x: 65, y: 60 }
                ].map((node, index) => (
                  <motion.circle
                    key={`secondary-${index}`}
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="3"
                    fill="#8B5CF6"
                    animate={{
                      r: [3, 4, 3],
                      opacity: [0.5, 0.9, 0.5]
                    }}
                    transition={{
                      duration: 2.5 + index * 0.3,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  />
                ))}
                
                {/* Connecting Lines */}
                {[
                  { x1: 50, y1: 50, x2: 25, y2: 25 },
                  { x1: 50, y1: 50, x2: 75, y2: 25 },
                  { x1: 50, y1: 50, x2: 25, y2: 75 },
                  { x1: 50, y1: 50, x2: 75, y2: 75 },
                  { x1: 25, y1: 25, x2: 75, y2: 75 },
                  { x1: 75, y1: 25, x2: 75, y2: 75 },
                  { x1: 25, y1: 75, x2: 75, y2: 75 },
                  { x1: 50, y1: 50, x2: 35, y2: 40 },
                  { x1: 50, y1: 50, x2: 65, y2: 40 },
                  { x1: 50, y1: 50, x2: 35, y2: 60 },
                  { x1: 50, y1: 50, x2: 65, y2: 60 },
                  { x1: 50, y1: 50, x2: 35, y2: 40 },
                  { x1: 50, y1: 50, x2: 65, y2: 60 }
                ].map((line, index) => (
                  <motion.line
                    key={`line-${index}`}
                    x1={`${line.x1}%`}
                    y1={`${line.y1}%`}
                    x2={`${line.x2}%`}
                    y2={`${line.y2}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    opacity="0.6"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      strokeWidth: [1.5, 2, 1.5]
                    }}
                    transition={{
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      delay: index * 0.1
                    }}
                  />
                ))}
                
                {/* Floating Tech Icons */}
                {techStack.slice(0, 4).map((tech, index) => (
                  <motion.g
                    key={tech}
                    style={{
                      transform: `translate(${50 + (index % 2 === 0 ? -30 : 30)}%, ${20 + index * 15}%)`
                    }}
                  >
                    <motion.circle
                      r="20"
                      fill="#1F2937"
                      stroke="#374151"
                      strokeWidth="2"
                      animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#ffffff"
                      fontSize="8"
                      fontWeight="bold"
                    >
                      {tech.slice(0, 3).toUpperCase()}
                    </text>
                  </motion.g>
                ))}
              </svg>
              
              {/* Floating Particles */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>

        </div>


        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <FaArrowDown size={24} />
        </motion.div>

      </div>

    </section>
  )
}

export default Hero