import rolex1 from '../image/rolex1.webp'
import rolex2 from '../image/rolex2.webp'
import rolex3 from '../image/rolex3.webp'
import rolex4 from '../image/rolex4.webp'


function rolex() {
    return (
        <div className="css-watch-container">
            <div className="watch-brand">
                <p className="brand-title">
                    Rolex
                </p>1 
            </div>
            <div className="watch-sample">
                <div className="watch-container">
                    <div className="upper-watch">
                        <img src={rolex1} className='watchHover' />
                    </div>
                    <div className="watch-des">
                        <p>Rolex</p>
                        <p className='lower-watch-des'>Datejust</p>
                    </div>

                </div>

                <div className="watch-container">
                    <div className="upper-watch">
                        <img src={rolex2} className='watchHover' />
                    </div>
                    <div className="watch-des">
                        <p>Rolex</p>
                        <p className='lower-watch-des'>Submariner</p>
                    </div>
                </div>

                <div className="watch-container">
                    <div className="upper-watch">
                        <img src={rolex3} className='watchHover' />
                    </div>
                    <div className="watch-des">
                        <p>Rolex</p>    
                        <p className='lower-watch-des'>Day-date</p>
                    </div>
                </div>

                <div className="watch-container">
                    <div className="upper-watch">
                        <img src={rolex4} className='watchHover' />
                    </div>
                    <div className="watch-des">
                        <p>Rolex</p>
                        <p className='lower-watch-des'>GMT-Master ll</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default rolex;