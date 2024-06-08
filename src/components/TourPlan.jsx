import PropType from "prop-types";
import { FaCaretSquareRight } from "react-icons/fa";
const TourPlan = ({ plan }) => {
  // console.log(plan);
  const { day, activities } = plan;
  return (
    <div className="flex items-center mt-5">
      <div className="flex items-center gap-2 w-auto text-white bg-[#10b981] px-4 py-2 text-sm rounded leading-loose mx-2 font-semibold">
        Day-{day} <FaCaretSquareRight className=""/>
      </div>
      <p className="text-gray-500 font-semibold">{activities}</p>
    </div>
  );
};
TourPlan.propTypes = {
  plan: PropType.object,
};
export default TourPlan;
