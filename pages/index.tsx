import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Peter Jones - Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Peter Jones, Full-Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <h1 className="text-2xl font-bold">Peter Jones</h1>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="container mx-auto py-24 sm:py-32 px-4">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Full-Stack Developer
            </h2>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Crafting elegant solutions to complex problems. Passionate about creating efficient, scalable, and user-friendly applications.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Get in touch
              </a>
              <a href="#projects" className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                View projects
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-50 py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  I specialize in building robust and scalable applications using modern technologies. My expertise spans both front-end and back-end development, with a strong focus on JavaScript ecosystems.
                </p>
                <p className="text-gray-600">
                  I'm passionate about clean code, performance optimization, and creating intuitive user experiences. When I'm not coding, you can find me outdoors.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Skills</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>Next.js</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container mx-auto py-24 sm:py-32 px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div key={project} className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={`/placeholder.svg`}
                  alt={`Project ${project}`}
                  width={400}
                  height={200}
                  className="aspect-video object-cover rounded-md"
                />
                <h3 className="text-xl font-bold">Project {project}</h3>
                <p className="text-sm text-gray-600">
                  A brief description of the project, highlighting key features and technologies used.
                </p>
                <div className="flex gap-2 mt-auto pt-4">
                  <a href="#" className="text-blue-600 hover:underline">View Project</a>
                  <a href="#" className="text-blue-600 hover:underline flex items-center">
                    <Github className="mr-1 h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-gray-50 py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/Pj29" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/peter-a-jones/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="mailto:pjxcvi@proton.me" className="text-gray-600 hover:text-gray-900">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
              <form className="flex flex-col gap-4" action="https://formspree.io/f/myzgvbly" name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <input className="border rounded-md px-3 py-2" type="text" name="name" placeholder="Name" required />
                <input className="border rounded-md px-3 py-2" type="email" name="email" placeholder="Email" required />
                <textarea className="border rounded-md px-3 py-2" name="message" placeholder="Message" required></textarea>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col gap-2 py-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-gray-600">© 2024 Peter Jones. All rights reserved.</p>
          <p className="text-sm text-gray-600">
            Built with <a href="https://nextjs.org" className="underline underline-offset-4">Next.js</a> and <a href="https://tailwindcss.com" className="underline underline-offset-4">Tailwind CSS</a>
          </p>
        </div>
      </footer>
    </div>
  )
}