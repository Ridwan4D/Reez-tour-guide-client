import SectionTitle from "../../../components/SectionTitle";
import usePackage from "../../../hooks/usePackage";
import { Link } from "react-router-dom";

const TourTypeSection = () => {
  const [packages] = usePackage();
  const uniqueTripTypes = [];

  packages.forEach(pack => {
    if (!uniqueTripTypes.find(item => item.trip_type === pack.trip_type)) {
      uniqueTripTypes.push(pack);
    }
  });

  return (
    <div>
      <SectionTitle
        heading="Tour Type Section"
        subHeading="Choose Your Favorite Type"
      />
      <div>
        <div className="flex overflow-x-auto gap-x-5">
          {uniqueTripTypes.map((pack, idx) => (
            <Link
              key={idx}
              to={`/tripType/${pack.trip_type}`}
              className="inline-flex items-center md:px-3 md:py-0 text-sm font-medium text-center text-white bg-slate-400 rounded-md focus:ring-4 focus:outline-none focus:ring-[#10b981]/30 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div className="w-64 md:min-w-64 md:w-auto pt-2 md:px-3 md:py-2 bg-gray-200 border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
                <h3 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight text-slate-800 dark:text-white">
                  {pack.trip_type}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourTypeSection;
