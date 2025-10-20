import { HeyoCard } from '../components/heyo/HeyoCard';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ChatListScreenProps {
  onSelectChat: (chatId: number) => void;
}

const MOCK_CHATS = [
  {
    id: 1,
    name: 'Sarah',
    lastMessage: 'See you at the gallery! 🎨',
    time: '2m ago',
    unread: 2,
    online: true,
    avatar: 'https://images.unsplash.com/photo-1633700199686-bd546d6abb65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRlZW5hZ2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTY1Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Alex',
    lastMessage: 'That was such a fun session today!',
    time: '15m ago',
    unread: 0,
    online: true,
    avatar: 'https://images.unsplash.com/photo-1760574732573-20376551d86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGZyaWVuZHN8ZW58MXx8fHwxNzYwOTAwOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Maya',
    lastMessage: 'Down for coffee tomorrow?',
    time: '1h ago',
    unread: 1,
    online: false,
    avatar: 'https://images.unsplash.com/photo-1760509370980-d201b9bc327e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHN0cmVldCUyMHN0eWxlfGVufDF8fHx8MTc2MDk2NTY5OXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Event: Indie Night',
    lastMessage: 'Mike: Can\'t wait! 🎸',
    time: '2h ago',
    unread: 0,
    online: false,
    isGroup: true
  }
];

export function ChatListScreen({ onSelectChat }: ChatListScreenProps) {
  return (
    <div className="min-h-screen bg-graphite pb-24 pt-6 px-6">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Messages</h1>
          <p className="text-text-secondary">Stay connected with friends</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full px-6 py-3 bg-surface rounded-full border border-white/10 text-white placeholder:text-text-secondary focus:outline-none focus:border-mint-aqua/50 transition-all"
          />
        </div>

        {/* Chats List */}
        <div className="space-y-3">
          {MOCK_CHATS.map((chat, index) => (
            <motion.div
              key={chat.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSelectChat(chat.id)}
            >
              <HeyoCard className="cursor-pointer hover:border-mint-aqua/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    {chat.isGroup ? (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric-blue to-hot-pink flex items-center justify-center">
                        <span className="text-xl">🎉</span>
                      </div>
                    ) : (
                      <ImageWithFallback
                        src={chat.avatar!}
                        alt={chat.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    )}
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-surface" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold truncate">{chat.name}</h3>
                      <span className="text-xs text-text-secondary whitespace-nowrap ml-2">{chat.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-text-secondary truncate">{chat.lastMessage}</p>
                      {chat.unread > 0 && (
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-electric-blue to-hot-pink rounded-full flex items-center justify-center text-xs ml-2">
                          {chat.unread}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </HeyoCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
