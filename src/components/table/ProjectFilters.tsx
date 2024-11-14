import React from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

interface ProjectFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
  selectedExecutiveAgency: string;
  onSelectedExecutiveAgency: (value: string) => void;
}

export function ProjectFilters({
  searchTerm,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  selectedStatus,
  onStatusChange,
  selectedExecutiveAgency,
  onSelectedExecutiveAgency,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative flex-1 max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="block outline-none	 w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="rounded-md outline-none font-medium border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600"
          >
            <option value="">सभी विभाग</option>
            <option value="औद्योगिक विकास विभाग">औद्योगिक विकास विभाग</option>
            <option value="नगरीय विकास विभाग">नगरीय विकास विभाग </option>
            <option value="योजना विभाग">योजना विभाग </option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="rounded-md outline-none font-medium border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600"
          >
            <option value="">परियोजना स्थिति </option>
            <option value="कार्य प्रगति पर">कार्य प्रगति पर </option>
            <option value="प्रारंभिक चरण">प्रारंभिक चरण </option>
            <option value="योजना निर्माण">योजना निर्माण </option>
            <option value="कार्य पूर्ण">कार्य पूर्ण</option>
          </select>

          <select
            value={selectedExecutiveAgency}
            onChange={(e) => onSelectedExecutiveAgency(e.target.value)}
            className="rounded-md outline-none font-medium border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600"
          >
            <option value="">
              <p className="font-bold">सभी कार्यदायी संस्था</p>
            </option>
            <option value="भदोही औद्योगिक विकास प्राधिकरण (BIDA)">
              बी.आई.डी.ए
            </option>
          </select>
        </div>

        {/* <button
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Advanced Filters
        </button> */}
      </div>
    </div>
  );
}
