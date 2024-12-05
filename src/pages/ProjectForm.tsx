import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, ArrowLeft } from "lucide-react";

const departments = [
  {
    value: "1",
    label: "Divyang Jan sashaktikaran vibhag",
  },
  {
    value: "2",
    label: "Nagar vikas",
  },
  {
    value: "3",
    label: "Electric distribution division -1",
  },
  {
    value: "4",
    label: "Electric distribution division -3",
  },
  {
    value: "5",
    label: "Basic Education",
  },
  {
    value: "6",
    label: "Health",
  },
  {
    value: "7",
    label: "Tourism",
  },
  {
    value: "8",
    label: "Technical Education",
  },
  {
    value: "9",
    label: "Intermidiate Education",
  },
  {
    value: "10",
    label: "Revenue",
  },
  {
    value: "11",
    label: "Vocational Education",
  },
  {
    value: "12",
    label: "Home",
  },
  {
    value: "13",
    label: "Social welfare",
  },
  {
    value: "14",
    label: "Animal Husbandry",
  },
  {
    value: "15",
    label: "Probation",
  },
  {
    value: "16",
    label: "Public work department",
  },
  {
    value: "17",
    label: "Rural engineering department",
  },
  {
    value: "18",
    label: "Agriculture",
  },
  {
    value: "19",
    label: "Rural development",
  },
  {
    value: "20",
    label: "Irrigation department",
  },
  {
    value: "21",
    label: "Fisheries deparment",
  },
  {
    value: "22",
    label: "Forest Department",
  },
];
const executingAgencies = [
  {
    value: "1",
    label: "Uttar Pradesh Power Transmission Corporation Limited",
  },
  {
    value: "2",
    label: "Construction Division Building, PWD,Varanasi",
  },
  {
    value: "3",
    label: "Uttar Pradesh State Bridge Corporation, Bhadohi",
  },
  {
    value: "4",
    label: "Bhadohi Development Authority, Bida",
  },
  {
    value: "5",
    label: "Rajkiya Nirman Nigam, Sonbhadra",
  },
  {
    value: "6",
    label: "C & DS Unit 24",
  },
  {
    value: "7",
    label: "Rajkiya Nirman Nigam, Bhadohi",
  },
  {
    value: "8",
    label: "Construction Division, PWD,Chandauli",
  },
  {
    value: "9",
    label: "Executive Engineer, Chandraprabha, Irrigation Department",
  },
  {
    value: "10",
    label: "Bandhi Prakhand, Irrigation Department",
  },
  {
    value: "11",
    label: "Uttar Pradesh Aawas Vikash Parisad, Prayagraj",
  },
  {
    value: "12",
    label: "Provincial Division, PWD, Bhadohi",
  },
  {
    value: "13",
    label: "U.P. Project Corporation Ltd. Construction Division-3, Lucknow",
  },
  {
    value: "14",
    label: "UPCLDF Bhadohi",
  },
  {
    value: "15",
    label: "UPRNSS, Varanasi",
  },
  {
    value: "16",
    label: "UPSIDCO",
  },
  {
    value: "17",
    label: "Uttar Pradesh Police Aawas Nirman Nigam, Varanasi",
  },
  {
    value: "18",
    label: "Uttar Pradesh Aawas Vikash Parisad, Varanasi-1",
  },
  {
    value: "19",
    label: "Executive Engineer, U.P. Power Corporation Ltd.",
  },
  {
    value: "20",
    label: "Forest Department",
  },
  {
    value: "21",
    label: "Rural Engineering Department",
  },
  {
    value: "22",
    label: "Jal Nigam Urban",
  },
  {
    value: "23",
    label: "Irrigation Department, Laghudal Prakhand",
  },
  {
    value: "24",
    label: "Irrigation Department, Tubewell division",
  },
  {
    value: "25",
    label: "HITES",
  },
];
const yojnaCategories = [
  "Sansad Nidhi",
  "Vidhayak Nidhi",
  "Purvanchal Vikas Nidhi",
  "Others",
];
const projectStatuses = ["In Planning", "In Progress", "On Hold", "Completed"];

export function ProjectForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: "",
    projectStatus: "",
    projectGoal: "",
    projectDepartment: "",
    departmentId: "",
    executingAgency: "",
    executingAgencyId: "",
    scheme: "",
    description: "",
    fundSanctionedBy: "",
    concernedOfficialName: "",
    concernedProjectManager: "",
    projectSanctionDate: "",
    projectFinancialApprovalGoNumber: "",
    projectFinancialApprovalDate: "",
    actualProjectStartDate: "",
    projectCompletionDate: "",
    estimatedCompletionDate: "",
    workOrderFormationDate: "",
    landHandoverDate: "",
    contactInformation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add project creation logic here
    navigate("/projects");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/projects")}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">
            Create New Project
          </h2>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 divide-y divide-gray-200"
      >
        <div className="space-y-6 pt-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Executing Agency
              </label>
              <select
                name="executingAgency"
                value={formData.executingAgency}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select Agency</option>
                {executingAgencies.map((agency) => (
                  <option key={agency} value={agency}>
                    {agency}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Yojna Category
              </label>
              <select
                name="yojnaName"
                value={formData.yojnaName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select Category</option>
                {yojnaCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Project Description
              </label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Goals/Benefits
              </label>
              <textarea
                name="goals"
                rows={3}
                value={formData.goals}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Funds Sanctioned By
              </label>
              <input
                type="text"
                name="fundsSanctionedBy"
                value={formData.fundsSanctionedBy}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Project Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">Select Status</option>
                {projectStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contractor Name
              </label>
              <input
                type="text"
                name="contractorName"
                value={formData.contractorName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount Sanctioned (in Lakhs)
              </label>
              <input
                type="number"
                name="amountSanctioned"
                value={formData.amountSanctioned}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sanction Date
              </label>
              <input
                type="date"
                name="sanctionDate"
                value={formData.sanctionDate}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Financial Approval Date
              </label>
              <input
                type="date"
                name="financialApprovalDate"
                value={formData.financialApprovalDate}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Work Start Date
              </label>
              <input
                type="date"
                name="workStartDate"
                value={formData.workStartDate}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expected Completion Date
              </label>
              <input
                type="date"
                name="projectCompletionDate"
                value={formData.projectCompletionDate}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="flex justify-end gap-x-3">
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-orange-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Project
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
