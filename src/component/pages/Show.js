import {
  useEffect,
  useState
} from "react";
import Detail from "../Detail";
import "../../styles/Show.scss";

const Show = ({
  match
}) => {

  const [show, setShow] = useState({
    image: {},
    network: {},
    rating: {},
    schedule: {
      days: []
    }
  });

  useEffect(() => {
    fetchShowDetails();
  }, []);

  // fetch inidividual show data
  const fetchShowDetails = async () => {
    const data = await fetch(`http://api.tvmaze.com/shows/${match.params.id}`)

    const show = await data.json();
    setShow(show);
  }

  // Get the days if there is more than one day in the array
    const getDays = (show) => {
      const days = show.schedule.days.map(day =>(`${day}`))

      return <p>{days.join()}</p>
    }
  
  return ( 
    <div className="show">
      <div className="show-header">
        <img className="show-image" src={show.image.original}/>
        <div className="show-details">
        <div className="rating">
          Average rating: {show.rating.average ? show.rating.average: ``}
        </div>
          <h2>{show.name}</h2>
          <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
        </div>
      </div>
      
      <div className="show-body">
        <div className="show-info">
          <h3>Show Info</h3>
          <Detail title="Streamed on" detail={show.network.name} />
          <Detail title="Schedule" detail={show.schedule.days.length > 1 ? getDays(show): show.schedule.days} />
          <Detail title="Status" detail={show.status} />
          <Detail title="Genre" detail={show.type} />
        </div>
        <div className="show-stars">
          <h3>Starring</h3>
        </div>
      </div>
    </div>
   );
}

export default Show;