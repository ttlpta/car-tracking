import styled from "styled-components";

const LogoStyle = styled.h3`
  color : palevioletred;
  font-size : ${ props => props.size == 'small' ? '18px' : '60px'}
`;

export default LogoStyle;
