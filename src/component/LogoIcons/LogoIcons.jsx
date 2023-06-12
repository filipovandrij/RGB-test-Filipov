import "./LogoIcons.scss";

const LogoIcons = () => {
  return (
    <>
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
        <img src="/images/img_desktop/vs_code_logo.svg" alt="vs_code_logo" />
        <div className="little_ellipse"></div>
      </div>
    </>
  );
};
export default LogoIcons;
