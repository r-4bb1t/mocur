import { Dispatch, Fragment, SetStateAction } from "react";
import cc from "classcat";

export const Rating = ({
  readonly = false,
  rating,
  setRating,
}: {
  readonly?: boolean;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className={cc(["rating rating-half", readonly && "rating-xs"])}>
      <input type="radio" name="rating-10" className="rating-hidden" />
      {[...Array(5)].map((_, i) => (
        <Fragment key={i}>
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow-400 mask mask-star-2 mask-half-1"
            checked={rating === i * 2 + 1}
            readOnly={readonly}
            onChange={(e) => {
              if (e.target.value) setRating(i * 2);
            }}
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow-400 mask mask-star-2 mask-half-2"
            checked={rating === i * 2 + 2}
            readOnly={readonly}
            onChange={(e) => {
              if (e.target.value) setRating(i * 2 + 1);
            }}
          />
        </Fragment>
      ))}
    </div>
  );
};
