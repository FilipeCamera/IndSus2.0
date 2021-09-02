import {Colors} from '@styles';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const BoardStyle = styled.View`
  width: 100%;
  background: #fff;
  padding: 16px;
  border-radius: 20px;
  margin-bottom: 40px;
`;

export const ButtonTap = styled.TouchableOpacity`
  padding: 4px 10px;
  border-radius: 8px;
  margin-right: 5px;
  background: ${(props: any) =>
    props.active ? Colors.lightBlue : 'transparent'};
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#1C2439',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 6,
  },
});
