import styled from 'styled-components/native';

export const GreyView = styled.FlatList`
  background-color: #e5e5e5;
  flex: 1;
  padding: 25px;
  padding-bottom: 30px;
`;

export const Background = styled.TouchableOpacity`
  background-color: white;
  height: 140px;
  width: 296px;
  border-radius: 5px;
  box-shadow: 10px 5px 5px black;
  padding: 20px 25px;
  margin-bottom: 30px;
  box-shadow: 20px 15px 5px black;
  elevation: 5;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${props => props.marginBottom || 0};
`;

export const Blur = styled.View`
  background-color: #00000080;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalBackground = styled.View`
  background-color: white;
  height: 426px;
  width: 320px;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
`;

export const Exit = styled.View`
  width: auto;
  align-self: flex-end;
`;

export const FullButton = styled.TouchableOpacity`
  height: 45px;
  width: 200px;
  color: white;
  background-color: #002f67;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 25px;
`;
