import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { MdAdminPanelSettings } from "react-icons/md";
import { TbArrowGuide } from "react-icons/tb";
import useUser from "../../hooks/useUser";
import { useState } from "react";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const [users, refetch] = useUser();

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
          // console.log(res.data);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  const handleRole = (user, role) => {
    const userInfo = { role };
    axiosSecure.patch(`/users/admin/${user._id}`, userInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`${user.userName} is ${role} Now`);
      }
    });
  };
  return (
    <div>
      <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How many??"} />
      <div className="bg-white max-w-6xl mx-auto px-12 py-10 mb-20">
        <div className="font-cinzel font-bold mb-10">
          <h2 className="text-3xl">Total User: {users.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto rounded-t-xl">
            <table className="table">
              {/* head */}
              <thead className="uppercase text-white font-bold">
                <tr className="bg-[#10b981]">
                  <th className="text-center text-xl">#</th>
                  <th className="py-5 text-center">Name</th>
                  <th className="text-center">email</th>
                  <th className="text-center">role</th>
                  <th className="text-center">manage</th>
                  <th className="text-center">action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users?.map((user, idx) => (
                  <tr key={idx} className="font-inter">
                    <th className="text-center font-bold">{idx + 1}</th>
                    <td className="text-center">{user.userName}</td>
                    <td className="text-center">{user.userEmail}</td>
                    <td className="text-center">{user.role}</td>
                    <td className="text-center">
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <div>
                          {user.role === "user" ? (
                            <div>
                              <button
                                onClick={() => handleRole(user, "admin")}
                                className="btn bg-[#10b981] text-white text-lg"
                              >
                                <MdAdminPanelSettings />
                              </button>
                              <button
                                onClick={() => handleRole(user, "guide")}
                                className="btn bg-[#10b981] text-white text-lg"
                              >
                                <TbArrowGuide />
                              </button>
                            </div>
                          ) : (
                            <div>
                              {user.role === "guide" && (
                                <button
                                  onClick={() => handleRole(user, "admin")}
                                  className="btn bg-[#10b981] text-white text-lg"
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
                        className="btn bg-[#B91C1C] text-white"
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
      </div>
    </div>
  );
};

export default ManageUser;
