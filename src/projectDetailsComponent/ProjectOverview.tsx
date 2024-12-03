import React from "react";

const ProjectOverview = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Project Overview
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Project Name</h3>
            <p className="mt-1 text-gray-900">{project.projectName}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Project Department
              </h3>
              <p className="mt-1 text-gray-900">{project.projectDepartment}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Project Manager
              </h3>
              {/* <p className="mt-1 text-gray-900">{Object.values(project.projectManager).join(", ")}</p> */}
              <p className="mt-1 text-gray-900">
                {project.projectManager.officialName +
                  ", " +
                  project.projectManager.officialDesignation +
                  `,\n` +
                  project.projectManager.officialDepartment}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Contact Information
              </h3>
              {/* <p className="mt-1 text-gray-900">
                Assistant Engineer-I Bandhi Division, Varanasi & 8394659586
              </p> */}

              <p className="mt-1 text-gray-900">
                {project.concernedOfficial[0].officialName +
                  ", " +
                  project.concernedOfficial[0].officialDesignation +
                  `,\n` +
                  project.concernedOfficial[0].officialDepartment}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Goals & Objectives
              </h3>
              <p className="mt-1 text-gray-900">Flood Protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
