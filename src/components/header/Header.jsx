import { useTranslation } from "react-i18next";
import i18n from '../../i18';
import { useState } from "react";

export const Header = () => {
  const [isUkr, setIsUkr] = useState(true);

  const { t } = useTranslation();

  const changeLanguage = (lng, bool) => {
    setIsUkr(!bool);
    i18n.changeLanguage(lng);
  };


  return (
    <header className="header">
      <div className="header__bar">
        <div className="header__logo">
          <span className="header__span">{t('title')}</span>
        </div>

        <div className="header__group">
          <ul className="header__list">
            <li className="header__item">
              <a href="#rooms" className="header__link">
                {t('gallery')}
              </a>
            </li>
            <li className="header__item">
              <a href="#testimonials" className="header__link">
                {t('testimonials')}
              </a>
            </li>
            <li className="header__item">
              <a href="#footer" className="header__link">
                {t('Contacts')}
              </a>
            </li>
            <li className="header__item">
              <a href="#about" className="header__link">
                {t('aboutus')}
              </a>
            </li>
            <li className="header__item">
              <a href="#footer" className="header__link">
                {t('geo')}
              </a>
            </li>
          </ul>

          <div className="header__buttons">
            <button 
              onClick={() => changeLanguage('ua', false)}
              className={`header__button header__button--ukr ${isUkr ? 'activeStatus' : ''}`}
            >
              UKR
            </button>
            <button
              className={`header__button header__button--eng ${isUkr ? '' : 'activeStatus'}`}
              onClick={() => changeLanguage('en', true)}
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}