import RatingStars from "../RatingStars";

interface Review {
    name: string,
    date: string,
    rating: number,
    comment: string
}

interface TabReviewsProps {
    reviews: Review[]
}

export default function TabReviews({ reviews }: TabReviewsProps) {
    return (
        <div className="tab-reviews">
            <ul className="tab-reviews__list">
                {reviews && reviews.map((review, index) => (
                    <li className="tab-reviews__item" key={index}>
                        <div className="tab-reviews__header">
                            <p className="tab-reviews__author">{review.name}</p>
                            <p className="tab-reviews__date">{review.date}</p>
                        </div>
                        <RatingStars average={review.rating} uniqueIdPartialFill={`comment-rating-fill-${index}`} />
                        <div className="tab-reviews__content">
                            {review.comment}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}