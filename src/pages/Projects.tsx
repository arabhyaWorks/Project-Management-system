import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Download, Filter } from "lucide-react";
import { format } from "date-fns";
import type { Project } from "../types";
import { DataTable } from "../components/table/dataTable";
import { ProjectFilters } from "../components/table/ProjectFilters";
import Drawer from "../components/drawer/Drawer";
import ProjectForm from "../components/drawer/ProjectForm";

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Ram Path Development",
    department: "Nagar Nigam",
    executingAgency: "Civil",
    yojnaName: "State Smart City",
    description: "Development of Ram Path corridor",
    goals: "Improve infrastructure for pilgrims",
    fundsSanctionedBy: "State Government",
    percentComplete: 45,
    status: "In Progress",
    contractorName: "ABC Constructions",
    amountSanctioned: 5000,
    amountReleased: 2000,
    financialProgress: 40,
    revisedCost: 5500,
    sanctionDate: "2024-01-15",
    financialApprovalDate: "2024-01-20",
    contractDate: "2024-02-01",
    workStartDate: "2024-02-15",
    workCompletionDate: "2024-08-15",
    projectCompletionDate: "2024-09-01",
    revisedCompletionDate: "2024-09-15",
    estimatedDate: "2024-09-30",
  },
];

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.executingAgency.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      !selectedDepartment || project.department === selectedDepartment;
    const matchesStatus = !selectedStatus || project.status === selectedStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const exportData = () => {
    const csvContent = [
      ["Project Name", "Department", "Status", "Amount Sanctioned", "Progress"],
      ...filteredProjects.map((project) => [
        project.name,
        project.department,
        project.status,
        project.amountSanctioned,
        `${project.percentComplete}%`,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "projects.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and monitor all development projects
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={exportData}
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Download className="h-4 w-4 mr-1" />
            Export
          </button>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
          >
            <Plus className="h-5 w-5 mr-1" />
            New Project
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg overflow-hidden	">
        <div className="border-b border-gray-200 p-4">
          <ProjectFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedDepartment={selectedDepartment}
            onDepartmentChange={setSelectedDepartment}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <DataTable searchTerm={searchTerm} />
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Create New Project"
      >
        <div className="p-6">
          <ProjectForm onSubmitSuccess={() => setIsDrawerOpen(false)} />
        </div>
      </Drawer>
    </div>
  );
}
