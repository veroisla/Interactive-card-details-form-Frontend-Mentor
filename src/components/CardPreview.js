import React from 'react';
import '../styles/components/CardPreview.scss';
import cardLogo from '../images/card-logo.svg';

function CardPreview(props) {
  return (
    <section className="preview">
      <div className="preview__cardsContainer">
        {/* PREVIEW CARD FRONT */}
        <div className="preview__cardFront">
          <img className="preview__cardLogo" src={cardLogo} alt="Card Logo" />
          <span className="preview__cardNumber">
            {props.dataUser.cardNumber
              .replace(/\s/g, '')
              .replace(/\D/g, '')
              //dejar hueco entre numeros tarjeta
              .replace(/([0-9]{4})/g, '$1 ')

              .trim() || '0000 0000 0000 0000'}
          </span>
          <div className="preview__nameAndDate">
            <span className="preview__name">
              {props.dataUser.name || 'JANE APLESEED'}
            </span>
            <div>
              <span className="preview__date">
                {props.dataUser.month || '00'}
              </span>
              /
              <span className="preview__date">
                {props.dataUser.year || '00'}
              </span>
            </div>
          </div>
        </div>
        {/* PREVIEW CARD BACK */}
        <div className="preview__cardBack">
          <span className="preview__cvc">{props.dataUser.cvc || '000'}</span>
        </div>
      </div>
    </section>
  );
}

export default CardPreview;
