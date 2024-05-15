import { useEffect, useState } from 'react';

import main from '../../imgs/rooms/21/1.jpg';
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
      const res = list.map(room => rooms[room]);
      
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
        <div>

        </div>
        <span className="section__span">
          <span className="section__span--color-yel">Наші</span> кімнати
        </span>
        <hr />
      </div>

      <ul className='carts__list'>
        {roomList.length && roomList.map((cart) => {
          return (
            <li className="cart" key={cart.rmNumber}>
            <img src={main} alt="" className='cart__main-img' />
            <div className="cart__line">
              <div className='cart__line--group'>
                <img src={profileIcon} alt="" />
                <span className="cart__span">{cart.guests} Особи</span>
              </div>
    
              <span className="cart__span">{cart.price}</span>
            </div>
            <div className='cart__description'>
              <span className='cart__name'>{cart.comfort}</span>
    
              <ul className='cart__list'>
                <li className='cart__item'>
                  <img src={bedIcon} alt=""  className='cart__icon'/>
                  Апартаменти повністю
                </li>
                <li className='cart__item'>
                  <img src={conditionerIcon} alt=""  className='cart__icon'/>
                  Кондиціонер
                </li>
                <li className='cart__item'>
                  <img src={tvRoomIcon} alt="" />
                  Телевізор з плоским екраном
                </li>
                <li className='cart__item'>
                  <img src={freeWifiIcon} alt="" />
                  Безкоштовний Wi-Fi
                </li>
                <li className='cart__item'>
                  <img src={bathIcon} alt=""  className='cart__icon'/>
                  Ванна кімната в номері
                </li>
                <li className='cart__item'>
                  <img src={washingMachineIcon} alt=""  className='cart__icon'/>
                  Пральна машина
                </li>
                <li className='cart__item'>
                  <img src={newStyleIcon} alt=""  className='cart__icon'/>
                
                  Сучасний ремонт
                </li>
                <li className='cart__item'>
                  <img src={terraceIcon} alt=""  className='cart__icon'/>
                  Власна тераса
                </li>
              </ul>
    
              <button
                className="cart__button" 
                onClick={() => setCurrentRoom(cart.rmNumber)}>
                  Дізнатися більше
              </button>
            </div>
    
          </li>
          )
        })}

      </ul>
    </section>
  )
}