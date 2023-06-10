import "./AdditionalInfo.scss";

const AdditionalInfo = () => {
  return (
    <>
      <div className="additiona_info">
        <div className="additional_card">
          <img src="/images/img_mobile/gift_box.svg" alt="gift_box" />
          <div className="text_box">
            <h3 className="bonus">Бонус за регистрацию</h3>
            <p className="mobile_text">
              PDF-файл "5 преимуществ профессии веб-дизайнера"{" "}
            </p>
            <p className="desktop_text">
              PDF-файл "5 преимуществ профессии фронтенд разработчика"{" "}
            </p>
          </div>
        </div>
        <div className="additional_card">
          <img
            src="/images/img_mobile/man_with_laptop.svg"
            alt="man_with_laptop"
          />
          <div className="text_box">
            <h3 className="man_name">
              Кирилл <span>Касатонов</span>
            </h3>
            <p>
              6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
              другими крупными корпорациями
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
