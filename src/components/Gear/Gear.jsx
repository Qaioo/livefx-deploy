import './Gear.css'
import gearList from './GearList.jsx'

function Gear() {
    return ( 
        <div id="gear" className="gearBody">
            <div className="container-box">

                {gearList.map((card, index) => { return(
                    <div className="card-box" key={index}>
                        <div className="img-box">
                            <img className="gear-img" src={card.image} alt={card.alt}></img>
                        </div>
                        <div className="content-box">
                            <h2 className='card-box-title'>
                                {card.title}
                            </h2>
                            <p className='card-box-info info'>
                                {card.info}
                            </p>
                            <a className='card-box-btn' href={card.url}>WIĘCEJ</a>
                        </div>
                    </div>
                )})}
            </div>    
        </div>
     );
}

export default Gear;