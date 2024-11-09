"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import ActionButton from "./ActionButton";

// JobCard Component - Displays job details with expandable section
const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <>
      {/* Job Card Summary */}
      <div
        className="flex flex-col md:grid md:grid-cols-5 items-center p-4 cursor-pointer border-b hover:bg-[#F0F8F5] transition-colors"
        onClick={handleToggle}
      >
        <div className="md:flex-1">{job.title}</div>
        <div className="md:flex-1">Accommodation Vessel</div>
        <div className="md:flex-1">$1500/month</div>
        <div className="md:flex-1">5 months</div>
        <div className="flex justify-between items-center md:flex-1 w-full md:w-auto">
          End Aug 2022
          {expanded ? (
            <ChevronDown className="h-5 w-5 text-gray-600 ml-2" />
          ) : (
            <ChevronRight className="h-5 w-5 text-gray-600 ml-2" />
          )}
        </div>
      </div>

      {/* Expanded Job Details */}
      {expanded && (
        <div className="p-6 bg-[#F4FBF9] transition-all">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <div>
              <p><strong>Main Engine:</strong> 12850</p>
              <p><strong>Built Year:</strong> 2011</p>
              <p><strong>Vessel Flag:</strong> USA</p>
              <p><strong>DWT:</strong> 55612</p>
            </div>
            <div>
              <p><strong>GRT:</strong> 55612</p>
              <p><strong>TEU:</strong> 55612</p>
              <p><strong>Power:</strong> 325HP/25KW</p>
              <p><strong>Crew:</strong> Mix</p>
            </div>
          </div>
          <ActionButton />

          
        </div>
      )}
    </>
  );
};

export default JobCard;
