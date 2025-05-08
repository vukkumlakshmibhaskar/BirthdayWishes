
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface Message {
  id: number;
  author: string;
  content: string;
}

interface MessageSectionProps {
  messages: Message[];
}

const MessageSection = ({ messages }: MessageSectionProps) => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-2 text-birthday-purple">
        Birthday Wishes
      </h2>
      
      <div className="flex justify-center mb-8">
        <Heart className="text-birthday-pink animate-bounce h-8 w-8" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {messages.map((message) => (
          <Card key={message.id} className="shadow-md hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="mb-4 text-lg italic">
                "{message.content}"
              </div>
              <div className="text-right text-birthday-purple font-medium">
                — {message.author}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MessageSection;
