import { useState } from 'react';
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingCity } from './screens/OnboardingCity';
import { OnboardingPhoto } from './screens/OnboardingPhoto';
import { OnboardingInterests } from './screens/OnboardingInterests';
import { OnboardingComplete } from './screens/OnboardingComplete';
import { MatchScreen } from './screens/MatchScreen';
import { MapScreen } from './screens/MapScreen';
import { EventsScreen } from './screens/EventsScreen';
import { ChatListScreen } from './screens/ChatListScreen';
import { ChatConversation } from './screens/ChatConversation';
import { TopicsScreen } from './screens/TopicsScreen';
import { BottomNav } from './components/heyo/BottomNav';
import { AnimatePresence, motion } from 'motion/react';

type Screen = 
  | 'splash'
  | 'onboarding-city'
  | 'onboarding-photo'
  | 'onboarding-interests'
  | 'onboarding-complete'
  | 'main';

type MainTab = 'match' | 'map' | 'events' | 'chat' | 'topics';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [activeTab, setActiveTab] = useState<MainTab>('match');
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  
  // Onboarding state
  const [userCity, setUserCity] = useState('');
  const [userInterests, setUserInterests] = useState<string[]>([]);

  const handleSplashComplete = () => {
    setCurrentScreen('onboarding-city');
  };

  const handleCityNext = (city: string) => {
    setUserCity(city);
    setCurrentScreen('onboarding-photo');
  };

  const handlePhotoNext = () => {
    setCurrentScreen('onboarding-interests');
  };

  const handlePhotoBack = () => {
    setCurrentScreen('onboarding-city');
  };

  const handleInterestsNext = (interests: string[]) => {
    setUserInterests(interests);
    setCurrentScreen('onboarding-complete');
  };

  const handleInterestsBack = () => {
    setCurrentScreen('onboarding-photo');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('main');
  };

  const handleSelectChat = (chatId: number) => {
    setSelectedChatId(chatId);
  };

  const handleBackFromChat = () => {
    setSelectedChatId(null);
  };

  const renderMainContent = () => {
    // If in chat conversation
    if (selectedChatId !== null) {
      return (
        <ChatConversation 
          chatId={selectedChatId} 
          onBack={handleBackFromChat}
        />
      );
    }

    // Main tabs
    switch (activeTab) {
      case 'match':
        return <MatchScreen />;
      case 'map':
        return <MapScreen />;
      case 'events':
        return <EventsScreen />;
      case 'chat':
        return <ChatListScreen onSelectChat={handleSelectChat} />;
      case 'topics':
        return <TopicsScreen />;
      default:
        return <MatchScreen />;
    }
  };

  return (
    <div className="w-full h-screen bg-graphite overflow-hidden">
      {/* Mobile Frame */}
      <div className="w-full h-full max-w-[390px] mx-auto relative bg-graphite shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          {currentScreen === 'splash' && (
            <motion.div
              key="splash"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SplashScreen onComplete={handleSplashComplete} />
            </motion.div>
          )}

          {currentScreen === 'onboarding-city' && (
            <motion.div
              key="onboarding-city"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <OnboardingCity onNext={handleCityNext} />
            </motion.div>
          )}

          {currentScreen === 'onboarding-photo' && (
            <motion.div
              key="onboarding-photo"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <OnboardingPhoto 
                onNext={handlePhotoNext}
                onBack={handlePhotoBack}
              />
            </motion.div>
          )}

          {currentScreen === 'onboarding-interests' && (
            <motion.div
              key="onboarding-interests"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <OnboardingInterests 
                onNext={handleInterestsNext}
                onBack={handleInterestsBack}
              />
            </motion.div>
          )}

          {currentScreen === 'onboarding-complete' && (
            <motion.div
              key="onboarding-complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <OnboardingComplete onComplete={handleOnboardingComplete} />
            </motion.div>
          )}

          {currentScreen === 'main' && (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full"
            >
              {renderMainContent()}
              {selectedChatId === null && (
                <BottomNav 
                  activeTab={activeTab}
                  onTabChange={(tab) => setActiveTab(tab as MainTab)}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
