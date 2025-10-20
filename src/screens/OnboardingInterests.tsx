import { useState } from 'react';
import { HeyoButton } from '../components/heyo/HeyoButton';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface OnboardingInterestsProps {
  onNext: (interests: string[]) => void;
  onBack: () => void;
}

const INTERESTS = [
  'Music', 'Art', 'Sports', 'Gaming', 'Food', 'Travel',
  'Photography', 'Fashion', 'Fitness', 'Movies', 'Books', 'Dancing',
  'Tech', 'Nature', 'Cooking', 'Yoga', 'Coffee', 'Nightlife',
  'Skateboarding', 'Concerts', 'Hiking', 'Theatre'
];

export function OnboardingInterests({ onNext, onBack }: OnboardingInterestsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelected(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-graphite flex flex-col p-6 gradient-radial-blue">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col max-w-md mx-auto w-full"
      >
        <div className="mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-hot-pink rounded-full mb-8" />
          <h1 className="text-4xl mb-3">What do you love?</h1>
          <p className="text-text-secondary">
            Pick at least 3 interests to find your vibe.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto mb-6 -mx-2 px-2">
          <div className="flex flex-wrap gap-3">
            {INTERESTS.map((interest) => {
              const isSelected = selected.includes(interest);
              return (
                <motion.button
                  key={interest}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleInterest(interest)}
                  className={`px-5 py-3 rounded-full border transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-electric-blue to-hot-pink border-transparent text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-surface border-white/20 text-text-secondary hover:border-mint-aqua/50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {interest}
                    {isSelected && <Check className="w-4 h-4" />}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-white/10">
          <div className="text-center text-sm text-text-secondary mb-2">
            {selected.length} selected {selected.length < 3 && `(${3 - selected.length} more needed)`}
          </div>
          
          <HeyoButton
            fullWidth
            disabled={selected.length < 3}
            onClick={() => onNext(selected)}
          >
            Continue
          </HeyoButton>
          
          <HeyoButton
            variant="ghost"
            fullWidth
            onClick={onBack}
          >
            Back
          </HeyoButton>
        </div>
      </motion.div>

      <div className="text-center text-text-secondary text-sm mt-4">
        Step 3 of 3
      </div>
    </div>
  );
}
