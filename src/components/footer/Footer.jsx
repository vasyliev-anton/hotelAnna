import phone from '../../icons/phone.svg';
import mail from '../../icons/Mail.svg';
import location from '../../icons/Location.svg';
import down from '../../icons/down.svg';

import { MyMap } from '../myMap/MyMap';

export const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__left--group">
          <span className="footer__about-us">Наші контакти</span>
          <div className='footer__booking'>
            Бронювання:
            <div className="footer__buttons">
              <a href="tel:+380669886515">
              <button className="button button--footer" type='button' to='telephone'>
                <img src={phone} alt="" className='button--icon' />
                +380 669 886 515
              </button>
              </a>
              <button className="button button--footer">
                <img src={mail} alt="" className='button--icon' />
                info@hotel
              </button>
            </div>
          </div>
        </div>

        <hr />

        <div className='footer__left--location'>
          <img src={location} alt="" />
          <span className='footer__left--location-span'>
            Вулиця Шкільна 9 а, Подільськ, 66300, Україна
          </span>
        </div>
      </div>

      <div className="footer__right">
        <div className='footer__title--group'>
          <span className='footer__title'>Залиште свій <span className='clr--yellow'>відгук!</span></span>
          <p className='footer__subtitle'>Ваш відгук допоможе зрозуміти що ми рухаємося в потрібному напрямку</p>

          <div className='footer__inputs'>
          <input type="text" className='input' placeholder="Введіть ваше ім/'я" />
          <input type="email" className='input' placeholder='info@hotel' />
        </div>
        </div>

        <div className='footer__map--container'>
          <span>Мы на карті</span>
          <img src={down} alt="" className='footer__icon--down'/>
          <div className="map">
            <MyMap />
          </div>
        </div>
      </div>
    </footer>
  )
}