import { useState } from 'react';
import { HeyoButton } from '../components/heyo/HeyoButton';
import { ArrowLeft, Send, Image, Smile } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ChatConversationProps {
  chatId: number;
  onBack: () => void;
}

const MOCK_MESSAGES = [
  {
    id: 1,
    sender: 'Sarah',
    message: 'Hey! Did you see the new art exhibit downtown?',
    time: '10:30 AM',
    isMe: false
  },
  {
    id: 2,
    sender: 'Me',
    message: 'Not yet! Is it any good?',
    time: '10:32 AM',
    isMe: true
  },
  {
    id: 3,
    sender: 'Sarah',
    message: 'It\'s amazing! Want to check it out together tomorrow?',
    time: '10:33 AM',
    isMe: false
  },
  {
    id: 4,
    sender: 'Me',
    message: 'Sounds perfect! What time works for you?',
    time: '10:35 AM',
    isMe: true
  },
  {
    id: 5,
    sender: 'Sarah',
    message: 'How about 2pm? We can grab coffee after 🎨☕',
    time: '10:36 AM',
    isMe: false
  },
  {
    id: 6,
    sender: 'Me',
    message: 'See you at the gallery! 🎨',
    time: '10:38 AM',
    isMe: true
  }
];

export function ChatConversation({ chatId, onBack }: ChatConversationProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message
      setMessage('');
    }
  };

  return (
    <div className="h-screen bg-graphite flex flex-col">
      {/* Header */}
      <div className="bg-surface border-b border-white/10 px-6 py-4 flex items-center gap-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.button>
        
        <div className="flex items-center gap-3 flex-1">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1633700199686-bd546d6abb65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRlZW5hZ2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwOTY1Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sarah"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-surface" />
          </div>
          <div>
            <h2 className="font-semibold">Sarah</h2>
            <p className="text-xs text-mint-aqua">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {MOCK_MESSAGES.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] ${msg.isMe ? 'order-2' : ''}`}>
              <div
                className={`px-4 py-3 rounded-2xl ${
                  msg.isMe
                    ? 'bg-gradient-to-br from-electric-blue to-hot-pink text-white rounded-br-sm'
                    : 'bg-surface text-white rounded-bl-sm'
                }`}
              >
                <p>{msg.message}</p>
              </div>
              <p className={`text-xs text-text-secondary mt-1 ${msg.isMe ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-surface border-t border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center text-text-secondary hover:text-mint-aqua transition-colors"
          >
            <Image className="w-5 h-5" />
          </motion.button>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="w-full px-4 py-3 pr-12 bg-graphite rounded-full border border-white/10 text-white placeholder:text-text-secondary focus:outline-none focus:border-mint-aqua/50 transition-all"
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:text-mint-aqua transition-colors"
            >
              <Smile className="w-5 h-5" />
            </motion.button>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-hot-pink flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:shadow-none"
          >
            <Send className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
