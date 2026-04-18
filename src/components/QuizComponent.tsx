import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, RotateCcw, Palette } from 'lucide-react';

const questions = [
  {
    question: "When you walk into a room, what catches your eye first?",
    options: [
      { id: 'A', text: "Clean lines and minimal clutter" },
      { id: 'B', text: "Warm tones and cosy textures" },
      { id: 'C', text: "Bold colours and statement pieces" },
      { id: 'D', text: "Natural materials like wood and stone" }
    ]
  },
  {
    question: "How would you describe your ideal weekend at home?",
    options: [
      { id: 'A', text: "Everything organised, nothing out of place" },
      { id: 'B', text: "Curled up with soft lighting and a warm corner" },
      { id: 'C', text: "Hosting friends in a space that sparks conversation" },
      { id: 'D', text: "Surrounded by plants, light and open windows" }
    ]
  },
  {
    question: "Pick your kitchen vibe:",
    options: [
      { id: 'A', text: "All white, handle-less and spotless" },
      { id: 'B', text: "Wooden cabinets with warm lighting" },
      { id: 'C', text: "Dark finish with gold accents" },
      { id: 'D', text: "Open shelves with earthy tones" }
    ]
  },
  {
    question: "What matters most to you in a bedroom?",
    options: [
      { id: 'A', text: "Smart storage and a clutter-free look" },
      { id: 'B', text: "Soft fabrics and a calm, restful feel" },
      { id: 'C', text: "A strong design statement you wake up to" },
      { id: 'D', text: "Natural light and breathable materials" }
    ]
  },
  {
    question: "Your living room sofa would be:",
    options: [
      { id: 'A', text: "A sleek, low-profile grey sectional" },
      { id: 'B', text: "An oversized, cushiony beige couch" },
      { id: 'C', text: "A deep velvet sofa in a rich jewel tone" },
      { id: 'D', text: "A linen sofa in a natural, earthy shade" }
    ]
  }
];

const results = {
  A: {
    title: "Modern Minimalist",
    desc: "You love clean, clutter-free spaces where every piece has a purpose.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80"
  },
  B: {
    title: "Warm Contemporary",
    desc: "You gravitate towards comfort, softness and spaces that feel like a hug.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"
  },
  C: {
    title: "Bold and Eclectic",
    desc: "You want your home to make a statement and reflect your personality loudly.",
    image: "https://images.unsplash.com/photo-1620626011761-9963d7521576?w=800&q=80"
  },
  D: {
    title: "Nature-Inspired",
    desc: "You lean towards organic textures, natural light and a grounded, calm environment.",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&q=80"
  }
};

const QuizComponent = () => {
  const [step, setStep] = useState<number>(-1); // -1: Intro, 0-4: Questions, 5: Result
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<keyof typeof results | null>(null);

  const startQuiz = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  const handleAnswer = (optionId: string) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    const counts: any = { A: 0, B: 0, C: 0, D: 0 };
    finalAnswers.forEach(ans => counts[ans]++);
    
    let max = 0;
    let winningStyle: keyof typeof results = 'A';
    
    for (const key in counts) {
      if (counts[key] >= max) {
        max = counts[key];
        winningStyle = key as keyof typeof results;
      }
    }
    
    setResult(winningStyle);
    setStep(5);
  };

  return (
    <div className="bg-white border border-[#002121]/5  relative min-h-[500px] md:min-h-[550px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {step === -1 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-12 md:p-20 text-center"
          >
            <div className="w-20 h-20 bg-[#002121] rounded-full flex items-center justify-center mx-auto mb-10">
              <Palette className="text-[#d89a5b] w-10 h-10" />
            </div>
            {/* <h2 className="text-sm tracking-[0.4em] uppercase font-bold text-[#d89a5b] mb-4">✦ Interior Style Quiz</h2> */}
            <h3 className="text-4xl md:text-5xl font-sans font-light text-[#002121] mb-8 leading-tight">
              What Kind of Home Do <br />
              <span className="font-medium">You Really Want?</span>
            </h3>
            <p className="text-gray-500 text-lg mb-12 max-w-lg mx-auto">
              Answer 5 quick questions and find out which <br className="hidden md:block"/>
              interior style suits you best.
            </p>
            <button
              onClick={startQuiz}
              className="inline-flex items-center gap-4 bg-[#002121] text-white px-12 py-5 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all group"
            >
              Find My Style <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        )}

        {step >= 0 && step < 5 && (
          <motion.div
            key={`q-${step}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-10 md:p-16"
          >
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#d89a5b] font-bold">
                Question {step + 1} of 5
              </span>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3, 4].map(i => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-500 ${i <= step ? 'w-8 bg-[#d89a5b]' : 'w-2 bg-gray-100'}`} 
                  />
                ))}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-sans font-light text-[#002121] mb-12 leading-snug">
              {questions[step].question}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[step].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  className="flex items-center justify-between text-left p-6 border border-gray-100 hover:border-[#d89a5b] hover:bg-[#fcfbf9] transition-all group"
                >
                  <span className="text-sm md:text-base text-gray-700 font-sans group-hover:text-[#002121]">{option.text}</span>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#d89a5b] group-hover:bg-[#d89a5b]/10 transition-all">
                    <Check className="w-4 h-4 text-[#d89a5b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 5 && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col md:flex-row h-full overflow-hidden"
          >
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
              <img 
                src={results[result].image} 
                alt={results[result].title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-[#FAF9F6]">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#d89a5b] font-bold mb-4">Your Style Verdict</span>
              <h3 className="text-4xl font-sans font-medium text-[#002121] mb-6 leading-tight">
                {results[result].title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
                {results[result].desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-[#002121] text-white px-8 py-4 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all"
                >
                  Get Started
                </button>
                <button
                  onClick={startQuiz}
                  className="flex items-center justify-center gap-2 border border-gray-200 px-8 py-4 text-[11px] font-black tracking-[0.2em] uppercase text-gray-500 hover:bg-gray-50 transition-all"
                >
                  <RotateCcw className="w-4 h-4" /> Restart
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizComponent;
