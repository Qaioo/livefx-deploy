import AliceCarousel from 'react-alice-carousel';

import customersList from './CustomersList'

import './CustomerSlider.css'

export default function CustomerSlider(){
    const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1024: {
          items: 5
        }
      }
      
      return(
        <div className='customers-test-main'>

            <div id="customers" className='section-title'>
                <h1 className='customers-title'>ZAUFALI NAM</h1>
            </div>

            <div className="test-customer-slider">
                <AliceCarousel
                    duration={400}
                    autoPlay={true}
                    startIndex = {1}
                    fadeOutAnimation={true}
                    mouseTracking={false}
                    mouseDragEnabled={true}
                    playButtonEnabled={false}
                    responsive={responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="ltr"
                    autoPlayActionDisabled={false}
                    disableButtonsControls={true}
                    disableDotsControls={true}
                    infinite={true}
                >
                    {customersList.map((cLogo, index) => { return(
                        <div className='img-logo-wrapper'>
                            <img className={"customerLogo customerLogo"+index} key={index} src={cLogo.src} alt={cLogo.alt}></img>
                        </div>
                    )})}
                </AliceCarousel>
            </div>

        </div>
        
      )
}