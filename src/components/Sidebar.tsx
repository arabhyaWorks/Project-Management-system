import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Database,
  Calendar,
  ClipboardCheck,
  TestTube2,
  Receipt,
  FolderKanban,
  Milestone,
  AlertCircle,
  FileBarChart,
  Image,
  UserCircle,
  LogOut,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Masters', href: '/masters', icon: Database },
  { name: 'Project Date Extend', href: '/date-extend', icon: Calendar },
  { name: 'Project Inspection', href: '/inspection', icon: ClipboardCheck },
  { name: 'Project Essential Test', href: '/essential-test', icon: TestTube2 },
  { name: 'Budget & UC Upload', href: '/budget', icon: Receipt },
  { name: 'All Projects', href: '/projects', icon: FolderKanban },
  { name: 'Milestones', href: '/milestones', icon: Milestone },
  { name: 'Issue Management', href: '/issues', icon: AlertCircle },
  { name: 'Reports', href: '/reports', icon: FileBarChart },
  { name: 'Gallery', href: '/gallery', icon: Image },
  { name: 'Profile', href: '/profile', icon: UserCircle },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="Ayodhya Municipal Department"
          />
          <span className="ml-4 text-lg font-semibold text-gray-900">PMS Ayodhya</span>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`
                          group flex gap-x-3 rounded-md p-2 text-sm leading-6
                          ${
                            isActive
                              ? 'bg-gray-50 text-orange-600'
                              : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                          }
                        `}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 ${
                            isActive ? 'text-orange-600' : 'text-gray-400 group-hover:text-orange-600'
                          }`}
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="mt-auto">
              <Link
                to="/logout"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-orange-600"
              >
                <LogOut className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-orange-600" />
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}