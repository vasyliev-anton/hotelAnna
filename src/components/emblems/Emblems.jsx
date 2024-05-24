import Food from '../../icons/food icon.svg';
import Like from '../../icons/like icon.svg';
import Geo from '../../icons/geo icon.svg';
import Bedroom from '../../icons/bedroom icon.svg';
import { useEffect, useState } from 'react';

export const Emblems = () => {
  const [food, setFood] = useState(Food);
  const [like, setLike] = useState(Like);
  const [geo, setGeo] = useState(Geo);
  const [bedroom, setBedroom] = useState(Bedroom);

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
          <span className="section__span--color-yel">Найкращий</span> готель у вашій відпустці
        </span>
        <hr />
      </div>

      <div className="emblems">
        <h2 className='emblems__subtitle'>
          Насолоджуйтесь кожним кроком у цьому готелі
        </h2>
        
        <ul className="emblems__list">
          <li className="emblems__item shake">
            <div className="emblems__container--icon">
              {food && <img src={food} alt="" />}
            </div>
            Чудові сніданки
          </li>
          <li className="emblems__item shake">
            <div className="emblems__container--icon">
              {like && <img src={like} alt="" />}
            </div>
            Доброзичливий сервіс
          </li>
          <li className="emblems__item shake">
            <div className="emblems__container--icon">
              {geo && <img src={geo} alt="" />}
            </div>
            Місцезнаходження
          </li>
          <li className="emblems__item shake">
            <div className="emblems__container--icon">
              {bedroom && <img src={bedroom} alt="" />}
            </div>
            Затишна кімната
          </li>
        </ul>
      </div>
    </section>
  )
}