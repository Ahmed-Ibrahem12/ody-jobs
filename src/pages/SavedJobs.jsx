import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeJob } from "../redux/slices/savedSlice";
import { useNavigate } from "react-router-dom";

const SavedJobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savedJobs = useSelector((state) => state.savedSlice?.savedJobs || []);

  // Empty State
  if (!savedJobs.length) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold mb-2">No Saved Jobs</h2>
        <p className="text-gray-500 mb-4">You haven’t saved any jobs yet.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition"
        >
          Browse Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Saved Jobs</h1>

      {/* Jobs Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {savedJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition"
          >
            {/* Job Info */}
            <div
              onClick={() => navigate(`/job/${job.id}`)}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                {job.company_logo && (
                  <img
                    src={job.company_logo}
                    alt={job.company_name}
                    className="w-10 h-10 object-contain"
                  />
                )}
                <div>
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.company_name}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                {job.category && (
                  <span className="px-3 py-1 bg-slate-700 text-white rounded-full">
                    {job.category}
                  </span>
                )}
                {job.job_type && (
                  <span className="px-3 py-1 bg-slate-700 text-white rounded-full">
                    {job.job_type}
                  </span>
                )}
                {job.candidate_required_location && (
                  <span className="px-3 py-1 bg-slate-700 text-white rounded-full">
                    {job.candidate_required_location}
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex justify-between items-center">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-sm bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
              >
                Apply
              </a>

              <button
                onClick={() => dispatch(removeJob(job.id))}
                className="px-4 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;
