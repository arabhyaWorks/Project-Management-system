import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';
import classNames from 'classnames';
import StepIndicator from './StepIndicator';
import FormField from './FormField';
import "react-datepicker/dist/react-datepicker.css";

interface ProjectFormProps {
  onSubmitSuccess?: () => void;
}

interface FormData {
  department: string;
  executingAgency: string;
  yojnaName: string;
  projectName: string;
  description: string;
  goals: string;
  fundsSanctionedBy: string;
  projectCompletion: string;
  projectStatus: string;
  contractorName: string;
  amountSanctioned: string;
  amountReleased: string;
  financialProgress: string;
  revisedCost: string;
  sanctionDate: Date | null;
  financialApprovalDate: Date | null;
  contractDate: Date | null;
  workStartDate: Date | null;
  workCompletionDate: Date | null;
  projectCompletionDate: Date | null;
  revisedCompletionDate: Date | null;
  estimatedDate: Date | null;
}

const initialFormData: FormData = {
  department: '',
  executingAgency: '',
  yojnaName: '',
  projectName: '',
  description: '',
  goals: '',
  fundsSanctionedBy: '',
  projectCompletion: '',
  projectStatus: '',
  contractorName: '',
  amountSanctioned: '',
  amountReleased: '',
  financialProgress: '',
  revisedCost: '',
  sanctionDate: null,
  financialApprovalDate: null,
  contractDate: null,
  workStartDate: null,
  workCompletionDate: null,
  projectCompletionDate: null,
  revisedCompletionDate: null,
  estimatedDate: null,
};

const STEPS = [
  { title: 'Project Info', description: 'Basic details' },
  { title: 'Financials', description: 'Budget & costs' },
  { title: 'Schedule', description: 'Timeline & dates' },
];

const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmitSuccess }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null, field: keyof FormData) => {
    setFormData(prev => ({ ...prev, [field]: date }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      onSubmitSuccess?.();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderProjectInformation = () => (
    <div
     className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Project Department"
          name="department"
          type="select"
          value={formData.department}
          onChange={handleInputChange}
          options={[
            { value: 'nagar_nigam', label: 'Nagar Nigam' },
            { value: 'ada', label: 'ADA' },
          ]}
          required
        />
        <FormField
          label="Executing Agency"
          name="executingAgency"
          type="select"
          value={formData.executingAgency}
          onChange={handleInputChange}
          options={[
            { value: 'jal_nigam', label: 'Jal Nigam' },
            { value: 'jal_kal', label: 'Jal Kal' },
            { value: 'civil', label: 'Civil' },
            { value: 'health', label: 'Health' },
            { value: 'construction', label: 'Construction' },
            { value: 'design', label: 'Design' },
          ]}
          required
        />
      </div>

      <FormField
        label="Yojna Name"
        name="yojnaName"
        type="select"
        value={formData.yojnaName}
        onChange={handleInputChange}
        options={[
          { value: 'smart_city', label: 'State Smart City' },
          { value: 'cm_grid', label: 'CM Grid' },
          { value: 'finance_commission', label: '15th Finance Commission' },
          { value: 'swacch_bharat', label: 'Swacch Bharat Mission' },
        ]}
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
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Project Completion"
          name="projectCompletion"
          type="select"
          value={formData.projectCompletion}
          onChange={handleInputChange}
          options={Array.from({ length: 10 }, (_, i) => ({
            value: String((i + 1) * 10),
            label: `${(i + 1) * 10}%`
          }))}
          required
        />
        <FormField
          label="Project Status"
          name="projectStatus"
          type="select"
          value={formData.projectStatus}
          onChange={handleInputChange}
          options={[
            { value: 'planning', label: 'In Planning' },
            { value: 'progress', label: 'In Progress' },
            { value: 'hold', label: 'On Hold' },
          ]}
          required
        />
      </div>
    </div>
  );

  const renderFinancialInformation = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Amount Sanctioned (in Lac)"
          name="amountSanctioned"
          type="number"
          value={formData.amountSanctioned}
          onChange={handleInputChange}
          placeholder="Enter amount"
          required
        />
        <FormField
          label="Amount Released"
          name="amountReleased"
          type="number"
          value={formData.amountReleased}
          onChange={handleInputChange}
          placeholder="Enter amount"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Financial Progress"
          name="financialProgress"
          type="text"
          value={formData.financialProgress}
          onChange={handleInputChange}
          placeholder="Enter progress"
          required
        />
        <FormField
          label="Revised Cost"
          name="revisedCost"
          type="number"
          value={formData.revisedCost}
          onChange={handleInputChange}
          placeholder="Enter revised cost"
          required
        />
      </div>
    </div>
  );

  const renderScheduleInformation = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Project Sanction Date"
          name="sanctionDate"
          type="date"
          value={formData.sanctionDate}
          onChange={(date) => handleDateChange(date, 'sanctionDate')}
          placeholder="Select date"
          required
        />
        <FormField
          label="Financial Approval Date"
          name="financialApprovalDate"
          type="date"
          value={formData.financialApprovalDate}
          onChange={(date) => handleDateChange(date, 'financialApprovalDate')}
          placeholder="Select date"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Contract Date"
          name="contractDate"
          type="date"
          value={formData.contractDate}
          onChange={(date) => handleDateChange(date, 'contractDate')}
          placeholder="Select date"
          required
        />
        <FormField
          label="Work Start Date"
          name="workStartDate"
          type="date"
          value={formData.workStartDate}
          onChange={(date) => handleDateChange(date, 'workStartDate')}
          placeholder="Select date"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Work Completion Date"
          name="workCompletionDate"
          type="date"
          value={formData.workCompletionDate}
          onChange={(date) => handleDateChange(date, 'workCompletionDate')}
          placeholder="Select date"
          required
        />
        <FormField
          label="Project Completion Date"
          name="projectCompletionDate"
          type="date"
          value={formData.projectCompletionDate}
          onChange={(date) => handleDateChange(date, 'projectCompletionDate')}
          placeholder="Select date"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Revised Completion Date"
          name="revisedCompletionDate"
          type="date"
          value={formData.revisedCompletionDate}
          onChange={(date) => handleDateChange(date, 'revisedCompletionDate')}
          placeholder="Select date"
          required
        />
        <FormField
          label="Estimated Date"
          name="estimatedDate"
          type="date"
          value={formData.estimatedDate}
          onChange={(date) => handleDateChange(date, 'estimatedDate')}
          placeholder="Select date"
          required
        />
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <StepIndicator currentStep={currentStep} steps={STEPS} />

      <div className="mb-8">
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Information</h2>
            {renderProjectInformation()}
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Information</h2>
            {renderFinancialInformation()}
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule Information</h2>
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
            {isSubmitting ? 'Submitting...' : 'Submit Project'}
          </button>
        )}
      </div>
    </form>
  );
};

export default ProjectForm;