import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${
  import.meta.env.VITE_CLOUDINARY_API
}/image/upload`;

const AddPackage = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedImages((prevImages) => [...prevImages, ...filePreviews]);
  };

  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const uploadToCloudinary = async (image) => {
    const formData = new FormData();
    formData.append("file", image.file);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    try {
      const response = await fetch(CLOUDINARY_API, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed!");
      throw new Error("Cloudinary upload error");
    }
  };

  const onSubmit = async (data) => {
    try {
      const imageUrls = await Promise.all(
        selectedImages.map(uploadToCloudinary)
      );

      const tour_plan = [
        { day: 1, activities: data.activities1 },
        { day: 2, activities: data.activities2 },
        { day: 3, activities: data.activities3 },
        { day: 4, activities: data.activities4 },
      ];

      const packageInfo = {
        tour_name: data.name,
        description: data.description,
        trip_type: data.type,
        price: data.price,
        duration: data.duration,
        images: imageUrls,
        tour_plan,
      };

      const res = await axiosSecure.post("/packages", packageInfo);
      if (res.data.insertedId) {
        toast.success(`${data.name} has been added to packages`);
        navigate("/allPackages");
        reset();
        setSelectedImages([]);
      }
    } catch (error) {
      console.error("Error adding package:", error);
      toast.error("Failed to add package!");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Add Package | Reez Tour Guide</title>
      </Helmet>
      <SectionTitle
        heading="Add New Package"
        subHeading="Write Package offer"
      />
      <form
        className="max-w-5xl mx-auto border-2 border-slate-400 p-2 md:p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Image Input */}
        <div className="mb-6">
          <label
            htmlFor="images"
            className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
          {errors.images && (
            <span className="text-sm text-red-600 font-semibold">
              Upload at least one image
            </span>
          )}
        </div>

        {/* Image Previews */}
        <div className="flex flex-wrap gap-4 mb-6">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.preview}
                alt={`Preview ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        {/* Other Inputs */}
        <div className="grid gap-x-6 gap-y-2 md:gap-y-3 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block md:mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
            >
              Tour Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 h-7 md:h-auto text-xs md:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.name && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="type"
              className="block md:mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <input
              type="text"
              id="type"
              {...register("type", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 h-7 md:h-auto text-xs md:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.type && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="price"
              className="block md:mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 h-7 md:h-auto text-xs md:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.price && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block md:mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              {...register("duration", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 h-7 md:h-auto text-xs md:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.duration && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="activities1"
              className="block md:mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
            >
              Activities 1
            </label>
            <input
              type="text"
              id="activities1"
              {...register("activities1", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 h-7 md:h-auto text-xs md:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.activities1 && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="activities2"
              className="block md:mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
            >
              Activities 2
            </label>
            <input
              type="text"
              id="activities2"
              {...register("activities2", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 h-7 md:h-auto text-xs md:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.activities2 && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="activities3"
              className="block md:mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
            >
              Activities 3
            </label>
            <input
              type="text"
              id="activities3"
              {...register("activities3", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 h-7 md:h-auto text-xs md:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.activities3 && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="activities4"
              className="block md:mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
            >
              Activities 4
            </label>
            <input
              type="text"
              id="activities4"
              {...register("activities4", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 h-7 md:h-auto text-xs md:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.activities4 && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
          <div className="mb-5 col-span-2">
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
              className="bg-gray-50 border w-full border-gray-300 text-gray-900 h-7 md:h-auto text-xs md:text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.description && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
          </div>
        </div>

        <input
          type="submit"
          value="Add Package"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
      </form>
    </div>
  );
};

export default AddPackage;
