import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useWishlist from "../../hooks/useWishlist";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const WishPage = () => {
  const [wishList, refetch] = useWishlist();
  const axiosSecure = useAxiosSecure();
  //   console.log(wishList);

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
        axiosSecure.delete(`/wishlist/${id}`).then((res) => {
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
      <Helmet>
        <title>Wishes | Reez Tour Guide</title>
      </Helmet>
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
                <tr className="bg-slate-400">
                  <th className="text-center text-xl">#</th>
                  <th className="py-5 text-center">Image</th>
                  <th className="text-center">Tour name</th>
                  <th className="text-center">Cost</th>
                  <th className="text-center">View Details</th>
                  <th className="text-center">action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {wishList.map((item, idx) => (
                  <tr key={idx} className="font-inter">
                    <th className="text-center font-bold">{idx + 1}</th>
                    <td className="text-center">
                      <div className="avatar">
                        <div className="w-16 h-16">
                          <img src={item.image} alt="food item image" />
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">${item.price}</td>
                    <th className="text-center">
                      <Link to={`/details/${item.wishId}`} className="btn bg-slate-400 text-white">
                        <TbListDetails />
                      </Link>
                    </th>
                    <th className="text-center">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn bg-slate-400 text-white"
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

export default WishPage;
