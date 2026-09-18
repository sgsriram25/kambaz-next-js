"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, Moon, Sun, Award, Briefcase, GraduationCap, Code, Database, Cloud, Cpu, ChevronRight, ExternalLink, Sparkles, BookOpen, Calendar, ArrowRight, Zap, Target, TrendingUp, Youtube } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Portfolio data
  const data = {
    profile: {
      name: "Sri Ram Sathiya Narayanan",
      roles: ["Data Scientist", "AI Engineer", "ML Engineer"],
      headline: "Transforming Business Challenges into AI-Powered Solutions",
      tagline: "Building Production-Grade AI Systems | 3 Years at EY | MS CS at Northeastern",
      location: "Boston, MA",
      email: "sathiyanarayanan.sr@northeastern.edu",
      phone: "+19497928260",
      socials: {
        linkedin: "https://linkedin.com/in/sgsriram",
        github: "https://github.com/sgsriram25",
        //twitter: "https://twitter.com/sriram",
        medium: "https://medium.com/@sgsriram25",
        portfolio: "https://sgsriram.vercel.app"
      }
    },
    value_proposition: {
      problems_solving: [
        "Automating complex workflows with Multi-Agent AI Systems ", // (70% faster)
        "Building scalable MLOps pipelines that cut deployment time", // by 80%
        "Designing intelligent automation reducing manual effort", //by 60%
        "Creating production RAG systems improving retrieval accuracy "//by 35%
      ],
      why_hire: [
        "3 years consulting experience bridging business strategy & technical execution",
        "Proven track record: 20% process improvement, 93% model accuracy in production",
        "End-to-end ownership: from business requirements to cloud deployment",
        "Cutting-edge expertise: Agentic AI, LangGraph, RAG, MLOps, MCP orchestration"
      ]
    },
    stats: [
      { label: "Process Efficiency", value: "20%", icon: <TrendingUp className="w-6 h-6" />, color: "from-emerald-400 to-teal-500" },
      { label: "Model Accuracy", value: "93%", icon: <Target className="w-6 h-6" />, color: "from-violet-400 to-purple-500" },
      { label: "Deployment Speed", value: "80%", icon: <Zap className="w-6 h-6" />, color: "from-amber-400 to-orange-500" },
      { label: "Years at EY", value: "3", icon: <Briefcase className="w-6 h-6" />, color: "from-blue-400 to-cyan-500" }
    ],
    experience: [
      {
        title: "Consultant",
        company: "Ernst & Young",
        location: "Chennai, India",
        period: "February 2022 - December 2024",
        roles: [
          {
            role: "Consultant",
            duration: "October 2024 - December 2024",
            highlights: [
              "Led cross-functional digital transformation initiatives, translating complex business challenges into technical specifications for scalable analytics solutions that reduced process bottlenecks by 20%",
              "Managed stakeholder tensions across IT, Finance, and Procurement by establishing clear communication protocols and delivering data-driven insights that aligned conflicting priorities"
            ]
          },
          {
            role: "Associate Consultant",
            duration: "October 2023 - September 2024",
            highlights: [
              "Developed end-to-end demand forecasting pipelines using Python and R, implementing time-series forecasting and statistical modeling to improve procurement planning, resulting in a 15% increase in procurement efficiency and enhanced contract stability",
              "Architected inventory optimization models applying advanced statistical techniques to SAP MM datasets; utilized Power BI to analyze stock turnover and supply chain resilience, reducing wastage by 10% and maintaining service levels above 97%",
              "Owned system reliability for enterprise-scale analytics serving 100+ stakeholders, managing ambiguous requirements through iterative refinement and prototype validation"
            ]
          },
          {
            role: "Senior Analyst",
            duration: "July 2022 - September 2024",
            highlights: [
              "Engineered automated pricing analytics platforms using Python and SQL, integrating historical sales and market trends to build decision-support systems that accelerated procurement cycles by 15% via data-driven negotiations",
              "Designed and optimized ETL workflows, automating complex data extraction processes that streamlined reporting for Finance and Procurement teams, reducing manual data preparation time by 30% and improving data integrity for downstream ML models",
              "Navigated business constraints including budget limitations and regulatory compliance while delivering solutions that balanced technical excellence with operational feasibility"
            ]
          },
          {
            role: "Intern",
            duration: "February 2022 - July 2022",
            highlights: [
              "Supported analytics reporting, stakeholder coordination, and business research operations across IT, Finance, and Procurement teams",
              "Gathered requirements, analyzed business processes, and delivered functional specifications supporting customer-focused scalable digital transformation initiatives"
            ]
          }
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        school: "Northeastern University",
        location: "Boston, MA",
        period: "Expected May 2027",
        coursework: ["Algorithms", "Programming Design Paradigm", "Database Management Systems", "Web Development", "Machine Learning", "MLOps", "Foundations for Generative AI"]
      },
      {
        degree: "Bachelor of Technology in Computer Science and Engineering",
        school: "B.S. Abdur Rahman Crescent Institute of Science and Technology",
        location: "India",
        period: "Graduated June 2022",
        coursework: ["Statistical Methods for Data Analysis", "Software Engineering", "Graph Theory", "Data Visualization", "Artificial Intelligence and Machine Learning", "Web Analytics and Social Media Mining", "Software Project Management"]
      }
    ],
    projects: [
      {
        title: "Automated Supply Chain Intelligence Pipeline",
        date: "January 2026",
        tags: ["n8n", "PostgreSQL", "Quadratic AI", "Python"],
        description: "Architected an AI-driven automation pipeline using n8n to ingest and structure data into PostgreSQL, reducing manual data entry time by 60%. Leveraged Quadratic AI for natural-language-driven analytics of key performance indicators, including OTIF (On-Time In-Full) and Line Fill Rate. This workflow bridged industrial domain expertise with auto data engineering, increasing report generation frequency from weekly to real-time.",
        //impact: "60% faster",
        color: "from-emerald-500 to-teal-600",
        links: { github: "#", medium: "#", youtube: "#" }
      },
      {
        title: "Agentic AI Coding Assistant",
        date: "January 2026",
        tags: ["Python", "LangGraph", "LLMOps", "OpenAI", "uv"],
        description: "Developed a hierarchical multi-agent system to automate software development, utilizing a supervisor-worker topology with Planner, Architect, and Coder agents. Designed state-aware workflows to simplify natural language requests into engineering tasks, leveraging autonomous file-system tools to generate production-ready codebases. This automation increased code generation consistency by 40% compared to single agent prompting.",
        //impact: "40% boost",
        color: "from-violet-500 to-purple-600",
        links: { github: "#", medium: "#", youtube: "#" }
      },
      {
        title: "Agentic AI Trip Planner",
        date: "December 2025",
        tags: ["Python", "LangGraph", "LLMOps", "uv", "FastAPI"],
        description: "Built a multi-agent system using LangGraph to automate end-to-end travel planning with a supervisor-worker topology. Created specialized agents for real-time weather, hotel costs, and currency conversion via external APIs, reducing manual planning time by 70%. The lifecycle was managed with uv for high-performance dependency tracking and utilized LangSmith for observability, achieving a 95% task completion rate in automatic workflow evaluations.",
        //impact: "95% accuracy",
        color: "from-blue-500 to-indigo-600",
        links: { github: "#", medium: "#", youtube: "#" }
      },
      // {
      //   title: "MCP Tool-Orchestration Platform",
      //   date: "December 2025",
      //   tags: ["Python", "LangGraph", "MCP", "FastAPI", "FastMCP"],
      //   description: "Engineered a centralized MCP Client using LangGraph to orchestrate multiple specialized servers via stdio and HTTP transport protocols. Made custom servers from scratch using FastMCP to standardize tool-calling, reducing tool-integration latency by 40%. Enabled autonomous discovery and invocation of remote services through a unified protocol, increasing agentic tool-use reliability by 30%.",
      //   impact: "30% reliable",
      //   color: "from-cyan-500 to-blue-600",
      //   links: { github: "#", medium: "#", youtube: "#" }
      // },
      // {
      //   title: "Production-Scale MLOps Pipeline",
      //   date: "December 2025",
      //   tags: ["Python", "MLflow", "AWS", "Docker", "DagsHub"],
      //   description: "Managed a modular MLOps workflow using ElasticNet and MLflow for experiment tracking and model versioning. Implemented custom Python utilities for data validation and transformation. Containerized the system with Docker and established a CI/CD pipeline via GitHub Actions for auto deployment to AWS EC2, reducing the manual deployment window by 80%.",
      //   impact: "80% faster",
      //   color: "from-orange-500 to-red-600",
      //   links: { github: "#", medium: "#", youtube: "#" }
      // },
      {
        title: "Text-to-SQL Generative AI Chatbot",
        date: "November 2025",
        tags: ["Python", "LangChain", "Multi-LLM", "FastAPI", "MySQL"],
        description: "Implemented an end-to-end Text-to-SQL pipeline using LangChain and multi-LLM orchestration to translate natural language into optimized queries. Incorporated validation and error-handling layers to ensure data integrity, improving query accuracy by 25%. Deployed via FastAPI to deliver real-time insights from MySQL and preprocessed Excel datasets for business intelligence.",
        //impact: "25% accurate",
        color: "from-pink-500 to-rose-600",
        links: { github: "https://github.com/sgsriram25/Text-to-SQL-Generative-AI-Chatbot", medium: "https://medium.com/@sgsriram25/why-llms-struggle-with-real-databases-and-how-to-fix-it-b2f27078560d", youtube: "#" }
      },
      {
        title: "Clinical Health Assistant with RAG API",
        date: "October 2025",
        tags: ["FastAPI", "LangChain", "FAISS", "HuggingFace"],
        description: "Built a low-latency RAG microservice for semantic search over biomedical corpora using FAISS vector stores and HuggingFace embeddings. Constructed LLM-integrated endpoints for clinical answer synthesis and used Pydantic for schema validation. This scalable architecture enhanced information retrieval precision by 35% for complex medical queries.",
        //impact: "35% precision",
        color: "from-teal-500 to-emerald-600",
        links: { github: "#", medium: "#", youtube: "#" }
      },
      {
        title: "End-to-End Property Value Prediction Pipeline",
        date: "October 2025",
        tags: ["Python", "Scikit-learn", "Flask", "Docker", "CI/CD"],
        description: "Engineered a predictive ML pipeline using Scikit-learn, implementing data standardization and regression modeling that achieved an R-squared value of 0.85. Developed a Flask web interface for real-time inference with low latency and containerized the application using Docker. Established a CI/CD pipeline via GitHub Actions for seamless deployment to Heroku, ensuring a production-ready software development lifecycle.",
        //impact: "0.85 R²",
        color: "from-indigo-500 to-purple-600",
        links: { github: "#", medium: "#", youtube: "#" }
      }
    ],
    skills: {
      "Programming": ["Python", "R", "SQL", "C++", "Java", "OOP", "DSA"],
      "ML & AI": ["LangChain", "LangGraph", "PyTorch", "TensorFlow", "Scikit-learn", "Keras", "RAG", "Prompt Engineering"],
      "Cloud & DevOps": ["AWS (SageMaker)", "GCP", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Airflow"],
      "Data & Tools": ["MySQL", "MongoDB", "Power BI", "Excel", "MLflow", "Git", "JIRA", "SAP ERP"]
    },
    achievements: [
      {
        title: "2nd Place - Microsoft Boston Hackathon",
        subtitle: "Best Use of Enterprise Automation Agent (MCP)",
        description: "Led team of 5 to build MVP automating community deal-sharing in 2 days using Yconic platform. Drove problem framing, technical design, and collaboration under intense time pressure.",
        date: "2025",
        icon: <Award className="w-8 h-8" />
      },
      {
        title: "Student Entrepreneurship Excellence Award",
        subtitle: "Wadhwani Foundation",
        description: "Recognized for entrepreneurial initiative and innovation in technology solutions. Active volunteer with EY Foundation's Disha program and NSS.",
        date: "2024",
        icon: <Sparkles className="w-8 h-8" />
      }
    ],
    certifications: [
      {
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        //date: "2024",
        icon: <Cloud className="w-6 h-6" />,
        link: "https://www.credly.com/badges/272b78c4-e40d-41b2-aab9-57cea1909ce6"
      },
      {
        title: "Azure AI Fundamentals",
        issuer: "Microsoft",
        //date: "2024",
        icon: <Cloud className="w-6 h-6" />,
        link: "https://www.credly.com/badges/8382bf49-8209-41dd-b3f1-6e62ec5130e4"
      },
      {
        title: "Azure Fundamentals",
        issuer: "Microsoft",
        //date: "2024",
        icon: <Cloud className="w-6 h-6" />,
        link: "https://www.credly.com/badges/5af0245a-82a6-4f59-9414-ba5efdba276d"
      },
      {
        title: "IBM AI Specialization",
        issuer: "IBM",
        //date: "2024",
        icon: <Cpu className="w-6 h-6" />,
        link: "https://www.credly.com/users/sri-ram-s/badges#credly"
      },
      {
        title: "IBM AI Analyst",
        issuer: "IBM",
        //date: "2024",
        icon: <Cpu className="w-6 h-6" />,
        link: "https://www.credly.com/badges/fe13917d-2eda-44b3-8a5c-3ebf81b8eba8"
      },
      {
        title: "IBM Enterprise Design Thinking",
        issuer: "IBM",
        //date: "2024",
        icon: <Sparkles className="w-6 h-6" />,
        link: "https://www.credly.com/badges/50ec3e49-d175-4b15-a92f-6e792c04a36e"
      }
    ],
    blog_posts: [
      {
        title: "AI Eats the World: The Platform Shift",
        excerpt: "The tremendous value of artificial intelligence will, in time, hardly be visible to the human eye. In the same way as we no longer wonder at the fact that our elevators are “automatic” or that our phones can access the whole internet, AI will simply be “the way things work” soon.",
        date: "December 2025",
        readTime: "5 min read",
        tags: ["Technology", "Artificial Intelligence", "Mindset", "Business"],
        link: "https://medium.com/@sgsriram25/ai-eats-the-world-the-platform-shift-4bfca78d31b1",
        image: "medium_aishift.png"
      },
      {
        title: "Understanding Agentic AI: How Model Context Protocol (MCP) is Transforming Business Workflows",
        excerpt: "The next generation of AI is around the corner, which we refer to as Agentic AI systems. These are systems that, without any human help, can act, decide, and even complete the tasks for you. This phenomenon is changing the way companies operate, decisions get made, and humans relate to machines.",
        date: "January 2026",
        readTime: "5 min read",
        tags: ["Agentic AI", "MCP", "Enterprise Technology", "Digital Transformation"],
        link: "https://medium.com/@sgsriram25/understanding-agentic-ai-how-model-context-protocol-mcp-is-transforming-business-workflows-8ed5750ffa77",
        image: "aiagent.jpg"
      },
      {
        title: "How AI Really Learns to Talk: Inside the Making of a Large Language Model",
        excerpt: "Large Language Models might look like something from the future, but basically, they are a product of careful planning, a huge amount of work, and wise human guidance. Learning about their construction makes them less of a mystery, and it also shows that for every “smart” machine, there is a long series of human choices.",
        date: "January 2026",
        readTime: "5 min read",
        tags: ["Artificial Intelligence", "Machine Learning", "Large Language Models", "NLP", "Technology"],
        link: "https://medium.com/@sgsriram25/how-ai-really-learns-to-talk-inside-the-making-of-a-large-language-model-2ae3478d2286",
        image: "llm.jpg"
     }
      //,
      // {
      //   title: "From Data Analyst to AI Engineer",
      //   excerpt: "My journey from 3 years at EY doing analytics to building cutting-edge AI systems at Northeastern. Key skills, mindset shifts, and resources that made the difference.",
      //   date: "October 2025",
      //   readTime: "7 min read",
      //   tags: ["Career", "AI", "Journey"],
      //   link: "#",
      //   image: "https://via.placeholder.com/400x200/F59E0B/FFFFFF?text=Career+Journey"
      // },
      // {
      //   title: "LangGraph: Building Intelligent Multi-Agent Systems",
      //   excerpt: "Complete guide to orchestrating multiple AI agents with LangGraph. From simple chains to complex supervisor-worker topologies with state management.",
      //   date: "September 2025",
      //   readTime: "15 min read",
      //   tags: ["LangGraph", "Multi-Agent", "Tutorial"],
      //   link: "#",
      //   image: "https://via.placeholder.com/400x200/EC4899/FFFFFF?text=LangGraph"
      // },
      // {
      //   title: "Supply Chain Analytics with AI",
      //   excerpt: "How we reduced manual effort by 60% using n8n automation and Quadratic AI for real-time OTIF tracking. Bridging domain expertise with modern data engineering.",
      //   date: "August 2025",
      //   readTime: "9 min read",
      //   tags: ["Supply Chain", "Analytics", "Automation"],
      //   link: "#",
      //   image: "https://via.placeholder.com/400x200/06B6D4/FFFFFF?text=Supply+Chain"
      // }
    ]
  };

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'projects', 'skills', 'certifications', 'blog', 'achievements'];
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <button 
            onClick={scrollToTop}
            className={`flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer group`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg transition-all ${
              isDark ? 'text-blue-400' : 'text-orange-600'
            }`}>
              {'</>'}
            </div>
            <span className={`text-base font-bold ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            } hidden md:block`}>
              Sri Ram
            </span>
          </button>
          <div className="flex gap-8 items-center">
            {['Home', 'Work', 'Projects', 'Skills', 'Certifications', 'Blog', 'Achievements'].map((item) => (
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

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`relative rounded-3xl overflow-hidden ${cardClass} border backdrop-blur-xl shadow-2xl`}>
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
                {/* Left Column - Content */}
                <div className="flex-1">
                  {/* Availability Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-medium text-emerald-400">Open to Full-time Opportunities</span>
                  </div>
                  
                  <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${
                    isDark 
                      ? 'from-blue-400 via-purple-400 to-cyan-400' 
                      : 'from-orange-600 via-rose-600 to-amber-600'
                  } bg-clip-text text-transparent leading-tight`}>
                    {data.profile.name}
                  </h1>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {data.profile.roles.map((role, idx) => (
                      <span 
                        key={idx}
                        className={`px-4 py-2 rounded-xl font-semibold text-base ${
                          isDark 
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                            : 'bg-orange-100 text-orange-700 border border-orange-300'
                        }`}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  
                  <p className={`text-xl md:text-2xl mb-4 font-bold ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {data.profile.headline}
                  </p>
                  
                  <p className={`text-base mb-8 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {data.profile.tagline}
                  </p>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3">
                    <a href={data.profile.socials.linkedin} className={`group px-5 py-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2`}>
                      <Linkedin className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">LinkedIn</span>
                    </a>
                    <a href={data.profile.socials.github} className={`group px-5 py-2.5 rounded-xl ${
                      isDark ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-gradient-to-br from-slate-700 to-slate-900'
                    } hover:from-slate-600 hover:to-slate-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2`}>
                      <Github className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">GitHub</span>
                    </a>
                    <a href={data.profile.socials.medium} className={`group px-5 py-2.5 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2`}>
                      <BookOpen className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Medium</span>
                    </a>
                    <a href={`mailto:${data.profile.email}`} className={`group px-5 py-2.5 rounded-xl bg-gradient-to-br ${
                      isDark ? 'from-purple-500 to-purple-600' : 'from-rose-500 to-rose-600'
                    } hover:from-purple-600 hover:to-purple-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2`}>
                      <Mail className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Email</span>
                    </a>
                  </div>
                </div>

                {/* Right Column - Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Decorative rings */}
                    <div className={`absolute -inset-4 rounded-full border-2 ${
                      isDark ? 'border-blue-500/20' : 'border-orange-400/20'
                    } animate-pulse`} style={{ animationDuration: '3s' }} />
                    <div className={`absolute -inset-8 rounded-full border-2 ${
                      isDark ? 'border-purple-500/10' : 'border-rose-400/10'
                    } animate-pulse`} style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                    
                    {/* Profile Image */}
                    <div className={`relative w-64 h-64 rounded-full overflow-hidden border-4 ${
                      isDark ? 'border-blue-500/30' : 'border-orange-400/30'
                    } shadow-2xl`}>
                      <img 
                        src="profile.png" 
                        alt="Sri Ram Sathiya Narayanan"
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        isDark 
                          ? 'from-blue-500/20 to-transparent' 
                          : 'from-orange-400/20 to-transparent'
                      }`} />
                    </div>

                    {/* Floating badge */}
                    <div className={`absolute -bottom-2 -right-2 px-4 py-2 rounded-full ${
                      isDark 
                        ? 'bg-gradient-to-br from-emerald-500 to-teal-600' 
                        : 'bg-gradient-to-br from-emerald-500 to-teal-600'
                    } shadow-xl flex items-center gap-2`}>
                      <Sparkles className="w-4 h-4 text-white animate-pulse" />
                      <span className="text-white font-bold text-sm">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Proposition - Full Width Below */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className={`p-6 rounded-2xl ${
                  isDark ? 'bg-slate-800/50' : 'bg-white/50'
                } border ${isDark ? 'border-slate-700' : 'border-orange-200'}`}>
                  <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${
                    isDark ? 'text-blue-400' : 'text-orange-600'
                  }`}>
                    <Target className="w-5 h-5" />
                    Problems I Solve
                  </h3>
                  <ul className="space-y-2">
                    {data.value_proposition.problems_solving.map((item, idx) => (
                      <li key={idx} className={`text-sm flex items-start gap-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`p-6 rounded-2xl ${
                  isDark ? 'bg-slate-800/50' : 'bg-white/50'
                } border ${isDark ? 'border-slate-700' : 'border-orange-200'}`}>
                  <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${
                    isDark ? 'text-purple-400' : 'text-rose-600'
                  }`}>
                    <Sparkles className="w-5 h-5" />
                    Why Hire Me
                  </h3>
                  <ul className="space-y-2">
                    {data.value_proposition.why_hire.map((item, idx) => (
                      <li key={idx} className={`text-sm flex items-start gap-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
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
          </div> */}
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className={`w-10 h-10 ${isDark ? 'text-blue-400' : 'text-orange-500'}`} />
            <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
          </div>
          
          {data.experience.map((exp, idx) => (
            <div key={idx} className={`${cardClass} border rounded-2xl p-8 mb-8 hover:shadow-2xl transition-all backdrop-blur-xl`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${
                    isDark ? 'from-blue-400 to-cyan-400' : 'from-orange-600 to-rose-600'
                  } bg-clip-text text-transparent mb-2`}>
                    {exp.title}
                  </h3>
                  <p className={`text-xl font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
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

              <div className="space-y-8">
                {exp.roles.map((roleData, ridx) => (
                  <div key={ridx} className={`pl-6 border-l-2 ${
                    isDark ? 'border-blue-500/30' : 'border-orange-300'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className={`text-lg font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {roleData.role}
                      </h4>
                      <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {roleData.duration}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {roleData.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="flex items-start gap-3 group/item">
                          <ChevronRight className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            isDark ? 'text-blue-400' : 'text-orange-500'
                          } group-hover/item:translate-x-1 transition-transform`} />
                          <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

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
                className={`${cardClass} border rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all backdrop-blur-xl group`}
              >
                <div className="flex items-start justify-between mb-4">
                  {/* <div className={`inline-flex px-4 py-2 rounded-xl bg-gradient-to-r ${project.color} text-white font-bold text-sm shadow-lg`}>
                    {project.impact}
                  </div> */}
                  <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                    {project.date}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-3 ${
                  isDark ? 'text-slate-100 group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-orange-600'
                } transition-colors`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 leading-relaxed text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tidx) => (
                    <span 
                      key={tidx} 
                      className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        isDark 
                          ? 'bg-slate-800/70 text-slate-300 border border-slate-700/50' 
                          : 'bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                  <a 
                    href={project.links.github}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:scale-105 ${
                      isDark 
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.links.medium}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:scale-105 ${
                      isDark 
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    Article
                  </a>
                  <a 
                    href={project.links.youtube}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:scale-105 ${
                      isDark 
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <Youtube className="w-4 h-4" />
                    Demo
                  </a>
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
                    category === 'Programming' 
                      ? 'from-blue-500 to-cyan-500'
                      : category === 'ML & AI'
                      ? 'from-violet-500 to-purple-500'
                      : category === 'Cloud & DevOps'
                      ? 'from-emerald-500 to-teal-500'
                      : 'from-orange-500 to-amber-500'
                  } group-hover:scale-110 transition-transform`}>
                    {category === 'Programming' && <Code className="w-5 h-5 text-white" />}
                    {category === 'ML & AI' && <Cpu className="w-5 h-5 text-white" />}
                    {category === 'Cloud & DevOps' && <Cloud className="w-5 h-5 text-white" />}
                    {category === 'Data & Tools' && <Database className="w-5 h-5 text-white" />}
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

      {/* Certifications */}
      <section id="certifications" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Award className={`w-10 h-10 ${isDark ? 'text-cyan-400' : 'text-teal-500'}`} />
            <h2 className="text-4xl md:text-5xl font-bold">Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className={`${cardClass} border rounded-2xl p-6 backdrop-blur-xl hover:shadow-2xl transition-all group`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${
                  cert.issuer === 'Amazon Web Services'
                    ? 'from-orange-400 to-orange-600'
                    : cert.issuer === 'Microsoft'
                    ? 'from-blue-400 to-blue-600'
                    : 'from-purple-400 to-purple-600'
                } mb-4 group-hover:scale-110 transition-transform`}>
                  {cert.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {cert.title}
                </h3>
                <p className={`text-sm font-semibold mb-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {cert.issuer}
                </p>
                {/* <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  {cert.date}
                </p> */}
                {cert.link && cert.link !== "" && (
                  <div className="mt-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all hover:scale-105 ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                  </div>
                )}
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
            <h2 className="text-4xl md:text-5xl font-bold">Latest from Medium</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.blog_posts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} border rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all backdrop-blur-xl group block`}
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 text-white text-xs">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-slate-100 group-hover:text-emerald-400' : 'text-slate-900 group-hover:text-teal-600'
                  } transition-colors line-clamp-2`}>
                    {post.title}
                  </h3>
                  
                  <p className={`mb-4 text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
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
                    Read article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <a
              href={data.profile.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl ${
                isDark
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700'
                  : 'bg-gradient-to-br from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700'
              } text-white`}
            >
              <BookOpen className="w-5 h-5" />
              View All Articles on Medium
              <ExternalLink className="w-4 h-4" />
            </a>
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
          
          <div className="grid md:grid-cols-2 gap-6">
            {data.achievements.map((achievement, idx) => (
              <div 
                key={idx} 
                className={`${cardClass} border rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-all backdrop-blur-xl group`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${
                  idx === 0 
                    ? 'from-yellow-400 to-orange-500'
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
            Feel free to connect with me via email or social media links provided above.
          </p>
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            © 2025 Sri Ram Sathiya Narayanan.
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
