import { Link } from 'react-router-dom'
function StarshipLists (props) {

    const temp = props.starshipInfos.map((starship, index) => {
        return <div key={index}>
                    <Link to={{
                            pathname: `/starships/${index}`,
                            state: starship
                            }} 
                            className="each-box" key={starship.name}>{starship.name}
                    </Link>
               </div>
      })
    return (
        <div className="main-container">
            {temp}
        </div>
    )
}

export default StarshipLists