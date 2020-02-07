import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'basier_squareregular', sans-serif;
  letter-spacing: -0.12rem;
  font-size: 1.8rem;
  margin-top: 0;
  font-weight: normal;
  transform: scaleY(1.1);
  @media (min-width: 867px) {
    font-size: 2.4rem;
  }
`;

export const H1Stretched = styled(H1)`
  transform: scaleY(1.2);
`;

export const Pred = styled.p`
  color: red;
  font-size: 1.2rem;
`;

export const PredStretched = styled(Pred)`
  transform: scaleY(1.7);
`;

export const ButtonLink = styled.a`
  position: absolute;
  z-index: 4;
  padding: 1rem;
  margin-top: .2rem;
  background: #000;
  color: white;
  text-decoration: none;
  transition: transform 2s;
  &:hover {
    transform: scaleX(1.4);
    transition: transform 2s;
  }
`;