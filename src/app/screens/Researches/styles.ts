import {Colors} from '@styles';
import styled from 'styled-components/native';

export const ResearchBoxContainer = styled.View`
  flex-direction: row;
  margin: 8px 0;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonResearchCircle = styled.TouchableOpacity`
  background: ${Colors.lightBlue2};
  border-radius: 999px;
  padding: 8px;
`;
