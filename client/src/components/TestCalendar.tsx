import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default function TestCal() {
  const [today, setToday] = useState(dayjs());
  const daysInMonth = today.daysInMonth();
  const firstDayOfMonth = dayjs(today).startOf('month').locale('ko');
  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
  const dates = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = dayjs(firstDayOfMonth).add(i - 1, 'day');
    dates.push(date);
  }
  const preMonth = () => {
    setToday(dayjs(today).subtract(1, 'month'));
    setInputValue('');
  };

  const nextMonth = () => {
    setToday(dayjs(today).add(1, 'month'));
    setInputValue('');
  };

  const presentMonth = () => {
    setToday(dayjs());
    setInputValue('');
  };

  const [inputValue, setInputValue] = useState('');

  const onChangeInputHandle = (e: any) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue) {
      setToday(dayjs(inputValue));
    }
  }, [inputValue]);

  return (
    <div>
      App
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map((date) => {
            if (date.format('dddd') == '월요일') {
              return (
                <tr key={date.toString()}>
                  <td></td>
                  <td>{date.format('DD')}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <h1>{today.format('YYYY-MM-DD')}</h1>
      <h1>{today.format('MMMM')}</h1>
      <h3>이번달 일수 : {daysInMonth}일</h3>
      <button onClick={preMonth}>이전달</button>
      <button onClick={nextMonth}>다음달</button>
      <button onClick={presentMonth}>현재</button>
      <input type="date" value={inputValue} onChange={onChangeInputHandle} />
      <hr />
      <div>
        <table></table>
        {dates.map((date) => {
          if (date.format('dddd') == '토요일') {
            return (
              <div key={date.toString()}>
                <div style={{ color: 'blue' }}>
                  {/* {date.format('YYYY-MM-DD')} {date.format('dddd')} */}
                  {date.format('DD')}
                </div>
                <br />
                <br />
              </div>
            );
          }
          if (date.format('dddd') == '일요일') {
            return (
              <div key={date.toString()}>
                <div style={{ color: 'red' }}>
                  {/* {date.format('YYYY-MM-DD')} {date.format('dddd')} */}
                  {date.format('DD')} {date.format('dddd')}
                </div>
              </div>
            );
          } else {
            return (
              <div key={date.toString()}>
                {/* {date.format('YYYY-MM-DD')} {date.format('dddd')} */}
                {date.format('DD')}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
