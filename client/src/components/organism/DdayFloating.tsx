import styled from 'styled-components';
import { dDayCount } from '../../utils/utils';
import { HEEW_BIRTH, HEEW_NAME } from '../../utils/constant';
const Div = styled.div`
  /* 공통 */
  border: 3px solid yellowgreen;
  border-radius: 20px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  min-width: 90%;
  height: 56px;
  display: flex;
  flex-direction: column;
  background-color: #ffffd4;
  align-items: center;
  justify-content: center;
`;

export default function DdayFloating() {
  const dDay = dDayCount(HEEW_BIRTH);
  return (
    <Div>
      {dDay !== 0 ? (
        <>
          <span>
            {HEEW_NAME}이의 생일 까지 {dDay}일 남았어요.
          </span>
          <span>{dDay}일 --시간 --분 --초</span>
        </>
      ) : (
        <>{HEEW_NAME}이의 생일이예요! 추카해롱롱롱!</>
      )}
    </Div>
  );
}
