import React from "react";
import './TestimonialCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = ({ review }) => {

  return (
    <div className="col-md-4 mt-3">
      <div className="card">
        <div className="card-body py-5">
          <div className="text-center">
            <img className="review-img rounded-circle" src={review.imageUrl} alt="" />
            <h5 className="card-title mt-3">{review.data.name}</h5>
            {
                review.data.review === '1' ? 
                <div className="">
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <h6 className="mt-2">Vary Bad!</h6>
                </div>
                : review.data.review === '2' ?
                <div className="">
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <h6 className="mt-2">Bad!</h6>
                </div>
                : review.data.review === '3' ?
                <div className="">
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <h6 className="mt-2">Good!</h6>
                </div>
                : review.data.review === '4' ?
                <div className="">
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <h6 className="mt-2">Very Good!</h6>
                </div> 
                : review.data.review === '5' ?
                <div className="">
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#FFAC0C'}} icon={faStar} />
                    <h6 className="mt-2">Excellent!</h6>
                </div> : null
            }
          </div>
          <p className="card-text text-center mt-4">
            {review.data.description}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default TestimonialCard;
