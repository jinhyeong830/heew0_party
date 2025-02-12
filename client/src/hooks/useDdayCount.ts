import { useEffect, useState } from 'react';
import { getDdayCount } from '../utils/utils';
import { HEEW_BIRTH } from '../utils/constant';

export default function useDdayCount() {
  // 오늘 날짜 YYYY-MM-DD 형식으로 가져옴
  const initialCount = Object.values(getDdayCount(HEEW_BIRTH)); //[일, 시간, 초, 분]

  const [isDone, setIsDone] = useState(false);
  const [second, setIsSecond] = useState(initialCount[3]);

  useEffect(() => {
    const interval = setInterval(() => {
      let isClosed = false;
      if (!isDone) {
        const dDayCount = Object.values(getDdayCount(HEEW_BIRTH)); //[일, 시간, 초, 분]
        isClosed = dDayCount.every((value) => value === 0); // 모두 0일 때 true
        setIsSecond(dDayCount[3]);
        setIsDone(isClosed);
      } else {
        setIsDone(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [second, isDone]);

  return isDone;
}
