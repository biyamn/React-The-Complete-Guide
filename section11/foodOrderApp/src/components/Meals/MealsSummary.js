import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식이 당신에게 배달됩니다</h2>
      <p>다양한 기내식 중에서 마음에 드는 기내식을 선택하고 집에서 맛있는 점심 또는 저녁 식사를 즐겨보세요.</p>
      <p>에어프랑스의 모든 기내식은 고품질의 식재료로 제시간에 조리되며 물론 숙련된 셰프가 제공합니다!</p>
    </section>
);
};

export default MealsSummary;