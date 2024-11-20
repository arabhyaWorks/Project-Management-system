import React from 'react';

const ProjectOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Project Overview</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Project Name</h3>
            <p className="mt-1 text-gray-900">
              Project Estimate for construction of crated stone Boulder cutter to prevent erosion in 450 meter length at right bank of river Ganga in village- Mahuji, Block- Dhanapur Tahsil- Sakaldha, Distt- Chandauli
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Project Department</h3>
              <p className="mt-1 text-gray-900">Bandhi Prakhand, Irrigation Department</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Project Manager</h3>
              <p className="mt-1 text-gray-900">Executive Engineer, Bandhi Division, Varanasi</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Contact Information</h3>
              <p className="mt-1 text-gray-900">Assistant Engineer-I Bandhi Division, Varanasi & 8394659586</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Goals & Objectives</h3>
              <p className="mt-1 text-gray-900">Flood Protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;