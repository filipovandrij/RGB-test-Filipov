import "./MainInfo.scss";

const MainInfo = () => {
  return (
    <div className="main_info_container">
      <div className="title_info">
        <button className="webinar">
          <img src="/images/img_mobile/globe_mobile.svg" alt="globe" /> Вебинар
        </button>
        <h1>front-end</h1>
        <div className="sub_title">
          <p className="from_scratch">
            с нуля<span className="back_border"></span>
          </p>
          <p>легкий старт в IT профессии</p>
        </div>
      </div>
      {/* asdas */}
      <div className="sub_info">
        <p>
          Узнайте какими{" "}
          <b>навыками должен обладать фронтенд разработчик в 2022 году</b> и как
          начать карьеру в востребованной профессии <br />
          <span>
            с зарплатой <span className="salary">от 1000$</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainInfo;
