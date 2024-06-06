import { Link } from "react-router-dom";
import PackageCard from "../../../../components/PackageCard";
import usePackage from "../../../../hooks/usePackage";

const HomePackages = () => {
  const [packages] = usePackage();
//   console.log(packages);
  return (
    <div>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        See The Packages Of{" "}
        <span className="text-[#10b981]">Reez Tour Guide</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
        {
            packages.slice(0,3).map((pack,idx)=> <PackageCard key={idx} pack={pack}></PackageCard>)
        }
      </div>
      <div className="flex justify-center my-5">
        <Link to="/allPackages" className="btn btn-wide bg-[#10b981] text-white font-bold btn-ghost">All Packages</Link>
      </div>
    </div>
  );
};

export default HomePackages;
