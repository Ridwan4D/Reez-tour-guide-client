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
  const packageDetail = packages.find((pack) => pack._id === id);
  const { user } = useAuth();
  const [users] = useUsers();
  const roleUser = users.find((findUser) => findUser.userEmail === user?.email);
  const role = roleUser?.role;
  const [clickImage, setClickImage] = useState(packageDetail?.image_1);

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
    offerStartDate,  // New field from the Add Package update
    offerEndDate,    // New field from the Add Package update
    // Add any other new fields that were added in the update
  } = packageDetail;

  const handleImage = (clickedImage) => {
    setClickImage(clickedImage);
  };

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
            className="btn bg-slate-400 border-0 rounded-sm text-white font-semibold"
          >
            Update Package
          </Link>
        </div>
      )}

      <div className="md:flex md:mb-20 md:space-x-6">
        {/* Image Side */}
        <div className="flex-1 md:space-y-4">
          {/* Main Large Image */}
          <div className="p-3 border-2 rounded-md shadow-md bg-white">
            <img
              src={clickImage}
              alt="Selected Tour Image"
              className="w-full h-[400px] object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            {[image_1, image_2, image_3, image_4].map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer p-1 border-2 rounded-md transition duration-200 hover:shadow-lg ${
                  clickImage === image
                    ? "border-blue-500 ring-4 ring-blue-300"
                    : "border-gray-300"
                }`}
                onClick={() => handleImage(image)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details Side */}
        <div className="flex-1 bg-gray-100 md:p-10 space-y-2">
          <h3 className="text-2xl font-semibold">
            <span className="text-slate-600 font-semibold">Tour Name: </span>
            {tour_name}
          </h3>
          <h3 className="text-xl font-semibold">
            <span className="text-slate-600 font-semibold">Trip Type: </span>
            {trip_type}
          </h3>
          <p className="text-sm text-gray-950">
            <span className="text-xl text-slate-600 font-semibold">
              Trip Description:{" "}
            </span>
            {description}
          </p>
          <p className="text-2xl font-black">
            <span className="text-slate-600 font-semibold">Trip Cost: </span>${price}
          </p>
          <p className="text-xl font-medium">
            <span className="text-slate-600 font-semibold">Tour Duration:</span>{" "}
            {duration}
          </p>

          {/* Offer Start and End Date (New fields) */}
          {offerStartDate && offerEndDate && (
            <div>
              <p className="text-xl font-medium">
                <span className="text-slate-600 font-semibold">Offer Period:</span>{" "}
                {new Date(offerStartDate).toLocaleDateString()} -{" "}
                {new Date(offerEndDate).toLocaleDateString()}
              </p>
            </div>
          )}

          <div>
            <p className="text-2xl font-black">
              <span className="text-slate-600 font-semibold">Tour Plan: </span>
            </p>
            <div className="space-y-4">
              {tour_plan.map((plan, idx) => (
                <TourPlan key={idx} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tour Guides Section */}
      {/* Can add more sections here if needed */}

      {/* Booking Form */}
      {role === "user" && (
        <TourBookingForm tourName={tour_name} tourPrice={price} />
      )}
    </div>
  );
};

export default Details;
