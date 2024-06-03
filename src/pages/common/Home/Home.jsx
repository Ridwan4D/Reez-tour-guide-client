import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Reez Tour Guide</title>
            </Helmet>
            <h1 className="text-4xl font-bold">This is home of tour guid for tourist</h1>
        </div>
    );
};

export default Home;