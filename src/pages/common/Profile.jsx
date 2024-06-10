import { FaPhoneAlt } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useUsers from "../../hooks/useUsers";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { user } = useAuth();
  const [users] = useUsers();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const role = users.find((role) => role.userEmail == user.email);
  // console.log(role.role);

  const {data: story = []}= useQuery({
    queryKey: ['stories'],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/stories?email=${user.email}`)
      return res.data;
    }
  })

  const onSubmit = (data) => {
    console.log(data.story);
    const storyInfo = {
      email: user.email,
      story: data.story,
    }
    axiosSecure.post('/stories',storyInfo)
    .then(res=>{
      if(res.data.insertedId){
        reset();
        toast.success('Story Added To Profile')
      }
    })
  };
  return (
    <div>
      <SectionTitle heading="See Your Profile" subHeading="My Profile" />
      <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          {/* <!--Main Col--> */}
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              {/* <!-- Image for mobile view--> */}

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                {user.displayName}
              </h1>
              <p className="font-semibold uppercase text-[#10b981]">
                {role?.role}
              </p>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>{" "}
                What you do
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg>{" "}
                {user.email}
              </p>
              <div className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <p className="h-4 text-green-700 pr-4">
                  <FaPhoneAlt />
                </p>
                015XXXXXXXXX
              </div>

              {/* add this based on users role */}
              <div className="pt-12 pb-8">
                {role?.role === "user" && (
                  <div>
                    <h3 className="text-2xl font-semibold text-black">
                      Add Your Tour Story
                    </h3>
                    <form
                      className="space-y-2"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div>
                        <textarea
                          type="text"
                          {...register("story", { required: true })}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your story"
                          required
                        />
                        {errors.story && (
                          <span className="text-sm text-red-600 font-semibold">
                            Before submit write something
                          </span>
                        )}
                      </div>
                      <input
                        type="submit"
                        value="Add Story"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      />
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <img
              src={user.photoURL}
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
