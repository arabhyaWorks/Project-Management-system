import React from "react";
import { Search, Image as ImageIcon, Filter } from "lucide-react";

interface GalleryProps {
  isSidebarOpen: boolean;
}

// Sample project data
const projects = [
  {
    id: 1,
    title:
      "Project Estimate for construction of crated stone Boulder cutter to prevent of erosion in 450 meter length at right bank of river Ganga in village- Mahuji, Block- Dhanapur Tahsil- Sakaldiha, Distt- Chandauli.",
    agency: "Bandhi Prakhand",
    images: [
      {
        url: "https://cdn.britannica.com/20/119620-050-AC901996/Yichang-Three-Gorges-Dam-Yangtze-River-China.jpg",
        description: "Construction Progress - Phase 1",
        uploadedAt: "2024-01-08T16:53:38",
      },
      {
        url: "https://cdn.britannica.com/20/119620-050-AC901996/Yichang-Three-Gorges-Dam-Yangtze-River-China.jpg",
        description: "Site Overview",
        uploadedAt: "2024-01-08T16:52:16",
      },
    ],
  },
  {
    id: 2,
    title:
      "R.O.B. IN LIEU OF LC No.-102B/3E ON CHANDAULI- SAKALDIHA ROAD BETWEEN KUCHAMAN-SAKALDIHA RAILWAY STATION OF ECR RAIL SECTION IN DISTT. CHANDAULI",
    agency: "PWD Chandauli",
    images: [
      {
        url: "https://cdn.britannica.com/58/1758-050-F33B1845/Itaipu-Dam-Upper-Parana-River-Paraguay-Ciudad.jpg",
        description: "M.O. Residence",
        uploadedAt: "2024-08-24T16:26:57",
      },
      {
        url: "https://cdn.britannica.com/58/1758-050-F33B1845/Itaipu-Dam-Upper-Parana-River-Paraguay-Ciudad.jpg",
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
              <Filter
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={selectedAgency}
                onChange={(e) => setSelectedAgency(e.target.value)}
              >
                <option value="">Project Names</option>
                {agencies.map((agency) => (
                  <option key={agency} value={agency}>
                    {agency}
                  </option>
                ))}
              </select>
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
              <div className="p-4 border-b flex ">
                <div className="">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{project.agency}</p>
                </div>

                <div className="">
                  <button className=" w-[170px] px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors">
                    <ImageIcon size={20} />
                    Upload Images
                  </button>
                </div>
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
