import React, { Link } from "react-router-dom";

const Header = () => (
  <header >
    <div className='header'>
        <Link className='header-link' to="/">|Главная</Link>
        <Link className='header-link' to="/employees">|Сотрудники</Link>
    </div>
    <hr />
  </header>
);

export default Header;