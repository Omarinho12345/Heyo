import { useState } from 'react';
import { HeyoCard } from '../components/heyo/HeyoCard';
import { HeyoButton } from '../components/heyo/HeyoButton';
import { Calendar, MapPin, Users, Plus, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Indie Night Live',
    date: 'Tonight, 9:00 PM',
    location: 'The Beat Club',
    attendees: 47,
    imageUrl: 'https://images.unsplash.com/photo-1656283384093-1e227e621fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpY3xlbnwxfHx8fDE3NjA5NjI3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Music'
  },
  {
    id: 2,
    title: 'Modern Art Exhibition',
    date: 'Oct 21, 2:00 PM',
    location: 'City Gallery',
    attendees: 23,
    imageUrl: 'https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NjA5MzQzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Art'
  },
  {
    id: 3,
    title: 'Coffee & Conversations',
    date: 'Oct 22, 10:00 AM',
    location: 'Brew House Cafe',
    attendees: 12,
    imageUrl: 'https://images.unsplash.com/photo-1721845706930-b3a05aa70baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZnJpZW5kc3xlbnwxfHx8fDE3NjA5NTY4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Social'
  }
];

export function EventsScreen() {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleCreateEvent = () => {
    // Handle event creation
    setShowCreateDialog(false);
    // Reset form
    setEventTitle('');
    setEventLocation('');
    setEventDate('');
    setEventDescription('');
  };

  return (
    <div className="min-h-screen bg-graphite pb-24 pt-6 px-6 gradient-radial-pink">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl mb-2">Events</h1>
            <p className="text-text-secondary">Happening in your city</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowCreateDialog(true)}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-hot-pink flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <Plus className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 -mx-6 px-6">
          {['All', 'Tonight', 'This Week', 'Music', 'Art', 'Food'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                filter === 'All'
                  ? 'bg-gradient-to-br from-electric-blue to-hot-pink text-white'
                  : 'bg-surface text-text-secondary border border-white/20 hover:border-mint-aqua/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {MOCK_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <HeyoCard className="cursor-pointer hover:border-mint-aqua/30 transition-colors" noPadding>
                <div className="flex gap-4">
                  <ImageWithFallback
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-24 h-24 object-cover rounded-l-xl flex-shrink-0"
                  />
                  
                  <div className="flex-1 py-3 pr-4 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{event.title}</h3>
                      <span className="text-xs px-2 py-1 bg-mint-aqua/20 text-mint-aqua rounded-full flex-shrink-0">
                        {event.category}
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-sm text-text-secondary">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-mint-aqua">
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span>{event.attendees} going</span>
                      </div>
                    </div>
                  </div>
                </div>
              </HeyoCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Create Event Dialog */}
      <AnimatePresence>
        {showCreateDialog && (
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogContent className="bg-surface border-white/10 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl">Create Event</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm mb-2 text-text-secondary">Event Title</label>
                  <Input
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="What's happening?"
                    className="bg-graphite border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-text-secondary">Location</label>
                  <Input
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="Where is it?"
                    className="bg-graphite border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-text-secondary">Date & Time</label>
                  <Input
                    type="datetime-local"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="bg-graphite border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-2 text-text-secondary">Description</label>
                  <Textarea
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    placeholder="Tell people what to expect..."
                    className="bg-graphite border-white/20 text-white min-h-24"
                  />
                </div>
                
                <HeyoButton
                  fullWidth
                  onClick={handleCreateEvent}
                  disabled={!eventTitle || !eventLocation || !eventDate}
                >
                  Create Event
                </HeyoButton>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
