import React, { useContext } from "react";
import { assets } from "../../assets/assets/assets";

const CourseCard = ({ courseDetails }) => {
  const { currency } = useContext(useContext);
  return (
    <div>
      <img src={course.courseThumbnail} alt="thumbnail" />
      <div>
        <h3>{course.courseTitle}</h3>
        <p>{course.educator.name}</p>
      </div>
      <div>
        <p>4.5</p>
        <div>
          {[...Array(5)].map((_, i) => (
            <img key={i} src={assets.star} alt="star" />
          ))}
        </div>
        <p>22</p>
      </div>
      <p>
        {currency}
        {(course.coursePrice - course.discount / 100).toFixed(2)}
      </p>
    </div>
  );
};

export default CourseCard;
