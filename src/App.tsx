import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Cloud, Server } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Sistema de Gestão Hospitalar',
    description: 'Aplicação web completa para gestão hospitalar com agendamento de consultas e prontuário eletrônico',
    tech: ['C#', '.NET Core', 'Angular', 'SQL Server'],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800&h=500',
    links: {
      demo: 'https://hospital-demo.example.com',
      github: 'https://github.com/emanuelle/hospital-system'
    }
  },
  {
    title: 'E-commerce com Microserviços',
    description: 'Plataforma de e-commerce baseada em microserviços com processamento assíncrono',
    tech: ['Java', 'Spring Boot', 'MongoDB', 'RabbitMQ', 'AWS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=500',
    links: {
      demo: 'https://ecommerce-demo.example.com',
      github: 'https://github.com/emanuelle/ecommerce-ms'
    }
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard para análise de dados em tempo real com integração de múltiplas fontes de dados',
    tech: ['Python', 'FastAPI', 'Angular', 'MongoDB', 'Azure'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500',
    links: {
      demo: 'https://analytics-demo.example.com',
      github: 'https://github.com/emanuelle/analytics-dashboard'
    }
  }
];

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 className="w-6 h-6" />,
    items: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI']
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: ['Python', 'Java', 'C#', '.NET Core', 'Spring Boot', 'FastAPI']
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    items: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Redis']
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    items: ['AWS', 'Azure', 'Docker', 'Git', 'CI/CD']
  }
];

function Section({ children, id }: { children: React.ReactNode; id: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="section-container"
    >
      {children}
    </motion.section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Section id="home">
        <div className="flex flex-col items-center text-center">
          <motion.img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Emanuelle Gomes"
            className="w-32 h-32 rounded-full mb-6 object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Olá, eu sou <span className="gradient-text">Emanuelle Gomes</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Desenvolvedora Fullstack apaixonada por criar soluções inovadoras e escaláveis, 
            com experiência em Python, Java, C# e tecnologias cloud.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Entre em contato
            </a>
            <a href="#projects" className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
              Ver projetos
            </a>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
          <p>
            Com 5 anos de experiência no desenvolvimento de software, sou uma desenvolvedora Fullstack
            especializada em criar soluções web robustas e escaláveis. Minha jornada inclui experiências
            significativas com Python, Java, C#, Angular e bancos de dados SQL Server e MongoDB.
          </p>
          <p>
            Atualmente, estou me especializando em tecnologias de nuvem como AWS e Azure, buscando
            expandir meus horizontes para oportunidades internacionais. Minha experiência inclui
            estágios e projetos freelance, e agora busco minha primeira posição oficial como
            desenvolvedora júnior.
          </p>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <h2 className="section-title">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <h2 className="section-title">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <h2 className="section-title">Contato</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/emanuelle" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://linkedin.com/in/emanuelle-gomes" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="mailto:emanuelle.gomes@example.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}

export default App;