import { useState } from 'react';
import { HeyoButton } from '../components/heyo/HeyoButton';
import { MapPin, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface OnboardingCityProps {
  onNext: (city: string) => void;
}

export function OnboardingCity({ onNext }: OnboardingCityProps) {
  const [city, setCity] = useState('');
  const [detecting, setDetecting] = useState(false);

  const handleDetect = () => {
    setDetecting(true);
    // Simulate location detection
    setTimeout(() => {
      const cities = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Austin', 'Seattle'];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setCity(randomCity);
      setDetecting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-graphite flex flex-col p-6 gradient-radial-blue">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full"
      >
        <div className="mb-8">
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-hot-pink rounded-full mb-8" />
          <h1 className="text-4xl mb-3">Where are you?</h1>
          <p className="text-text-secondary">
            We'll connect you with people and events nearby.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <HeyoButton
            variant="secondary"
            fullWidth
            onClick={handleDetect}
            disabled={detecting}
          >
            {detecting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Detecting your city...
              </>
            ) : (
              <>
                <MapPin className="w-5 h-5" />
                Detect My Location
              </>
            )}
          </HeyoButton>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-graphite px-2 text-text-secondary">Or enter manually</span>
            </div>
          </div>

          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-6 py-4 bg-surface rounded-xl border border-white/10 text-white placeholder:text-text-secondary focus:outline-none focus:border-mint-aqua/50 focus:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all"
          />
        </div>

        <HeyoButton
          fullWidth
          disabled={!city}
          onClick={() => onNext(city)}
        >
          Continue
        </HeyoButton>
      </motion.div>

      <div className="text-center text-text-secondary text-sm">
        Step 1 of 3
      </div>
    </div>
  );
}
