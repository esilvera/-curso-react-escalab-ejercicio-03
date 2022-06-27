// const Card = ({props}) => {    --- Sin desetructurar props ----
const Card = ({ name, min, max, img, onClose }) => {
  return (
    <div>
      <button onClick={onClose}>X</button>
      {/* <h4>{props.name}</h4>     --  sin desestructurar -- */}
      <h4>{name}</h4>
      <p>Min:</p>
      <p>{min}</p>
      {/* <p>{props.min}</p>     --  sin desestructurar -- */}
      <p>Max:</p>
      <p>{max}</p>
      {/* <p>{props.min}</p>     --  sin desestructurar -- */}
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Temperatura de la Ciudad" />
      {/* <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Temperatura de la Ciudad" />  --  sin desestructurar -- */}
    </div>
  );
};

export default Card;
