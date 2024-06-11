import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useUsers from "../../hooks/useUsers";

const RequestToAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [users, refetch] = useUsers();
  const isSame = users.find((item) => item.userEmail == user.email);
  console.log(isSame.requested);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.phone, data.education, data.experience, data.skill);
    const userInfo = {
      phone: data.phone,
      education: data.education,
      experience: data.experience,
      skill: data.skill,
      requested: true,
    };
    axiosSecure.put(`/user/${user.email}`, userInfo).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Requested");
        reset();
        refetch();
      }
    });
  };
  return (
    <div>
      <SectionTitle heading="To Admin" subHeading="Become A Tour Guide" />
      <h3 className="text-base md:text-3xl font-semibold text-black mb-5">
        Provide Info For Request
      </h3>
      {isSame.requested === true ? (
        <div className="h-[50vh] flex items-center justify-center">
          <h3 className="text-lg md:text-5xl font-black text-[#10b891] mb-5">
            Requested To The Admin
          </h3>
        </div>
      ) : (
        <form
          className="lg:col-span-2 border-2 border-[#10b981] md:p-5 w-full md:max-w-5xl mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                {...register("phone", { required: true })}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
              {errors.phone && (
                <span className="text-sm text-red-600 font-semibold">
                  Fill The Field
                </span>
              )}
            </div>
            <div className="md:col-span-5">
              <label htmlFor="skill">Skill</label>
              <input
                type="text"
                id="skill"
                {...register("skill", { required: true })}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
              {errors.skill && (
                <span className="text-sm text-red-600 font-semibold">
                  Fill The Field
                </span>
              )}
            </div>
            <div className="md:col-span-5">
              <label htmlFor="education">Education</label>
              <input
                type="text"
                id="education"
                {...register("education", { required: true })}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
              {errors.education && (
                <span className="text-sm text-red-600 font-semibold">
                  Fill The Field
                </span>
              )}
            </div>

            <div className="md:col-span-5">
              <label htmlFor="experience">Experience</label>
              <input
                type="experience"
                id="experience"
                {...register("experience", { required: true })}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
              {errors.experience && (
                <span className="text-sm text-red-600 font-semibold">
                  Fill The Field
                </span>
              )}
            </div>

            <div className="md:col-span-5 text-right">
              <div className="inline-flex items-end">
                <input
                  type="submit"
                  value="Request"
                  className="bg-[#10b981]/70 hover:bg-[#10b981] cursor-pointer text-white font-bold py-2 px-4 rounded"
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default RequestToAdmin;
