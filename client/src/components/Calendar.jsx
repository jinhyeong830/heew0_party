import dayjs from 'dayjs';
import { useState } from 'react';

export default function Calendar() {
  const dayjsDate = dayjs('2024-06-04');
  const [today, setToday] = useState(dayjs()); // 오늘 날짜 기준으로 setting
  const daysInMonth = today.daysInMonth();
  const firstDayOfMonth = dayjs(today).startOf('month').locale('ko');
  console.log(firstDayOfMonth);
  const [heewBirth, setHeewBirth] = useState(dayjs('2024-06-04'));
  const daysHeewMonth = heewBirth.daysInMonth();
  console.log(daysHeewMonth); // 30(6월은 30일까지..)
  const dates = [];
  const dayOfWeek = ['SUN', 'MON', '화', '수', '목', '금', '토'];
  //   console.log(viewDate);
  //   //   console.log(dayjsDate);
  //   const createCalendar = useCallback(() => {
  //     const startWeek = viewDate.startOf('month').week;
  //     console.log(startWeek);
  //     const endWeek = viewDate.endOf('month').week === 1 ? 53 : viewDate.endOf('month').week;
  //     const calendarDayjs = [];

  //     // eslint-disable-next-line no-plusplus
  //     for (let week = startWeek; week <= endWeek; week++) {
  //       calendarDayjs.push(
  //         Array(7)
  //           .fill(0)
  //           .map((num, i) =>
  //             viewDate.format('MM') === '12'
  //               ? viewDate
  //                   .startOf('week')
  //                   .week(week - 52)
  //                   .add(num + i, 'day')
  //               : viewDate
  //                   .startOf('week')
  //                   .week(week)
  //                   .add(num + i, 'day'),
  //           ),
  //       );
  //     }

  //     return calendarDayjs;
  //   }, [viewDate]);
  //   사실 viewDAte는 변경될 일이 없음..

  //   const calenderNumber = createCalendar();

  //   console.log(calenderNumber);
  return (
    <>
      <h1>달력 만들어보기 ㅎ</h1>
    </>
  );
}
