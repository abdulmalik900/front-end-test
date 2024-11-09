"use client";

import React, { useState } from "react";
import JobCard from "./JobCard";

// JobList Component - Displays a list of job cards with a "Show More" button
export default function JobList({ jobs }) {
  const [visibleJobs, setVisibleJobs] = useState(5);

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setVisibleJobs((prev) => prev + 5); // Show 5 more jobs each time
  };

  return (
    <div className="w-[95%] max-w-6xl mx-auto bg-white shadow-lg rounded-lg mb-10">
      {/* Table Header */}
      <div className="hidden md:grid grid-cols-5 bg-[#A4DAC3] text-white font-semibold py-4 px-6 rounded-t-lg">
        <div>Rank</div>
        <div>Vessel Type</div>
        <div>Salary</div>
        <div>Duration</div>
        <div>Join Date</div>
      </div>

      {/* Render job cards */}
      {jobs.slice(0, visibleJobs).map((job, index) => (
        <JobCard key={index} job={job} />
      ))}

      {/* "Show More" Button */}
      {visibleJobs < jobs.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-[#06251E] text-white px-6 py-2 rounded hover:bg-[#044B3A] transition"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
