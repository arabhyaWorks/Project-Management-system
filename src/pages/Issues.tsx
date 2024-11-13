import React, { useState } from 'react';
import { AlertCircle, Plus } from 'lucide-react';

interface Issue {
  id: string;
  projectName: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
}

const mockIssues: Issue[] = [
  {
    id: '1',
    projectName: 'Ram Path Development',
    title: 'Material Shortage',
    description: 'Facing shortage of construction materials due to supply chain issues',
    priority: 'High',
    status: 'Open',
    createdAt: '2024-03-15',
  },
  {
    id: '2',
    projectName: 'Ram Path Development',
    title: 'Weather Delay',
    description: 'Construction delayed due to unexpected rainfall',
    priority: 'Medium',
    status: 'In Progress',
    createdAt: '2024-03-10',
  },
];

export function Issues() {
  const [showForm, setShowForm] = useState(false);
  const [newIssue, setNewIssue] = useState({
    projectName: '',
    title: '',
    description: '',
    priority: 'Medium' as const,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Issue Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
        >
          <Plus className="h-5 w-5 mr-1" />
          Report Issue
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow sm:rounded-lg p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Report New Issue</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project</label>
              <select
                value={newIssue.projectName}
                onChange={(e) => setNewIssue({ ...newIssue, projectName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select Project</option>
                <option value="Ram Path Development">Ram Path Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issue Title</label>
              <input
                type="text"
                value={newIssue.title}
                onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={newIssue.description}
                onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Priority</label>
              <select
                value={newIssue.priority}
                onChange={(e) => setNewIssue({ ...newIssue, priority: e.target.value as 'Low' | 'Medium' | 'High' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
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
                Submit Issue
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {mockIssues.map((issue) => (
            <li key={issue.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-sm font-medium text-orange-600 truncate">{issue.title}</p>
                  </div>
                  <div className="ml-2 flex items-center gap-2">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      issue.priority === 'High' ? 'bg-red-100 text-red-800' :
                      issue.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {issue.priority}
                    </span>
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      issue.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                      issue.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {issue.status}
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      {issue.projectName}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>Reported on {new Date(issue.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">{issue.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}