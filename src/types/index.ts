export interface ProjectApprovalInfo {
  date: string;
  orderNumber: string;
}

export interface Project {
  id: string;
  serialNumber: number;
  name: string;
  currentStatus: string;
  projectApprovalInfo: ProjectApprovalInfo;
  governmentApprovalInfo: ProjectApprovalInfo;
  approvedCost: number;
  totalAllocatedAmount: number;
  milestoneProgress: number;
  physicalProgress: number;
  estimatedCompletionDate: string;
  delayReason?: string;
  restructuredPlanDate?: string;
  revisedCost?: number;
  revisedCompletionDate?: string;
  department: string;
  category: string;
  subproject?: string;
  agreementDate: string;
  landAvailabilityDate: string;
  updatedProjectCost: number;
  galleryImages: string[];
  meetingInstructions: string;
  executingAgency: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  role: string;
  department: string;
}