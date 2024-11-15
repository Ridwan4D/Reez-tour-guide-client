import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { MdAdminPanelSettings } from "react-icons/md";
import { TbArrowGuide } from "react-icons/tb";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { FcCancel } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useUsers from "../../hooks/useUsers";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Helmet } from "react-helmet";

const ManageUser = () => {
  const { count } = useLoaderData();
  const [users] = useUsers();
  const itemPerPage = 10;
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const [currentPage, setCurrentPage] = useState(0);

  const axiosSecure = useAxiosSecure();

  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?page=${currentPage}&size=${itemPerPage}`);
      return res.data;
    },
  });

  const handleDeleteUser = (id) => {
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

  const handleRole = (user, role, requested) => {
    const userInfo = { role, requested };
    axiosSecure.put(`/users/admin/${user._id}`, userInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        if (role === "user") {
          toast.dismiss(`${user.userName}'s request is canceled`);
        } else {
          toast.success(`${user.userName} is now ${role}`);
        }
      }
    });
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      refetch();
    }
  };

  const goToNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage((prev) => prev + 1);
      refetch();
    }
  };

  return (
    <div>
      <Helmet>
        <title>Manage User | Reez Tour Guide</title>
      </Helmet>
      <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How many??"} />
      <div className="bg-white max-w-6xl mx-auto px-2 md:px-12 py-10 mb-20">
        <div className="font-cinzel font-bold mb-10 space-y-2 md:flex justify-between items-center">
          <h2 className="text-lg md:text-3xl">Total User: {users.length}</h2>
          <h2 className="text-lg md:text-3xl">In This Page User: {allUsers.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto rounded-t-xl">
            <table className="table">
              <thead className="uppercase text-white font-bold">
                <tr className="bg-slate-400">
                  <th className="text-center text-sm md:text-xl">#</th>
                  <th className="py-2 md:py-5 text-center text-sm md:text-lg">Name</th>
                  <th className="text-center text-sm md:text-lg">Email</th>
                  <th className="text-center text-sm md:text-lg">Role</th>
                  <th className="text-center text-sm md:text-lg">Manage</th>
                  <th className="text-center text-sm md:text-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, idx) => (
                  <tr key={user._id} className="font-inter">
                    <th className="text-center font-bold text-sm md:text-xl">{idx + 1}</th>
                    <td className="text-center text-xs md:text-lg">{user.userName}</td>
                    <td className="text-center text-xs md:text-lg">{user.userEmail}</td>
                    <td className="text-center text-xs md:text-lg">
                      {user.role} {user.requested && <span>(requested)</span>}
                    </td>
                    <td className="text-center">
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <div>
                          {user.role === "user" ? (
                            <div>
                              <button
                                data-tooltip-id="makeAdmin"
                                data-tooltip-content="Make Admin"
                                onClick={() => handleRole(user, "admin", false)}
                                className="btn bg-slate-400 text-white text-sm md:text-lg"
                              >
                                <MdAdminPanelSettings />
                              </button>
                              <button
                                data-tooltip-id="makeGuide"
                                data-tooltip-content="Make Guide"
                                onClick={() => handleRole(user, "guide", false)}
                                className="btn bg-slate-400 text-white text-sm md:text-lg"
                              >
                                <TbArrowGuide />
                              </button>
                              {user.requested && (
                                <button
                                  data-tooltip-id="cancelRequest"
                                  data-tooltip-content="Cancel Request"
                                  onClick={() => handleRole(user, "user", false)}
                                  className="btn bg-slate-400 text-white text-sm md:text-lg"
                                >
                                  <FcCancel />
                                </button>
                              )}
                            </div>
                          ) : (
                            <div>
                              {user.role === "guide" && (
                                <button
                                  data-tooltip-id="makeAdmin"
                                  data-tooltip-content="Make Admin"
                                  onClick={() => handleRole(user, "admin", false)}
                                  className="btn bg-slate-400 text-white text-sm md:text-lg"
                                >
                                  <MdAdminPanelSettings />
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                    <th className="text-center">
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="btn bg-[#B91C1C] text-white text-sm md:text-lg"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </th>
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
      <div className="max-w-5xl mx-auto my-7 text-center space-x-2 flex items-center">
        <button
          className={`bg-slate-400 text-white text-xs md:text-sm px-2 h-7 rounded-sm`}
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
        >
          <GoArrowLeft />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`bg-slate-400 text-white text-xs md:text-sm px-2 h-7 rounded-sm ${currentPage === page && "selected"}`}
            onClick={() => {
              setCurrentPage(page);
              refetch();
            }}
          >
            {page + 1}
          </button>
        ))}
        <button
          className={`bg-slate-400 text-white text-xs md:text-sm px-2 h-7 rounded-sm`}
          onClick={goToNextPage}
          disabled={currentPage === numberOfPages - 1}
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ManageUser;
