import useAuth from "../hooks/useAuth";

const TourBookingForm = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Responsive Form
            </h2>
            <p className="text-gray-500 mb-6">
              Form is mobile responsive. Give it a try.
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <form className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Your Name</label>
                      <input
                        type="text"
                        defaultValue={user.displayName}
                        id="full_name"
                        disabled
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        id="email"
                        disabled
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="image">Profile URL</label>
                      <input
                        type="text"
                        defaultValue={user.photoURL}
                        id="image"
                        disabled
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        id="price"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter The Amount"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="date">Select Tour Date</label>
                      <input
                        type="date"
                        id="date"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="price">Tour Guide</label>
                      <select
                        id="category"
                        defaultValue="default"
                        className="bg-gray-50 py-3 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="default" disabled>
                          Select Tour Guide
                        </option>
                        {/* <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                    <option value="soup">Soup</option> */}
                      </select>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <input
                          type="submit"
                          value="Submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBookingForm;
