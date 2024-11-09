"use client";
import { Share2 } from "lucide-react";

// ActionButtons Component - Share and Apply buttons
const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      {/* Share Button */}
      <button className="border border-green-600 text-green-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-green-50 transition">
        Share <Share2 size={16} />
      </button>
      {/* Apply Button */}
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
        Apply
      </button>
    </div>
  );
};

export default ActionButtons;
