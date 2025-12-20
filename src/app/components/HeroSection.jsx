"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ParticleBackground = ({ particleCount = 60 }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.colorHue = Math.random() * 30 - 15;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 3;
            this.y -= Math.sin(angle) * force * 3;
          }
        }

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const currentSize = this.size * pulse;
        const currentOpacity = this.opacity * pulse;
        const hue = 280 + this.colorHue;
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentSize * 3
        );
        gradient.addColorStop(0, `hsla(${hue}, 80%, 65%, ${currentOpacity * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${hue}, 80%, 65%, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${hue}, 80%, 65%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${hue}, 90%, 75%, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();

    const animate = () => {
      ctx.fillStyle = 'rgba(34, 28, 53, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 180;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.25;
            
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            
            const hue1 = 280 + particle.colorHue;
            const hue2 = 280 + otherParticle.colorHue;
            
            gradient.addColorStop(0, `hsla(${hue1}, 80%, 65%, ${opacity})`);
            gradient.addColorStop(0.5, `hsla(${(hue1 + hue2) / 2}, 80%, 65%, ${opacity * 1.2})`);
            gradient.addColorStop(1, `hsla(${hue2}, 80%, 65%, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

// Custom Typing Effect Component
const CustomTypingEffect = ({ 
  texts = [], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentIndex];
    let timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
};

// ScrollReveal Component
const ScrollReveal = ({ children, direction = 'up', delay = 0, duration = 1000, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const directionStyles = {
    up: 'translate-y-20',
    down: '-translate-y-20',
    left: 'translate-x-20',
    right: '-translate-x-20',
    fade: ''
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 ${directionStyles[direction]}`
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  const roles = [
    'Full Stack Developer',
    'Business Analyst',
    'System Analyst',
    'AI/ML Enthusiast',
  ];

  return (
    <section className="relative py-12">
      <ParticleBackground particleCount={60} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative" style={{ zIndex: 10 }}>
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal direction="up" delay={0}>
            <div>
              <div className="inline-block mb-3">
                <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
                  Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block mb-2">Hi, I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400">
                  <CustomTypingEffect 
                    texts={roles}
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseDuration={2000}
                  />
                </span>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              A passionate technologist bridging business strategy and technical implementation. 
              Currently pursuing <span className="text-purple-300 font-medium">Master's in Information Systems Management</span> while 
              delivering impactful digital solutions through full stack development, system analysis, 
              and AI/ML technologies.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
              <div className="bg-[#2A2438]/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-purple-400/50 transition-colors">
                <div className="text-2xl font-bold text-white mb-1">2+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="bg-[#2A2438]/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-purple-400/50 transition-colors">
                <div className="text-2xl font-bold text-white mb-1">20+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="bg-[#2A2438]/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-purple-400/50 transition-colors col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-white mb-1">10+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Certifications</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#contact"
                className="group px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 text-center shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                <span className="flex items-center justify-center gap-2">
                  Get in Touch
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <a 
                href="#projects"
                className="px-8 py-3.5 rounded-lg bg-transparent border-2 border-gray-600 text-white font-medium hover:border-purple-400 hover:bg-purple-400/5 transition-all duration-300 text-center"
              >
                View Projects
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="right" delay={200} className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
            
            <div className="relative w-[280px] h-[280px] lg:w-[340px] lg:h-[340px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-400/30">
                <Image
                  src="/images/hero-img.png"
                  alt="Veronica Dwiyanti"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;