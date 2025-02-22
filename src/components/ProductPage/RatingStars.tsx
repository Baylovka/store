import Icon from "../Icon";

interface RatingStarsProps {
    average: number;
    maxRating?: number;
}
export default function RatingStars({ average, maxRating = 5 }: RatingStarsProps) {
    const fullStars = Math.floor(average);
    const partialStarPercentage = Math.round((average - fullStars) * 100);

    return (
        <div className="rating-stars">
            <div className="rating-stars__container">
                {Array.from({ length: fullStars }, (_, index) => (
                    <Icon key={index} className="rating-stars__icon--fill" id="star" width={12} height={12} />
                ))}

                {partialStarPercentage > 0 && (
                    <svg width={12} height={12}>
                        <defs>
                            <linearGradient id="partialFill" x1="0" y1="0" x2="1" y2="0">
                                <stop offset={`${partialStarPercentage}%`} stopColor="#FFAC0C" />
                                <stop offset={`${partialStarPercentage}%`} stopColor="#C4C4C4" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                        <use href={`/icons.svg#icon-star`} fill="url(#partialFill)" />
                    </svg>
                )}

                {Array.from({ length: maxRating - fullStars - (partialStarPercentage > 0 ? 1 : 0) }, (_, index) => (
                    <Icon key={index} className="rating-stars__icon" id="star" width={12} height={12} />
                ))}
            </div>
        </div>
    );
}