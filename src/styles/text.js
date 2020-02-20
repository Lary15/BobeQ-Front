import styled from 'styled-components/native';

export const FontText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: ${props => props.color};
  font-size: ${props => props.size};
  text-align: center;
`;
