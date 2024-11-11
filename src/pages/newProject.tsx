import React, { useState } from "react";
import Drawer from "../components/drawer/Drawer";
import ProjectForm from "../components/drawer/ProjectForm";
import { Plus, Download } from "lucide-react";
import type { Project } from "../types";
import { ProjectTable } from "../components/table/ProjectTable";
import { ProjectFilters } from "../components/table/ProjectFilters";

// const mockProjects

const mockProjects: Project[] = [
  {
    id: "1",
    serialNumber: 1,
    name: "Industrial Park Development Phase 1",
    currentStatus: "In Progress",
    projectApprovalInfo: {
      date: "2023-05-10",
      orderNumber: "BIDA-2023-001",
    },
    governmentApprovalInfo: {
      date: "2023-05-15",
      orderNumber: "GOV-BIDA-2023-001",
    },
    approvedCost: 7000,
    totalAllocatedAmount: 3000,
    milestoneProgress: 50,
    physicalProgress: 45,
    estimatedCompletionDate: "2024-12-31",
    department: "Bhadohi Industrial Development Authority",
    category: "Industrial Infrastructure",
    subproject: "Phase 1",
    agreementDate: "2023-06-01",
    landAvailabilityDate: "2023-07-15",
    updatedProjectCost: 7200,
    galleryImages: [],
    meetingInstructions: "Weekly review every Wednesday at 11 AM",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 7200,
    revisedCompletionDate: "2025-01-31",
  },
  {
    id: "2",
    serialNumber: 2,
    name: "Textile Manufacturing Hub Setup",
    currentStatus: "Not Started",
    projectApprovalInfo: {
      date: "2024-02-10",
      orderNumber: "BIDA-2024-002",
    },
    governmentApprovalInfo: {
      date: "2024-02-15",
      orderNumber: "GOV-BIDA-2024-002",
    },
    approvedCost: 15000,
    totalAllocatedAmount: 0,
    milestoneProgress: 0,
    physicalProgress: 0,
    estimatedCompletionDate: "2026-06-30",
    department: "Bhadohi Industrial Development Authority",
    category: "Manufacturing",
    subproject: "Textile Hub",
    agreementDate: "2024-03-01",
    landAvailabilityDate: "2024-04-01",
    updatedProjectCost: 15200,
    galleryImages: [],
    meetingInstructions: "Monthly review on the 10th of each month",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 15200,
    revisedCompletionDate: "2026-07-31",
  },
  {
    id: "3",
    serialNumber: 3,
    name: "Bhadohi Export Promotion Zone",
    currentStatus: "In Progress",
    projectApprovalInfo: {
      date: "2022-11-20",
      orderNumber: "BIDA-2022-003",
    },
    governmentApprovalInfo: {
      date: "2022-11-25",
      orderNumber: "GOV-BIDA-2022-003",
    },
    approvedCost: 10000,
    totalAllocatedAmount: 4500,
    milestoneProgress: 60,
    physicalProgress: 55,
    estimatedCompletionDate: "2025-03-31",
    department: "Bhadohi Industrial Development Authority",
    category: "Export Infrastructure",
    subproject: "Phase 1",
    agreementDate: "2023-01-10",
    landAvailabilityDate: "2023-02-15",
    updatedProjectCost: 10500,
    galleryImages: [],
    meetingInstructions: "Quarterly review on the last day of each quarter",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 10500,
    revisedCompletionDate: "2025-04-30",
  },
  {
    id: "4",
    serialNumber: 4,
    name: "Bhadohi Industrial Complex Roads Development",
    currentStatus: "In Progress",
    projectApprovalInfo: {
      date: "2023-03-01",
      orderNumber: "BIDA-2023-004",
    },
    governmentApprovalInfo: {
      date: "2023-03-05",
      orderNumber: "GOV-BIDA-2023-004",
    },
    approvedCost: 5000,
    totalAllocatedAmount: 2500,
    milestoneProgress: 40,
    physicalProgress: 35,
    estimatedCompletionDate: "2024-09-30",
    department: "Bhadohi Industrial Development Authority",
    category: "Infrastructure",
    subproject: "Road Development",
    agreementDate: "2023-04-01",
    landAvailabilityDate: "2023-04-15",
    updatedProjectCost: 5200,
    galleryImages: [],
    meetingInstructions: "Bi-weekly progress meetings",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 5200,
    revisedCompletionDate: "2024-10-31",
  },
  {
    id: "5",
    serialNumber: 5,
    name: "Leather Processing Plant",
    currentStatus: "Not Started",
    projectApprovalInfo: {
      date: "2024-01-10",
      orderNumber: "BIDA-2024-005",
    },
    governmentApprovalInfo: {
      date: "2024-01-15",
      orderNumber: "GOV-BIDA-2024-005",
    },
    approvedCost: 8000,
    totalAllocatedAmount: 0,
    milestoneProgress: 0,
    physicalProgress: 0,
    estimatedCompletionDate: "2025-12-31",
    department: "Bhadohi Industrial Development Authority",
    category: "Manufacturing",
    subproject: "Leather Processing",
    agreementDate: "2024-02-01",
    landAvailabilityDate: "2024-03-01",
    updatedProjectCost: 8200,
    galleryImages: [],
    meetingInstructions: "Monthly review on the 1st of each month",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 8200,
    revisedCompletionDate: "2026-01-31",
  },
  {
    id: "6",
    serialNumber: 6,
    name: "Furniture Manufacturing Unit Setup",
    currentStatus: "In Progress",
    projectApprovalInfo: {
      date: "2023-06-15",
      orderNumber: "BIDA-2023-006",
    },
    governmentApprovalInfo: {
      date: "2023-06-20",
      orderNumber: "GOV-BIDA-2023-006",
    },
    approvedCost: 6000,
    totalAllocatedAmount: 3000,
    milestoneProgress: 45,
    physicalProgress: 40,
    estimatedCompletionDate: "2025-08-31",
    department: "Bhadohi Industrial Development Authority",
    category: "Manufacturing",
    subproject: "Furniture Manufacturing",
    agreementDate: "2023-07-10",
    landAvailabilityDate: "2023-08-01",
    updatedProjectCost: 6300,
    galleryImages: [],
    meetingInstructions: "Weekly review every Friday at 10 AM",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 6300,
    revisedCompletionDate: "2025-09-30",
  },
  {
    id: "7",
    serialNumber: 7,
    name: "Carpet Export Hub",
    currentStatus: "In Progress",
    projectApprovalInfo: {
      date: "2022-10-10",
      orderNumber: "BIDA-2022-007",
    },
    governmentApprovalInfo: {
      date: "2022-10-15",
      orderNumber: "GOV-BIDA-2022-007",
    },
    approvedCost: 12000,
    totalAllocatedAmount: 8000,
    milestoneProgress: 65,
    physicalProgress: 60,
    estimatedCompletionDate: "2024-07-31",
    department: "Bhadohi Industrial Development Authority",
    category: "Export",
    subproject: "Carpet Hub",
    agreementDate: "2022-11-01",
    landAvailabilityDate: "2022-12-01",
    updatedProjectCost: 12500,
    galleryImages: [],
    meetingInstructions: "Monthly review on the 15th",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 12500,
    revisedCompletionDate: "2024-08-31",
  },
  {
    id: "8",
    serialNumber: 8,
    name: "Bhadohi Industrial Water Treatment Plant",
    currentStatus: "In Progress",
    projectApprovalInfo: {
      date: "2023-02-20",
      orderNumber: "BIDA-2023-008",
    },
    governmentApprovalInfo: {
      date: "2023-02-25",
      orderNumber: "GOV-BIDA-2023-008",
    },
    approvedCost: 9500,
    totalAllocatedAmount: 4000,
    milestoneProgress: 55,
    physicalProgress: 50,
    estimatedCompletionDate: "2025-02-28",
    department: "Bhadohi Industrial Development Authority",
    category: "Infrastructure",
    subproject: "Water Treatment",
    agreementDate: "2023-03-10",
    landAvailabilityDate: "2023-04-01",
    updatedProjectCost: 9800,
    galleryImages: [],
    meetingInstructions: "Quarterly review every 3 months",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 9800,
    revisedCompletionDate: "2025-03-31",
  },
  {
    id: "9",
    serialNumber: 9,
    name: "Bhadohi Industrial Skills Training Center",
    currentStatus: "Not Started",
    projectApprovalInfo: {
      date: "2024-03-15",
      orderNumber: "BIDA-2024-009",
    },
    governmentApprovalInfo: {
      date: "2024-03-20",
      orderNumber: "GOV-BIDA-2024-009",
    },
    approvedCost: 4500,
    totalAllocatedAmount: 0,
    milestoneProgress: 0,
    physicalProgress: 0,
    estimatedCompletionDate: "2025-09-30",
    department: "Bhadohi Industrial Development Authority",
    category: "Training",
    subproject: "Skills Training",
    agreementDate: "2024-04-01",
    landAvailabilityDate: "2024-05-01",
    updatedProjectCost: 4700,
    galleryImages: [],
    meetingInstructions: "Monthly review on the 1st of each month",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 4700,
    revisedCompletionDate: "2025-10-31",
  },
  {
    id: "10",
    serialNumber: 10,
    name: "Industrial Park Development Phase 2",
    currentStatus: "Planned",
    projectApprovalInfo: {
      date: "2024-04-10",
      orderNumber: "BIDA-2024-010",
    },
    governmentApprovalInfo: {
      date: "2024-04-15",
      orderNumber: "GOV-BIDA-2024-010",
    },
    approvedCost: 8000,
    totalAllocatedAmount: 0,
    milestoneProgress: 0,
    physicalProgress: 0,
    estimatedCompletionDate: "2027-12-31",
    department: "Bhadohi Industrial Development Authority",
    category: "Industrial Infrastructure",
    subproject: "Phase 2",
    agreementDate: "2024-05-01",
    landAvailabilityDate: "2024-06-01",
    updatedProjectCost: 8200,
    galleryImages: [],
    meetingInstructions: "Quarterly review meetings",
    executingAgency: "BIDA",
    delayReason: "",
    restructuredPlanDate: "",
    revisedCost: 8200,
    revisedCompletionDate: "2028-01-31",
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
    const matchesStatus =
      !selectedStatus || project.currentStatus === selectedStatus;
    const matchesCategory =
      !selectedCategory || project.category === selectedCategory;
    return (
      matchesSearch && matchesDepartment && matchesStatus && matchesCategory
    );
  });

  const exportData = () => {
    const headers = [
      "Serial Number",
      "Project Name",
      "Current Status",
      "Department",
      "Category",
      "Approved Cost",
      "Allocated Amount",
      "Milestone Progress",
      "Physical Progress",
      "Estimated Completion",
    ];

    const csvContent = [
      headers,
      ...filteredProjects.map((project) => [
        project.serialNumber,
        project.name,
        project.currentStatus,
        project.department,
        project.category,
        project.approvedCost,
        project.totalAllocatedAmount,
        `${project.milestoneProgress}%`,
        `${project.physicalProgress}%`,
        project.estimatedCompletionDate,
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

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg">
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

        <ProjectTable projects={filteredProjects} />
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
