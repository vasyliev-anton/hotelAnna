import { useEffect, useState } from 'react';
import data from '../../API/rms.json';

export const Modal = ({ currentRoom, setCurrentRoom }) => {
  const [mainPhoto, setMainPhoto] = useState(null);

  const [listPhotos, setListPhoto] = useState([]);

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [dataRoom, setDataRoom] = useState(null);


  useEffect(() => {
    if (currentRoom) {
      setMainPhoto(require(`../../imgs/rooms/${currentRoom}/${currentPhoto}.jpg`));

      const getPhotos = data[`${currentRoom}`]["photos"];
      const getData = data[`${currentRoom}`];

      setDataRoom(getData);
        
      const result = getPhotos.map((link) => require(`../../imgs/rooms/${currentRoom}/${link}`));
  
      setListPhoto(result);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setCurrentRoom(null);
      setCurrentPhoto(0);
      setDataRoom(null);
    }

  }, [currentRoom, currentPhoto]);

  const handleCloseButton = () => {
    setCurrentRoom(null);
    setCurrentPhoto(0);
    setDataRoom(null);
  }

  return (
    <div className={`modal--overlay ${isOpen ? 'active--modal' : ''}`}>
      <div className={`modal--container ${isOpen ? 'active--modal' : ''}` }>
      <div className="modal">
      <button onClick={() => handleCloseButton()} className='modal--cross'>X</button>

        <div className="modal__photos--container">
          <div className="modal__photo--main">
            <button 
              disabled={currentPhoto <= 0} 
              className='modal__button--click'
              onClick={() => setCurrentPhoto((prev) => prev - 1)}
            >{"<"}</button>
            <img src={mainPhoto} alt="" className='modal__img' />
            <button 
            disabled={currentPhoto >= listPhotos.length - 1}
            className='modal__button--click'
            onClick={() => setCurrentPhoto((prev) => prev + 1)}>
              {">"}
            </button>
          </div>

          <div>
            <ul className='photos__list'>
              {listPhotos.map((photo, i) => {
                return (
                  <li className={`photos__item ${currentPhoto === i ? 'active' : ''}`} key={i} onClick={() => setCurrentPhoto(i)}>
                    <img src={photo} alt="" className='photo__img' />
                  </li> 
                )
              }
              )}
            </ul>
          </div>
        </div>

         <div className="modal__description">
          <h5 className="modal__title">Aпартаменти: {dataRoom && dataRoom.comfort}</h5>
          <ul className="modal__list">
            <li className="modal__item check">Велика площа</li>
            <li className="modal__item check">Ванна кімната</li>
            <li className="modal__item check">Кондиціонування</li>
            <li className="modal__item check">Free Wi-Fi</li>
          </ul>
          <span className="modal__subtitle">Розмір номеру: 30 м²</span>
 
          <span className="modal__note">Ціна: <span className='success'>{dataRoom && dataRoom.price} за добу</span></span>
    
          <p className="modal__text-description">
            {dataRoom ? dataRoom.description : ""}
          </p>
          


          <span className="modal__subtitle">Зручності номеру:</span>
          <ul className="modal__list">
            <li className="modal__item check">Праска</li>
            <li className="modal__item check">Рушники</li>
            <li className="modal__item check">Гардероб</li>
            <li className="modal__item check">Парковка</li>
            <li className="modal__item check">Телевізор</li>
            <li className="modal__item check">Електрочайник</li>
            <li className="modal__item check">Кондиціонер</li>
            <li className="modal__item check">Вішалка для одягу</li>
            <li className="modal__item check">Розміщення з тваринами дозволено</li>
            <li className="modal__item check">Душева кабінка</li>
            <li className="modal__item check">Туалетная папір та засоби гігієни</li>
          </ul>

          <span className="modal__subtitle">Заборони:</span>

          <ul className="modal__list">
            <li>Куріння : <span className='wrong'>Заборонено</span></li>
            <li>Вечірки : <span className='wrong'>Заборонено</span></li>
          </ul>
        </div> 
      </div>
    </div>
    </div>
  )
}