import { Tooltip } from "react-tooltip";
import SectionTitle from "../../components/SectionTitle";
import usePackage from "../../hooks/usePackage";
import { TbListDetails } from "react-icons/tb";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const ManagePackages = () => {
    const [packages] = usePackage();
    return (
        <div>
            <SectionTitle heading={"MANAGE PACKAGES"} subHeading={"----Add-Remove-Update----"} />
            <div className="bg-white max-w-6xl mx-auto px-2 md:px-12 py-10 mb-20">
                <div className="font-cinzel font-bold mb-10 space-y-2 md:flex justify-between items-center">
                    <h2 className="text-lg md:text-3xl">Total Package: {packages.length}</h2>
                    <h2 className="text-lg md:text-3xl">Package In This Page: {packages.length}</h2>
                </div>
                <div>
                    <div className="overflow-x-auto rounded-t-xl">
                        <table className="table">
                            <thead className="uppercase text-white font-bold">
                                <tr className="bg-[#10b981]">
                                    <th className="text-center text-sm md:text-lg">#</th>
                                    <th className="py-2 md:py-5 text-center text-sm">Name</th>
                                    <th className="text-center text-sm">Type</th>
                                    <th className="text-center text-sm">Details</th>
                                    <th className="text-center text-sm">Edit</th>
                                    <th className="text-center text-sm">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packages.map((pack, idx) => (
                                    <tr key={idx}>
                                        <td className="text-center">{idx + 1}</td>
                                        <td className="text-center">{pack.tour_name}</td>
                                        <td className="text-center">{pack.trip_type}</td>
                                        <td><Link to={`/details/${pack._id}`}><div className="rounded-full border-2 border-slate-900 hover:bg-slate-900 p-2 hover:text-gray-400 text-lg hover:scale-90 transition-all cursor-pointer"><TbListDetails className="mx-auto" /></div></Link></td>
                                        <td><Link to={`/updatePackage/${pack._id}`}><div className="rounded-full border-2 border-slate-900 hover:bg-slate-900 p-2 hover:text-gray-400 text-lg hover:scale-90 transition-all cursor-pointer"><MdModeEdit className="mx-auto" /></div></Link></td>
                                        <td><div className="rounded-full border-2 border-slate-900 hover:bg-slate-900 p-2 hover:text-gray-400 text-lg hover:scale-90 transition-all cursor-pointer"><MdDelete className="mx-auto" /></div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Tooltip id="makeAdmin" />
                <Tooltip id="makeGuide" />
                <Tooltip id="cancelRequest" />
            </div>
        </div>
    );
};

export default ManagePackages;