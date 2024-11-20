import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import ProjectOverview from './ProjectOverview';
import ProjectMetrics from './ProjectMetrics';
import ProjectSchedule from './ProjectSchedule';
import ProjectInspection from './ProjectInspection';
import ProjectEssentialTest from './ProjectEssentialTest';
import ProjectBudget from './ProjectBudget';
import ProjectGallery from './ProjectGallery';
import ProjectProgress from './ProjectProgress';

const ProjectDetails = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-end items-center">
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md text-sm font-medium">
            <Download className="w-4 h-4 inline-block mr-2" />
            Download PDF
          </button>
          <button className="px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md text-sm font-medium">
            Back
          </button>
        </div>
      </div>

      <ProjectOverview />
      <ProjectMetrics />
      <ProjectSchedule />
      <ProjectInspection />
      <ProjectEssentialTest />
      <ProjectBudget />
      <ProjectGallery />
      <ProjectProgress />
    </div>
  );
};

export default ProjectDetails;