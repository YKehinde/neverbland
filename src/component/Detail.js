import "../styles/Detail.scss"

const Detail = (props) => {
  return ( 
    <div className="detail">
      <h4>{props.title}</h4>
      <p>{props.detail}</p>
    </div>
   );
}
 
export default Detail;