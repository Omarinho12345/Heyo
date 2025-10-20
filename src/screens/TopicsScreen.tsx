import { HeyoCard } from '../components/heyo/HeyoCard';
import { MessageCircle, TrendingUp, Hash } from 'lucide-react';
import { motion } from 'motion/react';

const TRENDING_TOPICS = [
  {
    id: 1,
    tag: 'LocalMusic',
    posts: 234,
    trend: '+45%'
  },
  {
    id: 2,
    tag: 'ArtScene',
    posts: 189,
    trend: '+32%'
  },
  {
    id: 3,
    tag: 'FoodSpots',
    posts: 156,
    trend: '+28%'
  },
  {
    id: 4,
    tag: 'SkateLife',
    posts: 142,
    trend: '+19%'
  }
];

const TOPIC_POSTS = [
  {
    id: 1,
    author: 'Sarah',
    topic: 'LocalMusic',
    content: 'Just discovered this amazing underground band at The Beat Club last night! Anyone else catch the show? 🎸',
    likes: 47,
    replies: 12,
    time: '2h ago'
  },
  {
    id: 2,
    author: 'Alex',
    topic: 'SkateLife',
    content: 'New skate park downtown is 🔥! Who wants to session this weekend?',
    likes: 32,
    replies: 8,
    time: '4h ago'
  },
  {
    id: 3,
    author: 'Maya',
    topic: 'ArtScene',
    content: 'The street art festival next week is going to be incredible. Already planning my route to catch all the best pieces! 🎨',
    likes: 56,
    replies: 15,
    time: '5h ago'
  }
];

export function TopicsScreen() {
  return (
    <div className="min-h-screen bg-graphite pb-24 pt-6 px-6">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Topics</h1>
          <p className="text-text-secondary">What's trending in your city</p>
        </div>

        {/* Trending Topics */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-mint-aqua" />
            <h2 className="text-lg">Trending Now</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {TRENDING_TOPICS.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <HeyoCard className="cursor-pointer hover:border-mint-aqua/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <Hash className="w-5 h-5 text-electric-blue flex-shrink-0" />
                    <span className="text-xs text-success flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {topic.trend}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1">{topic.tag}</h3>
                  <p className="text-xs text-text-secondary">{topic.posts} posts</p>
                </HeyoCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-hot-pink" />
            <h2 className="text-lg">Recent Discussions</h2>
          </div>
          
          <div className="space-y-4">
            {TOPIC_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HeyoCard className="cursor-pointer hover:border-mint-aqua/30 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-hot-pink flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">{post.author[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{post.author}</h3>
                        <span className="text-xs text-text-secondary">• {post.time}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <Hash className="w-3 h-3 text-mint-aqua" />
                        <span className="text-xs text-mint-aqua">{post.topic}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-3">{post.content}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <button className="flex items-center gap-1 hover:text-hot-pink transition-colors">
                      <span>❤️</span>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-mint-aqua transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.replies}</span>
                    </button>
                  </div>
                </HeyoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
