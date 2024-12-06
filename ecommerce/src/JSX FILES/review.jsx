import Buyer from '../image/buyer-rating.png'
import Watch from '../image/love-my-watch.svg'
import Handshake from '../image/handshake.svg'
import Dealer from '../image/dealer.svg'

function review(){
    return (
        <div className="review-container">
            <div className="review-box">
                <p className="leading">The Leading Marketplace for Luxury Watches Since 2024</p>
            </div>
            <div className="reviews">
                <div className="reviews-box">
                    <div className="review-pic">
                        <img src={Buyer} alt="Buyer rating" className="buyer-rating" />
                    </div>
                    <div className="buyers">
                        <p>4.8 out of 5 stars</p>
                    </div>
                    <div className="buyer-count">
                        <p>from 166,000 reviews worldwide</p>
                    </div>
                </div>
                <div className="reviews-box">
                    <div className="review-pic">
                        <img src={Watch} alt="Buyer rating" className="buyer-rating" />
                    </div>
                    <div className="buyers">
                        <p>9 Million</p>
                    </div>
                    <div className="buyer-count">
                        <p>watch enthusiasts use JayTimepieces each month</p>
                    </div>

                </div>
                <div className="reviews-box">
                    <div className="review-pic">
                        <img src={Handshake} alt="Buyer rating" className="buyer-rating" />
                    </div>
                    
                    <div className="buyers">
                        <p>Over 200,000</p>
                    </div>
                    <div className="buyer-count">
                        <p>customers choose Buyer Protection annually</p>
                    </div>

                </div>
                <div className="reviews-box">
                    <div className="review-pic">
                        <img src={Dealer} alt="Buyer rating" className="buyer-rating" />
                    </div>

                    <div className="buyers">
                        <p>More than 25,000</p>
                    </div>
                    <div className="buyer-count">
                        <p>trustworthy sellers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default review;