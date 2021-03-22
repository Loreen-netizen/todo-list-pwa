import Link from "./Link";
import Global from "../Global/Global";

const config = {
  title: "components/Link",
};

export default config;

const Default = () => (
  <Global>
    {" "}
    <Link url="/test">Click Me!</Link>{" "}
  </Global>
);
const Full = () => (
  <Global>
    <Link url="/test" fullWidth>
      Click Me!
    </Link>
  </Global>
);
const Disabled = () => (
  <Global>
    <Link disabled url="/test">
      Click Me!
    </Link>
  </Global>
);

export { Default, Full, Disabled };
