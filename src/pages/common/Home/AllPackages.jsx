import PackageCard from "../../../components/PackageCard";
import usePackage from "../../../hooks/usePackage";

const AllPackages = () => {
  const [packages] = usePackage();
  // console.log(packages);
  return (
    <div>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
        All Packages of{" "}
        <span className="text-[#10b981]">Reez Tour Guide</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:mb-20">
        {
            packages.map((pack,idx)=> <PackageCard key={idx} pack={pack}></PackageCard>)
        }
      </div>
    </div>
  );
};

export default AllPackages;
