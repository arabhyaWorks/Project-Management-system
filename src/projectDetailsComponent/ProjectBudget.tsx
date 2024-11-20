import React from 'react';

const ProjectBudget = () => {
  const budget = [
    {
      srNo: 1,
      installmentAmount: '0.00131',
      receivedDate: '02/Nov/2023',
      utilizationCertificate: 'Utilization certificate(UC) not Uploaded'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Budget Received in Installment</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sr.No.
                </th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Installment Amount (In Lac)
                </th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount Received Date
                </th>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Utilization certificate(UC)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {budget.map((item) => (
                <tr key={item.srNo}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.srNo}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.installmentAmount}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.receivedDate}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-red-600">
                    {item.utilizationCertificate}
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

export default ProjectBudget;