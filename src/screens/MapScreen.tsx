import { HeyoCard } from '../components/heyo/HeyoCard';
import { MapPin, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const MOCK_STORIES = [
  {
    id: 1,
    user: 'Sarah',
    location: 'Downtown Coffee',
    distance: '0.3 mi',
    message: 'Anyone want to grab coffee? ☕',
    time: '5m ago',
    active: 8
  },
  {
    id: 2,
    user: 'Alex & friends',
    location: 'Skate Park',
    distance: '1.2 mi',
    message: 'Session at the park, come through! 🛹',
    time: '12m ago',
    active: 15
  },
  {
    id: 3,
    user: 'Maya',
    location: 'Art Gallery',
    distance: '0.8 mi',
    message: 'Cool exhibition opening, who\'s around?',
    time: '25m ago',
    active: 6
  },
  {
    id: 4,
    user: 'DJ Mike',
    location: 'The Beat Club',
    distance: '2.1 mi',
    message: 'Pre-party vibes before the show tonight! 🎵',
    time: '1h ago',
    active: 23
  }
];

export function MapScreen() {
  return (
    <div className="min-h-screen bg-graphite pb-24">
      {/* Map Header */}
      <div className="relative h-80 bg-surface overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1566305977571-5666677c6e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwbmlnaHR8ZW58MXx8fHwxNzYwOTY1NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Map"
          className="w-full h-full object-cover opacity-40"
        />
        
        {/* Mock location pins */}
        <div className="absolute inset-0">
          {[
            { top: '30%', left: '40%' },
            { top: '50%', left: '60%' },
            { top: '40%', left: '70%' },
            { top: '60%', left: '30%' }
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={pos}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-hot-pink rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 left-0 right-0 px-6">
          <h1 className="text-3xl text-white drop-shadow-lg">Heyo Map</h1>
          <p className="text-white/80">What's happening near you</p>
        </div>
      </div>

      {/* Stories List */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">Local Stories</h2>
          <span className="text-mint-aqua text-sm">{MOCK_STORIES.length} active</span>
        </div>

        {MOCK_STORIES.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <HeyoCard className="cursor-pointer hover:border-mint-aqua/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-hot-pink flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold">{story.user}</h3>
                      <p className="text-sm text-text-secondary">{story.location} • {story.distance}</p>
                    </div>
                    <span className="text-xs text-text-secondary whitespace-nowrap">{story.time}</span>
                  </div>
                  
                  <p className="text-sm mb-2">{story.message}</p>
                  
                  <div className="flex items-center gap-1 text-mint-aqua text-xs">
                    <Users className="w-4 h-4" />
                    <span>{story.active} people nearby</span>
                  </div>
                </div>
              </div>
            </HeyoCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
