import { Link, useLoaderData, useParams } from "react-router-dom";
import TourPlan from "../../components/TourPlan";
import TourBookingForm from "../../components/TourBookingForm";
import useAuth from "../../hooks/useAuth";
import useUsers from "../../hooks/useUsers";
import { Helmet } from "react-helmet";
import { useState } from "react";

const Details = () => {
  const packages = useLoaderData();
  const { id } = useParams();
  const packageDetail = packages.find((pack) => pack._id == id);
  const { user } = useAuth();
  const [users] = useUsers();
  const roleUser = users.find((findUser) => findUser.userEmail === user?.email);
  const role = roleUser?.role;
  const [clickImage, setClickImage] = useState(packageDetail?.image_1)
  // console.log(clickImage);
  const {
    _id,
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

  const handleImage = (clickedImage) => {
    setClickImage(clickedImage)
  }
  return (
    <div>
      <Helmet>
        <title>Details of {tour_name} | Reez Tour Guide</title>
      </Helmet>
      {role === "admin" && (
        <div className="bg-slate-500 py-3 flex justify-between items-center text-white px-10">
          <h3 className="text-2xl">{tour_name}</h3>
          <Link
            to={`/updatePackage/${_id}`}
            className="btn bg-[#10b981] border-0 rounded-sm text-white font-semibold"
          >
            Update Package
          </Link>
        </div>
      )}

      <div className="md:flex md:mb-20 md:space-x-6">
        <div className="flex-1 md:space-y-4">
          <div className="md:p-7 border-2 rounded-sm">
            <img src={clickImage} alt="" className="w-full" />
          </div>
          <div className="md:flex space-x-5">
            <div>
              <img
                src={image_1}
                alt=""
                className="w-full md:w-56 h-40 border-2 p-3 rounded-sm"
                onClick={() => handleImage(image_1)}
              />
            </div>
            <div>
              <img
                src={image_2}
                alt=""
                className="w-full md:w-56 h-40 border-2 p-3 rounded-sm"
                onClick={() => handleImage(image_2)}

              />
            </div>
            <div>
              <img
                src={image_3}
                alt=""
                className="w-full md:w-56 h-40 border-2 p-3 rounded-sm"
                onClick={() => handleImage(image_3)}

              />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 md:p-10 space-y-2">
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
            <span className="text-[#10b981] font-bold">Trip Cost: </span>$
            {price}
          </p>
          <p className="text-xl font-medium">
            <span className="text-[#10b981] font-bold">Tour Duration:</span>{" "}
            {duration}
          </p>
          <div>
            <p className="text-2xl font-black">
              <span className="text-[#10b981] font-bold">Trip Plane: </span>
            </p>
            <div className="space-y-4">
              {tour_plan.map((plan, idx) => (
                <TourPlan key={idx} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* tour guides */}
      {/* booking form */}
      {role === "user" && <TourBookingForm tourName={tour_name} tourPrice={price} />}
    </div>
  );
};

export default Details;
