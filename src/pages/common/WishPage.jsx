import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";

const WishPage = () => {
    const cart = [];
    return (
        <div>
      <SectionTitle heading={""} subHeading={"My Wish List"} />
      <div className="bg-white max-w-6xl mx-auto px-12 py-10 mb-20">
        {/* <div className="font-cinzel font-bold flex justify-around items-center mb-10">
          <h2 className="text-3xl">Total Order: {cart.length}</h2>
          <h2 className="text-3xl">Total Price: {parseInt(cart.totalPrice)}</h2>
          <button className="btn bg-[#10b981] text-white">PAY</button>
        </div> */}
        <div>
          <div className="overflow-x-auto rounded-t-xl">
            <table className="table">
              {/* head */}
              <thead className="uppercase text-white font-bold">
                <tr className="bg-[#10b981]">
                  <th className="text-center text-xl">#</th>
                  <th className="py-5 text-center">Item image</th>
                  <th className="text-center">item name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart.map((item, idx) => (
                  <tr key={idx} className="font-inter">
                    <th className="text-center font-bold">{idx + 1}</th>
                    <td className="text-center">
                      <div className="avatar">
                        <div className="w-16 h-16">
                          <img src={item.image} alt="food item image" />
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">${item.price}</td>
                    <th className="text-center">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn bg-[#B91C1C] text-white"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
};

export default WishPage;