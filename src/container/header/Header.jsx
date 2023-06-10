import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img
            src="/images/img_mobile/logo_mobile.svg"
            alt="powercode_academy"
          />
        </div>
        <div className="date">
          <div className="day_and_month header_cart">
            <img
              src="/images/img_mobile/calendar_today.svg"
              alt="calendar_today"
            />
            <span>28 декабря</span>{" "}
          </div>
          <div className="how_long header_cart">
            <img src="/images/img_mobile/gg_time.svg" alt="gg_time" />
            <span>3,5 часа</span>{" "}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
