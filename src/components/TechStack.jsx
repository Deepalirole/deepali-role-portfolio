import { 
  FaCode, FaBrain, FaRobot, FaPython, FaDatabase, FaGit, 
  FaGithub, FaPlug, FaChartBar, FaChartLine, FaCogs
} from 'react-icons/fa'
import { 
  SiTensorflow, SiPytorch, SiMongodb, SiMysql,
  SiPandas, SiNumpy, SiScikitlearn, SiHuggingface
} from 'react-icons/si'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const TechStack = () => {
  const containerRef = useRef(null)
  
  const capabilities = {
    'ML & Deep Learning': [
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'Deep Learning', icon: FaBrain, color: '#8B5CF6' }
    ],
    'NLP & LLMs': [
      { name: 'HuggingFace', icon: SiHuggingface, color: '#FFD21E' },
      { name: 'LangChain', icon: FaCogs, color: '#00A67E' },
      { name: 'LLM', icon: FaRobot, color: '#6366F1' }
    ],
    'Data Science & Visualization': [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Matplotlib', icon: FaChartBar, color: '#11557C' },
      { name: 'Seaborn', icon: FaChartLine, color: '#4C72B0' }
    ],
    'Data Analytics': [
      { name: 'SQL', icon: FaDatabase, color: '#336791' },
      { name: 'Power BI', icon: FaChartBar, color: '#F2C811' },
      { name: 'Tableau', icon: FaChartBar, color: '#E97627' },
      { name: 'Excel', icon: FaChartLine, color: '#217346' },
      { name: 'Business Analytics', icon: FaChartLine, color: '#6366F1' }
    ],
    'Automation & Integrations': [
      { name: 'n8n', icon: FaCogs, color: '#FF6D00' },
      { name: 'API Integration', icon: FaPlug, color: '#6366F1' },
      { name: 'Prompt Engineering', icon: FaBrain, color: '#8B5CF6' }
    ],
    'Databases': [
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Supabase', icon: FaDatabase, color: '#00C389' }
    ],
    'Development Tools': [
      { name: 'Git', icon: FaGit, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' }
    ]
  }

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-12">

          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <FaCode className="w-3 h-3 text-blue-400" />
            <span className="text-blue-300 text-xs font-medium">
              Technical Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
            Technologies and frameworks I use to build AI systems, data pipelines, and analytics solutions.
          </p>

        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-10">
            
            {/* ML & Deep Learning */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                ML & Deep Learning
              </h3>
              <div className="flex flex-wrap gap-3">
                {capabilities['ML & Deep Learning'].map((skill, index) => (
                  <motion.div
                    key={index}
                    drag
                    dragElastic={0.2}
                    dragConstraints={containerRef}
                    dragSnapToOrigin
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${skill.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileDrag={{ 
                      scale: 1.15,
                      rotate: 2,
                      cursor: 'grabbing',
                      transition: { duration: 0.1 }
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-200 hover:border-opacity-60 cursor-grab"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}40`,
                      borderWidth: '1px',
                      borderStyle: 'solid'
                    }}
                  >
                    <skill.icon 
                      className="w-4 h-4 flex-shrink-0" 
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data Science & Visualization */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Data Science & Visualization
              </h3>
              <div className="flex flex-wrap gap-3">
                {capabilities['Data Science & Visualization'].map((skill, index) => (
                  <motion.div
                    key={index}
                    drag
                    dragElastic={0.2}
                    dragConstraints={containerRef}
                    dragSnapToOrigin
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${skill.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileDrag={{ 
                      scale: 1.15,
                      rotate: 2,
                      cursor: 'grabbing',
                      transition: { duration: 0.1 }
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-200 hover:border-opacity-60 cursor-grab"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}40`,
                      borderWidth: '1px',
                      borderStyle: 'solid'
                    }}
                  >
                    <skill.icon 
                      className="w-4 h-4 flex-shrink-0" 
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Automation & Integrations */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Automation & Integrations
              </h3>
              <div className="flex flex-wrap gap-3">
                {capabilities['Automation & Integrations'].map((skill, index) => (
                  <motion.div
                    key={index}
                    drag
                    dragElastic={0.2}
                    dragConstraints={containerRef}
                    dragSnapToOrigin
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${skill.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileDrag={{ 
                      scale: 1.15,
                      rotate: 2,
                      cursor: 'grabbing',
                      transition: { duration: 0.1 }
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-200 hover:border-opacity-60 cursor-grab"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}40`,
                      borderWidth: '1px',
                      borderStyle: 'solid'
                    }}
                  >
                    <skill.icon 
                      className="w-4 h-4 flex-shrink-0" 
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Development Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {capabilities['Development Tools'].map((skill, index) => (
                  <motion.div
                    key={index}
                    drag
                    dragElastic={0.2}
                    dragConstraints={containerRef}
                    dragSnapToOrigin
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${skill.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileDrag={{ 
                      scale: 1.15,
                      rotate: 2,
                      cursor: 'grabbing',
                      transition: { duration: 0.1 }
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-200 hover:border-opacity-60 cursor-grab"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}40`,
                      borderWidth: '1px',
                      borderStyle: 'solid'
                    }}
                  >
                    <skill.icon 
                      className="w-4 h-4 flex-shrink-0" 
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10">
            
            {/* NLP & LLMs */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                NLP & LLMs
              </h3>
              <div className="flex flex-wrap gap-3">
                {capabilities['NLP & LLMs'].map((skill, index) => (
                  <motion.div
                    key={index}
                    drag
                    dragElastic={0.2}
                    dragConstraints={containerRef}
                    dragSnapToOrigin
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${skill.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileDrag={{ 
                      scale: 1.15,
                      rotate: 2,
                      cursor: 'grabbing',
                      transition: { duration: 0.1 }
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-200 hover:border-opacity-60 cursor-grab"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}40`,
                      borderWidth: '1px',
                      borderStyle: 'solid'
                    }}
                  >
                    <skill.icon 
                      className="w-4 h-4 flex-shrink-0" 
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data Analytics */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Data Analytics
              </h3>
              <div className="flex flex-wrap gap-3">
                {capabilities['Data Analytics'].map((skill, index) => (
                  <motion.div
                    key={index}
                    drag
                    dragElastic={0.2}
                    dragConstraints={containerRef}
                    dragSnapToOrigin
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${skill.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileDrag={{ 
                      scale: 1.15,
                      rotate: 2,
                      cursor: 'grabbing',
                      transition: { duration: 0.1 }
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-200 hover:border-opacity-60 cursor-grab"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}40`,
                      borderWidth: '1px',
                      borderStyle: 'solid'
                    }}
                  >
                    <skill.icon 
                      className="w-4 h-4 flex-shrink-0" 
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Databases
              </h3>
              <div className="flex flex-wrap gap-3">
                {capabilities['Databases'].map((skill, index) => (
                  <motion.div
                    key={index}
                    drag
                    dragElastic={0.2}
                    dragConstraints={containerRef}
                    dragSnapToOrigin
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${skill.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileDrag={{ 
                      scale: 1.15,
                      rotate: 2,
                      cursor: 'grabbing',
                      transition: { duration: 0.1 }
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-200 hover:border-opacity-60 cursor-grab"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}40`,
                      borderWidth: '1px',
                      borderStyle: 'solid'
                    }}
                  >
                    <skill.icon 
                      className="w-4 h-4 flex-shrink-0" 
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-12 text-center">

          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/40 border border-gray-700/50 rounded-full backdrop-blur-sm">

            <div className="flex -space-x-1">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
            </div>

            <span className="text-gray-300 text-xs">
              Continuously learning & building
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}

export default TechStack