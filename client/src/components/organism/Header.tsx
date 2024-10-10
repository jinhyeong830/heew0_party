import { Link } from 'react-router-dom';
import Container from '../molecules/Container';

export default function Header() {
  return (
    <header>
      <Container>
        <ul>
          <li>
            <Link to={'/'}>메인페이지</Link>
          </li>
          <li>
            <Link to={'/'}>쓰고싶은 말.(주소 추후 변경)</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
}
