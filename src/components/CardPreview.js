import React from 'react';
import '../styles/components/CardPreview.scss';
import cardLogo from '../images/card-logo.svg';

function CardPreview() {
  return (
    <section className="preview">
      <div className="preview__cardsContainer">
        <div className="preview__cardFront">
          <img src={cardLogo} alt="" />
          <span>0000 0000 0000 0000</span>
          <span>JANE APPLESEED</span>
          <div>
            <span>00 </span>/<span> 00</span>
          </div>
        </div>
        <div className="preview__cardBack"></div>
      </div>
    </section>
  );
}

export default CardPreview;
