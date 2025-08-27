'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';

// Define Shell type
export interface Shell {
  level: number;
  n: number;
  index: number;
  electrons: number;
  filled: number;
  count: number;
  capacity: number;
}

// Define Element type
interface Element {
  name: string;
  symbol: string;
  protons: number;
  neutrons: number;
  electrons: number;
  shells: number[];
  color: string;
}

// 3D-style Atomic Model Component using CSS animations
function AtomicModel3D({ protons, neutrons, shells, speed }: {
  protons: number;
  neutrons: number;
  shells: Shell[];
  speed: number;
}) {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-xl overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Nucleus */}
      <div className="relative z-10">
        <div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-2xl border-4 border-yellow-300"
          style={{
            width: '80px',
            height: '80px',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)',
          }}
        >
          <div className="text-center">
            <div className="text-xs">
              {protons}p
            </div>
            <div className="text-xs">
              {neutrons}n
            </div>
          </div>
        </div>

        {/* Electron Shells */}
        {shells.map((shell, shellIndex) => {
          const shellRadius = 120 + shellIndex * 80;
          
          return (
            <div key={`shell-${shellIndex}`}>
              {/* Shell orbit ring */}
              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white opacity-20 rounded-full"
                style={{
                  width: shellRadius * 2,
                  height: shellRadius * 2,
                }}
              />
              
              {/* Electrons */}
              {Array.from({ length: shell.electrons }).map((_, electronIndex) => {
                const angle = (electronIndex / shell.electrons) * 360;
                const animationDuration = speed === 0 ? 0 : (4 - speed * 1.2 + shellIndex * 0.5);
                
                return (
                  <motion.div
                    key={`electron-${shellIndex}-${electronIndex}`}
                    className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-lg border-2 border-cyan-200"
                    style={{
                      left: '50%',
                      top: '50%',
                      boxShadow: '0 0 12px #00ffff, 0 0 24px #00ffff',
                    }}
                    animate={{
                      x: [
                        Math.cos((angle * Math.PI) / 180) * shellRadius - 8,
                        Math.cos(((angle + 90) * Math.PI) / 180) * shellRadius - 8,
                        Math.cos(((angle + 180) * Math.PI) / 180) * shellRadius - 8,
                        Math.cos(((angle + 270) * Math.PI) / 180) * shellRadius - 8,
                        Math.cos((angle * Math.PI) / 180) * shellRadius - 8,
                      ],
                      y: [
                        Math.sin((angle * Math.PI) / 180) * shellRadius - 8,
                        Math.sin(((angle + 90) * Math.PI) / 180) * shellRadius - 8,
                        Math.sin(((angle + 180) * Math.PI) / 180) * shellRadius - 8,
                        Math.sin(((angle + 270) * Math.PI) / 180) * shellRadius - 8,
                        Math.sin((angle * Math.PI) / 180) * shellRadius - 8,
                      ],
                    }}
                    transition={{
                      duration: animationDuration,
                      repeat: speed > 0 ? Infinity : 0,
                      ease: "linear",
                    }}
                  />
                );
              })}
            </div>
          );
        })}

        {/* Labels */}
        <div className="absolute left-1/2 top-8 transform -translate-x-1/2 text-white text-center">
          <div className="text-2xl font-bold mb-2">{protons + neutrons}</div>
          <div className="text-sm opacity-75">Atomic Mass</div>
        </div>
        
        <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 text-white text-center">
          <div className="text-2xl font-bold mb-2">{protons}</div>
          <div className="text-sm opacity-75">Atomic Number</div>
        </div>
      </div>
    </div>
  );
}

// Quiz Component
function AtomicQuiz({ element, onComplete }: { element: Element; onComplete: (score: number) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      question: `How many protons does ${element.name} have?`,
      options: [element.protons - 1, element.protons, element.protons + 1, element.protons + 2],
      correct: 1,
      explanation: `${element.name} has ${element.protons} protons, which defines its atomic number.`
    },
    {
      question: `How many electrons are in the outermost shell of ${element.name}?`,
      options: [
        element.shells[element.shells.length - 1] - 1,
        element.shells[element.shells.length - 1],
        element.shells[element.shells.length - 1] + 1,
        8
      ],
      correct: 1,
      explanation: `The outermost shell of ${element.name} contains ${element.shells[element.shells.length - 1]} electrons, which determines its valency.`
    },
    {
      question: `What is the total number of electrons in ${element.name}?`,
      options: [element.electrons - 1, element.electrons + 1, element.electrons, element.protons - 1],
      correct: 2,
      explanation: `In a neutral atom, the number of electrons equals the number of protons: ${element.electrons}.`
    },
    {
      question: `How many electron shells does ${element.name} have?`,
      options: [element.shells.length - 1, element.shells.length, element.shells.length + 1, 4],
      correct: 1,
      explanation: `${element.name} has ${element.shells.length} electron shells (K, L, M shells).`
    },
    {
      question: `What is the valency of ${element.name}?`,
      options: [
        element.shells[element.shells.length - 1] <= 4 ? element.shells[element.shells.length - 1] : 8 - element.shells[element.shells.length - 1],
        element.shells[element.shells.length - 1] <= 4 ? element.shells[element.shells.length - 1] + 1 : 8 - element.shells[element.shells.length - 1] + 1,
        element.shells[element.shells.length - 1],
        8
      ],
      correct: 0,
      explanation: `Valency is ${element.shells[element.shells.length - 1] <= 4 ? element.shells[element.shells.length - 1] : 8 - element.shells[element.shells.length - 1]}. It&apos;s the number of electrons an atom can gain, lose, or share to achieve stability.`
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] ?? null);
    } else {
      setShowResult(true);
      onComplete(score);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border-4 border-yellow-400"
      >
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Quiz Complete! 🎉</h3>
        <div className="text-8xl mb-6">
          {percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐' : percentage >= 40 ? '📚' : '💪'}
        </div>
        <p className="text-2xl mb-4 font-bold text-yellow-600">
          {score} out of {questions.length} correct
        </p>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">
          {percentage >= 80 ? 'Excellent! You have mastered atomic structure!' :
           percentage >= 60 ? 'Good job! You understand the basics well.' :
           percentage >= 40 ? 'Not bad! Review the concepts and try again.' :
           'Keep practicing! Every expert was once a beginner.'}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={resetQuiz}
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
          >
            Try Again
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
          >
            Explore More Elements
          </button>
        </div>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-4 border-blue-400"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-lg font-semibold text-green-600 dark:text-green-400">
            Score: {score}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
        {question.question}
      </h3>

      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-left rounded-xl border-2 transition-all font-semibold ${
              selectedAnswer === index
                ? index === question.correct
                  ? 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 transform scale-102'
                  : 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                : selectedAnswer !== null && index === question.correct
                ? 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-yellow-400 hover:shadow-md'
            }`}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold mr-4">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className={`p-6 rounded-xl border-l-4 ${
            selectedAnswer === question.correct
              ? 'bg-green-50 dark:bg-green-900/20 border-green-400'
              : 'bg-red-50 dark:bg-red-900/20 border-red-400'
          }`}>
            <p className="font-bold text-lg mb-3 flex items-center">
              {selectedAnswer === question.correct ? (
                <>✅ Correct! Well done!</>
              ) : (
                <>❌ Incorrect. The correct answer is {String.fromCharCode(65 + question.correct)}.</>
              )}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {question.explanation}
            </p>
          </div>
        </motion.div>
      )}

      {selectedAnswer !== null && (
        <button
          onClick={nextQuestion}
          className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-xl hover:shadow-lg transition-all transform hover:scale-102"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Finish Quiz 🏁'}
        </button>
      )}
    </motion.div>
  );
}

function toShells(dist: number[]): Shell[] {
  return dist.map((filled, i) => {
    const level = i + 1;
    const capacity = level === 1 ? 2 : level === 2 ? 8 : level === 3 ? 18 : level === 4 ? 32 : 2 * level * level;
    return {
      level,
      n: level,
      index: i,
      electrons: filled,
      filled,
      count: filled,
      capacity,
    };
  });
}

// Predefined elements
const ELEMENTS: Element[] = [
  { name: 'Hydrogen', symbol: 'H', protons: 1, neutrons: 0, electrons: 1, shells: [1], color: '#ff6b6b' },
  { name: 'Helium', symbol: 'He', protons: 2, neutrons: 2, electrons: 2, shells: [2], color: '#4ecdc4' },
  { name: 'Lithium', symbol: 'Li', protons: 3, neutrons: 4, electrons: 3, shells: [2, 1], color: '#45b7d1' },
  { name: 'Carbon', symbol: 'C', protons: 6, neutrons: 6, electrons: 6, shells: [2, 4], color: '#f9ca24' },
  { name: 'Nitrogen', symbol: 'N', protons: 7, neutrons: 7, electrons: 7, shells: [2, 5], color: '#6c5ce7' },
  { name: 'Oxygen', symbol: 'O', protons: 8, neutrons: 8, electrons: 8, shells: [2, 6], color: '#fd79a8' },
  { name: 'Sodium', symbol: 'Na', protons: 11, neutrons: 12, electrons: 11, shells: [2, 8, 1], color: '#fdcb6e' },
  { name: 'Chlorine', symbol: 'Cl', protons: 17, neutrons: 18, electrons: 17, shells: [2, 8, 7], color: '#55a3ff' },
];

export default function LaunchAtomicStructurePage() {
  const [selectedElement, setSelectedElement] = useState(ELEMENTS[6]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [showQuiz, setShowQuiz] = useState(false);
  
  const BRAND_YELLOW = '#ffd700';

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 md:px-10 pt-36 md:pt-44 pb-16">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-black dark:text-white mb-4">
            Interactive Atomic Structure
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl">
            Explore atoms with dynamic 3D-style visualizations! Control electron motion and test your understanding with interactive quizzes.
          </p>
        </motion.header>

        {/* Controls */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 grid md:grid-cols-2 gap-6"
        >
          {/* Element Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Choose an Element
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {ELEMENTS.map((element) => (
                <button
                  key={element.symbol}
                  onClick={() => setSelectedElement(element)}
                  className={`p-4 rounded-xl font-bold text-center transition-all duration-300 border-2 ${
                    selectedElement.symbol === element.symbol
                      ? 'transform scale-105 shadow-lg border-4'
                      : 'hover:scale-102 hover:shadow-md'
                  }`}
                  style={{
                    backgroundColor: selectedElement.symbol === element.symbol ? element.color : 'transparent',
                    borderColor: element.color,
                    color: selectedElement.symbol === element.symbol ? '#fff' : element.color,
                  }}
                >
                  <div className="text-xl font-bold">{element.symbol}</div>
                  <div className="text-xs mt-1 opacity-75">{element.name}</div>
                  <div className="text-xs mt-1">{element.protons}p</div>
                </button>
              ))}
            </div>
          </div>

          {/* Animation Controls */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Animation Speed
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-lg font-semibold text-gray-700 dark:text-gray-300 min-w-[100px]">
                  Speed: {animationSpeed === 0 ? 'PAUSED' : `${animationSpeed}x`}
                </label>
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.5"
                  value={animationSpeed}
                  onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                  className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${BRAND_YELLOW} 0%, ${BRAND_YELLOW} ${(animationSpeed/3)*100}%, #d1d5db ${(animationSpeed/3)*100}%, #d1d5db 100%)`
                  }}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setAnimationSpeed(0)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  ⏸️ Pause
                </button>
                <button
                  onClick={() => setAnimationSpeed(0.5)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  🐌 Slow
                </button>
                <button
                  onClick={() => setAnimationSpeed(1)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  ▶️ Normal
                </button>
                <button
                  onClick={() => setAnimationSpeed(2)}
                  className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                >
                  🚀 Fast
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Element Info */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-4 shadow-xl" style={{ borderColor: selectedElement.color }}>
            <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: selectedElement.color }}>
              {selectedElement.name} ({selectedElement.symbol})
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-2 border-red-200 dark:border-red-800">
                <div className="text-red-600 dark:text-red-400 font-bold text-sm">PROTONS</div>
                <div className="text-3xl font-bold text-red-700 dark:text-red-300">{selectedElement.protons}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Positive charge</div>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-sm">NEUTRONS</div>
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">{selectedElement.neutrons}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Neutral charge</div>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-2 border-green-200 dark:border-green-800">
                <div className="text-green-600 dark:text-green-400 font-bold text-sm">ELECTRONS</div>
                <div className="text-3xl font-bold text-green-700 dark:text-green-300">{selectedElement.electrons}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Negative charge</div>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                <div className="text-purple-600 dark:text-purple-400 font-bold text-sm">VALENCY</div>
                <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                  {selectedElement.shells[selectedElement.shells.length - 1] <= 4 
                    ? selectedElement.shells[selectedElement.shells.length - 1]
                    : 8 - selectedElement.shells[selectedElement.shells.length - 1]}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Bonding capacity</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3D Simulation */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-4 shadow-xl" style={{ borderColor: BRAND_YELLOW }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                3D Atomic Model Visualization
              </h2>
              <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg">
                Real-time electron orbital motion
              </div>
            </div>
            <AtomicModel3D 
              protons={selectedElement.protons}
              neutrons={selectedElement.neutrons}
              shells={toShells(selectedElement.shells)}
              speed={animationSpeed}
            />
          </div>
        </motion.section>

        {/* Quiz Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
              Test Your Knowledge 🧠
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Challenge yourself with questions about {selectedElement.name}&apos;s atomic structure!
            </p>
            {!showQuiz && (
              <button
                onClick={() => setShowQuiz(true)}
                className="px-10 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-xl hover:shadow-lg transform hover:scale-105 transition-all border-4 border-yellow-300"
              >
                Start Interactive Quiz 🚀
              </button>
            )}
          </div>

          <AnimatePresence>
            {showQuiz && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <AtomicQuiz 
                  element={selectedElement}
                  onComplete={(score) => {
                    console.log(`Quiz completed with score: ${score}`);
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Educational Content */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-yellow-200 dark:border-yellow-800">
            <h3 className="text-xl font-bold mb-3 text-yellow-600 dark:text-yellow-400 flex items-center">
              🔬 Atomic Structure Basics
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Every atom consists of a dense nucleus containing protons (positive) and neutrons (neutral), 
              surrounded by electrons (negative) that orbit in specific energy levels called shells.
            </p>
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                💡 Key Fact: Atoms are mostly empty space - if the nucleus were the size of a marble, 
                the atom would be the size of a football stadium!
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400 flex items-center">
              ⚡ Electron Shells &amp; Energy Levels
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Electrons occupy shells with maximum capacities: K shell (2), L shell (8), M shell (18). 
              The arrangement determines an element&apos;s chemical properties and reactivity.
            </p>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                🔋 Energy Rule: Electrons fill inner shells first before moving to outer shells, 
                following the 2n² formula for maximum shell capacity.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-green-200 dark:border-green-800">
            <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400 flex items-center">
              🧪 Valency &amp; Chemical Bonding
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Valency is determined by electrons in the outermost shell (valence electrons). 
              It shows how many bonds an atom can form to achieve a stable electron configuration.
            </p>
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                ⚖️ Stability Rule: Atoms want 8 electrons in their outer shell (octet rule), 
                except hydrogen which wants 2 electrons.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Interactive Learning Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-700 dark:text-purple-300">
            🎯 Learning Objectives Achieved
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                What You&apos;ve Learned:
              </h3>
              <div className="space-y-2">
                {[
                  "Atomic structure components (protons, neutrons, electrons)",
                  "Electron shell arrangement and capacity rules",
                  "How to determine valency from electron configuration",
                  "Relationship between atomic number and element properties",
                  "Visual understanding of atomic scale and proportions"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                Interactive Features Used:
              </h3>
              <div className="space-y-2">
                {[
                  "3D-style atomic model visualization",
                  "Real-time animation speed controls",
                  "Element comparison and selection",
                  "Interactive quiz with instant feedback",
                  "Dynamic electron orbital motion"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      🚀
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Ready to explore more topics or test different elements?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => window.location.href = '/browse-topic'}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                🔍 Browse More Topics
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                🔄 Try Another Element
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}