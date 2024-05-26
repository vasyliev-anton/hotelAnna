import { useTranslation } from 'react-i18next';
import powder from '../../imgs/powder.png';
import tag from '../../imgs/tag.svg';

import {ReactComponent as Tag} from '../../imgs/tag.svg';

export const Testimonials = () => {

  const { t } = useTranslation();

  return (
    <section className="section" id='testimonials'>
      <div className="section__title-name">
        <hr />
        <div className="section__">

        </div>
        <span className="section__span">
          {t('testimonials1')} <span className="section__span--color-yel">{t('testimonials2')}</span>
        </span>
        <hr />
      </div>

      <div className="testimonials">
        <ul className="testimonials__list">
          <li className="testimonials__item">
            <div className="testimonials__testimonial">
              <img src={powder} alt=""  className='testimonial__photo'/>
              <span className='testimonial__nickname'>Давид</span>
              <div className='testimonial__description'>
                <Tag src={tag} alt=""  className='testimonial__icon--start'/>
                <p>Вп'яте зупиняюся у Вашому готелі не просто так!!! Все дуже здорово – затишно, тихо, чисто. Із задоволенням поглинаю сніданки, які завжди приготовані з любов'ю і увагою.</p>
                <Tag src={tag} alt="" className='testimonial__icon--end'/>
              </div>
            </div>
          </li>
          <li className="testimonials__item">
            <div className="testimonials__testimonial">
              <img src={powder} alt=""  className='testimonial__photo'/>
              <span className='testimonial__nickname'>Давид</span>
              <div className='testimonial__description'>
                <Tag src={tag} alt=""  className='testimonial__icon--start'/>
                <p>Вп'яте зупиняюся у Вашому готелі не просто так!!! Все дуже здорово – затишно, тихо, чисто. Із задоволенням поглинаю сніданки, які завжди приготовані з любов'ю і увагою.</p>
                <Tag src={tag} alt="" className='testimonial__icon--end'/>
              </div>
            </div>
          </li>
          <li className="testimonials__item">
            <div className="testimonials__testimonial">
              <img src={powder} alt=""  className='testimonial__photo'/>
              <span className='testimonial__nickname'>Давид</span>
              <div className='testimonial__description'>
                <Tag src={tag} alt=""  className='testimonial__icon--start'/>
                <p>Вп'яте зупиняюся у Вашому готелі не просто так!!! Все дуже здорово – затишно, тихо, чисто. Із задоволенням поглинаю сніданки, які завжди приготовані з любов'ю і увагою.</p>
                <Tag src={tag} alt="" className='testimonial__icon--end'/>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </section>
  )
}