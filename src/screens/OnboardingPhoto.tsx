import { useState } from 'react';
import { HeyoButton } from '../components/heyo/HeyoButton';
import { Camera, Upload } from 'lucide-react';
import { motion } from 'motion/react';

interface OnboardingPhotoProps {
  onNext: () => void;
  onBack: () => void;
}

export function OnboardingPhoto({ onNext, onBack }: OnboardingPhotoProps) {
  const [hasPhoto, setHasPhoto] = useState(false);

  const handleUpload = () => {
    // Simulate photo upload
    setHasPhoto(true);
  };

  return (
    <div className="min-h-screen bg-graphite flex flex-col p-6 gradient-radial-pink">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full"
      >
        <div className="mb-8">
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-hot-pink rounded-full mb-8" />
          <h1 className="text-4xl mb-3">Add your photo</h1>
          <p className="text-text-secondary">
            Show your best self! Your photo helps others recognize you.
          </p>
        </div>

        <div className="mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleUpload}
            className={`relative w-full aspect-square rounded-2xl border-2 border-dashed cursor-pointer overflow-hidden transition-all ${
              hasPhoto 
                ? 'border-mint-aqua bg-mint-aqua/10' 
                : 'border-white/20 bg-surface/50 hover:border-mint-aqua/50'
            }`}
          >
            {hasPhoto ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-electric-blue/20 to-hot-pink/20 flex items-center justify-center">
                  <Camera className="w-20 h-20 text-mint-aqua" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-center">
                    <Upload className="w-12 h-12 mx-auto mb-2 text-white" />
                    <p className="text-white">Tap to change photo</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <Camera className="w-16 h-16 text-text-secondary" />
                <p className="text-text-secondary">Tap to add photo</p>
              </div>
            )}
          </motion.div>
        </div>

        <div className="space-y-3">
          <HeyoButton
            fullWidth
            disabled={!hasPhoto}
            onClick={onNext}
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

      <div className="text-center text-text-secondary text-sm">
        Step 2 of 3
      </div>
    </div>
  );
}
