import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
