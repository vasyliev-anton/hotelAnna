export const Marks = () => {

  return (
    <section className="section">
      <div className="section__title-name">
        <hr />
        <span className="section__span">
          Ми <span className="section__span--color-yel">найкращі</span> в категоріях
        </span>
        <hr />
      </div>


      <div className="marks">
        <ul className="marks__list">
          <li className="marks__item">
            Персонал
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.4
            </div>
          </li>
          <li className="marks__item">
            Чистота
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.5
            </div>
          </li>
          <li className="marks__item">
            Комфорт
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.7
            </div>
          </li>
        </ul>

        <ul className="marks__list">
          <li className="marks__item">
            Засоби
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.6
            </div>
          </li>
          <li className="marks__item">
            Співвідношення ціни та якості
            <div className="marks__line--group">
              <div className="marks__line"></div>
              9.5
            </div>
          </li>
          <li className="marks__item">
            Місцезнаходження
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