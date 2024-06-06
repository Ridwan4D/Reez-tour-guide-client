import { useLoaderData, useParams } from "react-router-dom";
import usePackage from "../../hooks/usePackage";
import TourPlan from "../../components/TourPlan";

const Details = () => {
  const packages = useLoaderData();
  const { id } = useParams();
  const packageDetail = packages.find((pack) => pack._id == id);
  console.log(id, packageDetail);
  const {
    image_1,
    image_2,
    image_3,
    image_4,
    price,
    tour_name,
    trip_type,
    tour_plan,
    duration,
    description,
  } = packageDetail;
  return (
    <div className="md:flex md:mb-20 md:space-x-6">
      <div className="flex-1 md:space-y-6">
        <div className="md:p-7 border-2 rounded-sm">
          <img src={image_1} alt="" className="w-auto" />
        </div>
        <div className="flex space-x-5">
          <div>
            <img
              src={image_2}
              alt=""
              className="w-auto md:w-56 h-40 border-2 p-3 rounded-sm"
            />
          </div>
          <div>
            <img
              src={image_3}
              alt=""
              className="w-auto md:w-56 h-40 border-2 p-3 rounded-sm"
            />
          </div>
          <div>
            <img
              src={image_4}
              alt=""
              className="w-auto md:w-56 h-40 border-2 p-3 rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 md:p-10 space-y-4">
        <h3 className="text-2xl font-semibold">
          <span className="text-[#10b981] font-bold">Tour Name: </span>
          {tour_name}
        </h3>
        <h3 className="text-xl font-semibold">
          <span className="text-[#10b981] font-bold">Trip Type: </span>
          {trip_type}
        </h3>
        <p className="text-sm text-gray-600">
          <span className="text-[#10b981] font-bold">Trip Description: </span>
          {description}
        </p>
        <p className="text-2xl font-black">
          <span className="text-[#10b981] font-bold">Trip Cost: </span>${price}
        </p>
        <p className="text-xl font-medium">
          <span className="text-[#10b981] font-bold">Tour Duration:</span>{" "}
          {duration}
        </p>
        <div>
          <p className="text-2xl font-black">
            <span className="text-[#10b981] font-bold">Trip Plane: </span>$
            {price}
          </p>
          {tour_plan.map((plan, idx) => (
            <TourPlan key={idx} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;