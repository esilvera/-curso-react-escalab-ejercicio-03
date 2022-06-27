import Card from './Card'

const Cards = (props) => {

  return (
    // --- Renderizado condicional con Operador Corto Circuito && ---
    <div>
      {
        props.cities && props.cities.map(city => (
          <Card 
            key={city.id} max={city.main.temp_max} min={city.main.temp_min} name={city.name} img={city.weather[0].icon} 
            onClose={() => alert(city.name)}
          />
        ))
      }
    </div>
  );
};

export default Cards;
