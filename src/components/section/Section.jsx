import React, { useEffect, useState } from 'react';

import profileIcon from '../../icons/iconPerson.svg';

import rooms from '../../API/rms.json';
import { useTranslation } from 'react-i18next';


export const Section = ({ list, setCurrentRoom }) => {
  const [roomList, setRoomList] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    if (list) {
      const res = list.map(room => {
        const data = rooms[room];

        data.sourceLink = require(`../../imgs/rooms/${room}/0.jpg`);

        data.facilities.map(facilitie => facilitie[1] = require(`../../icons/${facilitie[1]}`));

        return data;
      });
      setRoomList(res.reverse());
    }
  }, [list]);

  if (roomList.length === 0) {
    return null;
  }


  return (
    <section className="section" id='rooms'>
      <div className="section__title-name">
        <hr />
        <div></div>
        <span className="section__span">
          <span className="section__span--color-yel">{t('our')}</span> {t('rooms')}
        </span>
        <hr />
      </div>

      <ul className='cards__list'>
        {roomList.map((card, index) => (
          <li className="card" key={index}>
            <div className='card__photo--container'>
              <img src={card.sourceLink} alt="Room" className='card__main-img' />
            </div>
            <div className="card__line">
              <div className='card__line--group'>
                <img src={profileIcon} alt="Guest Icon" />
                <span className="card__span">{card.guests} {t('guests')}</span>
              </div>
              <span className="card__span">{card.price}</span>
            </div>
            <div className='card__description'>
              <span className='card__name'>{t(`${card.comfort}`)}</span>
              <ul className='card__list'>
                {card.facilities.map((facilitie) => (
                  <li className='card__item' key={facilitie[0]}>
                    <img src={facilitie[1]} alt="Bed Icon" className='card__icon' />
                      {facilitie[0]}
                  </li>
                ))}
              </ul>
            </div>
            
            <button
                className="card__button"
                onClick={() => setCurrentRoom(card.rmNumber)}>
                {t('getmore')}
              </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
