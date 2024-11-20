import { hi, sr } from "date-fns/locale";

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

export const projectsData: Project[] = [
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
