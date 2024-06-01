import { useTranslation } from 'react-i18next';
import banner1 from '../../imgs/banner/IMG_1090 1.jpg';
import banner2 from '../../imgs/banner/IMG_1352 1.jpg';
import banner3 from '../../imgs/banner/IMG_1352 2.jpg';
import banner4 from '../../imgs/banner/IMG_1622 2.jpg';

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="img__banner">
        <img src={banner1} alt="" className="img__banner-slice" />
        <img src={banner3} alt="" className="img__banner-slice" />
        <img src={banner2} alt="" className="img__banner-slice" />
        <img src={banner4} alt="" className="img__banner-slice" />
      </div>

      <span className='img__span'>
        {t('main')}
      </span>

      <button className='img__button'>{t('footerBooking')}</button>
    </div>
  )
}

