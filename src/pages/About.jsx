import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-black">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          About Our Platform
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We help people find high-quality remote jobs from trusted companies
          around the world — faster and without the hassle.
        </p>
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our mission is to connect talented professionals with remote
            opportunities that fit their lifestyle. We believe work should be
            flexible, meaningful, and accessible from anywhere.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We carefully collect and organize job listings so you can focus on
            what matters most — finding the right job.
          </p>
        </div>

        {/* Image / Illustration */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-64 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-700 font-semibold">
            Remote Work Illustration
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">Why Choose Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Remote Only",
              desc: "All jobs are fully remote from verified sources.",
            },
            {
              title: "Trusted Companies",
              desc: "We feature companies with proven hiring records.",
            },
            {
              title: "Easy Search",
              desc: "Filter by company, category, or employment type.",
            },
            {
              title: "Save Jobs",
              desc: "Bookmark jobs and apply when you’re ready.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-700 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Start Your Remote Career Today
        </h2>
        <p className="mb-6 text-sm md:text-base">
          Browse thousands of remote opportunities and find your next job.
        </p>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer px-6 py-3 bg-white text-cyan-700 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Explore Jobs
        </button>
      </section>
    </div>
  );
};

export default About;
