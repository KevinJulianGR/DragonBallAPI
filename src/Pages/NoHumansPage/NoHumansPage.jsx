import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./NoHumansPage.css";

const NoHumansPage = () => {
  const [nonHumans, setNonHumans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters")
      .then(res => {
        const filteredNonHumans = res.data.items.filter(
          character => character.race.toLowerCase() !== 'human'
        );
        setNonHumans(filteredNonHumans);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="humans-page">
      <div className="title-container">
        <h1 className="main-title">Personajes No Humanos</h1>
      </div>
      
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="characters-grid">
          {nonHumans.map((element) => (
            <Link key={element.id} to={`/details/${element.id}`} className="character-link">
              <div className="character-card">
                <div className="image-container">
                  <img 
                    src={element.image} 
                    alt={element.name} 
                    className="character-image"
                  />
                </div>
                <div className="character-info">
                  <h2 className="character-name">{element.name}</h2>
                  <p className="character-race">{element.race}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default NoHumansPage;