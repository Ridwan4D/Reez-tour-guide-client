import { Tooltip } from "react-tooltip";
import SectionTitle from "../../components/SectionTitle";
import usePackage from "../../hooks/usePackage";
import { TbListDetails } from "react-icons/tb";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManagePackages = () => {
    const [packages, refetch] = usePackage();
    const axiosSecure = useAxiosSecure();

    const handleDeletePackage = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`).then((res) => {
                    if (res.data.deletedCount) {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        refetch();
                    }
                });
            }
        });
    };
    return (
        <div>
            <Helmet>
                <title>Manage Package | Reez Tour Guide</title>
            </Helmet>
            <SectionTitle heading={"MANAGE PACKAGES"} subHeading={"----Add-Remove-Update----"} />
            <div className="bg-white max-w-6xl mx-auto md:px-12 py-10 mb-20">
                <div className="font-cinzel font-bold mb-10 space-y-2 md:flex justify-between items-center">
                    <h2 className="text-lg md:text-3xl">Total Package: {packages.length}</h2>
                    <h2 className="text-lg md:text-3xl">Package In This Page: {packages.length}</h2>
                </div>
                <div>
                    <div className="overflow-x-auto rounded-t-xl">
                        <table className="table">
                            <thead className="uppercase text-white font-bold">
                                <tr className="bg-slate-400">
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
                                    <tr key={idx} className="border-b-2 border-slate-300">
                                        <td className="text-center">{idx + 1}</td>
                                        <td className="text-center">{pack.tour_name}</td>
                                        <td className="text-center">{pack.trip_type}</td>
                                        <td><Link to={`/details/${pack._id}`}><div className="rounded-full border-2 border-slate-900 hover:bg-slate-900 p-2 hover:text-gray-400 text-lg hover:scale-90 transition-all cursor-pointer"><TbListDetails className="mx-auto" /></div></Link></td>
                                        <td><Link to={`/updatePackage/${pack._id}`}><div className="rounded-full border-2 border-slate-900 hover:bg-slate-900 p-2 hover:text-gray-400 text-lg hover:scale-90 transition-all cursor-pointer"><MdModeEdit className="mx-auto" /></div></Link></td>
                                        <td><div onClick={() => handleDeletePackage(pack._id)} className="rounded-full border-2 border-slate-900 hover:bg-slate-900 p-2 hover:text-gray-400 text-lg hover:scale-90 transition-all cursor-pointer flex items-center justify-center"><MdDelete /></div></td>
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