
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.querySelector("#hl-aria-live-alert-container");
      if (el) el.remove();
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Caleb Woldemedhine</h1>
            <div className="space-x-6">
              <Link href="#about" className="hover:text-blue-600">About</Link>
              <Link href="#experience" className="hover:text-blue-600">Experience</Link>
              <Link href="#projects" className="hover:text-blue-600">Projects</Link>
              <Link href="#contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Hello, I'm</h2>
              <h1 className="text-5xl font-bold mb-6">Caleb Woldemedhine</h1>
              <p className="text-xl mb-8">Currently a junior at University of Denver</p>
              <div className="space-x-4">
                <Link href="/resume.pdf" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  Resume
  import { useEffect } from 'react';
  
  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.querySelector("#hl-aria-live-alert-container");
      if (el) el.remove();
    }, 500);
    return () => clearInterval(interval);
  }, []);
                </Link>
                <Link href="#contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                  Contact Info
                </Link>
              </div>
              <div className="mt-6 space-x-4">
                <Link href="https://linkedin.com/in/caleb-woldemedhine" className="text-blue-600 hover:underline">
                  My LinkedIn Profile
                </Link>
                <Link href="https://github.com/yourusername" className="text-blue-600 hover:underline">
                  My Github Profile
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/profile.jpg"
                  alt="Caleb Woldemedhine"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">
              Hello, my name is Caleb Woldemedhine. I am a junior studying Computer Science with a concentration in AI and ML Development. With experience in Python, Java, SQL, and AI/ML technologies such as generative AI, time-series forecasting, and data visualization, I am eager to apply my skills to real-world challenges. I am seeking an internship in data analytics, LLMs, machine learning, or AI.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">HTML</p>
                  <p className="text-gray-600">Intermediate</p>
                </div>
                <div>
                  <p className="font-medium">CSS</p>
                  <p className="text-gray-600">Intermediate</p>
                </div>
                <div>
                  <p className="font-medium">JavaScript</p>
                  <p className="text-gray-600">Basic</p>
                </div>
                <div>
                  <p className="font-medium">React</p>
                  <p className="text-gray-600">Intermediate</p>
                </div>
              </div>
            </div>

            {/* AI/ML Development */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">AI/ML Development</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Python</p>
                  <p className="text-gray-600">Advanced</p>
                </div>
                <div>
                  <p className="font-medium">TensorFlow</p>
                  <p className="text-gray-600">Intermediate</p>
                </div>
                <div>
                  <p className="font-medium">PyTorch</p>
                  <p className="text-gray-600">Intermediate</p>
                </div>
                <div>
                  <p className="font-medium">Scikit-learn</p>
                  <p className="text-gray-600">Advanced</p>
                </div>
              </div>
            </div>

            {/* Data Science */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data Science</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">SQL</p>
                  <p className="text-gray-600">Intermediate</p>
                </div>
                <div>
                  <p className="font-medium">Pandas</p>
                  <p className="text-gray-600">Advanced</p>
                </div>
                <div>
                  <p className="font-medium">Data Visualization</p>
                  <p className="text-gray-600">Intermediate</p>
                </div>
                <div>
                  <p className="font-medium">Statistical Analysis</p>
                  <p className="text-gray-600">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Stock Predictor</h3>
              <p className="text-gray-600 mb-4">Machine learning model for stock price prediction</p>
              <div className="space-x-4">
                <Link href="https://github.com/yourusername/stock-predictor" className="text-blue-600 hover:underline">
                  Github
                </Link>
                <Link href="#" className="text-blue-600 hover:underline">
                  Live Demo
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sand Game</h3>
              <p className="text-gray-600 mb-4">Interactive particle simulation</p>
              <div className="space-x-4">
                <Link href="https://github.com/yourusername/sand-game" className="text-blue-600 hover:underline">
                  Github
                </Link>
                <Link href="#" className="text-blue-600 hover:underline">
                  Live Demo
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Auto Sales Analysis</h3>
              <p className="text-gray-600 mb-4">Data analysis project for auto sales</p>
              <div className="space-x-4">
                <Link href="https://github.com/yourusername/auto-sales" className="text-blue-600 hover:underline">
                  Github
                </Link>
                <Link href="#" className="text-blue-600 hover:underline">
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-blue-600">Email:</span>
                <a href="mailto:caleb.woldemedhine1@gmail.com" className="hover:underline">
                  caleb.woldemedhine1@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-600">LinkedIn:</span>
                <a href="https://linkedin.com/in/caleb-woldemedhine" className="hover:underline">
                  Caleb-Woldemedhine
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>Copyright © 2025 Caleb Woldemedhine. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}