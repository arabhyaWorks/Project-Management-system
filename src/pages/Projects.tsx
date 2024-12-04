import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Plus, Search, Download, Filter } from "lucide-react";
import { DataTable } from "../components/table/SuperProjectTable";
import { ProjectFilters } from "../components/table/ProjectFilters";
import Drawer from "../components/drawer/Drawer";
import ProjectForm from "../components/drawer/ProjectForm";
import { projectsData, headers } from "../utils/dataSet";

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedExecutiveAgency, setSelectedExecutiveAgency] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(headers.hi.map((_, index) => index.toString()));


  const columns = headers.hi.map((header, index) => ({
    key: index.toString(),
    label: header,
  }));

  const handleToggleColumn = (columnKey: string) => {
    setVisibleColumns((prev) =>
      prev.includes(columnKey)
        ? prev.filter((key) => key !== columnKey)
        : [...prev, columnKey]
    );
  };

  async function fetchProjects() {
    const url = "http://localhost:3000/api/projects";
    const params = {
      department: "",
      status: "",
    };

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
        params: params,
      });

      console.log("Response Data:", response.data);
      // return response.data;
    
      return setProjects(response.data);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.executingAgency.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      !selectedDepartment || project.departmentName === selectedDepartment;
    const matchesStatus =
      !selectedStatus || project.projectStatus === selectedStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
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

  useEffect(() => {
    fetchProjects();
  }, []);

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
            selectedExecutiveAgency={selectedExecutiveAgency}
            onSelectedExecutiveAgency={setSelectedExecutiveAgency}
            columns={columns}
            visibleColumns={visibleColumns}
            onToggleColumn={handleToggleColumn}
          />
        </div>
        <DataTable
          headers={headers}
          projects={filteredProjects}
          searchTerm={searchTerm}
          visibleColumns={visibleColumns}

        />
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
