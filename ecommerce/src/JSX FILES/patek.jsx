import patek1 from '../image/patek1.webp'
import patek2 from '../image/patek2.webp'
import patek3 from '../image/patek3.webp'
import patek4 from '../image/patek4.webp'


function patek() {
    return(
        <div className='css-watch-container'>
            <div className="watch-brand">
                <p className="brand-title">
                    Patek Philippe
                </p>

            </div>
            <div className="watch-sample">
                <div className="watch-container">
                    <div className="upper-watch">
                        <img src={patek1} className='watchHover' />
                    </div>
                    <div className="watch-des">
                        <div className="watch-des">
                            <p>Patek Philippe</p>
                            <p className='lower-watch-des'>Nautilus</p>
                        </div>
                    </div>

                </div>

                <div className="watch-container">
                    <div className="upper-watch">
                        <img src={patek2} className='watchHover' />
                    </div>
                    <div className="watch-des">
                        <div className="watch-des">
                            <p>Patek Philippe</p>
                            <p className='lower-watch-des'>Aquanaut</p>
                        </div>
                    </div>

                </div>

                <div className="watch-container">
                    <div className="upper-watch">
                        <img src={patek3} className='watchHover' />
                    </div>
                    <div className="watch-des">
                        <div className="watch-des">
                            <p>Patek Philippe</p>
                            <p className='lower-watch-des'>Calatrava</p>
                        </div>
                    </div>

                </div>

                <div className="watch-container">
                    <div className="upper-watch">
                        <img src={patek4} className='watchHover' />
                    </div>
                    <div className="watch-des">
                        <div className="watch-des">
                            <p>Patek Philippe</p>
                            <p className='lower-watch-des'>Complications</p>
                        </div>
                    </div>
                </div>
            </div>  

        </div>
    )
}

export default patek;