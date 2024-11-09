"use client";

import React from "react";
import { ArrowRightCircle } from "lucide-react";

const VacancyDetail = () => {
  return (
    <div className="bg-[#DFF0EB] p-6 rounded-lg shadow-lg mb-10 w-[90%] max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-green-700 mb-6">Vacancy Description</h2>
      <div className="grid grid-cols-2 gap-8 text-gray-800">
        <div>
          <p><strong>Looking for:</strong> Second Officer on Oil/Chemical Tanker</p>
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
      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-500">Publication date: 04/08/2022</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700 transition">
          Apply <ArrowRightCircle size={18} />
        </button>
      </div>
    </div>
  );
};

export default VacancyDetail;
