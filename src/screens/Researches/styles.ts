import {Colors} from '@styles';
import styled from 'styled-components/native';

export const ResearchBoxContainer = styled.View`
  flex-direction: column;
  margin: 8px 0 32px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonResearchCircle = styled.TouchableOpacity`
  background: ${Colors.lightBlue2};
  border-radius: 999px;
  padding: 8px;
`;

export const ButtonResearch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
