import styled from 'styled-components';
import Container from '../molecules/Container';
import { HEEW_BIRTH } from '../../utils/constant';
const Section1 = styled.div`
  /* border: 1px solid blue; */
  text-align: center;
  background-color: #f2ffd4;
  height: 100vh;
  position: relative;
  background-image: url('/image/green_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

const TextBox = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;

const LionImg = styled.img`
  width: 100px;
`;
export default function GreetingSection() {
  return (
    <Section1>
      <Container>
        <TextBox>
          <div>{HEEW_BIRTH.split('-').join(' . ')}</div>
          <div>희원이의 생일이에오</div>
          <br />
          <div>
            D-Day 🔥🐰🐻‍❄️🐸 <br />
            Happy birthday ~✨🌟🥳🎁
          </div>
          <LionImg src="/image/animal_lion.png" alt="lion_friend" />
        </TextBox>
        {/* 사진을 정렬하는 시간.... */}
      </Container>
    </Section1>
  );
}
