import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Save } from "lucide-react";
import classNames from "classnames";
import StepIndicator from "./StepIndicator";
import FormField from "./FormField";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../../utils/functions";

const departments = [
  {
    value: "1",
    label: "Divyang Jan sashaktikaran vibhag",
  },
  {
    value: "2",
    label: "Nagar vikas",
  },
  {
    value: "3",
    label: "Electric distribution division -1",
  },
  {
    value: "4",
    label: "Electric distribution division -3",
  },
  {
    value: "5",
    label: "Basic Education",
  },
  {
    value: "6",
    label: "Health",
  },
  {
    value: "7",
    label: "Tourism",
  },
  {
    value: "8",
    label: "Technical Education",
  },
  {
    value: "9",
    label: "Intermidiate Education",
  },
  {
    value: "10",
    label: "Revenue",
  },
  {
    value: "11",
    label: "Vocational Education",
  },
  {
    value: "12",
    label: "Home",
  },
  {
    value: "13",
    label: "Social welfare",
  },
  {
    value: "14",
    label: "Animal Husbandry",
  },
  {
    value: "15",
    label: "Probation",
  },
  {
    value: "16",
    label: "Public work department",
  },
  {
    value: "17",
    label: "Rural engineering department",
  },
  {
    value: "18",
    label: "Agriculture",
  },
  {
    value: "19",
    label: "Rural development",
  },
  {
    value: "20",
    label: "Irrigation department",
  },
  {
    value: "21",
    label: "Fisheries deparment",
  },
  {
    value: "22",
    label: "Forest Department",
  },
];
const executingAgencies = [
  {
    value: "1",
    label: "Uttar Pradesh Power Transmission Corporation Limited",
  },
  {
    value: "2",
    label: "Construction Division Building, PWD,Varanasi",
  },
  {
    value: "3",
    label: "Uttar Pradesh State Bridge Corporation, Bhadohi",
  },
  {
    value: "4",
    label: "Bhadohi Development Authority, Bida",
  },
  {
    value: "5",
    label: "Rajkiya Nirman Nigam, Sonbhadra",
  },
  {
    value: "6",
    label: "C & DS Unit 24",
  },
  {
    value: "7",
    label: "Rajkiya Nirman Nigam, Bhadohi",
  },
  {
    value: "8",
    label: "Construction Division, PWD,Chandauli",
  },
  {
    value: "9",
    label: "Executive Engineer, Chandraprabha, Irrigation Department",
  },
  {
    value: "10",
    label: "Bandhi Prakhand, Irrigation Department",
  },
  {
    value: "11",
    label: "Uttar Pradesh Aawas Vikash Parisad, Prayagraj",
  },
  {
    value: "12",
    label: "Provincial Division, PWD, Bhadohi",
  },
  {
    value: "13",
    label: "U.P. Project Corporation Ltd. Construction Division-3, Lucknow",
  },
  {
    value: "14",
    label: "UPCLDF Bhadohi",
  },
  {
    value: "15",
    label: "UPRNSS, Varanasi",
  },
  {
    value: "16",
    label: "UPSIDCO",
  },
  {
    value: "17",
    label: "Uttar Pradesh Police Aawas Nirman Nigam, Varanasi",
  },
  {
    value: "18",
    label: "Uttar Pradesh Aawas Vikash Parisad, Varanasi-1",
  },
  {
    value: "19",
    label: "Executive Engineer, U.P. Power Corporation Ltd.",
  },
  {
    value: "20",
    label: "Forest Department",
  },
  {
    value: "21",
    label: "Rural Engineering Department",
  },
  {
    value: "22",
    label: "Jal Nigam Urban",
  },
  {
    value: "23",
    label: "Irrigation Department, Laghudal Prakhand",
  },
  {
    value: "24",
    label: "Irrigation Department, Tubewell division",
  },
  {
    value: "25",
    label: "HITES",
  },
];
const yojnaCategories = [
  "Sansad Nidhi",
  "Vidhayak Nidhi",
  "Purvanchal Vikas Nidhi",
  "Others",
];
const projectStatuses = ["In Planning", "In Progress", "On Hold", "Completed"];

const STEPS = [
  { title: "Project Info", description: "Basic details" },
  { title: "Financials", description: "Budget & costs" },
  { title: "Schedule", description: "Timeline & dates" },
];

const ProjectForm = ({ onSubmitSuccess }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    projectStatus: "",
    projectGoal: "",
    projectDepartment: "",
    departmentId: "",
    executingAgency: "",
    executingAgencyId: "",
    scheme: "",
    fundSanctionedBy: "",
    concernedOfficialName: "",
    concernedProjectManager: "",
    projectSanctionDate: "",
    projectFinancialApprovalGoNumber: "",
    projectFinancialApprovalDate: "",
    actualProjectStartDate: "",
    projectCompletionDate: "",
    revisedProjectSanctionDate: "",
    revisedProjectCompletionDate: "",
    estimatedCompletionDate: "",
    actualCompletionDate: "",
    workOrderFormationDate: "",
    landHandoverDate: "",
    contactInformation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null, field: keyof FormData) => {
    setFormData((prev) => ({ ...prev, [field]: formatDate(date) }));
    console.log(formatDate(date));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);

    // try {
    //   // Simulate API call
    //   await new Promise((resolve) => setTimeout(resolve, 1500));
    //   console.log("Form submitted:", formData);
    //   onSubmitSuccess?.();
    // } catch (error) {
    //   console.error("Submission error:", error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderProjectInformation = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Project Department"
          name="projectDepartment"
          type="select"
          value={formData.projectDepartment}
          onChange={handleInputChange}
          options={departments}
          required
        />
        <FormField
          label="Executing Agency"
          name="executingAgency"
          type="select"
          value={formData.executingAgency}
          onChange={handleInputChange}
          options={executingAgencies}
          required
        />
      </div>

      <FormField
        label="Yojna Name"
        name="scheme"
        type="select"
        value={formData.scheme}
        onChange={handleInputChange}
        options={yojnaCategories.map((category, index) => ({
          value: index,
          label: category,
        }))}
        required
      />

      <FormField
        label="Project Name"
        name="projectName"
        type="text"
        value={formData.projectName}
        onChange={handleInputChange}
        placeholder="Enter project name"
        required
      />

      <FormField
        label="Description"
        name="description"
        type="textarea"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Enter project description"
      />

      <FormField
        label="Goal & Objectives"
        name="projectGoal"
        type="textarea"
        value={formData.projectGoal}
        onChange={handleInputChange}
        placeholder="Enter project goals & objectives"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Fund Sanctioned By"
          name="fundSanctionedBy"
          type="select"
          value={formData.fundSanctionedBy}
          onChange={handleInputChange}
          options={[
            {
              value: "state_govt",
              label: `State Government`,
            },
            {
              value: "central_govt",
              label: `Central Government`,
            },
          ]}
          required
        />
        <FormField
          label="Project Status"
          name="projectStatus"
          type="select"
          value={formData.projectStatus}
          onChange={handleInputChange}
          options={[
            { value: "planning", label: "In Planning" },
            { value: "progress", label: "In Progress" },
            { value: "hold", label: "On Hold" },
            { value: "delayed", label: "Delayed" },
            { value: "completed", label: "Completed" },
          ]}
        />
      </div>

      <FormField
        label="Concerned Official Name, Designation & Contact for project department"
        name="concernedOfficialName"
        type="text"
        value={formData.concernedOfficialName}
        onChange={handleInputChange}
        placeholder="Enter official name"
      />

      <FormField
        label="Concerned Project Manager Name & Contact of executing agency"
        name="concernedProjectManager"
        type="text"
        value={formData.concernedProjectManager}
        onChange={handleInputChange}
        placeholder="Enter project manager name"
      />

      <FormField
        label=" Project Contact Information "
        name="contactInformation"
        type="text"
        value={formData.contactInformation}
        onChange={handleInputChange}
        placeholder="Enter contact information"
      />
    </div>
  );

  const renderFinancialInformation = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
      <FormField
        label="Total Approved Budget (in Lac)"
        name="amountSanctioned"
        type="number"
        value={formData.amountSanctioned}
        onChange={handleInputChange}
        placeholder="Enter amount"
        required
      />
      <FormField
        label="Cost of the project as per revised acceptance in(Lac)"
        name="amountReleased"
        type="number"
        value={formData.amountReleased}
        onChange={handleInputChange}
        placeholder="Enter amount"
        required
      />
      {/* </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Total Released Funds (in Lac)"
          name="financialProgress"
          type="text"
          value={formData.financialProgress}
          onChange={handleInputChange}
          placeholder="Enter progress"
          required
        />
        <FormField
          label="Total Expenditure "
          name="revisedCost"
          type="number"
          value={formData.revisedCost}
          onChange={handleInputChange}
          placeholder="Enter revised cost"
          required
        />
      </div> */}
    </div>
  );

  const renderScheduleInformation = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Project Sanction Date"
          name="projectSanctionDate"
          type="date"
          value={formData.projectSanctionDate}
          onChange={(date) => handleDateChange(date, "projectSanctionDate")}
          placeholder="Select date"
        />
        <FormField
          // label="Project Financial Approval GO Ref No."
          // label="Project Financial Approval GO Ref No."
          label="Project Financial Approval Date"
          name="projectFinancialApprovalDate"
          type="date"
          value={formData.projectFinancialApprovalDate}
          onChange={(date) =>
            handleDateChange(date, "projectFinancialApprovalDate")
          }
          placeholder="Select date"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Project Financial Approval GO Ref No."
          name="projectFinancialApprovalGoNumber"
          type="text"
          value={formData.projectFinancialApprovalGoNumber}
          onChange={handleInputChange}
          placeholder="Enter GO number"
        />
        <FormField
          label="Actual Project Start Date"
          name="actualProjectStartDate"
          type="date"
          value={formData.actualProjectStartDate}
          onChange={(date) => handleDateChange(date, "actualProjectStartDate")}
          placeholder="Select date"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Project Completion Date(as per work order)"
          name="projectCompletionDate"
          type="date"
          value={formData.projectCompletionDate}
          onChange={(date) => handleDateChange(date, "projectCompletionDate")}
          placeholder="Select date"
        />
        <FormField
          label="Revised Project Sanction Date"
          name="revisedProjectSanctionDate"
          type="date"
          value={formData.revisedProjectSanctionDate}
          onChange={(date) =>
            handleDateChange(date, "revisedProjectSanctionDate")
          }
          placeholder="Select date"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Revised Project Completion Date"
          name="revisedProjectCompletionDate"
          type="date"
          value={formData.revisedProjectCompletionDate}
          onChange={(date) =>
            handleDateChange(date, "revisedProjectCompletionDate")
          }
          placeholder="Select date"
          required
        />
        <FormField
          label="Estimated date of completion of work as per executing agency in case of project delay"
          name="estimatedCompletionDate"
          type="date"
          value={formData.estimatedCompletionDate}
          onChange={(date) => handleDateChange(date, "estimatedCompletionDate")}
          placeholder="Select date"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Actual Completion Date "
          name="actualCompletionDate"
          type="date"
          value={formData.actualCompletionDate}
          onChange={(date) => handleDateChange(date, "actualCompletionDate")}
          placeholder="Select date"
          required
        />
        <FormField
          label="Work Order Formation Date"
          name="workOrderFormationDate"
          type="date"
          value={formData.workOrderFormationDate}
          onChange={(date) => handleDateChange(date, "workOrderFormationDate")}
          placeholder="Select date"
          required
        />
      </div>

      <FormField
        label="Date of Land Handover to Executing Agency"
        name="landHandoverDate"
        type="date"
        value={formData.landHandoverDate}
        onChange={(date) => handleDateChange(date, "landHandoverDate")}
        placeholder="Select date"
        required
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <StepIndicator currentStep={currentStep} steps={STEPS} />

      <div className="mb-8">
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Project Information
            </h2>
            {renderProjectInformation()}
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Financial Information
            </h2>
            {renderFinancialInformation()}
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Schedule Information
            </h2>
            {renderScheduleInformation()}
          </div>
        )}
      </div>

      <div className="flex justify-between pt-6 border-t">
        <button
          type="button"
          onClick={prevStep}
          className={classNames(
            "flex items-center px-6 py-3 rounded-lg transition-all duration-200",
            currentStep === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-white bg-orange-600 hover:bg-orange-700 shadow-md hover:shadow-lg"
          )}
          disabled={currentStep === 1}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        {currentStep < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className={classNames(
              "flex items-center px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-white",
              isSubmitting
                ? "bg-green-500 cursor-wait"
                : "bg-green-600 hover:bg-green-700"
            )}
          >
            <Save className="w-5 h-5 mr-2" />
            {isSubmitting ? "Submitting..." : "Submit Project"}
          </button>
        )}
      </div>
    </form>
  );
};

export default ProjectForm;
