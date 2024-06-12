import { useLoaderData, useParams } from "react-router-dom";
import PackageCard from "../../components/PackageCard";

const TripTypePackage = () => {
  const packages = useLoaderData();
  const { type } = useParams();
  const packageTypes = packages.filter((pack) => pack.trip_type == type);
  // console.log(packageTypes);
  return (
    <div>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        See The Packages Of <span className="text-[#10b981]">{type}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:mb-20">
        {packageTypes.map((pack, idx) => (
          <PackageCard key={idx} pack={pack}></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default TripTypePackage;
