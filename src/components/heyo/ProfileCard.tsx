import { HeyoCard } from './HeyoCard';
import { MapPin, Heart, X } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  interests: string[];
  bio?: string;
  onLike?: () => void;
  onPass?: () => void;
}

export function ProfileCard({ 
  name, 
  age, 
  location, 
  imageUrl, 
  interests, 
  bio,
  onLike,
  onPass 
}: ProfileCardProps) {
  return (
    <HeyoCard className="overflow-hidden" noPadding>
      <div className="relative">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-end justify-between mb-3">
            <div>
              <h2 className="text-2xl mb-1">{name}, {age}</h2>
              <div className="flex items-center gap-1 text-text-secondary">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </div>
          
          {bio && (
            <p className="text-sm text-text-secondary mb-3">{bio}</p>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {interests.slice(0, 4).map((interest, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-surface/80 backdrop-blur-sm rounded-full text-xs border border-white/20"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {(onLike || onPass) && (
        <div className="flex gap-4 p-6">
          {onPass && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onPass}
              className="flex-1 h-14 rounded-full border-2 border-error text-error flex items-center justify-center gap-2 hover:bg-error/10 transition-colors"
            >
              <X className="w-6 h-6" />
              <span>Pass</span>
            </motion.button>
          )}
          
          {onLike && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onLike}
              className="flex-1 h-14 rounded-full bg-gradient-to-br from-electric-blue to-hot-pink text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all"
            >
              <Heart className="w-6 h-6" />
              <span>Like</span>
            </motion.button>
          )}
        </div>
      )}
    </HeyoCard>
  );
}
