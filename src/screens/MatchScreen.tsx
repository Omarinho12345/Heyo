import { useState } from 'react';
import { ProfileCard } from '../components/heyo/ProfileCard';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

const MOCK_PROFILES = [
  {
    id: 1,
    name: 'Sarah',
    age: 19,
    location: '2.3 mi away',
    imageUrl: 'https://images.unsplash.com/photo-1633700199686-bd546d6abb65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRlZW5hZ2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTY1Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    interests: ['Music', 'Art', 'Coffee', 'Photography'],
    bio: 'Art student looking for creative souls to explore the city with 🎨'
  },
  {
    id: 2,
    name: 'Alex',
    age: 21,
    location: '1.8 mi away',
    imageUrl: 'https://images.unsplash.com/photo-1760574732573-20376551d86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGZyaWVuZHN8ZW58MXx8fHwxNzYwOTAwOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    interests: ['Skateboarding', 'Gaming', 'Concerts', 'Food'],
    bio: 'Always down for new adventures. Let\'s skate and grab food!'
  },
  {
    id: 3,
    name: 'Maya',
    age: 20,
    location: '0.9 mi away',
    imageUrl: 'https://images.unsplash.com/photo-1760509370980-d201b9bc327e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHN0cmVldCUyMHN0eWxlfGVufDF8fHx8MTc2MDk2NTY5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    interests: ['Fashion', 'Dancing', 'Nightlife', 'Travel'],
    bio: 'Fashion blogger & dancer. Let\'s hit the club or find cool spots! 💃'
  }
];

export function MatchScreen() {
  const [profiles, setProfiles] = useState(MOCK_PROFILES);
  const [showMatch, setShowMatch] = useState(false);

  const handleLike = () => {
    setShowMatch(true);
    setTimeout(() => {
      setShowMatch(false);
      setProfiles(prev => prev.slice(1));
    }, 2000);
  };

  const handlePass = () => {
    setProfiles(prev => prev.slice(1));
  };

  const currentProfile = profiles[0];

  return (
    <div className="min-h-screen bg-graphite pb-24 pt-6 px-6 gradient-radial-blue">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Discover</h1>
          <p className="text-text-secondary">Find friends who match your vibe</p>
        </div>

        <AnimatePresence mode="wait">
          {currentProfile ? (
            <motion.div
              key={currentProfile.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0, x: -100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <ProfileCard
                name={currentProfile.name}
                age={currentProfile.age}
                location={currentProfile.location}
                imageUrl={currentProfile.imageUrl}
                interests={currentProfile.interests}
                bio={currentProfile.bio}
                onLike={handleLike}
                onPass={handlePass}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">👋</div>
              <h2 className="text-2xl mb-2">That's everyone for now!</h2>
              <p className="text-text-secondary">
                Check back soon for more people to connect with.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Match Overlay */}
        <AnimatePresence>
          {showMatch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-graphite/95 backdrop-blur-md flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="text-center"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity
                  }}
                  className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-electric-blue to-hot-pink rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.6)]"
                >
                  <Sparkles className="w-16 h-16 text-white" />
                </motion.div>
                <h2 className="text-4xl mb-2">It's a Match! 🎉</h2>
                <p className="text-text-secondary text-lg">
                  You can now chat with {currentProfile?.name}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
