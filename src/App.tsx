import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Projects } from "./pages/Projects";
import ProjectCreation from "./components/drawer/ProjectForm";

import { Issues } from "./pages/Issues";
import { AuthProvider } from "./context/AuthContext";
import { EntitiesProvider } from "./context/EntityContect";
import ProjectDashboard from "./pages/projectDashboard";
import Gallery from "./pages/Gallery";
import MilestonePage from "./pages/MilestonePage";
import UsersList from "./pages/userList";
import ProjectInsection from "./pages/projectInspection";
import ProjectTest from "./pages/projectTest";
import ProjectDetail from "./projectDetailsComponent/ProjectDetails";
import BudgetUcUpload from "./pages/BudgetUCUpload";

function App() {
  return (
    <Router>
      <AuthProvider>
        <EntitiesProvider>
          <Routes>
            {/* <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="landing" element={<Landing />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="users" element={<UsersList />} />

              <Route path="projectDashboard" element={<ProjectDashboard />} />
              <Route path="projectDetail/:id" element={<ProjectDetail />} />
              <Route
                path="gallery"
                element={<Gallery isSidebarOpen={false} />}
              />
              <Route path="milestones" element={<MilestonePage />} />
              <Route path="projectInspection" element={<ProjectInsection />} />
              <Route path="projectTest" element={<ProjectTest />} />
              <Route path="budget-uc-upload" element={<BudgetUcUpload />} />
              <Route path="issue-management" element={<Issues />} />

              <Route path="issues" element={<Issues />} />

              <Route path="projectCreation" element={<ProjectCreation  />} />

            </Route>
          </Routes>
        </EntitiesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { Layout } from "./components/Layout";
// // import { Login } from "./pages/Login";
// // import { Dashboard } from "./pages/Dashboard";
// // import { Projects } from "./pages/Projects";
// // import { Projects as NewProjecsts } from "./pages/newProject";
// // import { ProjectForm } from "./pages/ProjectForm";
// // import { Issues } from "./pages/Issues";
// // import { AuthProvider } from "./context/AuthContext";
// // import ProjectDashboard from "./pages/projectDashboard";
// // import Gallery from "./pages/Gallery";
// // import MilestonePage from "./pages/MilestonePage";
// // import UsersList from "./pages/userList";
// // import ProjectInsection from "./pages/projectInspection";
// // import ProjectTest from "./pages/projectTest";
// // import ProjectDetail from "./projectDetailsComponent/ProjectDetails";
// // import BudgetUcUpload from './pages/BudgetUCUpload';
// // import { Landing } from "./pages/Landing";

// // function App() {
// //   return (
// //     <Router>
// //       <AuthProvider>
// //         <Routes>
// //           {/* Landing Page Route */}
// //           <Route path="/" element={<Landing />} />

// //           {/* Login Page Route */}
// //           <Route path="/login" element={<Login />} />

// //           {/* Protected Routes */}
// //           <Route path="/app" element={<Layout />}>
// //             <Route index element={<Dashboard />} />
// //             <Route path="projects" element={<Projects />} />
// //             <Route path="users" element={<UsersList />} />
// //             <Route path="projectDashboard" element={<ProjectDashboard />} />
// //             <Route path="projectDetail/:id" element={<ProjectDetail />} />
// //             <Route path="gallery" element={<Gallery isSidebarOpen={false} />} />
// //             <Route path="milestones" element={<MilestonePage />} />
// //             <Route path="projectInspection" element={<ProjectInsection />} />
// //             <Route path="projectTest" element={<ProjectTest />} />
// //             <Route path="budget-uc-upload" element={<BudgetUcUpload />} />
// //             <Route path="issue-management" element={<Issues />} />
// //             <Route path="projects/new" element={<ProjectForm />} />
// //             <Route path="issues" element={<Issues />} />
// //           </Route>
// //         </Routes>
// //       </AuthProvider>
// //     </Router>
// //   );
// // }

// // export default App;

// import React from "react";
// import axios from "axios";

// const App = () => {
//   const handleDownloadPDF = () => {
//     const data = {
//       projectName: "Bhadohi Smart City: Sewerage and Water Supply Upgrade",
//       projectStatus: "In Progress",
//       projectGoal:
//         "Improve urban infrastructure with modern sewerage systems and 24x7 water supply.",
//       projectDepartment: "Urban Development",
//       departmentId: 12,
//       executingAgency: "Bhadohi Municipal Corporation",
//       executingAgencyId: 7,
//       scheme: "AMRUT (Atal Mission for Rejuvenation and Urban Transformation)",
//       description:
//         "The project aims to revamp the sewerage system, improve water supply networks, and modernize urban infrastructure for Bhadohi.",
//       fundSanctionedBy: "State Urban Development Authority",
//       concernedOfficialName: "Mr. Arun Kumar",
//       concernedProjectManager: "Ms. Priya Sharma",
//       projectSanctionDate: "15-06-2022",
//       projectFinancialApprovalGoNumber: "UD/2022/AMRUT/005",
//       projectFinancialApprovalDate: "20-06-2022",
//       actualProjectStartDate: "01-01-2023",
//       projectCompletionDate: "31-12-2025",
//       revisedProjectSanctionDate: "15-06-2023",
//       revisedProjectCompletionDate: "31-03-2026",
//       estimatedCompletionDate: "30-11-2025",
//       actualCompletionDate: null,
//       workOrderFormationDate: "10-12-2022",
//       landHandoverDate: "15-01-2023",
//       contactInformation: "9876543210",
//       lastUpdatedDate: "15-02-2024",
//       lastUpdatedDateOnCmis: "15-02-2024",
//       projectHandoverDate: null,
//       projectHandoverTo: null,
//       parallelRequirements:
//         "Environmental clearance, Traffic diversion planning.",
//       totalApprovedBudget: "55000000.00",
//       revisedProjectCost: "58000000.00",
//       approvedProjectCost: "55000000.00",
//       contractDate: "15-12-2022",
//       contractCost: "52000000.00",
//       totalReleasedFunds: "45000000.00",
//       totalExpenditure: "39000000.00",
//       delayReason:
//         "Delay in obtaining environmental clearance and land acquisition.",
//       lastMonthPhysicalProgress: "70",
//       currentMonthPhysicalProgress: "75",
//       lastFundReceivedDate: "10-01-2024",
//       utilizationCertificateSubmissionDate: "20-02-2024",
//       geoTaggedPhotosLastMonth:
//         "https://dummyimage.com/600x400/000/fff&text=LastMonthProgress",
//       geoTaggedPhotosCurrentMonth:
//         "https://dummyimage.com/600x400/000/fff&text=CurrentMonthProgress",
//       meetingInstructions: [
//         {
//           description: "Review project milestones and progress.",
//           date: "20-01-2024",
//           compliance: "Completed",
//           feedback: "Work is on schedule with minor delays in pipeline laying.",
//         },
//       ],
//       projectInspection: [
//         {
//           inspectionDate: "15-01-2024",
//           officialName: "Dr. Neha Verma",
//           officialEmail: "neha.verma@example.com",
//           officialPhone: "9876543211",
//           officialDesignation: "Urban Planner",
//           officialDepartment: "Urban Development",
//           inspectionType: "Environmental",
//           inspectionInstruction:
//             "Ensure minimal environmental impact during excavation.",
//           inspectionStatus: "Completed",
//           inspectionReport: "inspection_report_2024.pdf",
//         },
//       ],
//       projectEssentialTest: [
//         {
//           testName: "Water Quality Test",
//           dateOfSampleCollection: "10-01-2024",
//           samplingAuthority: "State Water Quality Lab",
//           sampleTestLabName: "Bhadohi Water Testing Lab",
//           sampleTestReport: "water_quality_test_report.pdf",
//           sampleCollectionSiteImages: [
//             "https://dummyimage.com/600x400/000/fff&text=Sample1",
//           ],
//         },
//       ],
//       projectGallery: [
//         {
//           image: "https://dummyimage.com/600x400/000/fff&text=Progress+Image",
//           imageDescription: "Sewer pipeline installation in progress.",
//           latitude: "25.3949",
//           longitude: "82.5709",
//           elevation: "210.00",
//           accuracy: "3.50",
//           time: "15-02-2024",
//         },
//       ],
//       mileStones: [
//         {
//           milestoneName: "Excavation Work",
//           milestoneFromDate: "15-01-2023",
//           milestoneCompletionDate: "30-06-2023",
//           milestoneActualCompletionDate: "15-07-2023",
//           milestoneStatus: "Completed",
//           milestoneDescription: "Excavation work completed for sewer lines.",
//           milestoneProgress: "100.00",
//         },
//         {
//           milestoneName: "Pipeline Laying",
//           milestoneFromDate: "01-08-2023",
//           milestoneCompletionDate: "28-02-2024",
//           milestoneActualCompletionDate: null,
//           milestoneStatus: "In Progress",
//           milestoneDescription: "Laying sewer pipelines across main roads.",
//           milestoneProgress: "75.00",
//         },
//       ],
//       issues: [
//         {
//           issueName: "Delay in Land Acquisition",
//           issueDescription:
//             "Land acquisition process delayed due to legal disputes.",
//           issueRaisedBy: "101",
//           issueRaisedDate: "15-05-2023",
//           assignedTo: "102",
//           issueReportedOn: "16-05-2023",
//           issueStatus: "Resolved",
//           issueClosedDate: "01-07-2023",
//           issueClosedBy: "103",
//         },
//       ],
//       budgetInstallment: [
//         {
//           installmentAmount: "25000000.00",
//           installmentExpenditure: "20000000.00",
//           amountReceivedDate: "15-06-2023",
//           utilizationCertificate: "uc_2023_june.pdf",
//         },
//         {
//           installmentAmount: "20000000.00",
//           installmentExpenditure: "19000000.00",
//           amountReceivedDate: "10-01-2024",
//           utilizationCertificate: "uc_2024_january.pdf",
//         },
//       ],
//     };

//     generateAndDownloadPDF(data);
//   };

//   const generateAndDownloadPDF = async (data) => {
//     try {
//       // Send POST request to API
//       const response = await axios.post(
//         "http://localhost:3000/generate-pdf",
//         data,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           responseType: "blob", // Handle binary response
//         }
//       );

//       // Create a Blob from the response data
//       const blob = new Blob([response.data], { type: "application/pdf" });

//       // Create a download link
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = "Project_Report.pdf"; // Set the file name
//       document.body.appendChild(link);

//       // Trigger the download
//       link.click();

//       // Clean up
//       document.body.removeChild(link);
//       URL.revokeObjectURL(link.href);

//       console.log("PDF downloaded successfully!");
//     } catch (error) {
//       console.error("Error generating or downloading the PDF:", error);
//       alert("Failed to generate or download the PDF. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleDownloadPDF}>Download PDF</button>
//     </div>
//   );
// };

// export default App;
