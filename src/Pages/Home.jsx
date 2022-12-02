import { Fragment } from "react";
import Main from "../components/Main";
import List from "../components/List";
import { requests } from "../Utils/RequestURL";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Main />
      <List id={"1"} title="topRated" url={requests.topRated} />
      <List id={"2"} title="popular" url={requests.popular} />
      <List id={"3"} title="trending" url={requests.trending} />
      <List id={"4"} title="upComing" url={requests.upComing} />
      <Footer />
    </Fragment>
  );
};

export default Home;
