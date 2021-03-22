import Layout from "./Layout";
import faker from "faker";
import Global from "../Global/Global";

const config = {
  title: "components/Layout",
};

export default config;
const PLACEHOLDER_TEXT = `
  
  `;

const Home = () => {
  return (
    <Global>
      <Layout activePage="home">{faker.lorem.paragraphs(5)}</Layout>
    </Global>
  );
};

const Add = () => {
    return(
  <Global>
    return <Layout activePage="add">{faker.lorem.paragraphs(5)}</Layout>
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

export { Home, Add, Edit};
