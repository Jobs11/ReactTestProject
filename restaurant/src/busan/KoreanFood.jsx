import React from 'react';
import Menu from './Menu';

function KoreanFood(props) {
  return (
    <div>
      <Menu name="닭갈비" area="춘천" />
      <Menu name="왕갈비" area="수원" />
      <Menu name="제주흑돼지" area="제주" />
      <Menu name="비빔밥" area="전주" />
      <Menu name="찜닭" area="안동" />
    </div>
  );
}

export default KoreanFood;
