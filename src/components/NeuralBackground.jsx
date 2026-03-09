import { useCallback, useEffect, useRef, useState } from 'react'
import Particles from '@tsparticles/react'
import { loadFull } from 'tsparticles'

const NeuralBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    // Custom initialization when particles are loaded
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const handleClick = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const clickY = e.clientY - rect.top
        
        // Create pulse effect at click position
        createPulseEffect(clickX, clickY)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('click', handleClick)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('click', handleClick)
      }
    }
  }, [])

  const createPulseEffect = (x, y) => {
    // Create a temporary pulse effect
    const pulse = document.createElement('div')
    pulse.style.position = 'absolute'
    pulse.style.left = `${x}px`
    pulse.style.top = `${y}px`
    pulse.style.width = '20px'
    pulse.style.height = '20px'
    pulse.style.borderRadius = '50%'
    pulse.style.border = '2px solid #3B82F6'
    pulse.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'
    pulse.style.transform = 'translate(-50%, -50%)'
    pulse.style.pointerEvents = 'none'
    pulse.style.zIndex = '1000'
    pulse.style.animation = 'pulse 0.6s ease-out'
    
    if (containerRef.current) {
      containerRef.current.appendChild(pulse)
      setTimeout(() => {
        if (pulse.parentNode) {
          pulse.parentNode.removeChild(pulse)
        }
      }, 600)
    }
  }

  const particlesOptions = {
    background: {
      color: 'transparent',
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          lineLinked: {
            opacity: 0.3,
          },
        },
        bubble: {
          distance: 150,
          size: 30,
          duration: 2,
        },
        repulse: {
          distance: 80,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
        },
      },
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: ['#3B82F6', '#10B981', '#8B5CF6', '#EC4899'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.4,
        random: {
          enable: true,
          value_min: 0.2,
          value_max: 0.6,
        },
      },
      size: {
        value: 2,
        random: {
          enable: true,
          value_min: 1,
          value_max: 3,
        },
      },
      links: {
        enable: true,
        distance: 100,
        color: {
          value: '#8B5CF6',
        },
        opacity: 0.2,
        width: 0.8,
        triangles: {
          enable: true,
          color: '#3B82F6',
          opacity: 0.05,
        },
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'bounce',
          bounce: {
            horizontal: {
              value: 1,
            },
            vertical: {
              value: 1,
            },
          },
        },
        attract: {
          enable: true,
          rotateX: 3000,
          rotateY: 1200,
        },
      },
    },
    detectRetina: true,
  }

  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  }

  return (
    <div ref={containerRef} style={style}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
        
        .tsparticles-canvas-el {
          filter: blur(0.5px);
        }
        
        .tsparticles-particle {
          filter: drop-shadow(0 0 6px currentColor);
        }
        
        .tsparticles-link {
          filter: drop-shadow(0 0 4px #8B5CF6);
        }
      `}</style>
    </div>
  )
}

export default NeuralBackground
