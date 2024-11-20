import React from 'react';

const milestones = [
  {
    id: 1,
    description: 'Construction of 11 Nos. Stone Boulder Cutters in GI Wire Crate of Size 2.00 m. x 1.50 m. x 1.00 m. in length of 450 m.',
    startDate: '05/04/2023',
    plannedCompletion: '30/06/2024',
    actualCompletion: '-',
    progress: 100
  }
];

const ProjectSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Schedule</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sr.
                </th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Milestone
                </th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Planned Completion Date
                </th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actual Completion Date
                </th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Milestone Completion(%)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {milestones.map((milestone) => (
                <tr key={milestone.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {milestone.id}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {milestone.description}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {milestone.startDate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {milestone.plannedCompletion}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {milestone.actualCompletion}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${milestone.progress}%` }}
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-900">
                        {milestone.progress}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectSchedule;