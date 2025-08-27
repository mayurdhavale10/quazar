// src/app/browse-topic/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Browse Topics · Quazar',
};

export default function BrowseTopicPage() {
  const BRAND_YELLOW = '#ffd700';
  
  // Define syllabus outcomes directly or import from a valid path
  const syllabusOutcomes = [
    'Understanding protons, neutrons, and electrons',
    'Interactive electron shell configurations',
    'Valency determination and chemical bonding'
  ];
  
  // Only Atomic Structure is actually available
  const availableTopics = [
    {
      slug: 'atomic-structure',
      title: 'Atomic Structure',
      description: 'Electron shells, valency, isotopes, and the first 20 elements—explained with interactive 3D visualizations.',
      cover: '/images/universe.webp',
      bullets: syllabusOutcomes,
      level: 'Class 10',
      duration: '45 min',
      interactive: true,
      link: '/launch-atomic-structure'
    }
  ];

  const upcomingTopics = [
    {
      slug: 'waves',
      title: 'Waves',
      description: 'Wave properties, interference, diffraction, and sound waves with interactive simulations and real-world applications.',
      cover: '/images/universe2.webp',
      bullets: [
        'Wave motion and characteristics',
        'Sound wave propagation and properties',
        'Interference and superposition principles'
      ],
      level: 'Class 10',
      duration: '50 min',
      status: 'In Development'
    },
    {
      slug: 'optics',
      title: 'Optics',
      description: 'Light behavior, reflection, refraction, lenses, and optical instruments through interactive ray diagrams.',
      cover: '/images/universe3.webp',
      bullets: [
        'Laws of reflection and refraction',
        'Lens formula and magnification',
        'Optical instrument working principles'
      ],
      level: 'Class 10',
      duration: '55 min',
      status: 'In Development'
    },
    {
      slug: 'area-triangles',
      title: 'Area of Triangles',
      description: 'Comprehensive triangle geometry including area calculations, coordinate geometry, and practical applications.',
      cover: '/images/universe.webp',
      bullets: [
        'Multiple area calculation methods',
        'Coordinate geometry applications',
        'Real-world problem solving'
      ],
      level: 'Class 10',
      duration: '40 min',
      status: 'Coming Soon'
    },
    {
      slug: 'fluids',
      title: 'Fluids',
      description: 'Fluid mechanics, pressure, buoyancy, and flow dynamics with interactive pressure and flow visualizations.',
      cover: '/images/universe2.webp',
      bullets: [
        'Pressure and Pascal&apos;s principle',
        'Archimedes&apos; principle and buoyancy',
        'Fluid flow and Bernoulli&apos;s equation'
      ],
      level: 'Class 10',
      duration: '48 min',
      status: 'Coming Soon'
    },
    {
      slug: 'chemical-bonding',
      title: 'Chemical Bonding',
      description: 'Ionic, covalent, and metallic bonds with 3D molecular models and electron sharing visualizations.',
      cover: '/images/universe3.webp',
      bullets: [
        'Ionic and covalent bond formation',
        '3D molecular structure visualization',
        'Electronegativity and bond polarity'
      ],
      level: 'Class 10',
      duration: '52 min',
      status: 'Planned'
    },
    {
      slug: 'periodic-table',
      title: 'Periodic Table',
      description: 'Interactive periodic table with element properties, trends, and predictive capabilities.',
      cover: '/images/universe.webp',
      bullets: [
        'Periodic trends and patterns',
        'Element property predictions',
        'Group and period characteristics'
      ],
      level: 'Class 10',
      duration: '45 min',
      status: 'Planned'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-6 md:px-10 pt-36 md:pt-44 pb-20">
        <header className="mb-16 text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-extrabold text-black dark:text-white mb-8 tracking-tight">
            Browse Topics
          </h1>
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium">
              Explore interactive learning modules designed to transform complex scientific and mathematical concepts into engaging, visual experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Each module integrates AI-powered analytics to track your progress and provide personalized support exactly when you need it.
            </p>
          </div>
        </header>

        {/* Available Topics */}
        <section className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 bg-gradient-to-r from-transparent to-yellow-400 flex-1 max-w-32"></div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black dark:text-white mb-2">Available Now</h2>
              <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold rounded-full">
                {availableTopics.length} Interactive Module
              </div>
            </div>
            <div className="h-1 bg-gradient-to-l from-transparent to-yellow-400 flex-1 max-w-32"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-md">
              {availableTopics.map((topic) => (
                <article
                  key={topic.slug}
                  className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-4"
                  style={{ borderColor: BRAND_YELLOW }}
                >
                  {/* Premium Image Container */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={topic.cover}
                      alt={topic.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Premium Available Badge */}
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ✓ Available Now
                    </div>
                    
                    {/* Floating Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-serif text-3xl font-bold text-white mb-2 drop-shadow-lg">
                        {topic.title}
                      </h3>
                    </div>
                  </div>

                  {/* Premium Content */}
                  <div className="p-8">
                    {/* Meta Information */}
                    <div className="flex items-center gap-6 mb-6 text-sm">
                      <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold">
                        <span>📚</span> {topic.level}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold">
                        <span>⏱️</span> {topic.duration}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                      {topic.description}
                    </p>

                    {/* Premium Learning Outcomes */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                        What you&apos;ll master:
                      </h4>
                      <ul className="space-y-3">
                        {topic.bullets.map((bullet: string, bulletIndex: number) => (
                          <li key={bulletIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex-shrink-0 mt-3"></div>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Premium Launch Button */}
                    <Link
                      href={topic.link}
                      className="block w-full text-center py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                      Launch Interactive Module →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Topics */}
        <section className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 bg-gradient-to-r from-transparent to-orange-400 flex-1 max-w-32"></div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black dark:text-white mb-2">Coming Soon</h2>
              <div className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold rounded-full">
                {upcomingTopics.length} Modules in Development
              </div>
            </div>
            <div className="h-1 bg-gradient-to-l from-transparent to-orange-400 flex-1 max-w-32"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingTopics.map((topic) => (
              <article
                key={topic.slug}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 opacity-75 hover:opacity-90"
              >
                {/* Image with Coming Soon Overlay */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={topic.cover}
                    alt={topic.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-50 transition-all duration-500"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      topic.status === 'In Development' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-500 text-white'
                    }`}>
                      {topic.status}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 dark:text-gray-400">
                    <span>📚 {topic.level}</span>
                    <span>⏱️ {topic.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-gray-700 dark:text-gray-300 mb-3">
                    {topic.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {topic.description}
                  </p>

                  {/* Learning Outcomes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Planned features:
                    </h4>
                    <ul className="space-y-1">
                      {topic.bullets.map((bullet: string, bulletIndex: number) => (
                        <li key={bulletIndex} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className="text-orange-400 font-bold flex-shrink-0 mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coming Soon Button */}
                  <button
                    disabled
                    className="w-full py-3 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-semibold rounded-xl cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Enhanced Platform Features */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-12 text-center">
            The Quazar Advantage
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="font-bold text-2xl text-black dark:text-white mb-4">
                AI-Powered Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Advanced tracking identifies learning gaps and provides personalized support exactly when you need it most
              </p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="font-bold text-2xl text-black dark:text-white mb-4">
                Interactive Simulations
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                3D visualizations and hands-on experiments make complex concepts tangible and understandable
              </p>
            </div>
            
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="font-bold text-2xl text-black dark:text-white mb-4">
                Deep Understanding
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Focus on the &apos;why&apos; behind concepts with comprehensive explanations that build lasting knowledge
              </p>
            </div>
          </div>
        </section>

        {/* Premium Call to Action */}
        <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 rounded-3xl p-12 border-4 text-center shadow-2xl" style={{ borderColor: BRAND_YELLOW }}>
          <h2 className="font-serif text-5xl font-bold text-black dark:text-white mb-8">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Begin with our interactive Atomic Structure module and experience how Quazar transforms complex scientific concepts into engaging, understandable lessons through AI-powered personalized learning.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/launch-atomic-structure"
              className="px-12 py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Launch Atomic Structure
            </Link>
            <Link
              href="https://www.quazaredu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xl rounded-2xl border-3 border-gray-300 dark:border-gray-600 hover:border-yellow-400 dark:hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Full Platform
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}