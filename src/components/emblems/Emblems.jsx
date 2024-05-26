import Food from '../../icons/food icon.svg';
import Like from '../../icons/like icon.svg';
import Geo from '../../icons/geo icon.svg';
import Bedroom from '../../icons/bedroom icon.svg';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Emblems = () => {
  const [food, setFood] = useState(Food);
  const [like, setLike] = useState(Like);
  const [geo, setGeo] = useState(Geo);
  const [bedroom, setBedroom] = useState(Bedroom);

  const { t } = useTranslation();

  useEffect(() => {
    setBedroom(Bedroom);
    setGeo(Geo);
    setLike(Like);
    setFood(Food);
  }, [])

  return (
    <section className="section">
      <div className="section__title-name">
        <hr />
        <span className="section__span">
          <span className="section__span--color-yel">{t('emblems1')}</span> {t('emblems2')}
        </span>
        <hr />
      </div>

      <div className="emblems">
        <h2 className='emblems__subtitle'>
          {t('emblems3')}
        </h2>
        
        <ul className="emblems__list">
          <li className="emblems__item shake">
            <div className="emblems__container--icon">
              {food && <img src={food} alt="" />}
            </div>
            {t('efood')}
          </li>
          <li className="emblems__item shake">
            <div className="emblems__container--icon">
              {like && <img src={like} alt="" />}
            </div>
            {t('elike')}
          </li>
          <li className="emblems__item shake">
            <div className="emblems__container--icon">
              {geo && <img src={geo} alt="" />}
            </div>
            {t('egeo')}
          </li>
          <li className="emblems__item shake">
            <div className="emblems__container--icon">
              {bedroom && <img src={bedroom} alt="" />}
            </div>
            {t('erooms')}
          </li>
        </ul>
      </div>
    </section>
  )
}