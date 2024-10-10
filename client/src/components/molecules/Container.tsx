import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8px;

  @media screen and (max-width: 575px) {
    padding: 0 4px;
  }
`;

export default function Container({ children }: Props) {
  return <Inner>{children}</Inner>;
}
