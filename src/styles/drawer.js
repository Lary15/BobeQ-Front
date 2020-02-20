import styled from 'styled-components/native';

export const CirculeImage = styled.Image`
  border-radius: 50px;
  height: 95px;
  width: 95px;
`;

export const DrawerHeader = styled.View`
  height: 136px;
  width: auto;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TextView = styled.View`
  height: 80px;
  width: 146px;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.TouchableOpacity`
  height: 50px;
  border: 1px solid #ffffff50;
  border-top-width: ${props => props.topWidth}px;
  border-bottom-width:  ${props => props.bottomWidth}px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;
