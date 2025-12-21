"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, Moon, Sun, Award, Briefcase, GraduationCap, Code, Database, Cloud, Cpu, ChevronRight, ExternalLink, Sparkles, BookOpen, Calendar, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Portfolio data
  const data = {
    profile: {
      name: "Sri Ram Sathiya Narayanan",
      headline: "AI Engineer | Technology Consultant",
      tagline: "Transforming Data into Strategic Insights",
      location: "Boston, MA",
      email: "sathiyanarayanan.sr@northeastern.edu",
      phone: "9497928260",
      socials: {
        linkedin: "https://linkedin.com/in/sriram",
        github: "https://github.com/sriram",
        twitter: "https://twitter.com/sriram"
      }
    },
    stats: [
      { label: "Process Efficiency", value: "20%", icon: <TrendingUp className="w-6 h-6" />, color: "from-emerald-400 to-teal-500" },
      { label: "Model Accuracy", value: "93%", icon: <Target className="w-6 h-6" />, color: "from-violet-400 to-purple-500" },
      { label: "Manual Effort Cut", value: "40%", icon: <Zap className="w-6 h-6" />, color: "from-amber-400 to-orange-500" },
      { label: "Years at EY", value: "3+", icon: <Briefcase className="w-6 h-6" />, color: "from-blue-400 to-cyan-500" }
    ],
    experience: [
      {
        title: "Consultant",
        company: "Ernst & Young",
        location: "Chennai, India",
        period: "Oct 2024 - Dec 2024",
        highlights: [
          "Led requirement-gathering sessions reducing process bottlenecks by 20%",
          "Translated business requirements into technical solutions for analytics"
        ]
      },
      {
        title: "Associate Consultant",
        company: "Ernst & Young",
        location: "Chennai, India",
        period: "Oct 2023 - Sept 2024",
        highlights: [
          "Developed forecasting models improving procurement efficiency by 20%",
          "Led inventory optimization reducing wastage by 10%"
        ]
      },
      {
        title: "Senior Analyst",
        company: "Ernst & Young",
        location: "Chennai, India",
        period: "July 2022 - Sept 2023",
        highlights: [
          "Built adaptive pricing analytics solutions",
          "Automated workflows reducing manual time by 30%"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        school: "Northeastern University",
        location: "Boston, MA",
        period: "Expected Dec 2026",
        coursework: ["Data Structures", "Algorithms", "Machine Learning", "MLOps", "Gen AI"]
      },
      {
        degree: "Bachelor of Technology in CSE",
        school: "B.S. Abdur Rahman Crescent Institute",
        location: "India",
        period: "Graduated June 2022",
        coursework: ["AI & ML", "Big Data Analytics", "Statistical Methods"]
      }
    ],
    projects: [
      {
        title: "Biomedical RAG Summarization Pipeline",
        tags: ["Healthcare", "AI/ML", "40% Efficiency"],
        tech: ["Python", "LangChain", "BioBERT", "FAISS", "GPT-4"],
        description: "Healthcare-specific RAG pipeline reducing manual review time by 40% with intelligent document processing",
        impact: "40%",
        color: "from-rose-500 to-pink-600"
      },
      {
        title: "FMCG Lakehouse ETL Pipeline",
        tags: ["AWS", "Databricks", "Big Data"],
        tech: ["Databricks", "Apache Spark", "AWS S3", "Power BI"],
        description: "End-to-end ETL pipeline with Medallion architecture for retail acquisition data consolidation",
        impact: "Unified",
        color: "from-blue-500 to-indigo-600"
      },
      {
        title: "Text-to-SQL Chatbot",
        tags: ["NLP", "FastAPI", "Real-time"],
        tech: ["LangChain", "Multi-LLM", "FastAPI", "MySQL"],
        description: "Natural language to SQL conversion with real-time structured responses and query optimization",
        impact: "Real-time",
        color: "from-emerald-500 to-teal-600"
      },
      {
        title: "Big Data Regression (Spark)",
        tags: ["ML", "Cloud", "93% Accuracy"],
        tech: ["Spark MLlib", "Zeppelin", "Databricks"],
        description: "Production-grade regression pipeline analyzing 1M+ records with automated cloud scheduling",
        impact: "93%",
        color: "from-violet-500 to-purple-600"
      }
    ],
    skills: {
      "Languages": ["Python", "R", "SQL", "Java"],
      "ML & AI": ["Spark MLlib", "BioBERT", "RAG", "LangChain", "HuggingFace"],
      "Cloud & DevOps": ["AWS", "Docker", "Databricks", "GitHub Actions"],
      "Data & BI": ["Power BI", "MySQL", "MongoDB", "Excel", "FAISS"]
    },
    achievements: [
      {
        title: "2nd Place - Microsoft Boston Hackathon",
        subtitle: "Best Use of Enterprise Automation Agent (MCP)",
        description: "Developed solution for sharing offers with localites using Yconic platform",
        date: "2025",
        icon: <Award className="w-8 h-8" />
      },
      {
        title: "AWS Certified AI Practitioner",
        subtitle: "Amazon Web Services",
        description: "Demonstrated expertise in AI/ML on AWS platform",
        date: "2024",
        icon: <Cloud className="w-8 h-8" />
      },
      {
        title: "Azure AI Fundamentals",
        subtitle: "Microsoft",
        description: "Core AI concepts and Azure AI services",
        date: "2024",
        icon: <Sparkles className="w-8 h-8" />
      }
    ],
    blog: [
      {
        title: "Building Production-Ready RAG Systems",
        excerpt: "Deep dive into implementing retrieval-augmented generation pipelines for healthcare applications with BioBERT and FAISS...",
        date: "Dec 2025",
        readTime: "8 min read",
        tags: ["RAG", "LangChain", "Production"]
      },
      {
        title: "Agentic AI: The Future of Automation",
        excerpt: "Exploring Model Context Protocol (MCP) and how enterprise automation agents are transforming workflows...",
        date: "Dec 2025",
        readTime: "6 min read",
        tags: ["Agentic AI", "MCP", "Automation"]
      },
      {
        title: "From Data Analyst to AI Engineer",
        excerpt: "Lessons learned from 3 years at EY and transitioning into AI engineering at Northeastern University...",
        date: "Nov 2025",
        readTime: "5 min read",
        tags: ["Career", "AI", "Journey"]
      }
    ]
  };

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'projects', 'blog', 'skills', 'achievements'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const bgClass = isDark 
    ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 
    : 'bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50';
  const textClass = isDark ? 'text-slate-100' : 'text-slate-900';
  const cardClass = isDark 
    ? 'bg-slate-900/50 border-slate-700/50' 
    : 'bg-white/70 border-orange-200/50';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-all duration-700 relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000 ${
            isDark ? 'bg-blue-500' : 'bg-orange-400'
          }`}
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-10 ${
          isDark ? 'bg-purple-500' : 'bg-rose-400'
        }`} />
        <div className={`absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-10 ${
          isDark ? 'bg-cyan-500' : 'bg-amber-400'
        }`} />
      </div>

      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${
        isDark ? 'bg-slate-950/80' : 'bg-white/80'
      } backdrop-blur-xl border-b ${
        isDark ? 'border-slate-800/50' : 'border-orange-200/50'
      } shadow-lg`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className={`text-xl font-bold bg-gradient-to-r ${
            isDark ? 'from-blue-400 to-cyan-400' : 'from-orange-500 to-rose-500'
          } bg-clip-text text-transparent`}>
            SR
          </div>
          <div className="flex gap-8 items-center">
            {['Home', 'Work', 'Projects', 'Blog', 'Skills', 'Achievements'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all ${
                  activeSection === item.toLowerCase()
                    ? isDark 
                      ? 'text-blue-400 scale-110' 
                      : 'text-orange-600 scale-110'
                    : isDark 
                      ? 'text-slate-400 hover:text-slate-100' 
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700 text-amber-400' 
                  : 'bg-orange-100 hover:bg-orange-200 text-orange-600'
              } transition-all hover:scale-110`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Floating Elements */}
      <section id="home" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`relative rounded-3xl overflow-hidden ${cardClass} border backdrop-blur-xl shadow-2xl`}>
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30' 
                  : 'bg-gradient-to-br from-orange-400/30 via-rose-400/30 to-amber-400/30'
              }`} />
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(${isDark ? '#334155' : '#fb923c'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#334155' : '#fb923c'} 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>

            <div className="relative z-10 px-12 py-20">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Profile Section */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-400">Available for Co-op • Jan 2026</span>
                  </div>
                  
                  <h1 className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r ${
                    isDark 
                      ? 'from-blue-400 via-purple-400 to-cyan-400' 
                      : 'from-orange-600 via-rose-600 to-amber-600'
                  } bg-clip-text text-transparent leading-tight`}>
                    {data.profile.name}
                  </h1>
                  
                  <p className={`text-2xl md:text-3xl mb-4 font-semibold ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {data.profile.headline}
                  </p>
                  
                  <p className={`text-lg mb-8 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {data.profile.tagline}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4 justify-center lg:justify-start mb-8">
                    <a href={data.profile.socials.linkedin} className={`group p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-110 shadow-lg hover:shadow-xl`}>
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a href={data.profile.socials.github} className={`group p-4 rounded-xl ${
                      isDark ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-gradient-to-br from-slate-700 to-slate-900'
                    } hover:from-slate-600 hover:to-slate-700 transition-all hover:scale-110 shadow-lg hover:shadow-xl`}>
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a href={data.profile.socials.twitter} className={`group p-4 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 transition-all hover:scale-110 shadow-lg hover:shadow-xl`}>
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                    <a href={`mailto:${data.profile.email}`} className={`group p-4 rounded-xl bg-gradient-to-br ${
                      isDark ? 'from-purple-500 to-purple-600' : 'from-rose-500 to-rose-600'
                    } hover:from-purple-600 hover:to-purple-700 transition-all hover:scale-110 shadow-lg hover:shadow-xl`}>
                      <Mail className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* Animated Avatar */}
                <div className="relative">
                  <div className="relative">
                    {/* Floating rings */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute inset-0 rounded-full border-2 ${
                          isDark ? 'border-blue-500/30' : 'border-orange-400/30'
                        }`}
                        style={{
                          width: `${240 + i * 40}px`,
                          height: `${240 + i * 40}px`,
                          left: `calc(50% - ${120 + i * 20}px)`,
                          top: `calc(50% - ${120 + i * 20}px)`,
                          animation: `spin ${20 + i * 10}s linear infinite`,
                          animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                        }}
                      />
                    ))}
                    
                    <div className={`relative z-10 w-60 h-60 rounded-full bg-gradient-to-br ${
                      isDark 
                        ? 'from-blue-500 via-purple-500 to-cyan-500' 
                        : 'from-orange-500 via-rose-500 to-amber-500'
                    } flex items-center justify-center text-6xl font-bold shadow-2xl`}>
                      SR
                    </div>

                    {/* Floating particles */}
                    <Sparkles className={`absolute top-0 right-0 w-8 h-8 ${
                      isDark ? 'text-yellow-400' : 'text-amber-500'
                    } animate-pulse`} />
                    <Sparkles className={`absolute bottom-0 left-0 w-6 h-6 ${
                      isDark ? 'text-blue-400' : 'text-orange-400'
                    } animate-pulse`} style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {data.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`${cardClass} border rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all backdrop-blur-xl group cursor-default`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className={`w-10 h-10 ${isDark ? 'text-blue-400' : 'text-orange-500'}`} />
            <h2 className="text-4xl md:text-5xl font-bold">Professional Journey</h2>
          </div>
          
          <div className="space-y-6">
            {data.experience.map((exp, idx) => (
              <div 
                key={idx} 
                className={`${cardClass} border rounded-2xl p-8 hover:shadow-2xl transition-all backdrop-blur-xl group`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${
                      isDark ? 'from-blue-400 to-cyan-400' : 'from-orange-600 to-rose-600'
                    } bg-clip-text text-transparent mb-2`}>
                      {exp.title}
                    </h3>
                    <p className={`text-lg font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                    isDark 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'bg-orange-100 text-orange-700 border border-orange-300'
                  }`}>
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="flex items-start gap-3 group/item">
                      <ChevronRight className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        isDark ? 'text-blue-400' : 'text-orange-500'
                      } group-hover/item:translate-x-1 transition-transform`} />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="flex items-center gap-4 mb-12 mt-20">
            <GraduationCap className={`w-10 h-10 ${isDark ? 'text-purple-400' : 'text-rose-500'}`} />
            <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {data.education.map((edu, idx) => (
              <div 
                key={idx} 
                className={`${cardClass} border rounded-2xl p-8 backdrop-blur-xl hover:shadow-2xl transition-all group`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${
                  idx === 0 
                    ? isDark ? 'from-purple-500 to-violet-600' : 'from-rose-500 to-pink-600'
                    : isDark ? 'from-cyan-500 to-blue-600' : 'from-amber-500 to-orange-600'
                } mb-4 group-hover:scale-110 transition-transform`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {edu.degree}
                </h3>
                <p className={`text-lg font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {edu.school}
                </p>
                <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {edu.location} • {edu.period}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, cidx) => (
                    <span 
                      key={cidx} 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark 
                          ? 'bg-slate-800/50 text-slate-300 border border-slate-700/50' 
                          : 'bg-orange-50 text-orange-700 border border-orange-200'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Code className={`w-10 h-10 ${isDark ? 'text-cyan-400' : 'text-amber-500'}`} />
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {data.projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`${cardClass} border rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all backdrop-blur-xl group cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex px-4 py-2 rounded-xl bg-gradient-to-r ${project.color} text-white font-bold text-sm shadow-lg`}>
                    Impact: {project.impact}
                  </div>
                  <ExternalLink className={`w-5 h-5 ${
                    isDark ? 'text-slate-400 group-hover:text-cyan-400' : 'text-slate-500 group-hover:text-orange-500'
                  } transition-colors`} />
                </div>
                
                <h3 className={`text-2xl font-bold mb-3 ${
                  isDark ? 'text-slate-100 group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-orange-600'
                } transition-colors`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tidx) => (
                    <span 
                      key={tidx} 
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDark 
                          ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                          : 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border border-orange-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tidx) => (
                    <span 
                      key={tidx} 
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        isDark 
                          ? 'bg-slate-800/70 text-slate-300 border border-slate-700/50' 
                          : 'bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className={`w-10 h-10 ${isDark ? 'text-emerald-400' : 'text-teal-500'}`} />
            <h2 className="text-4xl md:text-5xl font-bold">Latest Insights</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {data.blog.map((post, idx) => (
              <div 
                key={idx} 
                className={`${cardClass} border rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all backdrop-blur-xl group cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {post.date}
                  </span>
                  <span className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>•</span>
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-emerald-400' : 'text-teal-600'
                  }`}>
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-slate-100 group-hover:text-emerald-400' : 'text-slate-900 group-hover:text-teal-600'
                } transition-colors`}>
                  {post.title}
                </h3>
                
                <p className={`mb-4 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tidx) => (
                    <span 
                      key={tidx} 
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        isDark 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-teal-100 text-teal-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`flex items-center gap-2 text-sm font-medium ${
                  isDark ? 'text-emerald-400 group-hover:gap-3' : 'text-teal-600 group-hover:gap-3'
                } transition-all`}>
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Cpu className={`w-10 h-10 ${isDark ? 'text-violet-400' : 'text-purple-500'}`} />
            <h2 className="text-4xl md:text-5xl font-bold">Technical Arsenal</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(data.skills).map(([category, items], idx) => (
              <div 
                key={idx} 
                className={`${cardClass} border rounded-2xl p-6 backdrop-blur-xl hover:shadow-2xl transition-all group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${
                    category === 'Languages' 
                      ? 'from-blue-500 to-cyan-500'
                      : category === 'ML & AI'
                      ? 'from-violet-500 to-purple-500'
                      : category === 'Cloud & DevOps'
                      ? 'from-emerald-500 to-teal-500'
                      : 'from-orange-500 to-amber-500'
                  } group-hover:scale-110 transition-transform`}>
                    {category === 'Languages' && <Code className="w-5 h-5 text-white" />}
                    {category === 'ML & AI' && <Cpu className="w-5 h-5 text-white" />}
                    {category === 'Cloud & DevOps' && <Cloud className="w-5 h-5 text-white" />}
                    {category === 'Data & BI' && <Database className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                    {category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {items.map((item, iidx) => (
                    <div 
                      key={iidx} 
                      className={`text-sm font-medium ${
                        isDark ? 'text-slate-300 hover:text-violet-400' : 'text-slate-700 hover:text-purple-600'
                      } transition-colors cursor-default flex items-center gap-2`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        isDark ? 'bg-violet-400' : 'bg-purple-500'
                      }`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Award className={`w-10 h-10 ${isDark ? 'text-yellow-400' : 'text-amber-500'}`} />
            <h2 className="text-4xl md:text-5xl font-bold">Achievements & Recognition</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {data.achievements.map((achievement, idx) => (
              <div 
                key={idx} 
                className={`${cardClass} border rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-all backdrop-blur-xl group`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${
                  idx === 0 
                    ? 'from-yellow-400 to-orange-500'
                    : idx === 1
                    ? 'from-blue-400 to-cyan-500'
                    : 'from-purple-400 to-pink-500'
                } mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {achievement.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {achievement.title}
                </h3>
                <p className={`text-sm font-semibold mb-3 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {achievement.subtitle}
                </p>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${
        isDark ? 'border-slate-800/50' : 'border-orange-200/50'
      } backdrop-blur-xl relative`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Built with Next.js, Framer Motion & Three.js • Designed for Impact
          </p>
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            © 2025 Sri Ram Sathiya Narayanan. Crafted with passion in Boston.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;