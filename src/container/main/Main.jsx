import AddForm from "../../component/AddForm/AddForm";
import MainInfo from "../../component/MainInfo/MainInfo";
import AdditionalInfo from "../../component/AdditionalInfo/AdditionalInfo";
import { useEffect, useState } from "react";
import "./Main.scss";

import RunString from "../../component/RunString/RunString";
import LogoIcons from "../../component/LogoIcons/LogoIcons";

const Main = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 993);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isLargeScreen ? (
        <main className="desktop_main">
          <div className="left_box">
            <MainInfo />
            <AdditionalInfo />
          </div>
          <div className="right_box">
            <AddForm />
          </div>
          <LogoIcons />
          <RunString />
        </main>
      ) : (
        <main className="mobile_main">
          <MainInfo />
          <AddForm />
          <AdditionalInfo />
          <div className="big_ellipse_mobile"></div>
          <div className="small_ellipse_mobile"></div>
        </main>
      )}
    </>
  );
};
export default Main;
