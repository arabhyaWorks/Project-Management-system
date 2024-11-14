import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Download, Filter } from "lucide-react";
import { DataTable } from "../components/table/dataTable";
import { ProjectFilters } from "../components/table/ProjectFilters";
import { users, usersHeaders } from "../utils/dataSet";
import { UsersFilter } from "../components/users/usersFilters";

export default function UsersList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedExecutiveAgency, setSelectedExecutiveAgency] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredProjects = users.slice(0, -1).filter((project) => {
    const matchesSearch =
      project.executingOfficerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      project.executingAgency
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      project.executingOfficerDesignation
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const exportData = () => {
    const csvContent = [
      ["Project Name", "Department", "Status", "Amount Sanctioned", "Progress"],
      ...filteredProjects.map((project) => [
        project.projectName,
        project.departmentName,
        project.projectStatus,
        project.approvedProjectCost,
        `${project.physicalProgress}%`,
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
    <div className="">
      {/* <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and monitor all development projects
          </p>
        </div>
        <div className="flex items-center gap-4"></div>
      </div> */}

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg overflow-hidden	">
        <div className="border-b border-gray-200 p-4">
          <UsersFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            createNewUser={() => setIsDrawerOpen(true)}
            exportData={() => exportData()}
          />
        </div>
        <DataTable
          headers={usersHeaders}
          projects={filteredProjects}
          searchTerm={searchTerm}
        />
      </div>

      {/* <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Create New Project"
      >
        <div className="p-6">
          <ProjectForm onSubmitSuccess={() => setIsDrawerOpen(false)} />
        </div>
      </Drawer> */}
    </div>
  );
}
