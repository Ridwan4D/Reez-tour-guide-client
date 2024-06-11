import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import PropType from "prop-types";
const AddStoryForm = ({ refetch }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.story);
    const storyInfo = {
      email: user.email,
      name: user.displayName,
      description: data.description,
      tourName: data.tour_name,
      tourType: data.tour_type,
      guideName: data.guide_name,
      tourDate: data.date,
    };
    axiosSecure.post("/stories", storyInfo).then((res) => {
      if (res.data.insertedId) {
        reset();
        toast.success("Story Added To Profile");
        refetch();
      }
    });
  };
  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-xl md:text-3xl font-semibold text-black">
        Add New Story
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="border-4 p-5 my-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="tour_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tour Name
            </label>
            <input
              type="text"
              id="tour_name"
              {...register("tour_name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.tour_name && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="guide_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Guide Name
            </label>
            <input
              type="text"
              id="guide_name"
              {...register("guide_name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.guide_name && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="tour_type"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tour Type
            </label>
            <input
              type="text"
              id="tour_type"
              {...register("tour_type", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.tour_type && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of Your Tour
            </label>
            <input
              type="date"
              id="date"
              {...register("date", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.date && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
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
            {...register("description", { required: true })}
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.description && (
            <span className="text-sm text-red-600 font-semibold">
              Fill This Field
            </span>
          )}
        </div>
        <input
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
      </form>
    </div>
  );
};
AddStoryForm.propTypes = {
  refetch: PropType.func,
};
export default AddStoryForm;
