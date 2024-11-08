import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios(`https://dragonball-api.com/api/characters/${id}`)
      .then(res => setCharacter(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!character) return (
    <div className="details-page__loading">
      Cargando...
    </div>
  );

  return (
    <div className="details-page">
      <div className="details-page__container">
        <div className="details-page__image-container">
          <img
            src={character.image}
            alt={character.name}
            className="details-page__image"
          />
        </div>

       
        <div className="details-page__info-container">
          <h1 className="details-page__title">{character.name}</h1>

          <div className="details-page__details">
            <div className="details-page__detail">
              <span className="details-page__label">Especie:</span> {character.race}
            </div>

            <div className="details-page__detail">
              <span className="details-page__label">Ki:</span> {character.ki}
            </div>

            <div className="details-page__detail">
              <span className="details-page__label">Máximo Ki:</span> {character.maxKi}
            </div>

            <div className="details-page__detail">
              <span className="details-page__label">Género:</span> {character.gender}
            </div>

            <div className="details-page__detail">
              <span className="details-page__label">Afiliación:</span> {character.affiliation}
            </div>

            <div className="details-page__detail">
              <span className="details-page__label">Descripción:</span>
              <p className="details-page__description">{character.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;