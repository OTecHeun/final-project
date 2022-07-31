import React from 'react';
import DemoApp from './DemoApp';
import SmallSelectBox from '../../Main/SmallSelectBox';

const EduCalendar = () => {
  const options = [
    { value: '0', label: '공지사항', address: 'eduguide' },
    { value: '1', label: '시간표', address: 'eduguide' },
    { value: '2', label: '강사소개', address: 'eduguide' }
]
  return (
    <div>
      <SmallSelectBox options={options} placeholder={"시간표"} />
      <DemoApp />
    </div>
  );
};

export default EduCalendar;