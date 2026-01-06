import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getjobs } from "../redux/slices/jobsSlice";
import { addJob } from "../redux/slices/savedSlice";

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { jobs, loading } = useSelector((state) => state.jobsSlice);
  const job = jobs.find((job) => job.id.toString() === id);

  useEffect(() => {
    if (!jobs.length) {
      dispatch(getjobs());
    }
  }, [dispatch, jobs.length]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!job) return <p className="text-center mt-10">Job not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-black">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
        <img
          src={job.company_logo}
          alt={job.company_name}
          className="w-16 h-16 object-contain"
        />

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{job.title}</h1>
          <p className="text-sm text-gray-600">
            {job.company_name} • {job.publication_date}
          </p>
        </div>

        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-cyan-700 text-white rounded-lg font-semibold hover:bg-cyan-800 transition"
        >
          Apply Now
        </a>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Job Description</h2>

          <div
            className="prose max-w-none text-sm"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>

        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow p-6 h-fit">
          <h3 className="text-lg font-bold mb-4">Job Overview</h3>

          {/* ✅ Save Job Button */}
          <button
            onClick={() => dispatch(addJob(job))}
            className="w-full cursor-pointer mb-5 px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold hover:bg-cyan-800 transition"
          >
            Save Job
          </button>

          <ul className="space-y-3 text-sm">
            <li>
              <span className="font-semibold">Location:</span>{" "}
              {job.candidate_required_location}
            </li>

            {job.job_type && (
              <li>
                <span className="font-semibold">Employment Type:</span>{" "}
                {job.job_type}
              </li>
            )}

            {job.category && (
              <li>
                <span className="font-semibold">Category:</span> {job.category}
              </li>
            )}

            {job.salary && (
              <li>
                <span className="font-semibold">Salary:</span> {job.salary}
              </li>
            )}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default JobDetails;
