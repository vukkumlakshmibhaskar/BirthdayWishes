
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Image } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  
  const handleImageError = (photoId: number) => {
    setImageError(prev => ({ ...prev, [photoId]: true }));
  };
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <Card 
            key={photo.id}
            className="overflow-hidden cursor-pointer hover:-translate-y-1 transition-all"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-square overflow-hidden relative">
              {imageError[photo.id] ? (
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <Image className="w-12 h-12 text-muted-foreground" />
                  <span className="sr-only">{photo.alt}</span>
                </div>
              ) : (
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={() => handleImageError(photo.id)}
                  loading="lazy"
                />
              )}
            </div>
            {photo.caption && (
              <div className="p-2 text-sm text-center text-gray-600">
                {photo.caption}
              </div>
            )}
          </Card>
        ))}
      </div>
      
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full animate-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full">
              {!imageError[selectedPhoto.id] ? (
                <img 
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full object-contain max-h-[80vh]"
                  onError={() => handleImageError(selectedPhoto.id)}
                />
              ) : (
                <div className="w-full h-[50vh] flex items-center justify-center bg-muted">
                  <Image className="w-24 h-24 text-muted-foreground" />
                  <span className="sr-only">{selectedPhoto.alt}</span>
                </div>
              )}
            </div>
            {selectedPhoto.caption && (
              <div className="p-4 text-center">
                <p className="text-lg font-medium">{selectedPhoto.caption}</p>
              </div>
            )}
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
