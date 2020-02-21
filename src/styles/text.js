import styled from 'styled-components/native';

export const FontText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: ${props => props.color};
  font-size: ${props => props.size};
  text-align: ${props => props.textAlign || 'center'};
`;

export const BoldText = styled.Text`
  font-family: 'Montserrat-Bold';
  color: ${props => props.color};
  font-size: ${props => props.size};
  text-align: ${props => props.textAlign || 'left'};
  margin-bottom: ${props => props.marginBottom || '0'};
`;

export const RegularText = styled.Text`
  font-family: 'Montserrat-Regular';
  color: ${props => props.color};
  font-size: ${props => props.size};
  text-align: ${props => props.textAlign || 'left'};
`;
