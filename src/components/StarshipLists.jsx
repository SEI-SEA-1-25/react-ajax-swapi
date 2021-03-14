import { Link } from 'react-router-dom'
function StarshipLists (props) {

    const temp = props.starshipName.map((data, index) => {
        return <div key={index}>
                  <Link to={`/starships/${index}`} className="each-box">{data.name}</Link>
               </div>
      })
    return (
        <div className="main-container">
            {temp}
        </div>
    )
}

export default StarshipLists