import React, { useEffect, useState } from 'react';

const Timer = (props) => {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSec((sec)=> sec+1);
      console.log('타이머 돌아가는 중...');
      // console.log(sec);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('타이머가 종료되었습니다.');
    };
  }, []);

  return (
    <div>
      <p>타이머를 시작합니다.</p>
      <p>{sec}초</p>
    </div>
  );
};

export default Timer;