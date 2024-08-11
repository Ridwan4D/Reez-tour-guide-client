import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const ManageTour = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${user.email}`);
      return res.data;
    },
  });
  const handleAction = (id, status) => {
    // console.log(id,status);
    const bookingInfo = { status };
    axiosSecure.patch(`/bookings/${id}`, bookingInfo).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success(`Bookings ${status}`);
        refetch();
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Manage Tour| Reez Tour Guide</title>
      </Helmet>
      <SectionTitle
        heading={"Check Out Your Wish List"}
        subHeading={"My Wish List"}
      />
      <div className="bg-white max-w-6xl mx-auto px-12 py-10 mb-20">
        <div className="font-cinzel font-bold flex justify-around items-center mb-10">
          <h2 className="text-3xl">Total Bookings: {bookings.length}</h2>
        </div>
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
                  <th className="text-center">Action</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bookings.map((item, idx) => (
                  <tr key={idx} className="font-inter">
                    <th className="text-center font-bold">{idx + 1}</th>
                    <td className="text-center">{item.tourName}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.date}</td>
                    <td className="text-center">${item.price}</td>
                    <td className="text-center">{item.status}</td>
                    <th className="text-center">
                      <button
                        disabled={item.status === "Rejected"}
                        onClick={() => handleAction(item._id, "Accepted")}
                        className="btn bg-[#10b981] text-white"
                      >
                        Accept
                      </button>
                    </th>
                    <th className="text-center">
                      <button
                        disabled={item.status === "Accepted"}
                        onClick={() => handleAction(item._id, "Rejected")}
                        className="btn bg-[#10b981] text-white"
                      >
                        Reject
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

export default ManageTour;
