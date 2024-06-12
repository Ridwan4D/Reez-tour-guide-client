import SectionTitle from "../../../components/SectionTitle";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/varient";
import usePackage from "../../../hooks/usePackage";
import { Link } from "react-router-dom";

const TourTypeSection = () => {
  const [packages] = usePackage();
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <SectionTitle
        heading="Tour Type Section"
        subHeading="Choose Your Favorite Type"
      />
      <div>
        <div className=" flex overflow-x-auto gap-x-5">
          {packages.map((pack, idx) => (
            <Link
              key={idx}
              to={`/tripType/${pack.trip_type}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#10b981] rounded-md focus:ring-4 focus:outline-none focus:ring-[#10b981]/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div className="max-w-xl w-64 p-6 bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                  {pack.trip_type}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TourTypeSection;
