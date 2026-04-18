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
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
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
    <div className="bg-[#002121] relative min-h-[500px] md:min-h-[550px] flex flex-col justify-center shadow-2xl overflow-hidden rounded-sm">
      <AnimatePresence mode="wait">
        {step === -1 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-6 sm:p-10 md:p-20 text-center relative z-10"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 backdrop-blur-sm border border-white/10">
              <Palette className="text-[#d89a5b] w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light text-white mb-6 md:mb-8 leading-tight drop-shadow-sm">
              What Kind of Home Do <br />
              <span className="font-medium text-white/90">You Really Want?</span>
            </h3>
            <p className="text-white/60 text-base md:text-lg mb-10 md:mb-12 max-w-lg mx-auto font-medium leading-relaxed px-4">
              Answer 5 quick questions and find out which <br className="hidden md:block"/>
              interior style suits you best.
            </p>
            <button
              onClick={startQuiz}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-4 bg-[#d89a5b] text-white px-8 md:px-12 py-5 text-[11px] font-black tracking-[0.1em] md:tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all group shadow-xl whitespace-nowrap"
            >
              Find My Style <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform shrink-0" />
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

            <h3 className="text-2xl md:text-3xl font-sans font-medium text-white mb-12 leading-snug drop-shadow-sm">
              {questions[step].question}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[step].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  className="flex items-center justify-between text-left p-6 md:p-8 w-full bg-[#001c1c]/50 backdrop-blur-sm border border-white/10 hover:border-[#d89a5b]/60 hover:bg-[#002a2a] transition-all duration-300 group hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-[#d89a5b]/5"
                >
                  <span className="text-[15px] md:text-[17px] text-white/80 group-hover:text-white font-sans font-medium tracking-wide pr-6 transition-colors duration-300">
                    {option.text}
                  </span>
                  <div className="w-8 h-8 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#d89a5b] group-hover:bg-[#d89a5b] transition-all duration-300">
                    <Check className="w-4 h-4 text-[#002121] opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={3} />
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
            className="w-full flex-1 flex flex-col md:flex-row md:absolute md:inset-0 z-10"
          >
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-0 md:h-full shrink-0">
              <img 
                src={results[result].image} 
                alt={results[result].title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-16 flex flex-col justify-center bg-[#001c1c] border-l border-white/5">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#d89a5b] font-bold mb-4">Your Style Verdict</span>
              <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white mb-4 sm:mb-6 leading-[1.2] uppercase tracking-[0.1em] sm:tracking-wider drop-shadow-sm break-words hyphens-auto">
                {results[result].title}
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-10 font-medium">
                {results[result].desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-[#d89a5b] text-white px-8 py-4 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all shadow-xl"
                >
                  Get Started
                </button>
                <button
                  onClick={startQuiz}
                  className="flex items-center justify-center gap-2 border border-white/20 px-8 py-4 text-[11px] font-black tracking-[0.2em] uppercase text-white hover:bg-white/10 transition-all hover:border-[#d89a5b]"
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
