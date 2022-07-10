import {Colors} from '@styles';
import {Text} from 'components';
import React from 'react';
import {Alert, ButtonStyle, CustomButtonStyle} from './styles';

import ArchiveIcon from 'assets/svg/archive.svg';
import EditIcon from 'assets/svg/edit.svg';
import LogoutIcon from 'assets/svg/logout.svg';
import Line from 'assets/svg/Line.svg';

interface CustomButtonProps {
  title: string;
  type: string;
  onPress: () => any;
  alert: boolean;
}

const CustomButton = ({title, type, alert, onPress}: CustomButtonProps) => {
  return (
    <CustomButtonStyle>
      <ButtonStyle onPress={onPress}>
        <Text title={title} size={18} weight={600} color={Colors.textBlack} />
        {type === 'archive' && <ArchiveIcon />}
        {type === 'edit' && <EditIcon />}
        {type === 'logout' && <LogoutIcon />}
        {!!alert && <Alert />}
      </ButtonStyle>
      <Line width="100%" />
    </CustomButtonStyle>
  );
};

export default CustomButton;
