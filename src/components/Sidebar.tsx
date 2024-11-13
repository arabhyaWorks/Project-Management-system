import React, { useState } from "react";
import {
  LayoutDashboard,
  Database,
  Calendar,
  ClipboardCheck,
  PenTool,
  Receipt,
  FolderOpen,
  Milestone,
  AlertCircle,
  BarChart2,
  Image,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, ruote: "/" },
  { icon: Database, label: "Masters", ruote: "/projectDashboard" },
  { icon: FolderOpen, label: "All Projects", ruote: "/projects" },
  { icon: FolderOpen, label: "New Projects", ruote: "/newProjects" },
  { icon: Image, label: "Gallery", ruote: "/gallery" },
  // {
  //   icon: Calendar,
  //   label: "Project Date Extend",
  //   ruote: "/project-date-extend",
  // },
  // {
  //   icon: ClipboardCheck,
  //   label: "Project Inspection",
  //   ruote: "/project-inspection",
  // },
  {
    icon: PenTool,
    label: "Project Essential Test",
    ruote: "/project-essential-test",
  },
  { icon: Receipt, label: "Budget & UC Upload", ruote: "/budget-uc-upload" },
  { icon: Milestone, label: "Milestones", ruote: "/milestones" },
  { icon: AlertCircle, label: "Issue Management", ruote: "/issue-management" },
  { icon: BarChart2, label: "Reports", ruote: "/reports" },
  // { icon: User, label: "Profile", ruote: "/profile" },
];

interface SidebarProps {
  isOpen: boolean;
}
const indiaLogo =
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Seal_of_Uttar_Pradesh.svg";

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <>
      <motion.div
        className={`${
          !isOpen ? "w-20" : "w-[300px]"
        } bg-white h-screen  fixed left-0 top-0 border-r border-gray-200 flex flex-col transition-all duration-300 z-20`}
        animate={{ width: !isOpen ? 100 : 300 }}
      >
        <div className="p-3 border-b border-gray-200">
          <AnimatePresence>
            {!!isOpen && (
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <img src={indiaLogo} alt="India Logo" className="w-10 h-10" />
                <h1 className="text-xl font-bold text-gray-900">PMS Bhadohi</h1>
              </motion.div>
            )}
          </AnimatePresence>
          {!isOpen && (
            <div className="flex justify-center">
              <img src={indiaLogo} alt="India Logo" className="w-10 h-10" />
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.ruote}
                  className={`flex items-center gap-3 px-3 py-[0.62rem] rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                    item.active ? "bg-orange-50 text-orange-600" : ""
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <AnimatePresence>
                    {!!isOpen && (
                      <motion.span
                        //className="font-medium"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <a
          href="/login"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <AnimatePresence>
              {!!isOpen && (
                <motion.span
        
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        </div>
      </motion.div>
    </>
  );
}
