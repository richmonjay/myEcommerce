import PatekBest from '../image/patekBest.webp';


function HomepageBody() {
    return(
        <div className="homepageBody-container">
            <div className="leftHomepageBody"></div>
            <div className="middleHomepageBody">
                <img src={PatekBest} alt="Patek Best Seller" className='patekBest' />
            </div>
            <div className="rightHomepageBody"></div>
        </div>
    )
}

export default HomepageBody;