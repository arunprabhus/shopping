import "./card.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id} id={id}>
      <img
        key={id}
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set22&size=180x180`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
