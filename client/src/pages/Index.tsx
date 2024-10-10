import DdayFloating from '../components/organism/DdayFloating';
import GreetingSection from '../components/organism/Section1Greeting';
import PartyPlaceSection from '../components/organism/Section2Place';

export default function Home() {
  return (
    <main>
      {/* 인삿말 */}
      <GreetingSection />
      <PartyPlaceSection />
      <section>sdfadad</section>
      <DdayFloating />
    </main>
  );
}
