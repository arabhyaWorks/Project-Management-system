import React, { useState, useEffect } from "react";
import axios from "axios";
import { Building2, IndianRupee, Activity, Users } from "lucide-react";
import { StatCard } from "../components/dashboard/StatCard";
import { ProjectStatusChart } from "../components/dashboard/ProjectStatusChart";
import { BudgetChart } from "../components/dashboard/BudgetChart";
import { DepartmentPieChart } from "../components/dashboard/dashboardPieChart";
import { use } from "framer-motion/client";
import { endpoint } from "../utils/dataSet";

const projectStatusData = [
  { name: "In Progress", value: 45 },
  { name: "Completed", value: 30 },
  { name: "On Hold", value: 15 },
  { name: "In Planning", value: 10 },
];

const departmentsLabel = [
  "Divyang Jan sashaktikaran vibhag",
  "Nagar vikas",
  "Electric distribution division -1",
  "Electric distribution division -3",
  "Basic Education",
  "Health",
  "Tourism",
  "Technical Education",
  "Intermidiate Education",
  "Revenue",
  "Vocational Education",
  "Home",
  "Social welfare",
  "Animal Husbandry",
  "Probation",
  "Public work department",
  "Rural engineering department",
  "Agriculture",
  "Rural development",
  "Irrigation department",
  "Fisheries deparment",
  "Forest Department",
];

const budgetData = [
  {
    name: "Total",
    sanctioned: 209040.72,
    released: 13012.79,
    pending: 196027.93,
  },
];

const projectStatusLabels = [
  "In Planning",
  "In Progress",
  "On Hold",
  "Delayed",
  "Completed",
];

// const departmentData = [
//   { name: "C & DS Unit 24", value: 25 },
//   { name: "Construction Division, PWD,Chandauli", value: 12 },
//   { name: "Provincial Division, PWD, Chandauli", value: 17 },
//   {
//     name: "U.P. Project Corporation Ltd. Construction Division-3, Varanasi",
//     value: 10,
//   },
//   { name: "Executive Engineer, U.P. Power Corporation Ltd.", value: 10 },
//   { name: "Uttar Pradesh State Bridge Corporation, Chandauli", value: 9 },
//   { name: "Uttar Pradesh Aawas Vikash Parisad, Varanasi-1", value: 8 },
//   { name: "Irrigation Department, Laghudal Prakhand", value: 5 },
//   {
//     name: "Executive Engineer, Chandraprabha, Irrigation Department",
//     value: 4,
//   },
//   { name: "UPCLDF Varanasi", value: 4 },
//   { name: "UPSIDCO", value: 3 },
//   { name: "Construction Division Building, PWD,Varanasi", value: 3 },
//   { name: "Bandhi Prakhand, Irrigation Department", value: 3 },
//   { name: "Uttar Pradesh Aawas Vikash Parisad, Varanasi-2", value: 2 },
//   { name: "Forest Department", value: 2 },
//   { name: "Rajkiya Nirman Nigam, Bhadohi", value: 1 },
//   { name: "Mandiparisad, Varanasi", value: 1 },
//   { name: "Jal Nigam Urban", value: 1 },
//   { name: "Irrigation Department, Musakhand Prakhand", value: 1 },
//   { name: "Irrigation Department, Tubewell division", value: 1 },
// ];

export function Dashboard() {
  const [projectStatus, setProjectStatus] = useState([]);

  const [departmentData, setDepartmentData] = useState([]);
  const [stats, setStats] = useState({});

  const fetchProjectStatus = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/stats/project-status`
      );
      // console.log(response.data.data);
      setProjectStatus(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDepartmentData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/stats/department-count`
      );
      console.log(response.data.data);
      setDepartmentData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStatsData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/stats/budget-overview`
      );
      // console.log(response.data);
      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjectStatus();
    fetchDepartmentData();
    fetchStatsData();
  }, []);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Dashboard Overview
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Projects"
          value={stats.totalProjects}
          icon={Building2}
          trend={{ value: 1.5, label: "from last month" }}
        />
        <StatCard
          title="Total Budget (Lacs)"
          value={"₹" + stats?.totalBudget?.approved}
          icon={IndianRupee}
        />
        <StatCard
          title="Active Projects"
          value={stats?.activeProjects?.count}
          icon={Activity}
          trend={{ value: 8, label: "from last month" }}
        />
        <StatCard title="Executing Agencies" value="6" icon={Users} />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Project Status Distribution
            </h3>
            <ProjectStatusChart
              data={projectStatus.map((data) => ({
                ...data,
                name: projectStatusLabels[data.project_status - 1],
                value: data.count,
              }))}
            />
          </div>
        </div>

        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Budget Overview (in Lacs)
            </h3>
            <BudgetChart data={budgetData} />
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white shadow">
        <div className="px-6 py-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Department-wise Project Count
          </h3>
          <DepartmentPieChart data={departmentData} />
        </div>
      </div>

      <div className="rounded-lg bg-white shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Department-wise Distribution
          </h3>
        </div>
        <div className="px-6 py-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {
              departmentData.map((data, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-500">{departmentsLabel[index]}</h4>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {data.value} Projects
                  </p>
                </div>
              ))
            }

        
            {/* <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-500">Nagar Nigam</h4>
              <p className="mt-1 text-3xl font-semibold text-gray-900">
                89 Projects
              </p>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}
