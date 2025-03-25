import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  UserIcon, 
  BriefcaseIcon, 
  AcademicCapIcon, 
  EnvelopeIcon,
  FolderIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about')

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
      </div>

      {/* Split Screen Layout */}
      <div className="flex min-h-screen">
        {/* Left Sidebar - Navigation & Profile */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-80 bg-white/5 backdrop-blur-xl border-r border-white/10 p-8 flex flex-col"
        >
          {/* Profile Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
              Londiwe Amanda Shibe
            </h1>
            <p className="text-lg text-gray-300 flex items-center justify-center">
              <SparklesIcon className="h-5 w-5 mr-2 text-yellow-400" />
              SDS EMEA Reserve Lead
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <div className="space-y-2">
              {[
                { id: 'about', name: 'About', icon: UserIcon },
                { id: 'experience', name: 'Experience', icon: BriefcaseIcon },
                { id: 'projects', name: 'Projects', icon: FolderIcon },
                { id: 'education', name: 'Education', icon: AcademicCapIcon },
                { id: 'contact', name: 'Contact', icon: EnvelopeIcon },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-indigo-500/20 text-white border border-indigo-500/50'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                  {activeSection === item.id && (
                    <ChevronRightIcon className="h-4 w-4 ml-auto" />
                  )}
                </motion.button>
              ))}
            </div>
          </nav>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              {...fadeInUp}
              className="max-w-4xl mx-auto"
            >
              {activeSection === 'about' && (
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg shadow-indigo-500/10">
                    <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Results-driven professional with expertise in operations management, customer service, and team leadership. Skilled at optimizing processes, enhancing efficiency, and driving customer satisfaction. Additionally, a self-taught web and app developer passionate about creating user-centric digital solutions. Adept at blending strategic thinking with technical skills to solve problems and deliver impactful results.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'experience' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <BriefcaseIcon className="h-8 w-8 mr-3 text-indigo-400" />
                    Work Experience
                  </h2>
                  <div className="space-y-6">
                    {/* Amazon Experience */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Amazon — Shipping and Delivery Support EMEA Reserve Lead / EMEA (A)Team Manager</h3>
                      <p className="text-gray-300">January 2023 - April 2024</p>
                      <p className="text-sm text-indigo-400 italic mb-4">Completed Amazon Team Management Program</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        <li>Served on multiple committees including Employee Health and Safety, Engagement, and Process Improvement for EMEA region</li>
                        <li>Conducted comprehensive policy reviews and implemented updates for shipping and delivery operations</li>
                        <li>Led cross-functional support teams and monitored KPIs for operational effectiveness</li>
                        <li>Implemented strategies to optimize supply chain efficiency and enhance customer satisfaction</li>
                        <li>Developed and conducted comprehensive training programs for team members</li>
                        <li>Mentored and supported professional development of team members</li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Amazon — Shipping and Delivery Support Subject Matter Expert and Trainer</h3>
                      <p className="text-gray-300">January 2022 - December 2023</p>
                      <p className="text-sm text-indigo-400 italic mb-4">Completed Amazon Thrive Leadership Program</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        <li>Provided comprehensive training to new associates on SDS processes and tools</li>
                        <li>Developed and implemented process improvements to enhance workflow efficiency</li>
                        <li>Created and maintained training materials and troubleshooting manuals</li>
                        <li>Mentored junior associates and provided ongoing support for performance goals</li>
                        <li>Worked with cross-functional teams to ensure seamless process integration</li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Amazon — Shipping and Delivery Support Associate</h3>
                      <p className="text-gray-300">September 2020 - December 2021</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        <li>Handled customer inquiries and resolved shipping and delivery concerns</li>
                        <li>Utilized logistics technologies for real-time shipment tracking</li>
                        <li>Managed documentation and collaborated with logistics partners</li>
                        <li>Worked with cross-functional teams to streamline shipping processes</li>
                        <li>Identified opportunities for process improvement</li>
                      </ul>
                    </motion.div>

                    {/* Previous Experience */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Ukhozi Hardware — Office Manager</h3>
                      <p className="text-gray-300">July 2019 - August 2020</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        <li>Managed daily office operations and administrative tasks</li>
                        <li>Coordinated team dispatch and project scheduling</li>
                        <li>Handled inventory management and supply ordering</li>
                        <li>Managed accounts receivable and payable</li>
                        <li>Supervised office staff and implemented operational procedures</li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Talk Talk(CCI) — Network Case Manager</h3>
                      <p className="text-gray-300">January 2017 - October 2017</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        <li>Handled escalated queries and resolved technical issues</li>
                        <li>Conducted network and system checks using specialized tools</li>
                        <li>Collaborated with engineers for complex problem resolution</li>
                        <li>Ensured compliance with industry standards and company policies</li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Virgin Mobile — Supervisor/2IC</h3>
                      <p className="text-gray-300">August 2014 - January 2015</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        <li>Supervised Call Centre operations and maintained service levels</li>
                        <li>Handled escalated queries and provided resolution</li>
                        <li>Monitored agent performance and provided guidance</li>
                        <li>Engaged in Workforce Management activities</li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Virgin Mobile — Customer Service Agent</h3>
                      <p className="text-gray-300">April 2013 - June 2014</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        <li>Consistently achieved and exceeded target performance metrics</li>
                        <li>Established and maintained strong client relationships</li>
                        <li>Efficiently resolved client queries within required handling time</li>
                        <li>Accurately documented call notes and maintained comprehensive records</li>
                        <li>Proactively followed up on open queries</li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">The Creative Counsel — Promotions Supervisor</h3>
                      <p className="text-gray-300">November 2010 - March 2013</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        <li>Managed promotional materials and event coordination</li>
                        <li>Liaised with stakeholders and coordinated staff activities</li>
                        <li>Provided detailed reports and maintained records</li>
                        <li>Ensured compliance with standards and specifications</li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">The Creative Counsel — Promoter</h3>
                      <p className="text-gray-300">November 2009 - June 2010</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        <li>Managed promotional materials and product communication</li>
                        <li>Met required sales targets through strategic planning</li>
                        <li>Handled paperwork and maintained accurate records</li>
                        <li>Engaged in daily correspondence with management</li>
                        <li>Ensured timely completion of tasks and objectives</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeSection === 'projects' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <RocketLaunchIcon className="h-8 w-8 mr-3 text-indigo-400" />
                    Projects
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "JavaScript Calculator",
                        tech: "HTML5 • CSS3 • Vanilla JavaScript • Font Awesome • Node.js",
                        description: "A fully functional calculator built with vanilla JavaScript, featuring basic arithmetic operations, percentage calculations, and a responsive design that works on all devices. Demonstrates JavaScript fundamentals including event handling and DOM manipulation.",
                        demo: "https://londi12.github.io/calculator-app/",
                        gallery: "#"
                      },
                      {
                        title: "Python Snake Game",
                        tech: "Python 3 • Pygame • Object-Oriented Programming • File I/O",
                        description: "A modern implementation of the classic arcade game featuring multiple difficulty levels, dynamic obstacles, combo system, and persistent high score tracking. Built with Python and Pygame, demonstrating game development fundamentals including object-oriented programming and real-time graphics rendering.",
                        demo: "https://londi12.github.io/snake/",
                        gallery: "#"
                      },
                      {
                        title: "Londiwe Amanda Shibe's Personal Portfolio",
                        tech: "React • TypeScript • Tailwind CSS • Framer Motion • Heroicons • Vite • Headless UI",
                        description: "A sleek, interactive showcase of my professional experience, skills, and projects featuring smooth animations, dark mode aesthetics, and a responsive design. Highlights my professional journey, technical abilities, and project accomplishments in an engaging and visually appealing manner.",
                        demo: "#",
                        gallery: "#"
                      },
                      {
                        title: "Weather Dashboard",
                        tech: "React • OpenWeather API • Chart.js",
                        description: "Created an interactive weather dashboard with 5-day forecasts and data visualization.",
                        demo: "https://weather-jade-tau.vercel.app/",
                        gallery: "#"
                      }
                    ].map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white/5 backdrop-blur-xl rounded-xl p-6 shadow-lg shadow-indigo-500/10 border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
                        <p className="text-gray-300 mb-6">{project.description}</p>
                        <div className="flex space-x-4">
                          {project.title === "Londiwe Amanda Shibe's Personal Portfolio" ? (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg"
                            >
                              <SparklesIcon className="h-4 w-4 mr-2 text-yellow-400" />
                              Since you're already here... I guess we don't need a demo!
                            </motion.div>
                          ) : (
                            <motion.a 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.demo} 
                              className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/25"
                            >
                              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                              View Demo
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'education' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <AcademicCapIcon className="h-8 w-8 mr-3 text-indigo-400" />
                    Education & Certifications
                  </h2>
                  <div className="space-y-6">
                    {/* Amazon Certifications */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Amazon Leadership & Development Programs</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-indigo-400 font-medium">Amazon Team Management Program</p>
                          <p className="text-gray-300">2024</p>
                        </div>
                        <div>
                          <p className="text-indigo-400 font-medium">Amazon Thrive Leadership Program</p>
                          <p className="text-gray-300">2022</p>
                        </div>
                        <div>
                          <p className="text-indigo-400 font-medium">Amazon Cloud Challenge</p>
                          <p className="text-gray-300">Internal Amazon Development Program • 2022</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Professional Certifications</h3>
                      <div className="mt-4">
                        <div>
                          <p className="text-indigo-400 font-medium">AWS Certified Cloud Practitioner</p>
                          <p className="text-gray-300">2022</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white">Formal Education</h3>
                      <div className="mt-4">
                        <div>
                          <p className="text-indigo-400 font-medium">Matriculation</p>
                          <p className="text-gray-300">2008</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeSection === 'contact' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <EnvelopeIcon className="h-8 w-8 mr-3 text-indigo-400" />
                    Contact
                  </h2>
                  <div className="space-y-6">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg shadow-indigo-500/10"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <EnvelopeIcon className="h-6 w-6 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Email</h3>
                          <a href="mailto:londiweshibe@gmail.com" className="text-indigo-400 hover:text-indigo-300">
                            londiweshibe@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Phone</h3>
                          <a href="tel:+27732073294" className="text-indigo-400 hover:text-indigo-300">
                            (+27) 073 2073294
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default App 