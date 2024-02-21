import styled from 'styled-components';

const CaveatFont = styled.div`
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: ${(props) => props.weight || 400};
  font-style: normal;
  font-size: ${(props) => props.fontSize || '1rem'};
`;

export default CaveatFont;
