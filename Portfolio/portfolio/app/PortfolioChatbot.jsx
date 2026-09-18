import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

const PortfolioChatbot = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Sri Ram's AI assistant. Ask me anything about his experience, projects, skills, or availability!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Knowledge base about Sri Ram
  const knowledgeBase = {
    profile: {
      name: "Sri Ram Sathiya Narayanan",
      title: "AI Engineer & Technology Consultant",
      location: "Boston, MA",
      education: "MS in Computer Science at Northeastern University (Expected Dec 2026)",
      availability: "Seeking co-op opportunities starting January 2026",
      email: "sathiyanarayanan.sr@northeastern.edu"
    },
    experience: {
      current: "Recently completed role as Consultant at Ernst & Young",
      years: "3+ years of professional experience at EY India",
      focus: "Technology Consulting, Data Analytics, and Supply Chain Optimization",
      achievements: [
        "Reduced process bottlenecks by 20%",
        "Improved procurement efficiency by 20%",
        "Reduced inventory wastage by 10%",
        "Achieved 93% model accuracy in ML projects"
      ]
    },
    skills: {
      languages: ["Python", "R", "SQL", "Java"],
      ml_ai: ["Spark MLlib", "BioBERT", "RAG", "LangChain", "HuggingFace"],
      cloud: ["AWS", "Docker", "Databricks", "GitHub Actions"],
      data: ["Power BI", "MySQL", "MongoDB", "Excel", "FAISS"]
    },
    projects: [
      {
        name: "Biomedical RAG Summarization Pipeline",
        impact: "40% reduction in manual review time",
        tech: ["Python", "LangChain", "BioBERT", "FAISS", "GPT-4"]
      },
      {
        name: "FMCG Lakehouse ETL Pipeline",
        impact: "Unified analytics platform",
        tech: ["Databricks", "Apache Spark", "AWS S3", "Power BI"]
      },
      {
        name: "Text-to-SQL Chatbot",
        impact: "Real-time database querying",
        tech: ["LangChain", "Multi-LLM", "FastAPI", "MySQL"]
      },
      {
        name: "Big Data Regression",
        impact: "93% model accuracy on 1M+ records",
        tech: ["Spark MLlib", "Zeppelin", "Databricks"]
      }
    ],
    achievements: [
      "2nd Place at Microsoft Boston Hackathon (Best Use of Enterprise Automation Agent)",
      "AWS Certified AI Practitioner",
      "Azure AI Fundamentals",
      "Working on Agentic AI and MCP projects"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Simple AI response generator
  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Greeting
    if (input.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! I'd be happy to tell you about Sri Ram's background, skills, projects, or availability. What would you like to know?";
    }

    // Experience queries
    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      return `Sri Ram has ${knowledgeBase.experience.years} at Ernst & Young, specializing in ${knowledgeBase.experience.focus}. He's achieved remarkable results including:\n\n• ${knowledgeBase.experience.achievements.join('\n• ')}\n\nWould you like to know more about any specific role?`;
    }

    // Skills queries
    if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
      return `Sri Ram is proficient in:\n\n🔹 Languages: ${knowledgeBase.skills.languages.join(', ')}\n🔹 ML & AI: ${knowledgeBase.skills.ml_ai.slice(0, 3).join(', ')}, and more\n🔹 Cloud: ${knowledgeBase.skills.cloud.join(', ')}\n🔹 Data Tools: ${knowledgeBase.skills.data.slice(0, 3).join(', ')}, and more\n\nWhat specific technology would you like to discuss?`;
    }

    // Projects queries
    if (input.includes('project') || input.includes('portfolio') || input.includes('work sample')) {
      const projectList = knowledgeBase.projects.map((p, i) => 
        `${i + 1}. ${p.name}\n   Impact: ${p.impact}\n   Tech: ${p.tech.slice(0, 3).join(', ')}`
      ).join('\n\n');
      return `Here are Sri Ram's featured projects:\n\n${projectList}\n\nWhich project interests you most?`;
    }

    // Specific project queries
    if (input.includes('rag') || input.includes('biomedical')) {
      const project = knowledgeBase.projects[0];
      return `The ${project.name} is a healthcare-specific solution that achieved a ${project.impact}. It uses advanced technologies including ${project.tech.join(', ')}. This demonstrates expertise in production-ready AI systems.`;
    }

    if (input.includes('etl') || input.includes('lakehouse') || input.includes('databricks')) {
      const project = knowledgeBase.projects[1];
      return `The ${project.name} ${project.impact} for retail data consolidation. Built with ${project.tech.join(', ')}, it showcases expertise in building scalable data infrastructure.`;
    }

    if (input.includes('text-to-sql') || input.includes('chatbot') || input.includes('nlp')) {
      const project = knowledgeBase.projects[2];
      return `The ${project.name} enables ${project.impact}. It leverages ${project.tech.join(', ')} to convert natural language into SQL queries seamlessly.`;
    }

    // Education queries
    if (input.includes('education') || input.includes('degree') || input.includes('university') || input.includes('northeastern')) {
      return `Sri Ram is pursuing an ${knowledgeBase.profile.education}. He completed his Bachelor's in Computer Science from B.S. Abdur Rahman Crescent Institute in India. His coursework includes Data Structures, Algorithms, Machine Learning, and MLOps.`;
    }

    // Availability queries
    if (input.includes('available') || input.includes('hire') || input.includes('co-op') || input.includes('coop') || input.includes('opportunity')) {
      return `Yes! Sri Ram is ${knowledgeBase.profile.availability}. He's looking for roles in Data Science, AI Engineering, or Software Engineering. You can reach him at ${knowledgeBase.profile.email}.`;
    }

    // Contact queries
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return `You can reach Sri Ram at:\n\n📧 Email: ${knowledgeBase.profile.email}\n📍 Location: ${knowledgeBase.profile.location}\n\nFeel free to connect on LinkedIn or GitHub through the links on this page!`;
    }

    // Achievement queries
    if (input.includes('achievement') || input.includes('award') || input.includes('hackathon') || input.includes('certification')) {
      return `Sri Ram's recent achievements include:\n\n🏆 ${knowledgeBase.achievements.join('\n🏆 ')}\n\nHis hackathon win at Microsoft Boston showcased innovation in enterprise automation!`;
    }

    // Python queries
    if (input.includes('python')) {
      return `Sri Ram is highly proficient in Python! He's used it extensively for:\n• Machine Learning pipelines (Spark MLlib, BioBERT)\n• Data analysis and ETL workflows\n• Building APIs with FastAPI\n• RAG systems with LangChain\n\nHe has 3+ years of production Python experience.`;
    }

    // ML/AI queries
    if (input.includes('machine learning') || input.includes('ml') || input.includes('ai') || input.includes('artificial intelligence')) {
      return `Sri Ram specializes in AI/ML with hands-on experience in:\n• Building RAG systems with LangChain and BioBERT\n• Production ML pipelines with Spark MLlib (93% accuracy)\n• Agentic AI and MCP projects\n• NLP systems (Text-to-SQL chatbots)\n\nHe's AWS Certified AI Practitioner and actively working on cutting-edge AI projects.`;
    }

    // Cloud queries
    if (input.includes('aws') || input.includes('cloud') || input.includes('databricks')) {
      return `Sri Ram has strong cloud expertise:\n• AWS services (EC2, Lambda, S3)\n• Databricks for data engineering\n• Docker containerization\n• CI/CD with GitHub Actions\n\nHe's built scalable cloud-native solutions and holds AWS AI Practitioner certification.`;
    }

    // Default response
    return "I'd love to help! You can ask me about:\n\n• Sri Ram's work experience and achievements\n• Technical skills and expertise\n• Featured projects and their impact\n• Education and certifications\n• Availability and contact information\n\nWhat would you like to know?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = generateResponse(input);
      const assistantMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "Tell me about Sri Ram's experience",
    "What are his technical skills?",
    "Show me his projects",
    "Is he available for hire?",
    "What certifications does he have?"
  ];

  const handleQuickQuestion = (question) => {
    setInput(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isDark
            ? 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
            : 'bg-gradient-to-br from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600'
        } ${isOpen ? 'rotate-0' : 'rotate-0'}`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 z-50 w-96 h-[600px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isDark
              ? 'bg-slate-900 border border-slate-700'
              : 'bg-white border border-orange-200'
          }`}
        >
          {/* Header */}
          <div
            className={`p-4 ${
              isDark
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                : 'bg-gradient-to-r from-orange-500 to-rose-500'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-white">Sri Ram's AI Assistant</h3>
                <p className="text-xs text-white/80">Online • Instant replies</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            className={`h-[400px] overflow-y-auto p-4 space-y-4 ${
              isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-orange-50/30 to-rose-50/30'
            }`}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === 'user'
                      ? isDark
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                        : 'bg-gradient-to-br from-orange-500 to-rose-500'
                      : isDark
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                      : 'bg-gradient-to-br from-amber-500 to-orange-500'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] rounded-2xl p-3 ${
                    message.role === 'user'
                      ? isDark
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white'
                        : 'bg-gradient-to-br from-orange-500 to-rose-500 text-white'
                      : isDark
                      ? 'bg-slate-800 text-slate-100'
                      : 'bg-white text-slate-900 shadow-sm border border-orange-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                  <span
                    className={`text-xs mt-1 block ${
                      message.role === 'user'
                        ? 'text-white/70'
                        : isDark
                        ? 'text-slate-400'
                        : 'text-slate-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isDark
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                      : 'bg-gradient-to-br from-amber-500 to-orange-500'
                  }`}
                >
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div
                  className={`rounded-2xl p-3 ${
                    isDark ? 'bg-slate-800' : 'bg-white shadow-sm border border-orange-100'
                  }`}
                >
                  <Loader2 className={`w-5 h-5 animate-spin ${isDark ? 'text-blue-400' : 'text-orange-500'}`} />
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="space-y-2 mt-4">
                <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-2`}>
                  Quick questions:
                </p>
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(question)}
                    className={`w-full text-left text-xs p-3 rounded-xl transition-all hover:scale-105 ${
                      isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                        : 'bg-white hover:bg-orange-50 text-slate-700 border border-orange-200 shadow-sm'
                    }`}
                  >
                    <Sparkles className={`w-3 h-3 inline mr-2 ${isDark ? 'text-blue-400' : 'text-orange-500'}`} />
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${isDark ? 'border-slate-800 bg-slate-900' : 'border-orange-200 bg-white'}`}>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className={`flex-1 px-4 py-2.5 rounded-xl border transition-all focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-500 focus:ring-blue-500'
                    : 'bg-orange-50 border-orange-200 text-slate-900 placeholder-slate-500 focus:ring-orange-500'
                }`}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className={`p-2.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                    : 'bg-gradient-to-br from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600'
                }`}
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioChatbot;