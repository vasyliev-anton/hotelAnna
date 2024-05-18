import React, { useEffect, useState } from 'react';

import profileIcon from '../../icons/iconPerson.svg';
import bedIcon from '../../icons/bed.svg';
import bathIcon from '../../icons/bath.svg';
import washingMachineIcon from '../../icons/washing.svg';
import terraceIcon from '../../icons/terrace.svg';
import newStyleIcon from '../../icons/newStyle.svg';
import tvRoomIcon from '../../icons/tvRoom.svg';
import conditionerIcon from '../../icons/conditioner.svg';
import freeWifiIcon from '../../icons/wi-fi.svg';

import rooms from '../../API/rms.json';

export const Section = ({ list, setCurrentRoom }) => {
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    if (list) {
      const res = list.map(room => {
        const data = rooms[room];

        data.sourceLink = require(`../../imgs/rooms/${room}/0.jpg`);

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
          <span className="section__span--color-yel">Наші</span> кімнати
        </span>
        <hr />
      </div>

      <ul className='cards__list'>
        {roomList.map((card, index) => (
          <li className="card" key={index}>
            <img src={card.sourceLink} alt="Room" className='card__main-img' />
            <div className="card__line">
              <div className='card__line--group'>
                <img src={profileIcon} alt="Guest Icon" />
                <span className="card__span">{card.guests} Особи</span>
              </div>
              <span className="card__span">{card.price}</span>
            </div>
            <div className='card__description'>
              <span className='card__name'>{card.comfort}</span>
              <ul className='card__list'>
                <li className='card__item'>
                  <img src={bedIcon} alt="Bed Icon" className='card__icon' />
                  Апартаменти повністю
                </li>
                <li className='card__item'>
                  <img src={conditionerIcon} alt="Conditioner Icon" className='card__icon' />
                  Кондиціонер
                </li>
                <li className='card__item'>
                  <img src={tvRoomIcon} alt="TV Icon" className='card__icon' />
                  Телевізор з плоским екраном
                </li>
                <li className='card__item'>
                  <img src={freeWifiIcon} alt="WiFi Icon" className='card__icon' />
                  Безкоштовний Wi-Fi
                </li>
                <li className='card__item'>
                  <img src={bathIcon} alt="Bath Icon" className='card__icon' />
                  Ванна кімната в номері
                </li>
                <li className='card__item'>
                  <img src={washingMachineIcon} alt="Washing Machine Icon" className='card__icon' />
                  Пральна машина
                </li>
                <li className='card__item'>
                  <img src={newStyleIcon} alt="New Style Icon" className='card__icon' />
                  Сучасний ремонт
                </li>
                <li className='card__item'>
                  <img src={terraceIcon} alt="Terrace Icon" className='card__icon' />
                  Власна тераса
                </li>
              </ul>
            </div>
            
            <button
                className="card__button"
                onClick={() => setCurrentRoom(card.rmNumber)}>
                Дізнатися більше
              </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
