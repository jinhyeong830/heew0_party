import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      <div>이상한 페이지 시도하려고 하지 마세욧</div>
      <div>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    </main>
  );
}
