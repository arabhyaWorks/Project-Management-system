export interface Project {
  id: string;
  name: string;
  department: string;
  executingAgency: string;
  yojnaName: string;
  description: string;
  goals: string;
  fundsSanctionedBy: string;
  percentComplete: number;
  status: 'In Planning' | 'In Progress' | 'On Hold' | 'Completed';
  contractorName: string;
  amountSanctioned: number;
  amountReleased: number;
  financialProgress: number;
  revisedCost: number;
  sanctionDate: string;
  financialApprovalDate: string;
  contractDate: string;
  workStartDate: string;
  workCompletionDate: string;
  projectCompletionDate: string;
  revisedCompletionDate: string;
  estimatedDate: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  role: string;
  department: string;
}