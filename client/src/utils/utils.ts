/**
 * 올해 생일이 지났는지의 여부
 * @param date 'YYYY-MM-DD' 형식의 날짜
 * @returns 생일 안지났으면 true, 생일 지났을 때는 false 반환
 */
export function isOverBirthdayThisYear(date: string): boolean {
  const remainDay = Math.floor((+new Date(date) - +new Date()) / (24 * 60 * 60 * 1000)) + 1;
  return remainDay >= 0; // remainDay가 양수,0일 때 올해 생일/음수일 때는 내년 생일
}

/**
 * 다음생일까지 남은 디데이 날짜
 * @param date 'YYYY-MM-DD' 형식의 날짜
 * @returns 오늘날짜부터 date 까지 남은 날 Number
 */
export function dDayCount(date: string): number {
  const remainDay = Math.floor((+new Date(date) - +new Date()) / (24 * 60 * 60 * 1000)) + 1;

  /**@TODO 디데이 일자 뿐만 아니라 시간 분 초까지 리턴해보기, 배열형태로 리턴 */
  return remainDay;
}
