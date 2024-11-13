import React from "react";

interface Project {
  id: string;
  serialNo: string;
  projectName: string;
  departmentName: string;
  approvalDate: string;
  approvedCost: string;
  grantDate: string;
  releasedAmount: string;
  expenditure: string;
  progressLastMonth: string;
  progressCurrentMonth: string;
  workStartDate: string;
  originalCompletionDate: string;
  revisedCompletionDate: string;
  lastFundReceived: string;
  utilizationCertificate: string;
  financialApproval: string;
  underScheme: string;
  landAvailabilityDate: string;
  photos: string;
  compliance: string;
}

const projects: Project[] = [
  {
    id: "1",
    serialNo: "1",
    projectName: "District Drug Warehouse Sant Ravidas Nagar (Bhadohi)",
    departmentName: "चिकित्सा स्वास्थ्य एवं परिवार कल्याण",
    approvalDate: "25.01.2022",
    approvedCost: "9.26",
    grantDate: "19.05.2022",
    releasedAmount: "6.81",
    expenditure: "6.81",
    progressLastMonth: "99.3",
    progressCurrentMonth: "99.5",
    workStartDate: "Nov'22",
    originalCompletionDate: "July'24",
    revisedCompletionDate: "March 2024",
    lastFundReceived: "June 2024",
    utilizationCertificate: "March 24",
    financialApproval: "SPMU/2022/056",
    underScheme: "Yes",
    landAvailabilityDate: "20.03.2022",
    photos: "समाहित माह की फोटो देखें",
    compliance: "दिये गए निर्देश के सापेक्ष अनुपालन",
  },
  {
    id: "2",
    serialNo: "2",
    projectName: "भदोही के सीएचसी में 50 बेड का निर्माण",
    departmentName: "चिकित्सा स्वास्थ्य एवं परिवार कल्याण",
    approvalDate: "24.08.2022",
    approvedCost: "3.05",
    grantDate: "16.03.2024",
    releasedAmount: "2.88",
    expenditure: "2.16",
    progressLastMonth: "85",
    progressCurrentMonth: "85",
    workStartDate: "19.03.2023",
    originalCompletionDate: "31.12.2024",
    revisedCompletionDate: "29.09.2023",
    lastFundReceived: "29.08.2019",
    utilizationCertificate: "June 24",
    financialApproval: "SPMU/2021/042",
    underScheme: "Yes",
    landAvailabilityDate: "18.09.2022",
    photos: "समाहित माह की फोटो देखें",
    compliance: "दिये गए निर्देश के सापेक्ष अनुपालन",
  },
  {
    id: "3",
    serialNo: "3",
    projectName: "भदोही के सीएचसी में 50 बेड का निर्माण",
    departmentName: "चिकित्सा स्वास्थ्य एवं परिवार कल्याण",
    approvalDate: "24.08.2022",
    approvedCost: "3.05",
    grantDate: "16.03.2024",
    releasedAmount: "2.88",
    expenditure: "2.16",
    progressLastMonth: "85",
    progressCurrentMonth: "85",
    workStartDate: "19.03.2023",
    originalCompletionDate: "31.12.2024",
    revisedCompletionDate: "29.09.2023",
    lastFundReceived: "29.08.2019",
    utilizationCertificate: "June 24",
    financialApproval: "SPMU/2021/042",
    underScheme: "Yes",
    landAvailabilityDate: "18.09.2022",
    photos: "समाहित माह की फोटो देखें",
    compliance: "दिये गए निर्देश के सापेक्ष अनुपालन",
  },
  {
    id: "4",
    serialNo: "4",
    projectName: "भदोही के सीएचसी में 50 बेड का निर्माण",
    departmentName: "चिकित्सा स्वास्थ्य एवं परिवार कल्याण",
    approvalDate: "24.08.2022",
    approvedCost: "3.05",
    grantDate: "16.03.2024",
    releasedAmount: "2.88",
    expenditure: "2.16",
    progressLastMonth: "85",
    progressCurrentMonth: "85",
    workStartDate: "19.03.2023",
    originalCompletionDate: "31.12.2024",
    revisedCompletionDate: "29.09.2023",
    lastFundReceived: "29.08.2019",
    utilizationCertificate: "June 24",
    financialApproval: "SPMU/2021/042",
    underScheme: "Yes",
    landAvailabilityDate: "18.09.2022",
    photos: "समाहित माह की फोटो देखें",
    compliance: "दिये गए निर्देश के सापेक्ष अनुपालन",
  },
];

const headers = [
  "क्रम संख्या",
  "परियोजना का नाम",
  "विभाग का नाम",
  "परियोजना स्वीकृति की तिथि",
  "स्वीकृत लागत (करोड़ में)",
  "अनुदान की तिथि",
  "अवमुक्त धनराशि (करोड़ में)",
  "व्यय धनराशि (करोड़ में)",
  "भौतिक प्रगति प्रतिशत - गत माह में",
  "भौतिक प्रगति प्रतिशत - वर्तमान माह में",
  "कार्य प्रारम्भ की तिथि",
  "कार्य पूर्ण करने की मूल निर्धारित तिथि",
  "मूल निर्धारित तिथि तक कार्य पूर्ण न होने के स्थिति में संशोधित नई तिथि",
  "परियोजना पर अंतिम बार धनराशि कब प्राप्त हुई",
  "कालम 15 के सापेक्ष स्वायत्तशासी विभाग को उपयोग प्रमाण पत्र प्रेषित करने की तिथि",
  "परियोजना हेतु शासन द्वारा जारी वित्तीय स्वीकृति का तिथि एवं शासनादेश संख्या",
  "परियोजना किसी योजना/योजना संचालित है",
  "कार्यदायी संस्था को भूमि उपलब्ध होने की तिथि",
  "कार्य की फोटो/फोटोग्राफ्स",
  "कार्य/अनुपालन",
];

interface DataTableProps {
  searchTerm: string;
}

export const DataTable = ({ searchTerm }: DataTableProps) => {
  const filteredProjects = projects.filter(
    (project) =>
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.departmentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-4 text-left text-sm font-bold text-orange-800 tracking-wider whitespace-normal border-2 border-gray-100"
                style={{ minWidth: "150px" }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredProjects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.serialNo}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 border-2 border-gray-100">
                {project.projectName}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 border-2 border-gray-100">
                {project.departmentName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.approvalDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.approvedCost}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.grantDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.releasedAmount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.expenditure}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.progressLastMonth}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.progressCurrentMonth}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.workStartDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.originalCompletionDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.revisedCompletionDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.lastFundReceived}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.utilizationCertificate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.financialApproval}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.underScheme}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-gray-100">
                {project.landAvailabilityDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                {project.photos}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 border-2 border-gray-100">
                {project.compliance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
