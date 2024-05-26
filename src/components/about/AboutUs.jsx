import { useTranslation } from "react-i18next"

export const AboutUs = () => {

  const { t } = useTranslation();

  return (
    <section class="about-us section" id="about">
      <div className="about-us__title--container">
        <hr />
          <h3 className="about-us__title">
            {t('aboutus')}
          </h3>
        <hr />
      </div>
      <div className="about-us__description">
        <ul className="about-us__list">
          <li className="about-us__item">
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
            <span className="item__span">
            {t('checkin1')}<br/>
            {t('checkin2')}
            </span>
          </li>
          <li className="about-us__item">
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
            <span className="item__span">
            {t('party1')}<br/>
            <span className="wrong">{t('party2')}.</span>
            </span>
          </li>
          <li className="about-us__item">
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
            <span className="item__span">
            <span className="success">{t('parking1')}</span> {t('private')}<br/>
            {t('parking2')}
            </span>
          </li>
        </ul>

        <ul className="about-us__list">
        <li className="about-us__item">
            <span className="item__span">
            {t('chechout1')}<br/>
            {t('chechout2')}
            </span>
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
          </li>
          <li className="about-us__item">
            <span className="item__span">
            {t('smoke1')}<br/>
            <span className="wrong">{t('smoke2')}.</span>
            </span>
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
          </li>
          <li className="about-us__item">
            <span className="item__span">
            {t('pets1')}<br/>
            <span className="success">{t('pets2')}</span>
            </span>
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
          </li>
        </ul>
      </div>
    </section>
  )
}