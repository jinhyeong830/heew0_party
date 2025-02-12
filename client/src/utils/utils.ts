import { DdayInterface } from './interface';

/**
 * 올해 생일이 지났는지의 여부
 *
 * @param {string} date 'YYYY-MM-DD' 형식의 날짜
 * @returns {booleanW} 생일 안지났으면 true, 생일 지났을 때는 false 반환
 */
export function isOverBirthdayThisYear(date: string): boolean {
  const remainDay = Math.floor((+new Date(date) - +new Date()) / (24 * 60 * 60 * 1000)) + 1;
  return remainDay >= 0; // remainDay가 양수,0일 때 올해 생일/음수일 때는 내년 생일
}

/**
 * 다음생일까지 남은 디데이 날짜
 *
 * @param {string}date 'YYYY-MM-DD' 형식의 날짜
 * @returns {number} 오늘날짜부터 date 까지 남은 날 Number
 */
export function dDayCount(date: string): number {
  const remainDay = Math.floor((+new Date(date) - +new Date()) / (24 * 60 * 60 * 1000)) + 1; // 남은 일수수

  /**@TODO 디데이 일자 뿐만 아니라 시간 분 초까지 리턴해보기, 배열형태로 리턴 */
  return remainDay;
}

/**
 * 기준 날짜까지 남은 일, 시, 분, 초를 객체형태로 리턴하는 함수
 *
 * @param {string|Date} dDay D-Day를 계산할 기준 날짜
 * @returns {Object} {day, hour, min, sec} 형태의 객체, 각 남은 시간을 숫자형으로 담고 있음
 */
export function getDdayCount(dDay: string | Date): DdayInterface {
  // string으로 들어올 경우 Date 형으로 변경
  if (typeof dDay === 'string') {
    dDay = new Date(dDay);
    dDay.setHours(0, 0, 0, 0); // UTC 기준으로 00:00:00.000 설정
  }

  // dDay까지 남은 밀리초
  const gap = dDay.getTime() - new Date().getTime();

  // 밀리초가 0, 음수일 경우 Dday로 도달했거나 지난 경우
  if (gap <= 0) {
    return { remainDay: 0, remainHour: 0, remainMinute: 0, remainSeconds: 0 };
  }

  // 남은 밀리초로부터 남은 날짜, 시간, 분, 초 를 가져오기기
  const remainDay = Math.floor(gap / (1000 * 60 * 60 * 24));
  const remainHour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const remainMinute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const remainSeconds = Math.floor((gap % (1000 * 60)) / 1000);

  return { remainDay, remainHour, remainMinute, remainSeconds };
}
