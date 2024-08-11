import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const UpdatePackage = () => {
  const packages = useLoaderData();
  const { id } = useParams();
  const pack = packages.find((item) => item._id === id);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  console.log(pack);
  const { register, handleSubmit } = useForm();
  // const info = {tour_name,description,trip_type,price,image_1,image_2,image_3,image_4,duration,activities1,activities2,activities3,activities4}
  const onSubmit = async (data) => {
    const tour_plan = [
      {
        day: 1,
        activities: data.activities1,
      },
      {
        day: 2,
        activities: data.activities2,
      },
      {
        day: 3,
        activities: data.activities3,
      },
      {
        day: 4,
        activities: data.activities4,
      },
    ];
    // console.log(imageFile);
    const packageInfo = {
      tour_name: data.name,
      description: data.description,
      trip_type: data.type,
      price: data.price,
      duration: data.duration,
      tour_plan,
    };
    axiosSecure.put(`/packages/${id}`, packageInfo).then((res) => {
      if (res.data.modifiedCount) {
        toast.success(`${data.name} is updated`);
        navigate(`/details/${id}`);
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Update {pack.tour_name} | Reez Tour Guide</title>
      </Helmet>
      <h3 className="text-3xl font-semibold underline">Update Package</h3>

      <form
        className="max-w-5xl mx-auto border-2 border-[#10b981] p-6 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tour Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={pack.tour_name}
              {...register("name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <input
              type="text"
              id="type"
              defaultValue={pack.trip_type}
              {...register("type", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              defaultValue={pack.price}
              {...register("price", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              defaultValue={pack.duration}
              {...register("duration", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="activities1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Activities 1
            </label>
            <input
              type="text"
              id="activities1"
              defaultValue={pack.tour_plan[0].activities}
              {...register("activities1", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="activities2"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Activities 2
            </label>
            <input
              type="text"
              id="activities2"
              defaultValue={pack.tour_plan[1].activities}
              {...register("activities2", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="activities3"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Activities 3
            </label>
            <input
              type="text"
              id="activities3"
              defaultValue={pack.tour_plan[2].activities}
              {...register("activities3", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="activities4"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Activities 4
            </label>
            <input
              type="text"
              id="activities4"
              defaultValue={pack.tour_plan[3].activities}
              {...register("activities4", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tour Description
          </label>
          <textarea
            type="text"
            id="description"
            defaultValue={pack.description}
            {...register("description", { required: true })}
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            value="Update Package"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatePackage;
