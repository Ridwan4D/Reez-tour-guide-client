import { Helmet } from "react-helmet";
import GuideCard from "../../components/GuideCard";
import useGuides from "../../hooks/useGuides";

const AllGuides = () => {
  const [guides] = useGuides();
  return (
    <div>
      <Helmet>
        <title>Guide&apos;s | Reez Tour Guide</title>
      </Helmet>
      <h2 className="mb-4 text-xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center border-b-2 border-[#10b981] pb-2">
        All Guides of{" "}
        <span className="text-[#10b981]">Reez Tour Guide</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:mb-20">
        {guides.map((guide, idx) => (
          <GuideCard key={idx} guide={guide}></GuideCard>
        ))}
      </div>
    </div>
  );
};

export default AllGuides;
