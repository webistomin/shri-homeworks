import React from 'react';
import Highlight from 'react-highlight'
import './BlobViewer.sass'
import './github-gist.css'
import sprite from '../../layout/img/icons/sprite.svg';
import {formatBytes} from '../../plugins/formatBytes';

const BlobViewer = (props) => {
  const fileName = props.fileName;
  const blob = props.blob.blob;
 
  const size = props.blob.size;
  const formattedSize = formatBytes(size);
  
  let items = null;
  
  if (blob) {
    const arrayOfStrings = blob.split('\n');
    items = arrayOfStrings.map((item, index) => {
      return (
        <tr className="blob-viewer__content-table-row" key={`${item}-${index}`}>
          <td className="blob-viewer__content-table-data blob-viewer__content-table-data_counter">
            {index + 1}
          </td>
          <td
            className="blob-viewer__content-table-data blob-viewer__content-table-data_content blob-viewer__content-table-data_language_python">
          <span className="blob-viewer__content-keyword blob-viewer__content-keyword_grey">
            <Highlight>
              {item}
            </Highlight>
          </span>
          </td>
        </tr>
      );
    });
  } else {
    items = <tr><td>Файл пустой</td></tr>
  }
  
  return (
    <div className="blob-viewer">
      <div className="blob-viewer__container container">
        <div className="blob-viewer__inner">
          <div className="blob-viewer__heading">
            <div
              className="blob-viewer__inner-container blob-viewer__inner-container_flex blob-viewer__inner-container_flex_align-center blob-viewer__inner-container_flex_space-between container">
              <div className="blob-viewer__col blob-viewer__col_left">
                <h2 className="blob-viewer__title title text text_size_l">
                  <svg
                    className="blob-viewer__icon blob-viewer__icon_left"
                    role="img"
                    width={9}
                    height={20}
                  >
                    <use xlinkHref={`${sprite}#icon-file`}/>
                  </svg>
                  {fileName}
                </h2>
                <span className="blob-viewer__size">{formattedSize}</span>
              </div>
              <div className="blob-viewer__col blob-viewer__col_right">
                <button
                  className="blob-viewer__button blob-viewer__button_download btn"
                  type="button"
                >
                  <svg
                    className="blob-viewer__icon icon"
                    role="img"
                    width={14}
                    height={13}
                  >
                    <use xlinkHref={`${sprite}#icon-download`}/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="blob-viewer__content blob-viewer__content_full">
            <div className="blob-viewer__inner-container container">
              <table className="blob-viewer__content-table">
                <tbody>
                { items }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlobViewer;
