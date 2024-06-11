import { Link } from "react-router-dom";
import useGuides from "../../../../hooks/useGuides";
import GuideCard from "../../../../components/GuideCard";

const HomeGuides = () => {
    const [guides] = useGuides();
  return (
    <div>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Meet Tour Guides of{"  "}
        <span className="text-[#10b981]"> Reez Tour Guide</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
        {guides.slice(0, 3).map((guide, idx) => (
          <GuideCard key={idx} guide={guide}></GuideCard>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link
          to="/allGuides"
          className="btn btn-wide bg-[#10b981] text-white font-bold btn-ghost"
        >
          All Guides
        </Link>
      </div>
    </div>
  );
};

export default HomeGuides;
