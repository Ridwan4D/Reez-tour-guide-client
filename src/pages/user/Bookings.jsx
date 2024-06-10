import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaRegTrashAlt } from "react-icons/fa";

const Bookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    },
  });
  //   console.log(bookings);
  const handleDelete = (id) => {
    // console.log(`dlt id: ${id}`);
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
        axiosSecure.delete(`/booking/${id}`).then((res) => {
          //   console.log(res.data);
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
  return (
    <div>
      <SectionTitle
        heading={"Check Out Your Wish List"}
        subHeading={"My Wish List"}
      />
      <div className="bg-white max-w-6xl mx-auto px-12 py-10 mb-20">
        <div>
          <div className="overflow-x-auto rounded-t-xl">
            <table className="table">
              {/* head */}
              <thead className="uppercase text-white font-bold">
                <tr className="bg-[#10b981]">
                  <th className="text-center text-xl">#</th>
                  <th className="py-5 text-center">Package Name</th>
                  <th className="text-center">Guide name</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">price</th>
                  <th className="text-center">status</th>
                  <th className="text-center">Pay</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bookings.map((item, idx) => (
                  <tr key={idx} className="font-inter">
                    <th className="text-center font-bold">{idx + 1}</th>
                    <td className="text-center">{item.tourName}</td>
                    <td className="text-center">{item.guideName}</td>
                    <td className="text-center">{item.date}</td>
                    <td className="text-center">${item.price}</td>
                    <td className="text-center">${item.status}</td>
                    <th className="text-center">
                      <button className="btn bg-[#10b981] text-white">
                        Pay
                      </button>
                    </th>
                    <th className="text-center">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn bg-[#10b981] text-white"
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

export default Bookings;
