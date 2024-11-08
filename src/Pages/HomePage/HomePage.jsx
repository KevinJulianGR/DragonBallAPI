import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import axios from 'axios';
import CharCard from '../../Components/CharCard/CharCard';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters")
      .then(res => {
        setData(res.data.items);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="home-page">
      <div className="title-container">
        <h1 className="main-title">Bienvenido a la API de Dragon Ball Z</h1>
      </div>
      
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="characters-grid">
          {data.map((element) => (
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

export default HomePage;