import { Fragment } from "react";
import Main from "../components/Main";
import List from "../components/List";
import { requests } from "../Utils/RequestURL";

const Home = () => {
  return (
    <Fragment>
      <Main />
      <List title="topRated" url={requests.topRated} />
      <List title="popular" url={requests.popular} />
      <List title="trending" url={requests.trending} />
      <List title="upComing" url={requests.upComing} />
      <List title="latest" url={requests.latest} />
    </Fragment>
  );
};

export default Home;
