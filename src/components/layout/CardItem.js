import React from 'react';
import { Link } from 'react-router-dom';
import "../../sass/style.scss";

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
