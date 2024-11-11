import React from 'react';
import { format } from 'date-fns';
import { Camera, FileText } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectTableProps {
  projects: Project[];
}

export function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Details</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status & Progress</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approvals</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Financial</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="px-4 py-4 text-sm text-gray-500">
                {project.serialNumber}
              </td>
              <td className="px-4 py-4">
                <div className="text-sm font-medium text-gray-900">{project.name}</div>
                <div className="text-sm text-gray-500">{project.department}</div>
                <div className="text-sm text-gray-500">{project.category}</div>
                {project.subproject && (
                  <div className="text-sm text-gray-500">Sub: {project.subproject}</div>
                )}
              </td>
              <td className="px-4 py-4">
                <div className="space-y-2">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    project.currentStatus === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.currentStatus === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    project.currentStatus === 'On Hold' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.currentStatus}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm">
                      <span className="w-32">Milestone:</span>
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-600 h-2 rounded-full"
                            style={{ width: `${project.milestoneProgress}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="ml-2">{project.milestoneProgress}%</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-32">Physical:</span>
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${project.physicalProgress}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="ml-2">{project.physicalProgress}%</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="text-sm space-y-1">
                  <div>
                    <span className="font-medium">Project:</span>
                    <div className="text-gray-500">
                      {format(new Date(project.projectApprovalInfo.date), 'dd MMM yyyy')}
                      <div className="text-xs">#{project.projectApprovalInfo.orderNumber}</div>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Government:</span>
                    <div className="text-gray-500">
                      {format(new Date(project.governmentApprovalInfo.date), 'dd MMM yyyy')}
                      <div className="text-xs">#{project.governmentApprovalInfo.orderNumber}</div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="text-sm space-y-1">
                  <div>
                    <span className="font-medium">Approved:</span>
                    <div className="text-gray-900">₹{project.approvedCost.toLocaleString()} Lacs</div>
                  </div>
                  <div>
                    <span className="font-medium">Allocated:</span>
                    <div className="text-gray-900">₹{project.totalAllocatedAmount.toLocaleString()} Lacs</div>
                  </div>
                  {project.revisedCost && (
                    <div>
                      <span className="font-medium">Revised:</span>
                      <div className="text-gray-900">₹{project.revisedCost.toLocaleString()} Lacs</div>
                    </div>
                  )}
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="text-sm space-y-1">
                  <div>
                    <span className="font-medium">Agreement:</span>
                    <div className="text-gray-500">{format(new Date(project.agreementDate), 'dd MMM yyyy')}</div>
                  </div>
                  <div>
                    <span className="font-medium">Estimated:</span>
                    <div className="text-gray-500">{format(new Date(project.estimatedCompletionDate), 'dd MMM yyyy')}</div>
                  </div>
                  {project.revisedCompletionDate && (
                    <div>
                      <span className="font-medium">Revised:</span>
                      <div className="text-gray-500">{format(new Date(project.revisedCompletionDate), 'dd MMM yyyy')}</div>
                    </div>
                  )}
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex space-x-2">
                  <button
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                    title="View Gallery"
                  >
                    <Camera className="h-5 w-5" />
                  </button>
                  <button
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                    title="View Instructions"
                  >
                    <FileText className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}