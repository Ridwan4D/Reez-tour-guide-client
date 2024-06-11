import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="space-y-5 dark:text-gray-100">
      <Helmet>
        <title>About- Reez Tour Guide</title>
      </Helmet>
      <div className=" text-center ">
        <h3 className="text-3xl md:text-4xl font-bold animate__animated animate__fadeInUp">
          About Us
        </h3>
        <p className="text-xl md:text-2xl font-bold mb-2 md:mb-5 underline text-gray-500">
          Welcome to <span className="text-[#10b981]">Reez Tour Guide</span>
        </p>
        <p className="text-start text-gray-600">
          At The Reez, we believe in creating memorable experiences that go
          beyond expectations. Nestled in the heart of Agrabad Chattogram, we
          are dedicated to providing unparalleled hospitality and service to our
          guests.
        </p>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl text-[#10b981] font-semibold underline">
          Our Story
        </h3>
        <p className="text-gray-600">
          Founded in <span className="font-semibold">2024</span>,{" "}
          <span className="font-semibold">The Reez</span> began as a dream
          shared by{" "}
          <span className="font-semibold">Mohammad Ridwanul Islam</span>.
          Inspired by our passion for hospitality and a desire to create a haven
          for travelers, we set out to establish a place where every guest feels
          welcomed, valued, and at home. Over the years, we have grown from a
          humble beginning to become a beloved destination for travelers from
          around the world. Our commitment to excellence and unwavering
          dedication to our guests have earned us recognition as one of the
          premier hospitality establishments in
          <span className="font-semibold">Agrabad, Chattogram</span>.
        </p>
      </div>
      <div className="text-end">
        <h3 className="text-2xl md:text-3xl text-[#10b981] font-semibold underline">
          Our Mission
        </h3>
        <p className="text-gray-600">
          At <span className="font-semibold">The Reez</span>, our mission is
          simple: to create extraordinary experiences that leave a lasting
          impression. Whether your staying with us for a night or dining at our
          restaurant, we strive to exceed your expectations at every turn. With
          a focus on warmth, authenticity, and attention to detail, we aim to
          provide a sanctuary where you can relax, rejuvenate, and indulge in
          the finer things in life.
        </p>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl text-[#10b981] font-semibold underline">
          Our Team
        </h3>
        <p className="text-gray-600">
          Behind every great experience is a dedicated team of professionals who
          are passionate about hospitality. Led by{" "}
          <span className="font-semibold">Mohammad Ridwanul Islam</span>, our
          team is comprised of seasoned experts who are committed to making your
          stay unforgettable. From our chefs and concierge to our housekeeping
          staff and beyond, each member of our team plays a vital role in
          delivering the highest standard of service.
        </p>
      </div>
      <div className="text-end">
        <h3 className="text-2xl md:text-3xl text-[#10b981] font-semibold underline">
          Our Location
        </h3>
        <p className="text-gray-600">
          Located in the picturesque{" "}
          <span className="font-semibold">Agrabad, Chattogram</span>,{" "}
          <span className="font-semibold">The Reez</span> offers the perfect
          blend of tranquility and convenience. Whether you are exploring the
          local attractions, embarking on outdoor adventures, or simply relaxing
          amidst breathtaking scenery, our location provides endless
          opportunities for exploration and discovery.
        </p>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl text-[#10b981] font-semibold underline">
          Our Philosophy
        </h3>
        <p className="text-gray-600">
          At <span className="font-semibold">The Reez</span>, hospitality is
          more than just a business it is a way of life. Our philosophy is
          rooted in the belief that every interaction is an opportunity to
          create a meaningful connection. Whether it is a warm greeting upon
          arrival, a personalized recommendation, or an extra touch to make your
          stay special, we are committed to exceeding your expectations and
          creating moments that you will cherish forever.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
