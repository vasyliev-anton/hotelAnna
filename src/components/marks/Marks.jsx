import { useTranslation } from "react-i18next"

export const Marks = () => {

  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="section__title-name">
        <hr />
        <span className="section__span">
          {t('marks1')} <span className="section__span--color-yel">{t('marks2')}</span> {t('marks3')}
        </span>
        <hr />
      </div>


      <div className="marks">
        <ul className="marks__list">
          <li className="marks__item">
          {t('staff')}
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.4
            </div>
          </li>
          <li className="marks__item">
          {t('clean')}
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.5
            </div>
          </li>
          <li className="marks__item">
          {t('comfort')}
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.7
            </div>
          </li>
        </ul>

        <ul className="marks__list">
          <li className="marks__item">
            {t('facilities')}
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.6
            </div>
          </li>
          <li className="marks__item">
            {t('value')} 
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.5
            </div>
          </li>
          <li className="marks__item">
            {t("geo")}
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.5
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}