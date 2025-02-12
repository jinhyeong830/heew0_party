import useDdayCount from '../../../hooks/useDdayCount';
import { HEEW_BIRTH, HEEW_NAME } from '../../../utils/constant';
import { getDdayCount } from '../../../utils/utils';

export default function RemainTime() {
  const { remainDay, remainHour, remainMinute, remainSeconds } = getDdayCount(HEEW_BIRTH);
  const dDay = remainDay + 1;
  const isClose = useDdayCount();
  return (
    <div>
      {!isClose ? (
        <>
          <span>
            {HEEW_NAME}이의 생일까지 <b>{dDay}</b> 일 남았어요.
          </span>
          <br />
          <span>
            ( {remainDay}일 {remainHour}시간 {remainMinute}분 {remainSeconds}초 )
          </span>
        </>
      ) : (
        <>
          🔥🐰 D-Day 🐻‍❄️🐸 <br />
          Happy birthday ~🌟🥳🎁
        </>
      )}
    </div>
  );
}
