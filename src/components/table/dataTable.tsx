import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import classNames from "classnames";

interface Project {
  id: string;
  projectName: string;
  projectStatus: string;
  executingAgency: string;
  approvalDateAndOrderNumber: string;
  financialApprovalDateAndOrderNumber: string;
  approvedProjectCost: string;
  completionDateAsPerContract: string;
  totalReleasedFunds: string;
  totalExpenditure: string;
  milestoneProgress: string;
  physicalProgress: string;
  estimatedCompletionDateByAgency: string;
  delayReason: string;
  revisedApprovalDate: string;
  revisedProjectCost: string;
  revisedCompletionDate: string;
  departmentName: string;
  projectCategory: string;
  contractFormationDate: string;
  landAvailabilityDate: string;
  projectUpdate: string;
  projectGallery: string;
  meetingInstructions: string;
  complianceOfMeetingInstructions: string;
}

const projects: Project[] = [
  {
    id: "1",
    projectName: "कारपेट सिटी-2 विकास",
    projectStatus: "कार्य प्रगति पर",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "15-05-2023, आदेश संख्या 101/2023",
    financialApprovalDateAndOrderNumber: "20-05-2023, आदेश संख्या 202/2023",
    approvedProjectCost: "₹100 करोड़",
    completionDateAsPerContract: "31-12-2025",
    totalReleasedFunds: "₹50 करोड़",
    totalExpenditure: "₹45 करोड़",
    milestoneProgress: "50%",
    physicalProgress: "45%",
    estimatedCompletionDateByAgency: "30-06-2025",
    delayReason: "भूमि अधिग्रहण में देरी",
    revisedApprovalDate: "01-07-2024",
    revisedProjectCost: "₹110 करोड़",
    revisedCompletionDate: "31-12-2026",
    departmentName: "औद्योगिक विकास विभाग",
    projectCategory: "औद्योगिक क्षेत्र विकास",
    contractFormationDate: "01-06-2023",
    landAvailabilityDate: "15-06-2023",
    projectUpdate: "अद्यतन 1",
    projectGallery: "गैलरी लिंक 1",
    meetingInstructions: "निर्देश 1",
    complianceOfMeetingInstructions: "अनुपालन 1",
  },
  {
    id: "2",
    projectName: "शॉपिंग कॉम्प्लेक्स निर्माण",
    projectStatus: "प्रारंभिक चरण",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "10-08-2024, आदेश संख्या 303/2024",
    financialApprovalDateAndOrderNumber: "15-08-2024, आदेश संख्या 404/2024",
    approvedProjectCost: "₹80 करोड़",
    completionDateAsPerContract: "31-12-2026",
    totalReleasedFunds: "₹20 करोड़",
    totalExpenditure: "₹10 करोड़",
    milestoneProgress: "25%",
    physicalProgress: "12%",
    estimatedCompletionDateByAgency: "31-12-2026",
    delayReason: "ठेकेदार चयन में देरी",
    revisedApprovalDate: "-",
    revisedProjectCost: "-",
    revisedCompletionDate: "-",
    departmentName: "नगरीय विकास विभाग",
    projectCategory: "वाणिज्यिक विकास",
    contractFormationDate: "20-08-2024",
    landAvailabilityDate: "01-09-2024",
    projectUpdate: "अद्यतन 2",
    projectGallery: "गैलरी लिंक 2",
    meetingInstructions: "निर्देश 2",
    complianceOfMeetingInstructions: "अनुपालन 2",
  },
  {
    id: "3",
    projectName: "मास्टर प्लान 2041 का कार्यान्वयन",
    projectStatus: "योजना निर्माण",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "01-01-2024, आदेश संख्या 505/2024",
    financialApprovalDateAndOrderNumber: "05-01-2024, आदेश संख्या 606/2024",
    approvedProjectCost: "₹25 करोड़",
    completionDateAsPerContract: "31-12-2024",
    totalReleasedFunds: "₹10 करोड़",
    totalExpenditure: "₹5 करोड़",
    milestoneProgress: "40%",
    physicalProgress: "20%",
    estimatedCompletionDateByAgency: "31-12-2024",
    delayReason: "विशेषज्ञों की कमी",
    revisedApprovalDate: "-",
    revisedProjectCost: "-",
    revisedCompletionDate: "-",
    departmentName: "योजना विभाग",
    projectCategory: "शहरी विकास",
    contractFormationDate: "10-01-2024",
    landAvailabilityDate: "20-01-2024",
    projectUpdate: "अद्यतन 3",
    projectGallery: "गैलरी लिंक 3",
    meetingInstructions: "निर्देश 3",
    complianceOfMeetingInstructions: "अनुपालन 3",
  },
  {
    id: "4",
    projectName: "औद्योगिक पार्क का विस्तार",
    projectStatus: "कार्य प्रगति पर",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "20-03-2023, आदेश संख्या 707/2023",
    financialApprovalDateAndOrderNumber: "25-03-2023, आदेश संख्या 808/2023",
    approvedProjectCost: "₹150 करोड़",
    completionDateAsPerContract: "31-12-2025",
    totalReleasedFunds: "₹75 करोड़",
    totalExpenditure: "₹70 करोड़",
    milestoneProgress: "50%",
    physicalProgress: "47%",
    estimatedCompletionDateByAgency: "30-09-2025",
    delayReason: "वित्तीय संसाधनों की कमी",
    revisedApprovalDate: "01-10-2024",
    revisedProjectCost: "₹160 करोड़",
    revisedCompletionDate: "31-12-2026",
    departmentName: "औद्योगिक विकास विभाग",
    projectCategory: "औद्योगिक क्षेत्र विकास",
    contractFormationDate: "01-04-2023",
    landAvailabilityDate: "15-04-2023",
    projectUpdate: "अद्यतन 4",
    projectGallery: "गैलरी लिंक 4",
    meetingInstructions: "निर्देश 4",
    complianceOfMeetingInstructions: "अनुपालन 4",
  },
  {
    id: "3",
    projectName: "मास्टर प्लान 2041 का कार्यान्वयन",
    projectStatus: "योजना निर्माण",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "01-01-2024, आदेश संख्या 505/2024",
    financialApprovalDateAndOrderNumber: "05-01-2024, आदेश संख्या 606/2024",
    approvedProjectCost: "₹25 करोड़",
    completionDateAsPerContract: "31-12-2024",
    totalReleasedFunds: "₹10 करोड़",
    totalExpenditure: "₹5 करोड़",
    milestoneProgress: "40%",
    physicalProgress: "20%",
    estimatedCompletionDateByAgency: "31-12-2024",
    delayReason: "विशेषज्ञों की कमी",
    revisedApprovalDate: "-",
    revisedProjectCost: "-",
    revisedCompletionDate: "-",
    departmentName: "योजना विभाग",
    projectCategory: "शहरी विकास",
    contractFormationDate: "10-01-2024",
    landAvailabilityDate: "20-01-2024",
    projectUpdate: "अद्यतन 3",
    projectGallery: "गैलरी लिंक 3",
    meetingInstructions: "निर्देश 3",
    complianceOfMeetingInstructions: "अनुपालन 3",
  },
  {
    id: "4",
    projectName: "औद्योगिक पार्क का विस्तार",
    projectStatus: "कार्य प्रगति पर",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "20-03-2023, आदेश संख्या 707/2023",
    financialApprovalDateAndOrderNumber: "25-03-2023, आदेश संख्या 808/2023",
    approvedProjectCost: "₹150 करोड़",
    completionDateAsPerContract: "31-12-2025",
    totalReleasedFunds: "₹75 करोड़",
    totalExpenditure: "₹70 करोड़",
    milestoneProgress: "50%",
    physicalProgress: "47%",
    estimatedCompletionDateByAgency: "30-09-2025",
    delayReason: "वित्तीय संसाधनों की कमी",
    revisedApprovalDate: "01-10-2024",
    revisedProjectCost: "₹160 करोड़",
    revisedCompletionDate: "31-12-2026",
    departmentName: "औद्योगिक विकास विभाग",
    projectCategory: "औद्योगिक क्षेत्र विकास",
    contractFormationDate: "01-04-2023",
    landAvailabilityDate: "15-04-2023",
    projectUpdate: "अद्यतन 4",
    projectGallery: "गैलरी लिंक 4",
    meetingInstructions: "निर्देश 4",
    complianceOfMeetingInstructions: "अनुपालन 4",
  },
  {
    id: "3",
    projectName: "मास्टर प्लान 2041 का कार्यान्वयन",
    projectStatus: "योजना निर्माण",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "01-01-2024, आदेश संख्या 505/2024",
    financialApprovalDateAndOrderNumber: "05-01-2024, आदेश संख्या 606/2024",
    approvedProjectCost: "₹25 करोड़",
    completionDateAsPerContract: "31-12-2024",
    totalReleasedFunds: "₹10 करोड़",
    totalExpenditure: "₹5 करोड़",
    milestoneProgress: "40%",
    physicalProgress: "20%",
    estimatedCompletionDateByAgency: "31-12-2024",
    delayReason: "विशेषज्ञों की कमी",
    revisedApprovalDate: "-",
    revisedProjectCost: "-",
    revisedCompletionDate: "-",
    departmentName: "योजना विभाग",
    projectCategory: "शहरी विकास",
    contractFormationDate: "10-01-2024",
    landAvailabilityDate: "20-01-2024",
    projectUpdate: "अद्यतन 3",
    projectGallery: "गैलरी लिंक 3",
    meetingInstructions: "निर्देश 3",
    complianceOfMeetingInstructions: "अनुपालन 3",
  },
  {
    id: "4",
    projectName: "औद्योगिक पार्क का विस्तार",
    projectStatus: "कार्य प्रगति पर",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "20-03-2023, आदेश संख्या 707/2023",
    financialApprovalDateAndOrderNumber: "25-03-2023, आदेश संख्या 808/2023",
    approvedProjectCost: "₹150 करोड़",
    completionDateAsPerContract: "31-12-2025",
    totalReleasedFunds: "₹75 करोड़",
    totalExpenditure: "₹70 करोड़",
    milestoneProgress: "50%",
    physicalProgress: "47%",
    estimatedCompletionDateByAgency: "30-09-2025",
    delayReason: "वित्तीय संसाधनों की कमी",
    revisedApprovalDate: "01-10-2024",
    revisedProjectCost: "₹160 करोड़",
    revisedCompletionDate: "31-12-2026",
    departmentName: "औद्योगिक विकास विभाग",
    projectCategory: "औद्योगिक क्षेत्र विकास",
    contractFormationDate: "01-04-2023",
    landAvailabilityDate: "15-04-2023",
    projectUpdate: "अद्यतन 4",
    projectGallery: "गैलरी लिंक 4",
    meetingInstructions: "निर्देश 4",
    complianceOfMeetingInstructions: "अनुपालन 4",
  },
  {
    id: "3",
    projectName: "मास्टर प्लान 2041 का कार्यान्वयन",
    projectStatus: "योजना निर्माण",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "01-01-2024, आदेश संख्या 505/2024",
    financialApprovalDateAndOrderNumber: "05-01-2024, आदेश संख्या 606/2024",
    approvedProjectCost: "₹25 करोड़",
    completionDateAsPerContract: "31-12-2024",
    totalReleasedFunds: "₹10 करोड़",
    totalExpenditure: "₹5 करोड़",
    milestoneProgress: "40%",
    physicalProgress: "20%",
    estimatedCompletionDateByAgency: "31-12-2024",
    delayReason: "विशेषज्ञों की कमी",
    revisedApprovalDate: "-",
    revisedProjectCost: "-",
    revisedCompletionDate: "-",
    departmentName: "योजना विभाग",
    projectCategory: "शहरी विकास",
    contractFormationDate: "10-01-2024",
    landAvailabilityDate: "20-01-2024",
    projectUpdate: "अद्यतन 3",
    projectGallery: "गैलरी लिंक 3",
    meetingInstructions: "निर्देश 3",
    complianceOfMeetingInstructions: "अनुपालन 3",
  },
  {
    id: "4",
    projectName: "औद्योगिक पार्क का विस्तार",
    projectStatus: "कार्य प्रगति पर",
    executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
    approvalDateAndOrderNumber: "20-03-2023, आदेश संख्या 707/2023",
    financialApprovalDateAndOrderNumber: "25-03-2023, आदेश संख्या 808/2023",
    approvedProjectCost: "₹150 करोड़",
    completionDateAsPerContract: "31-12-2025",
    totalReleasedFunds: "₹75 करोड़",
    totalExpenditure: "₹70 करोड़",
    milestoneProgress: "50%",
    physicalProgress: "47%",
    estimatedCompletionDateByAgency: "30-09-2025",
    delayReason: "वित्तीय संसाधनों की कमी",
    revisedApprovalDate: "01-10-2024",
    revisedProjectCost: "₹160 करोड़",
    revisedCompletionDate: "31-12-2026",
    departmentName: "औद्योगिक विकास विभाग",
    projectCategory: "औद्योगिक क्षेत्र विकास",
    contractFormationDate: "01-04-2023",
    landAvailabilityDate: "15-04-2023",
    projectUpdate: "अद्यतन 4",
    projectGallery: "गैलरी लिंक 4",
    meetingInstructions: "निर्देश 4",
    complianceOfMeetingInstructions: "अनुपालन 4",
  },
];

const headers = [
  "क्रम संख्या",
  "परियोजना का नाम",
  "परियोजना अद्यतन स्थिति",
  "कार्यदायी संस्था",
  "परियोजना स्वीकृत होने की तिथि एवं शासनादेश संख्या",
  "परियोजना हेतु शासन द्वारा जारी वित्तीय स्वीकृति का दिनांक एवं शासनादेश संख्या",
  "परियोजना की स्वीकृत लागत",
  "अनुबंध गठन के अनुसार परियोजना पूर्ण करने की तिथि",
  "परियोजना पर अब तक कुल अवमुक्त धनराशि",
  "परियोजना पर अब तक कुल व्यय धनराशि",
  "माइलस्टोन प्रगति %",
  "भौतिक प्रगति %",
  "कार्यदायी संस्था के अनुसार कार्य पूर्ण होने की अनुमानित तिथि",
  "परियोजना में विलम्ब के कारण",
  "पुनरीक्षित स्वीकृति की तिथि",
  "पुनरीक्षित स्वीकृति के अनुसार परियोजना की लागत",
  "पुनरीक्षित स्वीकृति के अनुसार परियोजना को पूर्ण करने की तिथि",
  "विभाग का नाम",
  "परियोजना श्रेणी/योजना का नाम",
  "अनुबंध गठन की तिथि",
  "कार्यदायी संस्था को भूमि उपलब्ध कराने की तिथि",
  "परियोजना अपडेट लाग",
  "परियोजना गैलरी",
  "बैठक निर्देश",
  "बैठक निर्देश अनुपालन",
];

interface DataTableProps {
  searchTerm: string;
}

export const DataTable = ({ searchTerm }: DataTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const filteredProjects = projects.filter(
    (project) =>
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.departmentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredProjects.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );
  const totalPages = Math.ceil(filteredProjects.length / entriesPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(Math.min(Math.max(1, pageNumber), totalPages));
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 flex items-center justify-between bg-white border-b">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show</span>
          <select
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded px-2 py-1 text-sm"
          >
            {[10, 25, 50, 100].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-600">entries</span>
        </div>
        <div className="text-sm text-gray-600">
          Showing {indexOfFirstEntry + 1} to{" "}
          {Math.min(indexOfLastEntry, filteredProjects.length)} of{" "}
          {filteredProjects.length} entries
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={header}
                  className={classNames(
                    "px-6 py-4 text-left text-sm font-bold text-orange-800 tracking-wider whitespace-normal border-2 border-gray-100",
                    index === 0 ? "w-16" : "w-40"
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentEntries.slice(0, 5).map((project, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 border-2 border-gray-100">
                  {index + 1}.
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.projectName}
                </td>
                <td
                  className={classNames(
                    "px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100"
                  )}
                >
                  <p
                    className={classNames(
                      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                      project.projectStatus === "Complete"
                        ? "bg-green-100 text-green-800"
                        : project.projectStatus === "कार्य प्रगति पर"
                        ? "bg-blue-100 text-blue-800"
                        : project.projectStatus === "प्रारंभिक चरण"
                        ? "bg-yellow-100 text-yellow-800"
                        : project.projectStatus === "योजना निर्माण"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-red-100 text-red-800" // Default color for any other status
                    )}
                  >
                    {project.projectStatus}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.executingAgency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.approvalDateAndOrderNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.financialApprovalDateAndOrderNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.approvedProjectCost}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.completionDateAsPerContract}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.totalReleasedFunds}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.totalExpenditure}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.milestoneProgress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.physicalProgress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.estimatedCompletionDateByAgency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.delayReason}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.revisedApprovalDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.revisedProjectCost}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.revisedCompletionDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.departmentName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.projectCategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.contractFormationDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.landAvailabilityDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.projectUpdate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.projectGallery}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.meetingInstructions}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                  {project.complianceOfMeetingInstructions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="p-4 flex items-center justify-between border-t bg-white">
        <div className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => paginate(pageNum)}
                  className={`px-3 py-1 rounded ${
                    currentPage === pageNum
                      ? "bg-orange-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
