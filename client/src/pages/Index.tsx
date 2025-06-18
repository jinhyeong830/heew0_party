import GreetingSection from '../components/organism/main/Section1Greeting';
import PartyPlaceSection from '../components/organism/main/Section2Place';
import CustomCalendar from '../components/Calendar';
import styled from 'styled-components';

const CalendarSection = styled.section`
  background-color: #f2ffd4;
  padding: 40px 0;
  text-align: center;
`;

export default function Home() {
  return (
    <main>
      {/* 인삿말 */}
      <GreetingSection />
      <CalendarSection>
        <h2>생일까지 남은 시간</h2>
        <CustomCalendar />
      </CalendarSection>
      <PartyPlaceSection />
    </main>
  );
}
