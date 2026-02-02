import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  Database,
  Globe,
  Server,
  Palette,
  Terminal,
  Layers,
  GitBranch,
  Cloud,
  Container,
  FileCode,
  Box,
  Send,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title span',
        { y: 60, rotateX: -40, opacity: 0 },
        { y: 0, rotateX: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out', delay: 0.3 }
      );

      gsap.fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out', delay: 0.7 }
      );

      gsap.fromTo('.hero-desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out', delay: 0.85 }
      );

      gsap.fromTo('.hero-cta',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)', delay: 1 }
      );

      gsap.fromTo('.hero-avatar',
        { rotateY: -30, scale: 0.8, opacity: 0 },
        { rotateY: 0, scale: 1, opacity: 1, duration: 1, ease: 'expo.out', delay: 0.6 }
      );

      // Scroll-triggered animations
      const sections = ['.about-section', '.skills-section', '.projects-section', '.contact-section'];

      sections.forEach(section => {
        gsap.fromTo(`${section} .section-title`,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // About section
      gsap.fromTo('.about-text',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.stat-card',
        { rotateY: -90, opacity: 0 },
        {
          rotateY: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.stats-container',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Skills section
      gsap.fromTo('.skill-card',
        { scale: 0, rotate: -10, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Projects section
      gsap.fromTo('.project-card',
        { scale: 0.9, rotateX: 15, opacity: 0 },
        {
          scale: 1,
          rotateX: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Contact section
      gsap.fromTo('.contact-info',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.contact-form',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', ref: heroRef },
    { name: 'About', ref: aboutRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Contact', ref: contactRef },
  ];

  const skills = [
    { name: 'JavaScript', icon: <Code2 className="w-6 h-6" /> },
    { name: 'React', icon: <Globe className="w-6 h-6" /> },
    { name: 'Node.js', icon: <Server className="w-6 h-6" /> },
    { name: 'HTML5', icon: <FileCode className="w-6 h-6" /> },
    { name: 'CSS3', icon: <Palette className="w-6 h-6" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" /> },
    { name: 'SQL', icon: <Database className="w-6 h-6" /> },
    { name: 'Git', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'AWS', icon: <Cloud className="w-6 h-6" /> },
    { name: 'Docker', icon: <Container className="w-6 h-6" /> },
    { name: 'TypeScript', icon: <Terminal className="w-6 h-6" /> },
    { name: 'Redux', icon: <Layers className="w-6 h-6" /> },
    { name: 'Express.js', icon: <Server className="w-6 h-6" /> },
    { name: 'Next.js', icon: <Box className="w-6 h-6" /> },
  ];

  const projects = [

    {
      title: 'E-Commerce Platform',
      description: 'Full-stack online store with payment integration and admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-orange-400 to-red-500',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      color: 'from-blue-400 to-purple-500',
      link: '#'
    },
    {
      title: 'Portfolio Generator',
      description: 'AI-powered portfolio builder with customizable templates',
      tech: ['React', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
      color: 'from-green-400 to-teal-500',
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with interactive maps and forecasts',
      tech: ['React', 'Weather API', 'Chart.js', 'Mapbox'],
      color: 'from-yellow-400 to-orange-500',
      link: '#'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging platform with group chats and file sharing',
      tech: ['Node.js', 'Socket.io', 'Redis', 'AWS S3'],
      color: 'from-pink-400 to-rose-500',
      link: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Content management system with markdown support and SEO optimization',
      tech: ['Next.js', 'MDX', 'PostgreSQL', 'Vercel'],
      color: 'from-indigo-400 to-blue-500',
      link: '#'
    }
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}>
        <div className="section-container">
          <div className="section-inner flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection(heroRef)}
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-[#ff6b35] dark:hover:text-[#ff6b35] transition-colors duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Karan<span className="text-[#ff6b35]">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.ref)}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff6b35] dark:hover:text-[#ff6b35] link-underline transition-colors duration-200"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {link.name}
                </button>
              ))}

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#ff6b35] hover:text-white dark:hover:bg-[#ff6b35] transition-all duration-300"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 dark:text-gray-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800">
            <div className="section-container py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.ref)}
                  className="block w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#ff6b35] transition-colors duration-200"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff6b35]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 pt-24">
          <div className="section-inner">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h1
                  className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: 1.1 }}
                >
                  <span className="inline-block">Hi,</span>{' '}
                  <span className="inline-block">I'm</span>{' '}
                  <span className="inline-block text-[#ff6b35]">Karan</span>{' '}
                  <span className="inline-block text-[#ff6b35]">Darade</span>
                </h1>

                <p
                  className="hero-subtitle text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Full Stack Developer
                </p>

                <p className="hero-desc text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  I craft beautiful, functional web experiences with modern technologies.
                  Passionate about clean code, user-centric design, and bringing ideas to life.
                </p>

                <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToSection(projectsRef)}
                    className="btn-primary animate-pulse-glow"
                  >
                    View My Work
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="btn-secondary"
                  >
                    Get In Touch
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start mt-8">
                  <a
                    href="https://github.com/KaranDarade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-300 hover:bg-[#ff6b35] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karan-darade-4a2392245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-300 hover:bg-[#ff6b35] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:daradekaran123@gmail.com"
                    aria-label="Send Email"
                    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-300 hover:bg-[#ff6b35] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Avatar */}
              <div className="order-1 lg:order-2 flex justify-center perspective-1000">
                <div className="hero-avatar relative preserve-3d animate-float">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[#ff6b35]/20 rounded-full blur-3xl scale-110" />

                    {/* Avatar Image */}
                    <img
                      src="/images/avatar.png"
                      alt="Karan Darade"
                      className="relative w-full h-full object-contain drop-shadow-2xl animate-rotate-gentle"
                    />

                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-xl">
                      <span className="text-sm font-semibold text-[#ff6b35]">👋 Hello!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="about-section py-24 bg-white dark:bg-gray-900"
      >
        <div className="section-container">
          <div className="section-inner">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div>
                <h2
                  className="section-title text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  About <span className="text-[#ff6b35]">Me</span>
                </h2>

                <p className="about-text text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  I'm a passionate Full Stack Developer with expertise in building scalable web applications.
                  My journey in tech started with a curiosity about how things work, which evolved into a
                  career crafting digital solutions that make a difference.
                </p>

                <p className="about-text text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I specialize in the MERN stack, modern frontend frameworks, and cloud technologies.
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source,
                  or mentoring aspiring developers.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <MapPin className="w-5 h-5 text-[#ff6b35]" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Mail className="w-5 h-5 text-[#ff6b35]" />
                    <span>daradekaran123@gmail.com</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className="skills-section py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="section-container">
          <div className="section-inner">
            <div className="text-center mb-16">
              <h2
                className="section-title text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                My <span className="text-[#ff6b35]">Skills</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Technologies I work with
              </p>
            </div>

            <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card bg-white dark:bg-gray-700 p-6 rounded-xl text-center cursor-pointer transition-all duration-250 hover:scale-110 hover:bg-[#ff6b35] hover:text-white group shadow-lg hover:shadow-xl"
                  style={{ transitionTimingFunction: 'var(--ease-elastic)' }}
                >
                  <div className="text-[#ff6b35] group-hover:text-white mb-3 flex justify-center transition-colors duration-250">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-250">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="projects-section py-24 bg-white dark:bg-gray-900"
      >
        <div className="section-container">
          <div className="section-inner">
            <div className="text-center mb-16">
              <h2
                className="section-title text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Featured <span className="text-[#ff6b35]">Projects</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Some of my recent work
              </p>
            </div>

            <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="project-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover group perspective-1000"
                >
                  {/* Project Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <Code2 className="w-16 h-16 text-white/80 relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group-hover:text-[#ff6b35] transition-colors duration-200"
                    >
                      <h3
                        className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="contact-section py-24 bg-[#1a1a1a] relative overflow-hidden"
      >
        {/* Gradient Orb */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff6b35]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />

        <div className="section-container relative z-10">
          <div className="section-inner">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2
                  className="section-title text-3xl sm:text-4xl font-bold text-white mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Get In <span className="text-[#ff6b35]">Touch</span>
                </h2>

                <p className="contact-info text-gray-400 mb-8 leading-relaxed">
                  Have a project in mind or want to collaborate? I'd love to hear from you.
                  Let's create something amazing together.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="contact-info flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6b35]/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-white">daradekaran123@gmail.com</p>
                    </div>
                  </div>

                  <div className="contact-info flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6b35]/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-white">+91 9356539969</p>
                    </div>
                  </div>

                  <div className="contact-info flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6b35]/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-white">India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="contact-info flex gap-4">
                  <a
                    href="https://github.com/KaranDarade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ff6b35] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karan-darade-4a2392245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ff6b35] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="section-container">
          <div className="section-inner">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © 2026 Karan Darade. All rights reserved.
              </p>
              <div className="flex gap-6">

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/daradekaran123@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Your name"
          required
          className="mt-2 border-2 border-gray-200 dark:border-gray-700 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20"
        />
      </div>

      <div>
        <label htmlFor="_website" style={{ display: 'none' }}>Website</label>
        <input type="text" id="_website" name="_website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="your@email.com"
          required
          className="mt-2 border-2 border-gray-200 dark:border-gray-700 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Your message..."
          rows={4}
          required
          className="mt-2 border-2 border-gray-200 dark:border-gray-700 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
        <Send className="w-4 h-4 ml-2" />
      </Button>

      {status === 'success' && (
        <p className="text-green-600 text-center font-medium animate-in fade-in slide-in-from-bottom-2">
          Message sent successfully!
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-500 text-center font-medium animate-in fade-in slide-in-from-bottom-2">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

export default App;
