import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import { HEEW_BIRTH } from '../utils/constant';
import dayjs from 'dayjs';

const HeartImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  opacity: 0.5;
  pointer-events: none;
  z-index: 2;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border: none;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .react-calendar__tile {
    position: relative;
    padding: 10px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile abbr {
    position: relative;
    z-index: 3;
    font-weight: bold;
  }

  .react-calendar__tile--now {
    background: #f2ffd4;
    border-radius: 5px;
  }

  .react-calendar__tile--active {
    background: #daeac1;
    border-radius: 5px;
  }

  .react-calendar__navigation {
    margin-bottom: 20px;
  }

  .react-calendar__navigation button {
    font-size: 16px;
    min-width: 44px;
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    color: #666;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 10px;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #ff6b6b;
  }
`;

interface CalendarProps {
  className?: string;
}

export default function CustomCalendar({ className }: CalendarProps) {
  const today = new Date();
  const birthday = new Date(HEEW_BIRTH);

  const tileContent = ({ date }: { date: Date }) => {
    const isBirthday = dayjs(date).format('MM-DD') === dayjs(birthday).format('MM-DD');
    if (isBirthday) {
      return <HeartImage src="/image/heart.png" alt="birthday" />;
    }
    return null;
  };

  return (
    <StyledCalendar
      className={className}
      value={today}
      tileContent={tileContent}
      calendarType="iso8601"
      formatDay={(locale, date) => {
        const isToday = dayjs(date).isSame(dayjs(), 'day');
        return isToday ? 'today' : dayjs(date).format('D');
      }}
    />
  );
}
