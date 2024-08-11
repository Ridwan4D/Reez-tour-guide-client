import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const StoryDetails = () => {
  const stories = useLoaderData();
  const { id } = useParams();
  const storyDetail = stories.find((story) => story._id == id);
  const shareUrl = window.location.href;
  //   console.log(storyDetail);
  const {
    tourName,
    tourDate,
    tourType,
    description,
    name,
    guideName,
    placeImage,
  } = storyDetail;
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <Helmet>
        <title>Story Details | Reez Tour Guide</title>
      </Helmet>
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-2 lg:mb-3 not-format">
            <h1 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-4xl dark:text-white">
              The Tour of <span className="text-[#10b981]">{name}</span>
            </h1>
            <h2 className="mb-2 underline text-2xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-3xl dark:text-white">
              {tourName} <span className="text-lg">({tourType})</span>
            </h2>
            <h3 className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-2xl dark:text-white">
              Tour Partner: {guideName}
            </h3>
            <p className="mb-2 text-xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-2xl dark:text-white">
              Tour Date: {tourDate}
            </p>
          </header>
          <h3 className="text-xl font-extrabold leading-tight text-gray-900 lg:text-2xl dark:text-white">
              Description: 
            </h3>
          <hr className="border border-dashed border-[#10b981] mb-4" />
          <p className="text-sm md:text-base text-gray-600 md:mb-10">
            {description}
          </p>
          <figure>
            <img src={placeImage} alt="place image" />
            <figcaption>Digital art by --- <span className="text-blue-400">{name}</span> ---</figcaption>
          </figure>
          <hr className="border border-dashed border-[#10b981] mt-5" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="mt-5 text-xl font-extrabold leading-tight text-gray-900 lg:mb-3 lg:text-2xl dark:text-white">
              Share on
            </h3>
            <div className="space-x-3 mt-4">
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={40}/>
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={40}/>
                </WhatsappShareButton>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default StoryDetails;
