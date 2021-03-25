import Layout from "./Layout";
import faker from "faker";
import Global from "../Global/Global";

const config = {
  title: "components/Layout",
};

export default config;

const MOCK_ACTIONS={
  onLogIn:()=> console.log("onLogIn"),
  onUserClick:()=> console.log("onUserClick"),
}

const Home = () => {
  return (
    <Global>
      <Layout activePage="home" {...MOCK_ACTIONS}>{faker.lorem.paragraphs(5)}</Layout>
    </Global>
  );
};

const LoggedIn = () => {
  return (
    <Global>
      <Layout activePage="home" {...MOCK_ACTIONS} userName="John Smith">{faker.lorem.paragraphs(5)}</Layout>
    </Global>
  );
};

const Add = () => {
    return(
  <Global>
    return <Layout activePage="add" {...MOCK_ACTIONS}>{faker.lorem.paragraphs(5)}</Layout>
  </Global>
    );
};

const Edit = () => {
    return(
  <Global>
    return <Layout activePage="edit">{faker.lorem.paragraphs(5)}</Layout>
  </Global>
    );
};

export { Home, Add, Edit, LoggedIn};
