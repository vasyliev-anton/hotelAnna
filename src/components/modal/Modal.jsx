import { useEffect, useState } from 'react';
import data from '../../API/rms.json';
import { useTranslation } from 'react-i18next';

export const Modal = ({ currentRoom, setCurrentRoom }) => {
  const [mainPhoto, setMainPhoto] = useState(null);

  const [listPhotos, setListPhoto] = useState([]);

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [dataRoom, setDataRoom] = useState(null);

  const { t } = useTranslation();


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
          <h5 className="modal__title">{t('aprtms')}: {dataRoom && t(`${dataRoom.comfort}`)}</h5>
          <ul className="modal__list">
            <li className="modal__item check">{t("largeArea")}</li>
            <li className="modal__item check">{t("bath")}</li>
            <li className="modal__item check">{t("air")}</li>
            <li className="modal__item check">{t('fWifi')}</li>
          </ul>
          <span className="modal__subtitle">{t('sizerms')} 30 {t("m")}</span>
 
          <span className="modal__note">{t('price')}: <span className='success'>{dataRoom && dataRoom.price} {t('uah')} | {t("price2")}</span></span>
          
          <p className="modal__text-description">
            {dataRoom ? t(`${dataRoom.description}`)  : ""}
          </p>
          


          <span className="modal__subtitle">{t('roomamenities')}:</span>
          <ul className="modal__list">
            <li className="modal__item check">{t('iron')}</li>
            <li className="modal__item check">{t('towels')}</li>
            <li className="modal__item check">{t("closet")}</li>
            <li className="modal__item check">{t('parking')}</li>
            <li className="modal__item check">{t('tv')}</li>
            <li className="modal__item check">{t('electrickettle')}</li>
            <li className="modal__item check">{t('air')}</li>
            <li className="modal__item check">{t("hanger")}</li>
            <li className="modal__item check">{t("shower")}</li>
            <li className="modal__item check">{t('paper')}</li>
          </ul>

          <span className="modal__subtitle">{t("prohibitions")}:</span>

          <ul className="modal__list">
            <li>{t('smokingp1')} : <span className='wrong'>{t('prohib')}</span></li>
            <li>{t('partiesp2')} : <span className='wrong'>{t('prohib')}</span></li>
          </ul>
        </div> 
      </div>
    </div>
    </div>
  )
}