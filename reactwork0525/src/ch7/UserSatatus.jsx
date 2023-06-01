import React, { useEffect, useState } from 'react';

const UserSatatus = (props) => {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  const exFunc2 = () => {
    //ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () => {
      //ServerAPI.unsubsribeUserState(props.user.id, handleStatusChange);
    };
  };
  useEffect(exFunc2);

  if (isOnline === null) {
    return '대기 중....';
  }
  return isOnline ? '온라인' : '오프라인';
};

export default UserSatatus;
