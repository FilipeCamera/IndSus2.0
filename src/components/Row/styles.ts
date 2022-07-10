import styled from 'styled-components/native';

export const RowStyle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${(props: any) => (props.noMargin ? '' : 'margin: 30px 0 30px')};
`;
