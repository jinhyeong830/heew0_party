import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';
const Section = styled.section`
  background-color: #daeac1af;
  text-align: center;
  padding: 40px 0;
  /* background-image: url('/image/green_background.jpg'); */
`;
const FontContainer = styled.div`
  font-family: 'GangwonEduSaeeum_OTFMediumA';
`;
export default function PartyPlaceSection() {
  return (
    <Section>
      <h2>장소: 더 맛있는 즉떡</h2>
      <h3>일시: 2025.06.05 (목) </h3>
      <br />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: '1000px', height: '600px' }}
        level={3}
      />
      <FontContainer>
        <p>오는 방법</p>
        <br />
        <ul>
          <li>1. 지하철을 타고온다.</li>
          <li>2. 뻐스를 타고온다.</li>
          <li>3. 걸어온다.</li>
        </ul>
        <br />
        <p>준비물</p>
        <ul>- dd, dd, dd, dd -</ul>
      </FontContainer>
      <img src="/image/background_leaves.png" alt="dd" width={'100%'} />
    </Section>
  );
}
