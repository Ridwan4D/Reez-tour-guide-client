import PropType from "prop-types";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useWishlist from "../hooks/useWishlist";
import Swal from "sweetalert2";
import useUsers from "../hooks/useUsers";

// =============================================

// =============================================

const PackageCard = ({ pack }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { image_1, tour_name, trip_type, price, _id } = pack;
  const [, refetch] = useWishlist();
  const navigate = useNavigate();
  const location = useLocation();
  const [users] = useUsers();
  const roleUser = users.find((findUser) => findUser.userEmail === user?.email);
  const role = roleUser?.role;
  // console.log(role);

  const handleAddWishlist = () => {
    if (user && user.email) {
      const wishItem = {
        wishId: _id,
        image: image_1,
        name: tour_name,
        email: user.email,
        price,
      };
      axiosSecure.post("/wishlist", wishItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`${tour_name}  added to wishList`);
          refetch();
        } else {
          Swal.fire({
            title: "You are not logged in!",
            text: "Please login to add to the cart.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login",
          }).then((result) => {
            if (result.isConfirmed) {
              setTimeout(() => {
                navigate("/login", location?.state);
              }, 1000);
            }
          });
        }
      });
    }
  };
  return (
    <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark border-2 p-5">
      <div
        className="relative bg-cover bg-no-repeat mb-3"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img className="rounded-t-lg md:h-64 w-full" src={image_1} alt="" />
        <FaHeart
          onClick={handleAddWishlist}
          className="absolute text-2xl top-2 text-[#10b981] right-3 cursor-pointer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Add to Wish List"
        />
      </div>
      <div className="text-surface space-y-1 dark:text-white">
        <h5 className="text-xl font-medium leading-tight">
          <span className="text-gray-500">Tour:</span> {tour_name}
        </h5>
        <p className="text-xl">
          <span className="font-semibold text-gray-500">Tour Type:</span>{" "}
          {trip_type}
        </p>
        <p className="font-semibold">
          <span className="text-lg text-gray-500">Price: </span>${price}
        </p>
        <div className="flex justify-between">
          <Link
            to={`/details/${_id}`}
            className="inline-block rounded bg-[#10b981] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            View Package
          </Link>

          {role === "admin" && (
            <Link
              to={`/updatePackage/${_id}`}
              className="inline-block rounded bg-[#10b981] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Update Package
            </Link>
          )}
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};
PackageCard.propTypes = {
  pack: PropType.object,
};
export default PackageCard;
