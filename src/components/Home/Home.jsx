import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ClockLoader } from "react-spinners";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <hr />
      {navigation.state === "loading" ? (
        <>
          <ClockLoader
            color="red"
            cssOverride={{}}
            loading
            size={100}
            speedMultiplier={3}
          />
          <p>Wait a minute</p>
        </>
      ) : (
        <Outlet></Outlet>
      )}
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Home;
