import {Link} from "react-router-dom";

const Item = (props) => {
  const item = props.details.show;

  const {
    image,
    rating,
    name
  } = (item || {});

  console.log(image)
  
  const defaultImage = `https://via.placeholder.com/150x200.png?text=Show%20Poster`;

  return ( 
    <div className="grid-item">
      <Link to={`show/${item.id}`} id={item.id}>
        <img rel="preload" src={item?.image ? item?.image?.medium : defaultImage} alt={name} width={150} height={200}/>
        <h3>{name}</h3>
      </Link>
    </div>
   );
}
 
export default Item;