import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div>
        <Helmet>
            <title>Blog | Reez Tour Guide</title>
        </Helmet>
      <div className="flex flex-col">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Latest Blogs Here
            </h1>
            <p className="text-gray-600">Published on June 4, 2024</p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
              <img
                src="https://i.ibb.co/c1bmdJV/8d4fe0d8-city-28030-164fcc85915.jpg"
                alt="Blog Featured Image"
                className="mb-8"
              />
              <div className="prose max-w-none">
                <p>
                  Our last team tour, the Dhaka Historical Excursion, was an
                  enriching journey through the heart of Bangladesh vibrant
                  capital. The team explored iconic landmarks such as Lalbagh
                  Fort, Ahsan Manzil, and the National Museum, gaining deep
                  insights into the cities rich history and cultural heritage.
                  Guided by our expert local guides, the group navigated the
                  bustling markets of Old Dhaka, tasted authentic local cuisine,
                  and experienced the lively atmosphere of this dynamic city.
                </p>
                <p>
                  The tour also included team-building activities and
                  interactive sessions, fostering camaraderie and creating
                  lasting memories. Participants enjoyed a scenic boat ride on
                  the Buriganga River, offering a unique perspective of Dhakas
                  skyline and waterways. Visits to local artisan workshops
                  provided a hands-on experience with traditional crafts, and
                  evening cultural performances highlighted the vibrant arts
                  scene.
                </p>
                <p>
                  In addition to exploring historical sites, the team visited
                  the Liberation War Museum, where they learned about Bangladesh
                  struggle for independence. The museums exhibits and personal
                  stories of bravery and sacrifice deeply moved everyone and
                  provided a profound understanding of the nations history.
                </p>
                <p>
                  To cap off the tour, the team gathered for a memorable dinner
                  at a traditional restaurant, reflecting on the days adventures
                  and sharing their favorite moments. The culinary experience
                  was enhanced with a live cooking demonstration of traditional
                  Bangladeshi dishes, allowing the team to engage with the local
                  cuisine in a fun and interactive way.
                </p>
                <p>
                  The final day included a visit to the modern side of Dhaka,
                  with stops at the Bangladesh National Parliament House,
                  designed by the renowned architect Louis Kahn, and the vibrant
                  arts district of Dhanmondi. Here, the team explored
                  contemporary galleries, street art, and artisan boutiques,
                  seeing how tradition and modernity coexist in this dynamic
                  city.
                </p>
                <p>
                  The Dhaka Historical Excursion was not just a tour, but a
                  journey that brought the team closer together and enriched
                  their understanding of Bangladeshis capital. The combination
                  of historical exploration, cultural immersion, and
                  team-building activities created an unforgettable experience,
                  leaving everyone with a deeper appreciation for Dhaka
                  storied past and vibrant present.{" "}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Recent Posts
                </h2>
                <ul className="list-none">
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Blog Post 1
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Blog Post 2
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Blog Post 3
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Blog Post 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Categories
                </h2>
                <ul className="list-none">
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Category 1
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Category 2
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Category 3
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Category 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
