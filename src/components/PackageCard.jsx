import PropType from "prop-types";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const PackageCard = ({ pack }) => {
  //   console.log(pack);
  const { image_1, tour_name, trip_type, price, _id } = pack;
  return (
    <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark border-2 p-5">
      <div
        className="relative bg-cover bg-no-repeat mb-3"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img className="rounded-t-lg md:h-64 w-full" src={image_1} alt="" />
        <FaHeart className="absolute text-2xl top-2 text-[#10b981] right-3 cursor-pointer" data-tooltip-id="my-tooltip" data-tooltip-content="Add to Wish List"/>
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
        <Link
          to={`/details/${_id}`}
          className="inline-block rounded bg-[#10b981] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          View Package
        </Link>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};
PackageCard.propTypes = {
  pack: PropType.object,
};
export default PackageCard;
