import { hi, sr } from "date-fns/locale";

export const ProjectTableDataKeys = [
  "id",
  "projectName",
  "projectStatus",
  "projectDepartment",
  "projectApprovalDate",
  "approvedProjectCost",
  "contractDate",
  "contractCost",
  "totalReleasedFunds",
  "totalExpenditure",
  "lastMonthPhysicalProgress",
  "currentMonthPhysicalProgress",
  "projectStartDate",
  "originalCompletionDate",
  "revisedCompletionDate",
  "lastFundReceivedDate",
  "utilizationCertificateSubmissionDate",
  "governmentApprovalDateAndOrder",
  "delayReason",
  "schemeName",
  "landAvailabilityDate",
  "geoTaggedPhotosLastMonth",
  "geoTaggedPhotosCurrentMonth",
  "meetingInstructions",
  "complianceOfMeetingInstructions",
  "feedback",
];

interface Project {
  id: string;
  projectName: string;
  projectStatus: string;
  departmentName: string;
  projectApprovalDate: string;
  approvedProjectCost: string;
  contractDate: string;
  contractCost: string;
  totalReleasedFunds: string;
  totalExpenditure: string;
  lastMonthPhysicalProgress: string;
  currentMonthPhysicalProgress: string;
  projectStartDate: string;
  originalCompletionDate: string;
  revisedCompletionDate: string;
  lastFundReceivedDate: string;
  utilizationCertificateSubmissionDate: string;
  governmentApprovalDateAndOrder: string;
  delayReason: string;
  schemeName: string;
  landAvailabilityDate: string;
  geoTaggedPhotosLastMonth: string;
  geoTaggedPhotosCurrentMonth: string;
  meetingInstructions: string;
  complianceOfMeetingInstructions: string;
  feedback: string;
}

export interface FetchedProject {
  id: number;
  projectName: string;
  projectDescription: string;
  projectDepartment: string;
  projectStatus: string;
  projectApprovalDate: string;
  approvedProjectCost: string;
  contractDate: string;
  contractCost: string;
  totalReleasedFunds: string;
  totalExpenditure: string;
  lastMonthPhysicalProgress: string;
  currentMonthPhysicalProgress: string;
  projectStartDate: string;
  originalCompletionDate: string;
  revisedCompletionDate: string;
  lastFundReceivedDate: string;
  utilizationCertificateSubmissionDate: string;
  governmentApprovalDateAndOrder: string;
  delayReason: string;
  schemeName: string;
  landAvailabilityDate: string;
  geoTaggedPhotosLastMonth: string;
  geoTaggedPhotosCurrentMonth: string;
  meetingInstructions: string;
  complianceOfMeetingInstructions: string;
  feedback: string;
}

interface Users {
  srNo: string;
  executingAgency: string;
  executingOfficerName: string;
  executingOfficerDesignation: string;
  executingOfficerEmailUsername: string;
  executingOfficerMobile: string;
}

interface InspectionDetail {
  srNo: string;
  inspectionDate: string;
  inspectionTitle: string;
  inspectionAuthority: string;
  inspectionType: string;
  inspectionInstruction: string;
  inspectionReport: string;
  complianceStatus: string;
  action: string[];
}

interface budgetDetail {
  installmentName: string;
  installmentAmount: string;
  installmentExpenditure: string;
  amountRecievedDate: string;
  utilizationCertificate: string;
  remark: string;
  action: string[];
}

interface ProjectInspection {
  srNo: string;
  projectName: string;
  inspectionDetails: InspectionDetail[];
}

interface BudgetUCUpload {
  srNo: string;
  projectName: string;
  budgetDetails: budgetDetail[];
}

export const usersHeaders = {
  en: [
    "Sr. No.",
    "Executing Agency",
    "Executing Officer Name",
    "Executing Officer Designation",
    "Executing Officer Email/Username",
    "Executing Officer Mobile",
  ],
  hi: [
    "क्रमांक",
    "कार्यकारी एजेंसी",
    "कार्यकारी अधिकारी का नाम",
    "कार्यकारी अधिकारी पदनाम",
    "कार्यकारी अधिकारी ईमेल/उपयोगकर्ता नाम",
    "कार्यकारी अधिकारी मोबाइल",
  ],
};

export const issuesHeaders = {
  hi: [
    "क्रमांक",
    "परियोजना का नाम",
    "स्थिति",
    "प्रारंभ तिथि",
    "समाप्ति तिथि",
    "कार्रवाई",
  ],
  en: ["Sr. No.", "Project Name", "Status", "Start Date", "End Date", "Action"],
};

export const issues = [
  {
    srNo: "1",
    projectName: "शहर विकास योजना",
    status: "कार्य प्रगति पर",
    startDate: "01-01-2023",
    endDate: "31-12-2023",
    action: ["संपादित करें", "हटाएं"],
  },
  {
    srNo: "2",
    projectName: "पेयजल परियोजना",
    status: "पूर्ण",
    startDate: "01-06-2022",
    endDate: "30-11-2022",
    action: ["देखें", "रिपोर्ट"],
  },
  {
    srNo: "3",
    projectName: "नदी तट संरक्षण कार्य",
    status: "विलंबित",
    startDate: "15-03-2023",
    endDate: "अज्ञात",
    action: ["नवीनीकरण", "रिपोर्ट"],
  },
  {
    srNo: "4",
    projectName: "औद्योगिक पार्क निर्माण",
    status: "योजना चरण",
    startDate: "01-09-2023",
    endDate: "31-12-2024",
    action: ["संपादित करें", "हटाएं"],
  },
  {
    srNo: "5",
    projectName: "सड़क विस्तार परियोजना",
    status: "कार्य प्रगति पर",
    startDate: "01-01-2023",
    endDate: "30-06-2023",
    action: ["संपादित करें", "रिपोर्ट"],
  },
];

export const users: Users[] = [
  {
    srNo: "1",
    executingAgency: "पावर ट्रांसमिशन डिवीजन-III, शाहुपुरी",
    executingOfficerName: "आर.के. उपाध्याय",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "eeetdshuptri@upptcl.org",
    executingOfficerMobile: "9415311051",
  },
  {
    srNo: "2",
    executingAgency: "निर्माण डिवीजन बिल्डिंग, पीडब्ल्यूडी, वाराणसी",
    executingOfficerName: "विवेकानंद डंडोतिया",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "pwdcdvns@gmail.com",
    executingOfficerMobile: "9411205846",
  },
  {
    srNo: "3",
    executingAgency: "उत्तर प्रदेश राज्य पुल निगम, चंदौली",
    executingOfficerName: "मनोज कुमार",
    executingOfficerDesignation: "प्रोजेक्ट मैनेजर",
    executingOfficerEmailUsername: "bcuvaranasi@gmail.com",
    executingOfficerMobile: "8765973541",
  },
  {
    srNo: "4",
    executingAgency: "मंडीपरिषद, वाराणसी",
    executingOfficerName: "सुरेंद्र",
    executingOfficerDesignation: "डीडीसी मंडी परिषद",
    executingOfficerEmailUsername: "mandichandauli1972@gmail.com",
    executingOfficerMobile: "6394122420",
  },
  {
    srNo: "5",
    executingAgency: "राजकीय निर्माण निगम, भदोही",
    executingOfficerName: "एस.पी. गुप्ता",
    executingOfficerDesignation: "प्रोजेक्ट मैनेजर",
    executingOfficerEmailUsername: "gmvns.bhadohiunit@gmail.com",
    executingOfficerMobile: "6394858265",
  },
  {
    srNo: "6",
    executingAgency: "सी एंड डीएस यूनिट 24",
    executingOfficerName: "योगेश गुप्ता",
    executingOfficerDesignation: "प्रोजेक्ट मैनेजर",
    executingOfficerEmailUsername: "pm24.vns@gmail.com",
    executingOfficerMobile: "9170631641",
  },
  {
    srNo: "7",
    executingAgency: "राजकीय निर्माण निगम, वाराणसी",
    executingOfficerName: "पी.एन. सिंह",
    executingOfficerDesignation: "प्रोजेक्ट मैनेजर",
    executingOfficerEmailUsername: "gmvnsu@gmail.com",
    executingOfficerMobile: "9415207829",
  },
  {
    srNo: "8",
    executingAgency: "निर्माण डिवीजन, पीडब्ल्यूडी, चंदौली",
    executingOfficerName: "कृष्ण कुमार",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "pwdchandauli.cd@gmail.com",
    executingOfficerMobile: "9415891043",
  },
  {
    srNo: "9",
    executingAgency: "कार्यकारी अभियंता, चंद्रप्रभा, सिंचाई विभाग",
    executingOfficerName: "सर्वेश चंद्र सिन्हा",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "exencpd@gmail.com",
    executingOfficerMobile: "9415648305",
  },
  {
    srNo: "10",
    executingAgency: "बंधी प्रखंड, सिंचाई विभाग",
    executingOfficerName: "राजेश यादव",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "bandhidivisionvns@gmail.com",
    executingOfficerMobile: "9457207974",
  },
  {
    srNo: "11",
    executingAgency: "उत्तर प्रदेश आवास विकास परिषद, वाराणसी-2",
    executingOfficerName: "इंद्र प्रकाश गोर",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "upavppm@gmail.com",
    executingOfficerMobile: "8795811729",
  },
  {
    srNo: "12",
    executingAgency: "प्रांतीय डिवीजन, पीडब्ल्यूडी, चंदौली",
    executingOfficerName: "राजेश कुमार",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "pwdchandauli@gmail.com",
    executingOfficerMobile: "9935446750",
  },
  {
    srNo: "13",
    executingAgency:
      "यू.पी. प्रोजेक्ट कॉर्पोरेशन लिमिटेड, निर्माण डिवीजन-3, वाराणसी",
    executingOfficerName: "शैलेश सिंह",
    executingOfficerDesignation: "प्रोजेक्ट मैनेजर",
    executingOfficerEmailUsername: "uppcl3.varanasi@gmail.com",
    executingOfficerMobile: "9454419444",
  },
  {
    srNo: "14",
    executingAgency: "यूपीसीएलडीएफ वाराणसी",
    executingOfficerName: "अतुल श्रीवास्तव",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "upcldfbns@gmail.com",
    executingOfficerMobile: "8795810131",
  },
  {
    srNo: "15",
    executingAgency: "यूपीआरएनएसएस, वाराणसी",
    executingOfficerName: "विजय शंकर",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "varanasi1prakhand@gmail.com",
    executingOfficerMobile: "9151063530",
  },
  {
    srNo: "16",
    executingAgency: "यूपीएसआईडीसीओ",
    executingOfficerName: "योगेंद्र नाथ कुशवाहा",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "varanasi.upskrn@rediffmail.com",
    executingOfficerMobile: "9454456009",
  },
  {
    srNo: "17",
    executingAgency: "उत्तर प्रदेश पुलिस आवास निर्माण निगम, वाराणसी",
    executingOfficerName: "विरेंद्र कुमार तिवारी",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "uiofficenvspan@yahoo.in",
    executingOfficerMobile: "9454402720",
  },
  {
    srNo: "18",
    executingAgency: "उत्तर प्रदेश आवास विकास परिषद, वाराणसी-1",
    executingOfficerName: "प्रशांत वर्धन",
    executingOfficerDesignation: "कार्यकारी अभियंता",
    executingOfficerEmailUsername: "upavpcd34@gmail.com",
    executingOfficerMobile: "8795810166",
  },
];

// export const projectsData: Project[] = [
//   {

//     id: "1",
//     projectName: "परियोजना का नाम",
//     projectStatus: "परियोजना अद्यतन स्थिति",
//     departmentName: "विभाग का नाम",
//     projectApprovalDate: "परियोजना स्वीकृति की तिथि",
//     approvedProjectCost: "स्वीकृत लागत (करोड़ में)",
//     contractDate: "अनुबन्ध की तिथि",
//     contractCost: "अनुबन्ध की धनराशि (करोड़ में)",
//     totalReleasedFunds: "अवमुक्त धनराशि (करोड़ में)",
//     totalExpenditure: "व्यय धनराशि (करोड़ में)",
//     lastMonthPhysicalProgress: "भौतिक प्रगति प्रतिशत (गत माह में)",
//     currentMonthPhysicalProgress: "भौतिक प्रगति प्रतिशत (वर्तमान माह में)",
//     projectStartDate: "कार्य प्रारम्भ की तिथि",
//     originalCompletionDate: "कार्य पूर्ण करने की मूल निर्धारित तिथि",
//     revisedCompletionDate: "मूल निर्धारित तिथि तक कार्य पूर्ण न होने की स्थिति में विभाग द्वारा निर्धारित नई लक्षित तिथि",
//     lastFundReceivedDate: "परियोजना पर अन्तिम बार धनराशि कब प्राप्त हुई",
//     utilizationCertificateSubmissionDate: "कालम 15 के सापेक्ष सम्बन्धित विभाग को उपभोग प्रमाण पत्र प्रेषित करने की तिथि",
//     governmentApprovalDateAndOrder: "परियोजना हेतु शासन द्वारा जारी वित्तीय स्वीकृति का दिनांक एवं शासनादेश संख्या",
//     delayReason: "यदि परियोजना मूल निर्धारित तिथि (कालम-13) तक पूर्ण न होने पर विलम्ब का कारण",
//     schemeName: "परियोजना किसी योजनान्तर्गत संचालित है",
//     landAvailabilityDate: "कार्यदायी संस्था को भूमि उपलब्ध होने की तिथि",
//     geoTaggedPhotosLastMonth: "कार्य की जियोटैग फोटोग्राफ्स (गत माह की)",
//     geoTaggedPhotosCurrentMonth: "कार्य की जियोटैग फोटोग्राफ्स (अद्यतन माह की)",
//     meetingInstructions: "समीक्षा बैठक में दिये गये निर्देश",
//     complianceOfMeetingInstructions: "दिये गये निर्देश के सापेक्ष अनुपालन",
//     feedback: "अभ्यूक्ति"

//   },
//   {
//     id: "2",
//     projectName: "शॉपिंग कॉम्प्लेक्स निर्माण",
//     projectStatus: "प्रारंभिक चरण",
//     executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
//     approvalDateAndOrderNumber: "10-08-2024, आदेश संख्या 303/2024",
//     financialApprovalDateAndOrderNumber: "15-08-2024, आदेश संख्या 404/2024",
//     approvedProjectCost: "₹80 करोड़",
//     completionDateAsPerContract: "31-12-2026",
//     totalReleasedFunds: "₹20 करोड़",
//     totalExpenditure: "₹10 करोड़",
//     milestoneProgress: "25%",
//     physicalProgress: "12%",
//     estimatedCompletionDateByAgency: "31-12-2026",
//     delayReason: "ठेकेदार चयन में देरी",
//     revisedApprovalDate: "-",
//     revisedProjectCost: "-",
//     revisedCompletionDate: "-",
//     departmentName: "नगरीय विकास विभाग",
//     projectCategory: "वाणिज्यिक विकास",
//     contractFormationDate: "20-08-2024",
//     landAvailabilityDate: "01-09-2024",
//     projectUpdate: "अद्यतन 2",
//     projectGallery: "गैलरी लिंक 2",
//     meetingInstructions: "निर्देश 2",
//     complianceOfMeetingInstructions: "अनुपालन 2",
//   },
//   {
//     id: "3",
//     projectName: "मास्टर प्लान 2041 का कार्यान्वयन",
//     projectStatus: "योजना निर्माण",
//     executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
//     approvalDateAndOrderNumber: "01-01-2024, आदेश संख्या 505/2024",
//     financialApprovalDateAndOrderNumber: "05-01-2024, आदेश संख्या 606/2024",
//     approvedProjectCost: "₹25 करोड़",
//     completionDateAsPerContract: "31-12-2024",
//     totalReleasedFunds: "₹10 करोड़",
//     totalExpenditure: "₹5 करोड़",
//     milestoneProgress: "40%",
//     physicalProgress: "20%",
//     estimatedCompletionDateByAgency: "31-12-2024",
//     delayReason: "विशेषज्ञों की कमी",
//     revisedApprovalDate: "-",
//     revisedProjectCost: "-",
//     revisedCompletionDate: "-",
//     departmentName: "योजना विभाग",
//     projectCategory: "शहरी विकास",
//     contractFormationDate: "10-01-2024",
//     landAvailabilityDate: "20-01-2024",
//     projectUpdate: "अद्यतन 3",
//     projectGallery: "गैलरी लिंक 3",
//     meetingInstructions: "निर्देश 3",
//     complianceOfMeetingInstructions: "अनुपालन 3",
//   },
//   {
//     id: "4",
//     projectName: "औद्योगिक पार्क का विस्तार",
//     projectStatus: "कार्य प्रगति पर",
//     executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
//     approvalDateAndOrderNumber: "20-03-2023, आदेश संख्या 707/2023",
//     financialApprovalDateAndOrderNumber: "25-03-2023, आदेश संख्या 808/2023",
//     approvedProjectCost: "₹150 करोड़",
//     completionDateAsPerContract: "31-12-2025",
//     totalReleasedFunds: "₹75 करोड़",
//     totalExpenditure: "₹70 करोड़",
//     milestoneProgress: "50%",
//     physicalProgress: "47%",
//     estimatedCompletionDateByAgency: "30-09-2025",
//     delayReason: "वित्तीय संसाधनों की कमी",
//     revisedApprovalDate: "01-10-2024",
//     revisedProjectCost: "₹160 करोड़",
//     revisedCompletionDate: "31-12-2026",
//     departmentName: "औद्योगिक विकास विभाग",
//     projectCategory: "औद्योगिक क्षेत्र विकास",
//     contractFormationDate: "01-04-2023",
//     landAvailabilityDate: "15-04-2023",
//     projectUpdate: "अद्यतन 4",
//     projectGallery: "गैलरी लिंक 4",
//     meetingInstructions: "निर्देश 4",
//     complianceOfMeetingInstructions: "अनुपालन 4",
//   },
//   {
//     id: "3",
//     projectName: "मास्टर प्लान 2041 का कार्यान्वयन",
//     projectStatus: "योजना निर्माण",
//     executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
//     approvalDateAndOrderNumber: "01-01-2024, आदेश संख्या 505/2024",
//     financialApprovalDateAndOrderNumber: "05-01-2024, आदेश संख्या 606/2024",
//     approvedProjectCost: "₹25 करोड़",
//     completionDateAsPerContract: "31-12-2024",
//     totalReleasedFunds: "₹10 करोड़",
//     totalExpenditure: "₹5 करोड़",
//     milestoneProgress: "40%",
//     physicalProgress: "20%",
//     estimatedCompletionDateByAgency: "31-12-2024",
//     delayReason: "विशेषज्ञों की कमी",
//     revisedApprovalDate: "-",
//     revisedProjectCost: "-",
//     revisedCompletionDate: "-",
//     departmentName: "योजना विभाग",
//     projectCategory: "शहरी विकास",
//     contractFormationDate: "10-01-2024",
//     landAvailabilityDate: "20-01-2024",
//     projectUpdate: "अद्यतन 3",
//     projectGallery: "गैलरी लिंक 3",
//     meetingInstructions: "निर्देश 3",
//     complianceOfMeetingInstructions: "अनुपालन 3",
//   },
//   {
//     id: "4",
//     projectName: "औद्योगिक पार्क का विस्तार",
//     projectStatus: "कार्य प्रगति पर",
//     executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
//     approvalDateAndOrderNumber: "20-03-2023, आदेश संख्या 707/2023",
//     financialApprovalDateAndOrderNumber: "25-03-2023, आदेश संख्या 808/2023",
//     approvedProjectCost: "₹150 करोड़",
//     completionDateAsPerContract: "31-12-2025",
//     totalReleasedFunds: "₹75 करोड़",
//     totalExpenditure: "₹70 करोड़",
//     milestoneProgress: "50%",
//     physicalProgress: "47%",
//     estimatedCompletionDateByAgency: "30-09-2025",
//     delayReason: "वित्तीय संसाधनों की कमी",
//     revisedApprovalDate: "01-10-2024",
//     revisedProjectCost: "₹160 करोड़",
//     revisedCompletionDate: "31-12-2026",
//     departmentName: "औद्योगिक विकास विभाग",
//     projectCategory: "औद्योगिक क्षेत्र विकास",
//     contractFormationDate: "01-04-2023",
//     landAvailabilityDate: "15-04-2023",
//     projectUpdate: "अद्यतन 4",
//     projectGallery: "गैलरी लिंक 4",
//     meetingInstructions: "निर्देश 4",
//     complianceOfMeetingInstructions: "अनुपालन 4",
//   },
//   {
//     id: "3",
//     projectName: "मास्टर प्लान 2041 का कार्यान्वयन",
//     projectStatus: "योजना निर्माण",
//     executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
//     approvalDateAndOrderNumber: "01-01-2024, आदेश संख्या 505/2024",
//     financialApprovalDateAndOrderNumber: "05-01-2024, आदेश संख्या 606/2024",
//     approvedProjectCost: "₹25 करोड़",
//     completionDateAsPerContract: "31-12-2024",
//     totalReleasedFunds: "₹10 करोड़",
//     totalExpenditure: "₹5 करोड़",
//     milestoneProgress: "40%",
//     physicalProgress: "20%",
//     estimatedCompletionDateByAgency: "31-12-2024",
//     delayReason: "विशेषज्ञों की कमी",
//     revisedApprovalDate: "-",
//     revisedProjectCost: "-",
//     revisedCompletionDate: "-",
//     departmentName: "योजना विभाग",
//     projectCategory: "शहरी विकास",
//     contractFormationDate: "10-01-2024",
//     landAvailabilityDate: "20-01-2024",
//     projectUpdate: "अद्यतन 3",
//     projectGallery: "गैलरी लिंक 3",
//     meetingInstructions: "निर्देश 3",
//     complianceOfMeetingInstructions: "अनुपालन 3",
//   },
//   {
//     id: "4",
//     projectName: "औद्योगिक पार्क का विस्तार",
//     projectStatus: "कार्य प्रगति पर",
//     executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
//     approvalDateAndOrderNumber: "20-03-2023, आदेश संख्या 707/2023",
//     financialApprovalDateAndOrderNumber: "25-03-2023, आदेश संख्या 808/2023",
//     approvedProjectCost: "₹150 करोड़",
//     completionDateAsPerContract: "31-12-2025",
//     totalReleasedFunds: "₹75 करोड़",
//     totalExpenditure: "₹70 करोड़",
//     milestoneProgress: "50%",
//     physicalProgress: "47%",
//     estimatedCompletionDateByAgency: "30-09-2025",
//     delayReason: "वित्तीय संसाधनों की कमी",
//     revisedApprovalDate: "01-10-2024",
//     revisedProjectCost: "₹160 करोड़",
//     revisedCompletionDate: "31-12-2026",
//     departmentName: "औद्योगिक विकास विभाग",
//     projectCategory: "औद्योगिक क्षेत्र विकास",
//     contractFormationDate: "01-04-2023",
//     landAvailabilityDate: "15-04-2023",
//     projectUpdate: "अद्यतन 4",
//     projectGallery: "गैलरी लिंक 4",
//     meetingInstructions: "निर्देश 4",
//     complianceOfMeetingInstructions: "अनुपालन 4",
//   },
//   {
//     id: "3",
//     projectName: "मास्टर प्लान 2041 का कार्यान्वयन",
//     projectStatus: "योजना निर्माण",
//     executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
//     approvalDateAndOrderNumber: "01-01-2024, आदेश संख्या 505/2024",
//     financialApprovalDateAndOrderNumber: "05-01-2024, आदेश संख्या 606/2024",
//     approvedProjectCost: "₹25 करोड़",
//     completionDateAsPerContract: "31-12-2024",
//     totalReleasedFunds: "₹10 करोड़",
//     totalExpenditure: "₹5 करोड़",
//     milestoneProgress: "40%",
//     physicalProgress: "20%",
//     estimatedCompletionDateByAgency: "31-12-2024",
//     delayReason: "विशेषज्ञों की कमी",
//     revisedApprovalDate: "-",
//     revisedProjectCost: "-",
//     revisedCompletionDate: "-",
//     departmentName: "योजना विभाग",
//     projectCategory: "शहरी विकास",
//     contractFormationDate: "10-01-2024",
//     landAvailabilityDate: "20-01-2024",
//     projectUpdate: "अद्यतन 3",
//     projectGallery: "गैलरी लिंक 3",
//     meetingInstructions: "निर्देश 3",
//     complianceOfMeetingInstructions: "अनुपालन 3",
//   },
//   {
//     id: "4",
//     projectName: "औद्योगिक पार्क का विस्तार",
//     projectStatus: "कार्य प्रगति पर",
//     executingAgency: "भदोही औद्योगिक विकास प्राधिकरण (BIDA)",
//     approvalDateAndOrderNumber: "20-03-2023, आदेश संख्या 707/2023",
//     financialApprovalDateAndOrderNumber: "25-03-2023, आदेश संख्या 808/2023",
//     approvedProjectCost: "₹150 करोड़",
//     completionDateAsPerContract: "31-12-2025",
//     totalReleasedFunds: "₹75 करोड़",
//     totalExpenditure: "₹70 करोड़",
//     milestoneProgress: "50%",
//     physicalProgress: "47%",
//     estimatedCompletionDateByAgency: "30-09-2025",
//     delayReason: "वित्तीय संसाधनों की कमी",
//     revisedApprovalDate: "01-10-2024",
//     revisedProjectCost: "₹160 करोड़",
//     revisedCompletionDate: "31-12-2026",
//     departmentName: "औद्योगिक विकास विभाग",
//     projectCategory: "औद्योगिक क्षेत्र विकास",
//     contractFormationDate: "01-04-2023",
//     landAvailabilityDate: "15-04-2023",
//     projectUpdate: "अद्यतन 4",
//     projectGallery: "गैलरी लिंक 4",
//     meetingInstructions: "निर्देश 4",
//     complianceOfMeetingInstructions: "अनुपालन 4",
//   },
// ];

export const projectsData: Project[] = [
  {
    id: "1",
    projectName: "कारपेट सिटी-2 विकास",
    projectStatus: "कार्य प्रगति पर",
    departmentName: "औद्योगिक विकास विभाग",
    projectApprovalDate: "15-05-2023",
    approvedProjectCost: "₹100 करोड़",
    contractDate: "20-06-2023",
    contractCost: "₹95 करोड़",
    totalReleasedFunds: "₹50 करोड़",
    totalExpenditure: "₹45 करोड़",
    lastMonthPhysicalProgress: "40%",
    currentMonthPhysicalProgress: "50%",
    projectStartDate: "01-07-2023",
    originalCompletionDate: "31-12-2025",
    revisedCompletionDate: "30-06-2026",
    lastFundReceivedDate: "01-12-2023",
    utilizationCertificateSubmissionDate: "15-12-2023",
    governmentApprovalDateAndOrder: "20-05-2023, आदेश संख्या 101/2023",
    delayReason: "भूमि अधिग्रहण में देरी",
    schemeName: "औद्योगिक क्षेत्र विकास योजना",
    landAvailabilityDate: "15-06-2023",
    geoTaggedPhotosLastMonth: "फोटो लिंक 1",
    geoTaggedPhotosCurrentMonth: "फोटो लिंक 2",
    meetingInstructions: "निर्देश 1",
    complianceOfMeetingInstructions: "अनुपालन 1",
    feedback: "प्रतिक्रिया 1",
  },
  {
    id: "2",
    projectName: "शहरी जल आपूर्ति योजना",
    projectStatus: "प्रारंभिक चरण",
    departmentName: "शहरी विकास विभाग",
    projectApprovalDate: "01-04-2023",
    approvedProjectCost: "₹50 करोड़",
    contractDate: "15-04-2023",
    contractCost: "₹48 करोड़",
    totalReleasedFunds: "₹20 करोड़",
    totalExpenditure: "₹15 करोड़",
    lastMonthPhysicalProgress: "30%",
    currentMonthPhysicalProgress: "40%",
    projectStartDate: "01-05-2023",
    originalCompletionDate: "31-12-2024",
    revisedCompletionDate: "30-06-2025",
    lastFundReceivedDate: "01-11-2023",
    utilizationCertificateSubmissionDate: "10-11-2023",
    governmentApprovalDateAndOrder: "25-03-2023, आदेश संख्या 202/2023",
    delayReason: "तकनीकी मंजूरी में देरी",
    schemeName: "जल शक्ति अभियान",
    landAvailabilityDate: "01-05-2023",
    geoTaggedPhotosLastMonth: "फोटो लिंक 3",
    geoTaggedPhotosCurrentMonth: "फोटो लिंक 4",
    meetingInstructions: "निर्देश 2",
    complianceOfMeetingInstructions: "अनुपालन 2",
    feedback: "प्रतिक्रिया 2",
  },
  {
    id: "3",
    projectName: "सौर ऊर्जा परियोजना",
    projectStatus: "योजना चरण",
    departmentName: "ऊर्जा विभाग",
    projectApprovalDate: "10-06-2023",
    approvedProjectCost: "₹80 करोड़",
    contractDate: "20-07-2023",
    contractCost: "₹78 करोड़",
    totalReleasedFunds: "₹40 करोड़",
    totalExpenditure: "₹30 करोड़",
    lastMonthPhysicalProgress: "20%",
    currentMonthPhysicalProgress: "35%",
    projectStartDate: "01-08-2023",
    originalCompletionDate: "31-12-2025",
    revisedCompletionDate: "30-06-2026",
    lastFundReceivedDate: "15-11-2023",
    utilizationCertificateSubmissionDate: "01-12-2023",
    governmentApprovalDateAndOrder: "10-06-2023, आदेश संख्या 303/2023",
    delayReason: "उपकरण की आपूर्ति में देरी",
    schemeName: "हरित ऊर्जा पहल",
    landAvailabilityDate: "01-08-2023",
    geoTaggedPhotosLastMonth: "फोटो लिंक 5",
    geoTaggedPhotosCurrentMonth: "फोटो लिंक 6",
    meetingInstructions: "निर्देश 3",
    complianceOfMeetingInstructions: "अनुपालन 3",
    feedback: "प्रतिक्रिया 3",
  },
  {
    id: "4",
    projectName: "ग्रामीण सड़क निर्माण योजना",
    projectStatus: "निर्माणाधीन",
    departmentName: "ग्रामीण विकास विभाग",
    projectApprovalDate: "01-02-2023",
    approvedProjectCost: "₹30 करोड़",
    contractDate: "15-02-2023",
    contractCost: "₹28 करोड़",
    totalReleasedFunds: "₹15 करोड़",
    totalExpenditure: "₹10 करोड़",
    lastMonthPhysicalProgress: "50%",
    currentMonthPhysicalProgress: "60%",
    projectStartDate: "01-03-2023",
    originalCompletionDate: "31-12-2024",
    revisedCompletionDate: "30-06-2025",
    lastFundReceivedDate: "10-10-2023",
    utilizationCertificateSubmissionDate: "20-10-2023",
    governmentApprovalDateAndOrder: "20-01-2023, आदेश संख्या 404/2023",
    delayReason: "सड़क सामग्री की कमी",
    schemeName: "ग्रामीण संपर्क योजना",
    landAvailabilityDate: "01-03-2023",
    geoTaggedPhotosLastMonth: "फोटो लिंक 7",
    geoTaggedPhotosCurrentMonth: "फोटो लिंक 8",
    meetingInstructions: "निर्देश 4",
    complianceOfMeetingInstructions: "अनुपालन 4",
    feedback: "प्रतिक्रिया 4",
  },
  {
    id: "5",
    projectName: "डिजिटल शिक्षा प्लेटफॉर्म",
    projectStatus: "प्रगति पर",
    departmentName: "शिक्षा विभाग",
    projectApprovalDate: "05-03-2023",
    approvedProjectCost: "₹25 करोड़",
    contractDate: "15-03-2023",
    contractCost: "₹24 करोड़",
    totalReleasedFunds: "₹10 करोड़",
    totalExpenditure: "₹8 करोड़",
    lastMonthPhysicalProgress: "30%",
    currentMonthPhysicalProgress: "50%",
    projectStartDate: "01-04-2023",
    originalCompletionDate: "31-12-2024",
    revisedCompletionDate: "30-06-2025",
    lastFundReceivedDate: "01-11-2023",
    utilizationCertificateSubmissionDate: "15-11-2023",
    governmentApprovalDateAndOrder: "10-02-2023, आदेश संख्या 505/2023",
    delayReason: "तकनीकी उपकरण की कमी",
    schemeName: "डिजिटल शिक्षा कार्यक्रम",
    landAvailabilityDate: "01-04-2023",
    geoTaggedPhotosLastMonth: "फोटो लिंक 9",
    geoTaggedPhotosCurrentMonth: "फोटो लिंक 10",
    meetingInstructions: "निर्देश 5",
    complianceOfMeetingInstructions: "अनुपालन 5",
    feedback: "प्रतिक्रिया 5",
  },
];
export const projectInspection: ProjectInspection[] = [
  {
    srNo: "1",
    projectName:
      "450 मीटर लंबाई में नदी गंगा के दाहिने किनारे के क्षरण को रोकने के लिए क्रेटेड स्टोन बोल्डर कटर का निर्माण, गाँव- महुजी, ब्लॉक- धनापुर, तहसील- सकलडीहा, जिला- चंदौली",
    inspectionDetails: [
      {
        srNo: "1",
        inspectionDate: "02-06-2023",
        inspectionTitle: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionAuthority:
          "श्री प्रभाकर प्रसाद, अधीक्षण अभियंता, सिंचाई कार्य मंडल, सीतापुर",
        inspectionType: "self",
        inspectionInstruction: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionReport: "Inspection Report not Uploaded",
        complianceStatus: "Compliance Status not Uploaded",
        action: ["Edit", "Delete"],
      },
      {
        srNo: "2",
        inspectionDate: "19-06-2023",
        inspectionTitle: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionAuthority:
          "श्री केशरी सिंह, अधीक्षण अभियंता, सिंचाई कार्य मंडल, वाराणसी",
        inspectionType: "self",
        inspectionInstruction: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionReport: "Inspection Report not Uploaded",
        complianceStatus: "Compliance Status not Uploaded",
        action: ["Edit", "Delete"],
      },
      {
        srNo: "3",
        inspectionDate: "24-05-2023",
        inspectionTitle: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionAuthority:
          "श्री केशरी सिंह, अधीक्षण अभियंता, सिंचाई कार्य मंडल, वाराणसी",
        inspectionType: "self",
        inspectionInstruction: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionReport: "Inspection Report not Uploaded",
        complianceStatus: "Compliance Status not Uploaded",
        action: ["Edit", "Delete"],
      },
    ],
  },
  {
    srNo: "2",
    projectName:
      "किमी. 19.200, किमी. 21.300 और किमी. 22.350 पर 3 रेगुलेटर और किमी. 22.350 और किमी. 18.000 पर 2 वी.आर.बी. का नवीनीकरण, रॉयलताल ड्रेन पर",
    inspectionDetails: [
      {
        srNo: "1",
        inspectionDate: "02-06-2023",
        inspectionTitle: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionAuthority:
          "श्री प्रभाकर प्रसाद, अधीक्षण अभियंता, सिंचाई कार्य मंडल, सीतापुर",
        inspectionType: "self",
        inspectionInstruction: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionReport: "Inspection Report not Uploaded",
        complianceStatus: "Compliance Status not Uploaded",
        action: ["Edit", "Delete"],
      },
      {
        srNo: "2",
        inspectionDate: "24-05-2023",
        inspectionTitle: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionAuthority:
          "श्री केशरी सिंह, अधीक्षण अभियंता, सिंचाई कार्य मंडल, वाराणसी",
        inspectionType: "self",
        inspectionInstruction: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionReport: "Inspection Report not Uploaded",
        complianceStatus: "Compliance Status not Uploaded",
        action: ["Edit", "Delete"],
      },
      {
        srNo: "3",
        inspectionDate: "17-05-2023",
        inspectionTitle: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionAuthority:
          "श्री केशरी सिंह, अधीक्षण अभियंता, सिंचाई कार्य मंडल, वाराणसी",
        inspectionType: "self",
        inspectionInstruction: "परियोजना के कार्य के गुणवत्ता के सम्बन्ध में",
        inspectionReport: "Inspection Report not Uploaded",
        complianceStatus: "Compliance Status not Uploaded",
        action: ["Edit", "Delete"],
      },
    ],
  },
];

export const projectInspectionHeader = {
  main: {
    hi: ["क्रमांक", "परियोजना का नाम", "परियोजना निरीक्षण विवरण"],
  },
  subHeaders: {
    hi: [
      "क्रमांक",
      "निरीक्षण तिथि",
      "निरीक्षण शीर्षक",
      "अधिकारी / निरीक्षण प्राधिकरण (नाम और पद)",
      "निरीक्षण प्रकार",
      "निरीक्षण निर्देश",
      "निरीक्षण रिपोर्ट (पीडीएफ)",
      "अनुपालन स्थिति (पीडीएफ)",
      "कार्रवाई",
    ],
  },
};

export const budgetUcupload: BudgetUCUpload[] = [
  {
    srNo: "1",
    projectName:
      "450 मीटर लंबाई में नदी गंगा के दाहिने किनारे के क्षरण को रोकने के लिए क्रेटेड स्टोन बोल्डर कटर का निर्माण, गाँव- महुजी, ब्लॉक- धनापुर, तहसील- सकलडीहा, जिला- चंदौली",
    budgetDetails: [
      {
        installmentName: "1",
        installmentAmount: "₹ 50,00,000",
        installmentExpenditure: "₹ 20,00,000",
        amountRecievedDate: "01-01-2023",
        utilizationCertificate: "Utilization Certificate not Uploaded",
        remark: "Remarks not Uploaded",
        action: ["Edit", "Delete"],
      },
      {
        installmentName: "1",
        installmentAmount: "₹ 50,00,000",
        installmentExpenditure: "₹ 20,00,000",
        amountRecievedDate: "01-01-2023",
        utilizationCertificate: "Utilization Certificate not Uploaded",
        remark: "Remarks not Uploaded",
        action: ["Edit", "Delete"],
      },
    ],
  },
  {
    srNo: "1",
    projectName:
      "450 मीटर लंबाई में नदी गंगा के दाहिने किनारे के क्षरण को रोकने के लिए क्रेटेड स्टोन बोल्डर कटर का निर्माण, गाँव- महुजी, ब्लॉक- धनापुर, तहसील- सकलडीहा, जिला- चंदौली",
    budgetDetails: [
      {
        installmentName: "1",
        installmentAmount: "₹ 50,00,000",
        installmentExpenditure: "₹ 20,00,000",
        amountRecievedDate: "01-01-2023",
        utilizationCertificate: "Utilization Certificate not Uploaded",
        remark: "Remarks not Uploaded",
        action: ["Edit", "Delete"],
      },
      {
        installmentName: "1",
        installmentAmount: "₹ 50,00,000",
        installmentExpenditure: "₹ 20,00,000",
        amountRecievedDate: "01-01-2023",
        utilizationCertificate: "Utilization Certificate not Uploaded",
        remark: "Remarks not Uploaded",
        action: ["Edit", "Delete"],
      },
    ],
  },
  {
    srNo: "1",
    projectName:
      "450 मीटर लंबाई में नदी गंगा के दाहिने किनारे के क्षरण को रोकने के लिए क्रेटेड स्टोन बोल्डर कटर का निर्माण, गाँव- महुजी, ब्लॉक- धनापुर, तहसील- सकलडीहा, जिला- चंदौली",
    budgetDetails: [
      {
        installmentName: "1",
        installmentAmount: "₹ 50,00,000",
        installmentExpenditure: "₹ 20,00,000",
        amountRecievedDate: "01-01-2023",
        utilizationCertificate: "Utilization Certificate not Uploaded",
        remark: "Remarks not Uploaded",
        action: ["Edit", "Delete"],
      },
      {
        installmentName: "1",
        installmentAmount: "₹ 50,00,000",
        installmentExpenditure: "₹ 20,00,000",
        amountRecievedDate: "01-01-2023",
        utilizationCertificate: "Utilization Certificate not Uploaded",
        remark: "Remarks not Uploaded",
        action: ["Edit", "Delete"],
      },
    ],
  },
  {
    srNo: "1",
    projectName:
      "450 मीटर लंबाई में नदी गंगा के दाहिने किनारे के क्षरण को रोकने के लिए क्रेटेड स्टोन बोल्डर कटर का निर्माण, गाँव- महुजी, ब्लॉक- धनापुर, तहसील- सकलडीहा, जिला- चंदौली",
    budgetDetails: [
      {
        installmentName: "1",
        installmentAmount: "₹ 50,00,000",
        installmentExpenditure: "₹ 20,00,000",
        amountRecievedDate: "01-01-2023",
        utilizationCertificate: "Utilization Certificate not Uploaded",
        remark: "Remarks not Uploaded",
        action: ["Edit", "Delete"],
      },
      {
        installmentName: "1",
        installmentAmount: "₹ 50,00,000",
        installmentExpenditure: "₹ 20,00,000",
        amountRecievedDate: "01-01-2023",
        utilizationCertificate: "Utilization Certificate not Uploaded",
        remark: "Remarks not Uploaded",
        action: ["Edit", "Delete"],
      },
    ],
  },
];

export const BudgetUcHeaders = {
  main: {
    hi: ["क्रमांक", "परियोजना का नाम", "प्रोजेक्ट बजट प्राप्त किस्त डेटा"],
  },
  subHeaders: {
    hi: [
      "किस्त संख्या",
      "किस्त राशि (लाख में)",
      "किस्त व्यय (लाख में)",
      "प्राप्त राशि की तारीख",
      "उपयोग प्रमाणपत्र (यूसी)",
      "टिप्पणी",
      "कार्रवाई",
    ],
  },
};

export const headers = {
  hi: [
    // {    // "क्रम संख्या",
    //     // "परियोजना का नाम",
    //     // "परियोजना अद्यतन स्थिति",
    //     // "कार्यदायी संस्था",
    //     // "परियोजना स्वीकृत होने की तिथि एवं शासनादेश संख्या",
    //     // "परियोजना हेतु शासन द्वारा जारी वित्तीय स्वीकृति का दिनांक एवं शासनादेश संख्या",
    //     // "परियोजना की स्वीकृत लागत",
    //     // "अनुबंध गठन के अनुसार परियोजना पूर्ण करने की तिथि",
    //     // "परियोजना पर अब तक कुल अवमुक्त धनराशि",
    //     // "परियोजना पर अब तक कुल व्यय धनराशि",
    //     // "माइलस्टोन प्रगति %",
    //     // "भौतिक प्रगति %",
    //     // "कार्यदायी संस्था के अनुसार कार्य पूर्ण होने की अनुमानित तिथि",
    //     // "परियोजना में विलम्ब के कारण",
    //     // "पुनरीक्षित स्वीकृति की तिथि",
    //     // "पुनरीक्षित स्वीकृति के अनुसार परियोजना की लागत",
    //     // "पुनरीक्षित स्वीकृति के अनुसार परियोजना को पूर्ण करने की तिथि",
    //     // "विभाग का नाम",
    //     // "परियोजना श्रेणी/योजना का नाम",
    //     // "अनुबंध गठन की तिथि",
    //     // "कार्यदायी संस्था को भूमि उपलब्ध कराने की तिथि",
    //     // "परियोजना अपडेट लाग",
    //     // "परियोजना गैलरी",
    //     // "बैठक निर्देश",
    //     // "बैठक निर्देश अनुपालन",
    //     // "क्र0 सं0",
    //     }

    "क्रम संख्या",
    "परियोजना का नाम",
    "परियोजना अद्यतन स्थिति",
    "विभाग का नाम",
    "परियोजना स्वीकृति की तिथि",
    "स्वीकृत लागत (करोड़ में)",
    "अनुबन्ध की तिथि",
    "अनुबन्ध की धनराशि (करोड़ में)",
    "अवमुक्त धनराशि (करोड़ में)",
    "व्यय धनराशि (करोड़ में)",
    "भौतिक प्रगति प्रतिशत (गत माह में)",
    "भौतिक प्रगति प्रतिशत (वर्तमान माह में)",
    "कार्य प्रारम्भ की तिथि",
    "कार्य पूर्ण करने की मूल निर्धारित तिथि",
    "मूल निर्धारित तिथि तक कार्य पूर्ण न होने की स्थिति में विभाग द्वारा निर्धारित नई लक्षित तिथि",
    "परियोजना पर अन्तिम बार धनराशि कब प्राप्त हुई",
    "कालम 15 के सापेक्ष सम्बन्धित विभाग को उपभोग प्रमाण पत्र प्रेषित करने की तिथि",
    "परियोजना हेतु शासन द्वारा जारी वित्तीय स्वीकृति का दिनांक एवं शासनादेश संख्या",
    "यदि परियोजना मूल निर्धारित तिथि (कालम-13) तक पूर्ण न होने पर विलम्ब का कारण",
    "परियोजना किसी योजनान्तर्गत संचालित है",
    "कार्यदायी संस्था को भूमि उपलब्ध होने की तिथि",
    "कार्य की जियोटैग फोटोग्राफ्स (गत माह की)",
    "कार्य की जियोटैग फोटोग्राफ्स (अद्यतन माह की)",
    "समीक्षा बैठक में दिये गये निर्देश",
    "दिये गये निर्देश के सापेक्ष अनुपालन",
    "अभ्यूक्ति",
  ],
  en: [
    "Serial Number",
    "Project Name",
    "Project Update Status",
    "Executing Agency",
    "Date of Project Approval and Government Order Number",
    "Date and Government Order Number of Financial Approval Issued by Government for the Project",
    "Approved Cost of the Project",
    "Date of Project Completion as per Contract Formation",
    "Total Amount Released for the Project So Far",
    "Total Expenditure on the Project So Far",
    "Milestone Progress %",
    "Physical Progress %",
    "Estimated Date of Completion According to Executing Agency",
    "Reasons for Delay in the Project",
    "Date of Revised Approval",
    "Cost of the Project as per Revised Approval",
    "Date of Project Completion as per Revised Approval",
    "Department Name",
    "Project Category/Scheme Name",
    "Date of Contract Formation",
    "Date of Land Availability to Executing Agency",
    "Project Update Log",
    "Project Gallery",
    "Meeting Instructions",
    "Meeting Instructions Compliance",
  ],
};

interface TestDetail {
  srNo: string;
  testName: string;
  dateOfSampleCollection: string;
  samplingAuthority: string;
  sampleTestLabName: string;
  sampleCollectionSiteImage: string;
  reportOfSampleCollection: string;
  action: string[];
}

interface ProjectTest {
  srNo: string;
  projectName: string;
  testDetails: TestDetail[];
}

export const projectTest: ProjectTest[] = [
  {
    srNo: "1",
    projectName:
      "500 मीटर लंबाई में नदी गंगा के दाहिने किनारे के क्षरण को रोकने के लिए क्रेटेड स्टोन बोल्डर कटर का निर्माण, गाँव- बड़ागांव, ब्लॉक- चोलापुर, तहसील- पिंडरा, जिला- वाराणसी",
    testDetails: [
      {
        srNo: "1",
        testName: "M-25 Cube Test",
        dateOfSampleCollection: "12-03-2023",
        samplingAuthority: "UPRNN",
        sampleTestLabName: "IIT BHU",
        sampleCollectionSiteImage: "File not Uploaded",
        reportOfSampleCollection: "Report not Uploaded",
        action: ["Delete"],
      },
      {
        srNo: "2",
        testName: "Steel Test",
        dateOfSampleCollection: "12-03-2023",
        samplingAuthority: "UPRNN",
        sampleTestLabName: "IIT BHU",
        sampleCollectionSiteImage: "File not Uploaded",
        reportOfSampleCollection: "Report not Uploaded",
        action: ["Delete"],
      },
      {
        srNo: "3",
        testName: "Brick Test",
        dateOfSampleCollection: "12-03-2023",
        samplingAuthority: "UPRNN",
        sampleTestLabName: "IIT BHU",
        sampleCollectionSiteImage: "File not Uploaded",
        reportOfSampleCollection: "Report not Uploaded",
        action: ["Delete"],
      },
    ],
  },
  {
    srNo: "2",
    projectName:
      "500 मीटर लंबाई में मुरलीपुर तालाब के किनारे के क्षरण को रोकने के लिए मिट्टी के कटाव का काम, ब्लॉक- पलाम, जिला- मिर्जापुर",
    testDetails: [
      {
        srNo: "1",
        testName: "M-15 Concrete Test",
        dateOfSampleCollection: "25-05-2024",
        samplingAuthority: "QA Testing Laboratories Pvt. Ltd",
        sampleTestLabName: "IIT Kanpur",
        sampleCollectionSiteImage: "File not Uploaded",
        reportOfSampleCollection: "Report not Uploaded",
        action: ["Delete"],
      },
      {
        srNo: "2",
        testName: "Steel Tensile Test",
        dateOfSampleCollection: "27-05-2024",
        samplingAuthority: "UPRNN",
        sampleTestLabName: "IIT Kanpur",
        sampleCollectionSiteImage: "File not Uploaded",
        reportOfSampleCollection: "Report not Uploaded",
        action: ["Delete"],
      },
    ],
  },
];

export const projectTestHeader = {
  main: {
    hi: ["क्रमांक", "परियोजना का नाम", "परियोजना परीक्षण विवरण"],
  },
  subHeaders: {
    hi: [
      "क्रमांक",
      "परीक्षण का नाम",
      "सैंपल संग्रह की तिथि",
      "सैंपलिंग प्राधिकरण",
      "सैंपल टेस्ट लैब का नाम",
      "सैंपल संग्रह स्थल का चित्र",
      "सैंपल संग्रह की रिपोर्ट (पीडीएफ)",
      "कार्रवाई",
    ],
  },
};

const projects = {
  id: "1",
  projectName: "Project Name",
  projectDescription: "Project Description",
  // Goals & Objectives
  projectObjectives: "Project Objectives",

  projectDepartment: "Project Department",
  projectStatus: "Project Status",
  projectApprovalDate: "15-05-2023",
  approvedProjectCost: "₹100 करोड़",
  contractDate: "20-06-2023",
  contractCost: "₹95 करोड़",
  totalReleasedFunds: "₹50 करोड़",
  totalExpenditure: "₹45 करोड़",

  // fetch the physical progress from milestone table based on months
  lastMonthPhysicalProgress: "40%",
  currentMonthPhysicalProgress: "50%",
  projectStartDate: "01-07-2023",
  originalCompletionDate: "31-12-2025",
  revisedCompletionDate: "30-06-2026",
  // fetch the last fund received date from budget table

  lastFundReceivedDate: "01-12-2023",
  utilizationCertificateSubmissionDate: "15-12-2023",
  governmentApprovalDateAndOrder: "20-05-2023, आदेश संख्या 101/2023",
  delayReason: "भूमि अधिग्रहण में देरी",
  schemeName: "औद्योगिक क्षेत्र विकास योजना",
  landAvailabilityDate: "15-06-2023",

  geoTaggedPhotosLastMonth: "फोटो लिंक 1",
  geoTaggedPhotosCurrentMonth: "फोटो लिंक 2",
  meetingInstructions: [
    {
      desc: "निर्देश 1",
      date: "01-01-2023",
      compliance: "अनुपालन 1",
      projectId: "1",
      feedback: "प्रतिक्रिया 1",
    },
  ],

  projectManager: {
    officialName: "Official Name",
    officialEmail: "Official Email",
    officialPhone: "Official Phone",
    officialDesignation: "Official Designation",
    officialDepartment: "Official Department",
    projectId: "1",
  },
  concernedOfficial: [
    {
      officialName: "Official Name",
      officialEmail: "Official Email",
      officialPhone: "Official Phone",
      officialDesignation: "Official Designation",
      officialDepartment: "Official Department",
      projectId: "1",
    },
  ],
  projectInspection: [
    {
      inspectionDate: "Inspection Date",
      officialName: "Official Name",
      officialEmail: "Official Email",
      officialPhone: "Official Phone",
      officialDesignation: "Official Designation",
      officialDepartment: "Official Department",
      InspectionType: "Inspection Type",
      inspectionInstruction: "Inspection Instruction",
      inspectionStatus: "Inspection Status",
      inspectionReport: "inspectionReport.pdf",
      projectId: "1",
    },
  ],
  projectEssentialTest: [
    {
      testName: "Test Name",
      dateOfSampleCollection: "Date Of Sample Collection",
      samplingAuthority: "Sampling Authority",
      sampleTestLabName: "Sample Test Lab Name",
      sampleTestReport: "sampleTestReport.pdf",
      sampleCollectionSiteImage: [
        "sampleCollectionSiteImage1.jpg",
        "sampleCollectionSiteImage2.jpg",
      ],
      projectId: "1",
    },
  ],
  projectGallery: [
    {
      image: "image1.jpg",
      imageDescription: "Image Description",
      lattitude: "Lattitude",
      longitude: "Longitude",
      elevation: "Elevation",
      accuracy: "Accuracy",
      time: "Time",
      projectId: "1",
    },
  ],
  mileStones: [
    {
      milestoneName: "Milestone Name",
      milestoneFromDate: "Milestone From Date",
      milestoneCompletionDate: "Milestone Completion Date",
      milestoneActualCompletionDate: "Milestone Actual Completion Date",
      milestoneStatus: "Milestone Status",
      milestoneDescription: "Milestone Description",
      milestoneProgress: "Milestone Progress",
      projectId: "1",
    },
  ],
  issues: [
    {
      issueName: "Issue Name",
      issueDescription: "Issue Description",
      issueRaisedBy: "Issue Raised By",
      issueRaisedDate: "Issue Raised Date",
      assignedTo: "Assigned To",
      issueReportedOn: "Issue Reported On",
      issueStatus: "Issue Status",
      issueClosedDate: "Issue Closed Date",
      issueClosedBy: "Issue Closed By",

      projectId: "1",
    },
  ],
  budegetInstallment: [
    {
      installmentAmount: "Installment Amount",
      amountRecievedDate: "Amount Recieved Date",
      utilizationCertificate: "uc.pdf",
      projectId: "1",
    },
  ],

  //projectDetails
  lastUpdatedDate: "Last Updated Date",
  lastUpdatedDateOnCMIS: "Last Updated Date",
  projectHandoverDate: "Project Handover",
  projectHandoverTo: "Project Handover To",
  parallelRequirements: "Parallel Requirements",
};

const wholeObj = {
  id: 2,
  projectName: "ग्रामीण सड़क निर्माण",
  projectDescription: "दूरस्थ गांवों में सड़कें बनाने का कार्य",
  projectDepartment: "ग्रामीण विकास विभाग",
  projectStatus: "निर्माणाधीन",
  projectApprovalDate: "2023-03-09T18:30:00.000Z",
  approvedProjectCost: "500000000.00",
  contractDate: "2023-04-04T18:30:00.000Z",
  contractCost: "480000000.00",
  totalReleasedFunds: "300000000.00",
  totalExpenditure: "250000000.00",
  projectStartDate: "2023-04-09T18:30:00.000Z",
  originalCompletionDate: "2025-06-29T18:30:00.000Z",
  revisedCompletionDate: null,
  governmentApprovalDateAndOrder: "10-03-2023, आदेश संख्या 202/2023",
  delayReason: "वित्तीय बाधा",
  schemeName: "ग्रामीण संपर्क योजना",
  landAvailabilityDate: "2023-03-19T18:30:00.000Z",
  milestones: [
    {
      milestoneName: "मार्ग सर्वेक्षण",
      milestoneFromDate: "2023-04-14T18:30:00.000Z",
      milestoneCompletionDate: "2023-05-14T18:30:00.000Z",
      milestoneStatus: "पूर्ण",
      milestoneProgress: "100.00",
    },
    {
      milestoneName: "सड़क निर्माण",
      milestoneFromDate: "2023-05-31T18:30:00.000Z",
      milestoneCompletionDate: "2025-06-29T18:30:00.000Z",
      milestoneStatus: "कार्य प्रगति पर",
      milestoneProgress: "30.00",
    },
  ],
  inspections: [
    {
      inspectionDate: "2023-08-31T18:30:00.000Z",
      inspectionType: "गुणवत्ता निरीक्षण",
      inspectionInstruction: "निर्माण सामग्री की गुणवत्ता जांचें।",
      inspectionStatus: "पूर्ण",
      inspectionReport: "inspection_report2.pdf",
    },
  ],
  budgetInstallments: [
    {
      installmentAmount: "150000000.00",
      amountReceivedDate: "2023-07-31T18:30:00.000Z",
      utilizationCertificate: "uc2.pdf",
    },
  ],
  gallery: [
    {
      image: "gallery_image2.jpg",
      imageDescription: "निर्माण सामग्री का फोटो",
      latitude: "25.2786540",
      longitude: "82.9876540",
      elevation: "55.00",
      accuracy: "3.00",
      time: "2023-07-16T05:30:00.000Z",
    },
  ],
};

const newData = {
  projectId: 1,
  projectName: "स्मार्ट सिटी परियोजना",
  projectDescription: "स्मार्ट सिटी के लिए बुनियादी ढांचे का विकास",
  projectDepartment: "शहरी विकास विभाग",
  projectStatus: "कार्य प्रगति पर",
  projectApprovalDate: "15-05-2023",
  approvedProjectCost: "₹1,000,000,000",
  contractDate: "20-06-2023",
  contractCost: "₹950,000,000",
  totalReleasedFunds: "₹500,000,000",
  totalExpenditure: "₹450,000,000",
  // fetch the physical progress from milestone table based on months
  // lastMonthPhysicalProgress: "40%",
  // currentMonthPhysicalProgress: "50%",
  projectStartDate: "01-07-2023",
  originalCompletionDate: "31-12-2025",
  revisedCompletionDate: "30-06-2026",

  // fetch the last fund received date from budget table
  // lastFundReceivedDate: "01-12-2023",
  // fetch the last utilization certificate from budget table date from budget table
  utilizationCertificateSubmissionDate: "15-12-2023",
  governmentApprovalDateAndOrder: "20-05-2023, आदेश संख्या 101/2023",
  delayReason: "भूमि अधिग्रहण में देरी",
  schemeName: "औद्योगिक क्षेत्र विकास योजना",
  landAvailabilityDate: "15-06-2023",
  lastMonthPhysicalProgress: "100.00",
  currentMonthPhysicalProgress: "40.00",
  // fetch from gallery tables
  geoTaggedPhotosLastMonth: "gallery_image1.jpg",
  geoTaggedPhotosCurrentMonth: "No photo",
  milestones: [
    {
      milestoneName: "भूमि अधिग्रहण",
      milestoneFromDate: "01-05-2023",
      milestoneCompletionDate: "15-06-2023",
      milestoneActualCompletionDate: "10-06-2023",
      milestoneStatus: "पूर्ण",
      milestoneDescription: "भूमि अधिग्रहण प्रक्रिया पूरी हुई।",
      milestoneProgress: "100.00",
      projectId: 1,
    },
    {
      milestoneName: "बुनियादी ढांचा निर्माण",
      milestoneFromDate: "01-07-2023",
      milestoneCompletionDate: "31-12-2025",
      milestoneActualCompletionDate: null,
      milestoneStatus: "कार्य प्रगति पर",
      milestoneDescription: "निर्माण कार्य जारी है।",
      milestoneProgress: "40.00",
      projectId: 1,
    },
  ],
  inspection: [
    {
      inspectionDate: "Inspection Date",
      inspectionAuthority: [
        {
          officialName: "Official Name",
          officialEmail: "Official Email",
          officialPhone: "Official Phone",
          officialDesignation: "Official Designation",
          officialDepartment: "Official Department",
        },
      ],
      InspectionType: "Inspection Type",
      inspectionInstruction: "Inspection Instruction",
      inspectionStatus: "Inspection Status",
      inspectionReport: "inspectionReport.pdf",
      projectId: "1",
    },
  ],
  budgetInstallments: [
    {
      installmentAmount: "₹200,000,000",
      amountReceivedDate: "01-07-2023",
      utilizationCertificate: "uc1.pdf",
      projectId: 1,
    },
  ],
  gallery: [
    {
      image: "gallery_image1.jpg",
      imageDescription: "निर्माण स्थल का फोटो",
      latitude: "25.2769870",
      longitude: "82.9862730",
      elevation: "50.00",
      accuracy: "5.00",
      time: "15-07-2023 10:00:00",
      projectId: 1,
    },
  ],
  projectEssentialTest: [
    {
      testName: "Test Name",
      dateOfSampleCollection: "Date Of Sample Collection",
      samplingAuthority: "Sampling Authority",
      sampleTestLabName: "Sample Test Lab Name",
      sampleTestReport: "sampleTestReport.pdf",
      sampleCollectionSiteImage: [
        "sampleCollectionSiteImage1.jpg",
        "sampleCollectionSiteImage2.jpg",
      ],
    },
  ],

  issues: [
    {
      issueName: "Issue Name",
      issueDescription: "Issue Description",
      issueRaisedBy: "Issue Raised By",
      issueRaisedDate: "Issue Raised Date",
      assignedTo: "Assigned To",
      issueReportedOn: "Issue Reported On",
      issueStatus: "Issue Status",
      issueClosedDate: "Issue Closed Date",
      issueClosedBy: "Issue Closed By",
    },
  ],
  meetingInstructions: [],
  complianceOfMeetingInstructions: [],
  feedback: "N/A",

  //projectDetails
  lastUpdatedDate: "Last Updated Date",
  lastUpdatedDateOnCMIS: "Last Updated Date",
  projectHandoverDate: "Project Handover",
  projectHandoverTo: "Project Handover To",
  parallelRequirements: "Parallel Requirements",
};
