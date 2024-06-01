import { useTranslation } from 'react-i18next';
import powder from '../../imgs/powder.svg';
import tag from '../../imgs/tag.svg';

import { ReactComponent as Tag } from '../../imgs/tag.svg';
import { shuffleArray } from '../../helper/shuffle';
import { useEffect, useState } from 'react';

export const Testimonials = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const reviews = shuffleArray([["rev1", "Jeffrey"], ["rev2", "Kateryna "], ["rev3", "Roman"], ["rev4", "Olga"], ["rev5", "Illge"], ["rev6", "Artur"]])

    setList(reviews.slice(3));
  }, [])


  const { t } = useTranslation();

  return (
    <section className="section" id='testimonials'>
      <div className="section__title-name">
        <hr />
        <div>

        </div>
        <span className="section__span">
          {t('testimonials1')} <span className="section__span--color-yel">{t('testimonials2')}</span>
        </span>
        <hr />
      </div>

      <div className="testimonials">
        <ul className="testimonials__list">
          {list.map((testimonial) => (
            <li className="testimonials__item">
              <div className="testimonials__testimonial">
                <img src={powder} alt="" className='testimonial__photo' />
                <span className='testimonial__nickname'>{t(`${testimonial[1]}`)}</span>
                <div className='testimonial__description'>
                  <Tag src={tag} alt="" className='testimonial__icon--start' />
                  <p className='testimonial__paragraph'>{t(`${testimonial[0]}`)}</p>
                  <Tag src={tag} alt="" className='testimonial__icon--end' />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}