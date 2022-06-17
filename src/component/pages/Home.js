import { useState, useEffect } from "react";
import Item from "../Item";
import "../../styles/Home.scss";

const Home = () => {

  const [shows, setShows] = useState([]);
  const [date, setDate] = useState('');

  // get current date
  const getDate = () =>{
    const d = new Date(); 
    const fullDate = `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${d.getDate()}`;

    setDate(fullDate);
  }

  useEffect(() => {
    fetchShows();
    getDate();
  },[]);

  const fetchShows = async () => {
    const data = await fetch(`http://api.tvmaze.com/schedule?date=${date}&country=GB`)

    const shows =   await data.json();
    setShows(shows);
  }

  return (
    <div className="grid">
      <h2>Latest Added Shows</h2>
        {shows.map (show => (
          <Item 
            key={show.id}
            details={show} />
        ))}
    </div>
   );
}
 
export default Home;