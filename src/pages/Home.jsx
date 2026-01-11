import { useDispatch, useSelector } from "react-redux";
import HomeJobs from "../components/HomeJobs";
import { setSearch } from "../redux/slices/jobsSlice";

const Home = () => {
  const search = useSelector((state) => state.jobsSlice.filters.search);
  const dispatch = useDispatch();
  const CATEGORIES = [
    "Software Development",
    "Customer Service",
    "Design",
    "Marketing",
    "Sales / Business",
    "Product",
    "Project Management",
    "AI / ML",
    "Data Analysis",
    "Devops / Sysadmin",
    "Finance",
    "Human Resources",
    "QA",
    "Writing",
    "Legal",
    "Medical",
    "Education",
    "All Others",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Find your dream remote job without the hassle
          </h1>

          <p className="text-sm md:text-base text-cyan-100 mb-8">
            Browse 90,000+ fully remote jobs from vetted companies
          </p>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Search jobs or companies..."
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            {/* <button
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="px-6 py-3 bg-white text-cyan-700 font-bold rounded-xl hover:bg-cyan-100 transition"
            >
              Search
            </button> */}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {CATEGORIES.map((category, index) => (
              <button
                key={index}
                className="px-3 py-1.5 bg-white/90 text-cyan-700 text-sm font-semibold rounded-full
                hover:bg-white hover:text-cyan-800 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS SECTION */}
      <HomeJobs />
    </div>
  );
};

export default Home;
