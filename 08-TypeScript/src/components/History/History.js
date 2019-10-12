import React, {Component} from 'react';
import './History.sass';
import dayjs from 'dayjs';
import sprite from '../../layout/img/icons/sprite.svg';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Link} from 'react-router-dom';

dayjs.extend(relativeTime);

export default class History extends Component {
  render() {
    const { history, currentRepo } = this.props;
    
    const getFormattedDate = (date) => {
      // DD-MM-YYYY
      return new Date(date).toLocaleDateString()
    };
    
    const uniqueDates = [...new Set(history.map(item => getFormattedDate(item.date)))];
    
    const historyItems = uniqueDates.map((item) => {
      const commitsForDate = history.filter((commit) => getFormattedDate(commit.date) === item);
      
      return (
        <li className="history__item list-item" key={item}>
          <h2 className="history__title title">
            <time className="history__date text text_size_m text_color_grey-7 text_weight_medium">
              { item }
            </time>
          </h2>
          <table className="history__table">
            <tbody>
            {
              commitsForDate.map((commit) => {
                return (
                  <tr className="history__table-row" key={commit.short_commit}>
                    <td className="history__table-data history__table-data_icon">
                      <div className="history__commit-icon"/>
                    </td>
                    <td className="history__table-data history__table-data_info">
                      <h3 className="history__subtitle title text text_size_s text_weight_medium">
                        {commit.message}
                      </h3>
                      <div className="history__info text text_size_s">
                        <Link
                          className="history__commit-link link link_color_blue link_hover_underline"
                          to={`/api/repos/${currentRepo}/commits/${commit.short_commit}`}
                        >
                          {commit.short_commit}
                        </Link>
                        <span>by&nbsp;</span>
                        <span className="name name_first-letter name_first-letter_red">
                    {commit.author}
                  </span>
                        <span>,</span>
                        <time className="history__time">&nbsp;{ dayjs(commit.date).fromNow() }</time>
                      </div>
                    </td>
                    <td className="history__table-data history__table-data_commit text text_size_s">
                      <Link
                        className="history__commit-link link link_color_blue link_hover_underline"
                        to={`/api/repos/${currentRepo}/commits/${commit.short_commit}`}
                      >
                        {commit.short_commit}
                      </Link>
                    </td>
                    <td className="history__table-data history__table-data_source-link">
                      <a
                        className="history__table-link history__table-link_source"
                        href="#"
                      >
                        <svg
                          className="history__table-icon icon"
                          role="img"
                          width={16}
                          height={15}
                        >
                          <use xlinkHref={`${sprite}#icon-code`}/>
                        </svg>
                      </a>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </li>
      );
    });
    
    return (
      <section className="history">
        <div className="history__container container">
          <ul className="history__list list">
            { historyItems }
          </ul>
        </div>
      </section>
    );
  }
}
