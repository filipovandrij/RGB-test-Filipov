import AddForm from "../../component/AddForm/AddForm";
import MainInfo from "../../component/MainInfo/MainInfo";
import AdditionalInfo from "../../component/AdditionalInfo/AdditionalInfo";
import { useEffect, useState } from "react";
import "./Main.scss";

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
          <div className="html_logo absolute_logo">
            <img src="/images/img_desktop/html_logo.svg" alt="html_logo" />
            <div className="little_ellipse"></div>
          </div>
          <div className="css_logo absolute_logo">
            <img src="/images/img_desktop/css_logo.svg" alt="css_logo" />
            <div className="little_ellipse"></div>
          </div>
          <div className="js_logo absolute_logo">
            <img src="/images/img_desktop/js_logo.svg" alt="js_logo" />
            <div className="little_ellipse"></div>
          </div>
          <div className="st_logo absolute_logo">
            <img src="/images/img_desktop/st_logo.svg" alt="st_logo" />
            <div className="little_ellipse"></div>
          </div>
          <div className="vs_code_logo absolute_logo">
            <img
              src="/images/img_desktop/vs_code_logo.svg"
              alt="vs_code_logo"
            />
            <div className="little_ellipse"></div>
          </div>
          <div className="front_end_developer">front-end developer</div>
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
