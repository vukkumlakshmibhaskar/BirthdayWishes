
import { useEffect, useState } from 'react';
import ConfettiEffect from '@/components/ConfettiEffect';
import BirthdayCountdown from '@/components/BirthdayCountdown';
import PhotoGallery from '@/components/PhotoGallery';
import TimelineSection from '@/components/TimelineSection';
import MessageSection from '@/components/MessageSection';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TimelineEventProps } from '@/components/TimelineEvent';
import { Gift, Camera, Clock, MessageCircle, Calendar } from 'lucide-react';

// Set your friend's birthday here
const BIRTHDAY_DATE = new Date('2025-05-28'); // Update with your friend's birthday

// Default friend's name - update with your friend's name
const FRIEND_NAME = "Trisha";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Photos with actual image URLs
  // You can upload your own images to public/ directory and reference them here
  // Or use online image URLs
  const photos = [
    { 
      id: 6, 
      src: '/15.jpg', 
      alt: 'Memory 6', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/17.jpg', 
      alt: 'Memory 8', 
      caption: '' 
    },
    { 
      id: 1, 
      src: '/18.jpg', 
      alt: 'Memory 1', 
      caption: '' 
    },
    { 
      id: 5, 
      src: '/22.jpg', 
      alt: 'Memory 5', 
      caption: '' 
    },
    { 
      id: 3, 
      src: '/20.jpg', 
      alt: 'Memory 3', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/32 (29).jpg', 
      alt: 'Memory 8', 
      caption: '' 
    },
    { 
      id: 6, 
      src: '/23.jpg', 
      alt: 'Memory 6', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/27.jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/005.jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/007.jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/006.jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 1, 
      src: '/1.jpg', 
      alt: 'Memory 1', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/2.jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 3, 
      src: '/3.jpg', 
      alt: 'Memory 3', 
      caption: '' 
    },
    { 
      id: 9, 
      src: '/40.jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 4, 
      src: '/4.jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 5, 
      src: '/5.jpg', 
      alt: 'Memory 5', 
      caption: '' 
    },
    { 
      id: 6, 
      src: '/6.jpg', 
      alt: 'Memory 6', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/9.jpg', 
      alt: 'Memory 8', 
      caption: '' 
    },
    { 
      id: 1, 
      src: '/10.jpg', 
      alt: 'Memory 1', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '11.jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 3, 
      src: '/12.jpg', 
      alt: 'Memory 3', 
      caption: '' 
    },
    { 
      id: 4, 
      src: '13.jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 5, 
      src: '/14.jpg', 
      alt: 'Memory 5', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/19.jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 4, 
      src: '/21.jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/25.jpg', 
      alt: 'Memory 8', 
      caption: '' 
    },
    { 
      id: 1, 
      src: '/26.jpg', 
      alt: 'Memory 1', 
      caption: '' 
    },
    { 
      id: 3, 
      src: '/28.jpg', 
      alt: 'Memory 3', 
      caption: '' 
    },
    { 
      id: 4, 
      src: '/29.jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 5, 
      src: '/30.jpg', 
      alt: 'Memory 5', 
      caption: '' 
    },
    { 
      id: 6, 
      src: '/31.jpg', 
      alt: 'Memory 6', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/32 (1).jpg', 
      alt: 'Memory 8', 
      caption: '' 
    },
    { 
      id: 1, 
      src: '/32 (2).jpg', 
      alt: 'Memory 1', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/32 (3).jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 3, 
      src: '/32 (4).jpg', 
      alt: 'Memory 3', 
      caption: '' 
    },
    { 
      id: 4, 
      src: '/32 (5).jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 5, 
      src: '/32 (6).jpg', 
      alt: 'Memory 5', 
      caption: '' 
    },
    { 
      id: 6, 
      src: '/32 (7).jpg', 
      alt: 'Memory 6', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/32 (8).jpg', 
      alt: 'Memory 8', 
      caption: '' 
    },
    { 
      id: 1, 
      src: '/32 (9).jpg', 
      alt: 'Memory 1', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/32 (10).jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 3, 
      src: '/32 (11).jpg', 
      alt: 'Memory 3', 
      caption: '' 
    },
    { 
      id: 4, 
      src: '/32 (12).jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 5, 
      src: '/32 (13).jpg', 
      alt: 'Memory 5', 
      caption: '' 
    },
    { 
      id: 6, 
      src: '/32 (14).jpg', 
      alt: 'Memory 6', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/32 (15).jpg', 
      alt: 'Memory 8', 
      caption: '' 
    },
    { 
      id: 1, 
      src: '/32 (16).jpg', 
      alt: 'Memory 1', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/32 (17).jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 3, 
      src: '/32 (18).jpg', 
      alt: 'Memory 3', 
      caption: '' 
    },
    { 
      id: 4, 
      src: '/32 (19).jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 5, 
      src: '/32 (20).jpg', 
      alt: 'Memory 5', 
      caption: '' 
    },
    { 
      id: 6, 
      src: '/32 (21).jpg', 
      alt: 'Memory 6', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/32 (22).jpg', 
      alt: 'Memory 8', 
      caption: '' 
    },
    { 
      id: 1, 
      src: '/32 (23).jpg', 
      alt: 'Memory 1', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/32 (24).jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 3, 
      src: '/32 (25).jpg', 
      alt: 'Memory 3', 
      caption: '' 
    },
    { 
      id: 4, 
      src: '/32 (26).jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 5, 
      src: '/32 (27).jpg', 
      alt: 'Memory 5', 
      caption: '' 
    },
    { 
      id: 6, 
      src: '/32 (28).jpg', 
      alt: 'Memory 6', 
      caption: '' 
    },
    { 
      id: 1, 
      src: '/32 (30).jpg', 
      alt: 'Memory 1', 
      caption: '' 
    },
    { 
      id: 2, 
      src: '/32 (31).jpg', 
      alt: 'Memory 2', 
      caption: '' 
    },
    { 
      id: 3, 
      src: '/32 (32).jpg', 
      alt: 'Memory 3', 
      caption: '' 
    },
    { 
      id: 4, 
      src: '/32 (33).jpg', 
      alt: 'Memory 4', 
      caption: '' 
    },
    { 
      id: 5, 
      src: '/32 (34).jpg', 
      alt: 'Memory 5', 
      caption: '' 
    },
    { 
      id: 6, 
      src: '/32 (35).jpg', 
      alt: 'Memory 6', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/one.jpg', 
      alt: 'Memory 8', 
      caption: '' 
    },
    { 
      id: 8, 
      src: '/two.jpg', 
      alt: 'Memory 8', 
      caption: '' 
    }
  ];

  // Timeline events - we'll also update the images here
  const timelineEvents: TimelineEventProps[] = [
    {
      date: '2025',
      title: 'Colors',
      description: 'The fest that was conducted by our college is named as colors by that fest I have received a  colorful friendship with your bond ...Hoping to remain same and let us continue our friendship by adding more colors .....🙃🤩',
      imageSrc: '/32 (29) - Copy.jpg'
    },
    {
      date: '2025',
      title: 'Colors-2ndDay',
      description: 'Splashing colors and spreading smiles on Day 2 of Colors! 🌈✨ Grateful for friendships that feel like family and for the special junior who make these memories even brighter. Here’s to laughter, love, and endless hues of happiness! 🎉💛',
      imageSrc: '/32 (28).jpg'
    },
    {
      date: '2025',
      title: 'Colors-FinalDay',
      description: 'As the colors fade, the memories stay forever 🎨✨ Wrapping up the final day of Colors with hearts full of laughter, bonds stronger than ever ❤️💛💙',
      imageSrc: '32 (23) - Copy.jpg'
    },
    {
      date: '2025',
      title: 'Farewell',
      description: 'A frame full of memories, a heart full of gratitude — gifting moments that will last a lifetime on our MCA farewell, shared with a junior who made the journey even more special. 🌟📸',
      imageSrc: '/27 - Copy.jpg'
    },
    {
      date: '2025',
      title: 'Farewell',
      description: 'The bond that we created is turned into more stronger and  Hope to remains Same forever 🖇♾....It is not only a simple picture but the image of more memories and bond 🫂💫',
      imageSrc: '/18 - Copy.jpg'
    },
    {
      date: '2025',
      title: "Signature Day",
      description: 'Final day of our journey with you.....may be this is the last day but the memories with you lasts forever ☺',
      imageSrc: '/16 - Copy.jpg'
    }
  ];

  // Birthday messages
  const messages = [
    {
      id: 1,
      author: 'Bhaskar_Senior',
      content: "A wish you a very happy birthday ji, This is a small gift from my side to u  💕.Always be happy and remains the same bond for life long..."
    },
    {
      id: 2,
      author: 'Subbu_Bhayya',
      content: "Happy Birthday, Trisha! I hope you have the best day ever! I’m so lucky to have you as my sister. Thanks for always being there for me. Love you so much! 💕"
    },
    {
      id: 3,
      author: 'Hyma_Senior',
      content: "Happy Birthday, Trisha!"
    },
    {
      id: 4,
      author: 'Sindhu_Senior',
      content: "Many more happy returns of the day ra Trisha....enjoy the day...keep smiling🤗😇"
    },
    {
      id: 5,
      author: 'HemaLatha_Senior',
      content: "Happy birthday ra thrisa.......God bless u ra.. 🥰😍"
    },
    {
      id: 6,
      author: 'Afrid_Bhayya',
      content: "Happy Birthday, Sis! Ame lohu re bhai-bahini nuhen, kintu ama samparkata semiti majbuta. Mu prati dina tu paain kritagyata anubhaba karuchi  tu paain aneka ananda, prema au hrudaya ra sabu ichha purti heba ra kamana karuchi! 💕🎂"
    },
    {
      id: 7,
      author: 'Satish_Brother',
      content: "Happy birthday to my incredible sister from another mother! Wishing you a day filled with love, laughter, and everything that brings you joy."
    },
    {
      id: 8,
      author: 'Sravanthi_Senior',
      content: "Hi Dear!!!....Wishing you many more Happy Returns of the Day Trisha....On this special day I wish you to get all the joy and  happiness from your loved ones...Blast the day Girl 😍....May god bless with you happy and healthy life !! Stay strong dear..."
    },
    {
      id: 9,
      author: 'Chandu',
      content: "Wishing you a day filled with love, laughter, and all your favorite things...Happy birthday Trisha papaa...❤"
    },
    {
      id: 10,
      author: 'Kishuu',
      content: "Wishing you a very happy birthday trishaa..may all ur dreams come true..."
    }
  ];

  useEffect(() => {
    // Show confetti when the page loads
    setShowConfetti(true);
    
    // Stop confetti after 8 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pb-12">
      {showConfetti && <ConfettiEffect />}
      
      <header className="pt-12 pb-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-birthday-purple to-birthday-pink inline-block text-transparent bg-clip-text">
          Happy Birthday, {FRIEND_NAME}!
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          A special celebration for a special friend
        </p>
      </header>
      
      <Tabs 
        defaultValue="home" 
        value={activeSection}
        onValueChange={setActiveSection}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm pt-4 pb-2">
          <TabsList className="grid grid-cols-5 h-auto">
            <TabsTrigger value="home" className="py-3 data-[state=active]:bg-birthday-purple data-[state=active]:text-white">
              <Gift className="h-5 w-5 mr-1 md:mr-2" />
              <span className="hidden md:inline">Home</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="py-3 data-[state=active]:bg-birthday-purple data-[state=active]:text-white">
              <Camera className="h-5 w-5 mr-1 md:mr-2" />
              <span className="hidden md:inline">Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="timeline" className="py-3 data-[state=active]:bg-birthday-purple data-[state=active]:text-white">
              <Calendar className="h-5 w-5 mr-1 md:mr-2" />
              <span className="hidden md:inline">Timeline</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="py-3 data-[state=active]:bg-birthday-purple data-[state=active]:text-white">
              <MessageCircle className="h-5 w-5 mr-1 md:mr-2" />
              <span className="hidden md:inline">Messages</span>
            </TabsTrigger>
            <TabsTrigger value="countdown" className="py-3 data-[state=active]:bg-birthday-purple data-[state=active]:text-white">
              <Clock className="h-5 w-5 mr-1 md:mr-2" />
              <span className="hidden md:inline">Countdown</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <div className="mt-8">
          <TabsContent value="home" className="mt-0">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-birthday-gold animate-pulse-glow">
                <img 
                  src="/1.jpg" 
                  alt={`${FRIEND_NAME}'s photo`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl font-bold text-birthday-purple">
                  Today is all about YOU!
                </h2>
                <p className="text-xl text-gray-700">
                  This little website is my gift to you - a collection of our favorite memories and messages from people who love you. Enjoy exploring!
                </p>
                
                <Button 
                  className="birthday-btn mt-6"
                  onClick={() => {
                    setActiveSection('gallery');
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 4000);
                  }}
                >
                  Start Your Birthday Journey
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="gallery" className="mt-0">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-birthday-purple">
                Our Favorite Memories
              </h2>
              <p className="text-gray-600 mt-2">
                Click on any photo to enlarge it
              </p>
            </div>
            <PhotoGallery photos={photos} />
          </TabsContent>
          
          <TabsContent value="timeline" className="mt-0">
            <TimelineSection events={timelineEvents} />
          </TabsContent>
          
          <TabsContent value="messages" className="mt-0">
            <MessageSection messages={messages} />
          </TabsContent>
          
          <TabsContent value="countdown" className="mt-0">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-birthday-purple">
                The Big Day
              </h2>
              <p className="text-gray-600 mt-2">
                Counting down to your special day
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <BirthdayCountdown targetDate={BIRTHDAY_DATE} />
              
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700">
                  I can't wait to celebrate with you in person!
                </p>
                <Button 
                  className="birthday-btn mt-4"
                  onClick={() => {
                    setActiveSection('home');
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 4000);
                  }}
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Index;
