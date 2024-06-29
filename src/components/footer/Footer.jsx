import phone from '../../icons/phone.svg';
import mail from '../../icons/Mail.svg';
import location from '../../icons/Location.svg';
import down from '../../icons/down.svg';

import { MyMap } from '../myMap/MyMap';
import { useTranslation } from 'react-i18next';

export const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="footer" id='footer'>
      <div className="footer__left">
        <div className="footer__left--group">
          <span className="footer__about-us">{t('footerContactUs')}</span>
          <div className='footer__booking'>
            {t('footerBooking')}:
            <div className="footer__buttons">
              <a href="tel:+380669886515">
              <button className="button button--footer" type='button' to='telephone'>
                <img src={phone} alt="" className='button--icon' />
                +380 669 886 515
              </button>
              </a>
              <a href="mailto:guest2023@ukr.net">
              <button className="button button--footer">
                <img src={mail} alt="" className='button--icon' />
                guest2023@ukr.net
              </button>
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className='footer__left--location'>
          <img src={location} alt="" />
          <span className='footer__left--location-span'>
          {t('footerGeo')}
          </span>
        </div>
      </div>

      <div className="footer__right">
        <div className='footer__title--group'>
          <span className='footer__title'>{t('footerFeedback1')} <span className='clr--yellow'>{t('footerFeedback2')} !</span></span>
          <p className='footer__subtitle'>{t('footerFeedback3')}</p>

          <div className='footer__inputs'>
          <input type="text" className='input' placeholder="Введіть ваше ім/'я" />
          <input type="email" className='input' placeholder='info@hotel' />
        </div>
        </div>

        <div className='footer__map--container'>
          <span>{t('footerFeedback4')}</span>
          <img src={down} alt="" className='footer__icon--down'/>
          <div className="map">
            <MyMap />
          </div>
        </div>
      </div>
    </footer>
  )
}