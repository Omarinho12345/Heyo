import { Users, MapPin, Calendar, MessageCircle, Hash } from 'lucide-react';
import { motion } from 'motion/react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'match', label: 'Match', icon: Users },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'topics', label: 'Topics', icon: Hash }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-white/10 px-2 pb-6 pt-2 backdrop-blur-lg bg-opacity-95">
      <div className="max-w-[390px] mx-auto flex justify-around items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 px-3 py-2 min-w-0 relative"
              whileTap={{ scale: 0.9 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-mint-aqua/20 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon 
                className={`w-6 h-6 relative z-10 transition-colors ${
                  isActive ? 'text-mint-aqua' : 'text-text-secondary'
                }`}
                style={isActive ? { filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.6))' } : {}}
              />
              <span className={`text-xs relative z-10 transition-colors ${
                isActive ? 'text-mint-aqua' : 'text-text-secondary'
              }`}>
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
