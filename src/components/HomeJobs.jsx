import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getjobs } from "../redux/slices/jobsSlice";
import { useNavigate } from "react-router-dom";

const HomeJobs = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobsSlice);
  const navigate = useNavigate();

  const toggleType = (type) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filterdJobs = jobs.filter((job) => {
    const matchesCompany = selectedCompany
      ? job.company_name === selectedCompany
      : true;
    const matchesType =
      selectedType.length > 0 ? selectedType.includes(job.job_type) : true;
    return matchesCompany && matchesType;
  });

  useEffect(() => {
    dispatch(getjobs({ selectedCompany }));
  }, [dispatch, selectedCompany]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-black ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1 bg-gray-200 rounded-xl p-4 h-fit">
          <h3 className="text-xl font-bold mb-3">Employment Types</h3>

          <div className="flex flex-col gap-2 text-sm">
            {["full_time", "contract", "freelance", "part_time"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-cyan-700"
                  checked={selectedType.includes(type)}
                  onChange={() => toggleType(type)}
                />
                {type}
              </label>
            ))}
          </div>

          <hr className="my-4" />

          <h3 className="text-xl font-bold mb-3">Companies</h3>

          <div className="flex flex-col gap-2 max-h-60 overflow-y-auto text-sm">
            {jobs &&
              [...new Set(jobs.map((job) => job.company_name))].map(
                (company, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCompany === company}
                      onChange={() =>
                        setSelectedCompany(
                          selectedCompany === company ? "" : company
                        )
                      }
                      className="accent-cyan-700"
                    />
                    {company}
                  </label>
                )
              )}
          </div>
        </aside>

        {/* Jobs List */}
        <main className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-4">All Jobs</h2>

          {loading && <p>Loading jobs...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="space-y-4">
            {filterdJobs &&
              filterdJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => navigate(`/job/${job.id}`)}
                  className="bg-white border cursor-pointer rounded-xl p-4 flex flex-col md:flex-row gap-4 items-start md:items-center hover:shadow-lg transition"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{job.title}</h3>

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

                  <button
                    onClick={() => window.open(job.url, "_blank")}
                    className="px-4 py-2 cursor-pointer bg-cyan-700 text-white rounded-lg text-sm font-semibold hover:bg-cyan-800 transition"
                  >
                    Apply Job
                  </button>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeJobs;
