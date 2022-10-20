import ratingStyle from './Rating.module.css';

function Ratings () {
    return (
        <div>
            <div className={ ratingStyle.star }>
                <i className='text_capitalize_first'>rate me</i><br/>
                <img src="../../images/star2.png" width="20px" height="20px" />
                <img src="../../images/star2.png" width="20px" height="20px" />
                <img src="../../images/star2.png" width="20px" height="20px" />
                <img src="../../images/star2.png" width="20px" height="20px" />
                <img src="../../images/star2.png" width="20px" height="20px" />
            </div>
        </div>
    )
}

export default Ratings;