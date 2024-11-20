import React from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1590496793929-36417d3117ed?auto=format&fit=crop&q=80&w=800',
    title: 'Mahuji Project Complete Photographs',
    date: '06-01-2024 10:53:36 PM'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    title: 'Mahuji Project Complete Photographs',
    date: '06-01-2024 10:52:45 PM'
  }
];

const ProjectGallery = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Project Component Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover rounded-lg shadow-sm"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h3 className="text-sm font-medium">{image.title}</h3>
                <p className="text-xs mt-1">Uploaded: {image.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;