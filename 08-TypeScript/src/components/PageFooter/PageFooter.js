import React from 'react';
import './PageFooter.sass';

const PageFooter = () => {
  return (
    <footer className="page-footer" role="contentinfo">
      <div className="page-footer__container container">
        <div className="page-footer__col page-footer__col_left">
          <p className="page-footer__text text text_color_grey text_size_s paragraph">
            Trade secrets of Yan LLC 16., Lev Tolstoy Str., Moscow, Russia, 119021
          </p>
        </div>
        <div className="page-footer__col page-footer__col_right"><
          span className="page-footer__version text text_color_grey text_size_s">UI: 1.12.7</span>
          <span className="page-footer__copyright text text_color_grey text_size_s">© 2007 - 2019&nbsp;
            <a
              className="page-footer__link link link_color_blue link_hover_underline"
              href="https://yandex.ru"
              target="_blank"
              rel="noopener noreferrer nofollow">
              Yandex
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
