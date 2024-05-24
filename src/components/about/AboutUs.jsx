export const AboutUs = () => {
  return (
    <section class="about-us section" id="about">
      <div className="about-us__title--container">
        <hr />
          <h3 className="about-us__title">
            О нас
          </h3>
        <hr />
      </div>
      <div className="about-us__description">
        <ul className="about-us__list">
          <li className="about-us__item">
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
            <span className="item__span">
            Реєстрація заїзду<br/>
            З 14:00 до 00:00
            </span>
          </li>
          <li className="about-us__item">
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
            <span className="item__span">
            Проводити вечірки<br/>
            заходи <span className="wrong">заборонено.</span>
            </span>
          </li>
          <li className="about-us__item">
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
            <span className="item__span">
            <span className="success">Дозволено</span> приватна<br/>
            автостоянка
            </span>
          </li>
        </ul>

        <ul className="about-us__list">
        <li className="about-us__item">
            <span className="item__span">
            Реєстрація виїзду<br/>
            До 12:00
            </span>
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
          </li>
          <li className="about-us__item">
            <span className="item__span">
            Курити в номерах<br/>
            <span className="wrong">заборонено.</span>
            </span>
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
          </li>
          <li className="about-us__item">
            <span className="item__span">
            Розміщення з хатніми<br/>
            Зтваринами <span className="success">дозволено</span>
            </span>
            <i className="about-us--icon">
              <div className="about-us--icon-inside"></div>
            </i>
          </li>
        </ul>
      </div>
    </section>
  )
}