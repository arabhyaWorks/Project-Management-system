import React from "react";
import { Search, Image as ImageIcon, Filter } from "lucide-react";

interface GalleryProps {
  isSidebarOpen: boolean;
}

// Sample project data
const projects = [
  {
    id: 1,
    title: "Construction of crated stone Boulder cutter - Mahuji Project",
    agency: "Bandhi Prakhand",
    images: [
      {
        url: "https://pmschandauli.com/upload/project/9/main/240108045338.png",
        description: "Construction Progress - Phase 1",
        uploadedAt: "2024-01-08T16:53:38",
      },
      {
        url: "https://pmschandauli.com/upload/project/9/main/240108045338.png",
        description: "Site Overview",
        uploadedAt: "2024-01-08T16:52:16",
      },
    ],
  },
  {
    id: 2,
    title: "Primary Health Center Construction",
    agency: "PWD Chandauli",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590596504154-1592466956531",
        description: "M.O. Residence",
        uploadedAt: "2024-08-24T16:26:57",
      },
      {
        url: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd",
        description: "PHC Main Building",
        uploadedAt: "2024-08-24T16:26:51",
      },
    ],
  },
];

export default function Gallery({ isSidebarOpen }: GalleryProps) {
  const [selectedAgency, setSelectedAgency] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");

  const agencies = [...new Set(projects.map((project) => project.agency))];

  const filteredProjects = projects.filter((project) => {
    const matchesAgency = !selectedAgency || project.agency === selectedAgency;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesAgency && matchesSearch;
  });

  return (
    <div
      className={`min-h-screen bg-gray-50 transition-all duration-300 m-0
        `}
    >
      {/* ${isSidebarOpen ? 'ml-64' : 'ml-0'} */}
      {/* Header */}
      <header className="bg-white rounded shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Project Gallery
            </h1>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors">
                <ImageIcon size={20} />
                Upload Images
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto py-6">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={selectedAgency}
                onChange={(e) => setSelectedAgency(e.target.value)}
              >
                <option value="">All Executing Agencies</option>
                {agencies.map((agency) => (
                  <option key={agency} value={agency}>
                    {agency}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="px-4 py-2 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
              onClick={() => {
                setSelectedAgency("");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{project.agency}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="group relative aspect-[948/592] overflow-hidden rounded-lg"
                  >
                    <img
                      src={image.url}
                      alt={image.description}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                        <p className="text-sm font-medium">
                          {image.description}
                        </p>
                        <p className="text-xs opacity-75 mt-1">
                          Uploaded:{" "}
                          {new Date(image.uploadedAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
