import React from 'react';
import {Link} from 'react-router-dom';
import './error-404.sass';

const Error404 = () => {
  return (
    <div className="error-404">
      <h1 className="error-404__title title">404</h1>
      <h2 className="error-404__subtitle title">Страница не найдена</h2>
      <Link to="/" className="error-404__link link link_hover_underline">На главную</Link>
    </div>
  )
};

export default Error404
