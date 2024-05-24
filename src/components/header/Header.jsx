export const Header = () => {

  return (
    <header className="header">
      <div className="header__bar">
        <div className="header__logo">
          <span className="header__span">Міні - Готель</span>
        </div>

        <div className="header__group">
          <ul className="header__list">
            <li className="header__item">
              <a href="#rooms" className="header__link">
                Галерея
              </a>
            </li>
            <li className="header__item">
              <a href="#testimonials" className="header__link">
                Відгуки
              </a>
            </li>
            <li className="header__item">
              <a href="#footer" className="header__link">
                Контакти
              </a>
            </li>
            <li className="header__item">
              <a href="#rooms" className="header__link">
                О нас
              </a>
            </li>
            <li className="header__item">
              <a href="#rooms" className="header__link">
                Розташування
              </a>
            </li>
          </ul>

          <div className="header__button">
            <span>UKR</span>
          </div>
        </div>
      </div>
    </header>
  )
}