import React, { useState } from 'react';
import { Plus, Calendar } from 'lucide-react';

interface Milestone {
  id: string;
  projectName: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'Pending' | 'Completed' | 'Delayed';
}

const mockMilestones: Milestone[] = [
  {
    id: '1',
    projectName: 'Ram Path Development',
    title: 'Foundation Work',
    description: 'Complete the foundation and basic infrastructure setup',
    dueDate: '2024-04-15',
    status: 'Completed',
  },
  {
    id: '2',
    projectName: 'Ram Path Development',
    title: 'Road Construction',
    description: 'Laying of road and pathway construction',
    dueDate: '2024-06-30',
    status: 'Pending',
  },
];

export function Milestones() {
  const [showForm, setShowForm] = useState(false);
  const [newMilestone, setNewMilestone] = useState({
    projectName: '',
    title: '',
    description: '',
    dueDate: '',
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Project Milestones</h2>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add Milestone
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow sm:rounded-lg p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">New Milestone</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project</label>
              <select
                value={newMilestone.projectName}
                onChange={(e) => setNewMilestone({ ...newMilestone, projectName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select Project</option>
                <option value="Ram Path Development">Ram Path Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={newMilestone.title}
                onChange={(e) => setNewMilestone({ ...newMilestone, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={newMilestone.description}
                onChange={(e) => setNewMilestone({ ...newMilestone, description: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              <input
                type="date"
                value={newMilestone.dueDate}
                onChange={(e) => setNewMilestone({ ...newMilestone, dueDate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div className="flex justify-end gap-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-orange-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
              >
                Save Milestone
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {mockMilestones.map((milestone) => (
            <li key={milestone.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-sm font-medium text-orange-600 truncate">{milestone.title}</p>
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      milestone.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      milestone.status === 'Delayed' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {milestone.status}
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      {milestone.projectName}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>Due by {new Date(milestone.dueDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">{milestone.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}