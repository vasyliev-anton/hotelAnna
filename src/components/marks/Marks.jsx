import { useTranslation } from "react-i18next"

export const Marks = () => {

  const { t } = useTranslation();

  return (
    <section class="section">
      <div class="section__title-name">
        <hr />
        <span class="section__span">
          {t('marks1')} <span class="section__span--color-yel">{t('marks2')}</span> {t('marks3')}
        </span>
        <hr />
      </div>

      <div class="marks">
        <ul class="marks__list">
          <li class="marks__item">
            {t('staff')}
            <div class="marks__line--group">
              <div class="marks__line">
              </div>
              9.4
            </div>
          </li>
          <li class="marks__item">
            {t('clean')}
            <div class="marks__line--group">
              <div class="marks__line">
              </div>
              9.5
            </div>
          </li>
          <li class="marks__item">
            {t('comfort')}
            <div class="marks__line--group">
              <div class="marks__line">
              </div>
              9.7
            </div>
          </li>
        </ul>

        <ul class="marks__list">
          <li class="marks__item">
            {t('facilities')}
            <div class="marks__line--group">
              <div class="marks__line">
              </div>
              9.6
            </div>
          </li>
          <li class="marks__item">
            {t('value')}
            <div class="marks__line--group">
              <div class="marks__line">
              </div>
              9.5
            </div>
          </li>
          <li class="marks__item">
            {t('geo')}
            <div class="marks__line--group">
              <div class="marks__line">
              </div>
              9.5
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}