import {Colors} from '@styles';
import {Text} from 'components';
import React from 'react';
import {ButtonStyle, CustomButtonStyle} from './styles';

import ArchiveIcon from 'assets/svg/archive.svg';
import EditIcon from 'assets/svg/edit.svg';
import LogoutIcon from 'assets/svg/logout.svg';
import Line from 'assets/svg/line.svg';

interface CustomButtonProps {
  title: string;
  type: string;
  onPress: () => any;
}

const CustomButton = ({title, type, onPress}: CustomButtonProps) => {
  return (
    <CustomButtonStyle>
      <ButtonStyle onPress={onPress}>
        <Text title={title} size={18} weight={600} color={Colors.textBlack} />
        {type === 'archive' && <ArchiveIcon />}
        {type === 'edit' && <EditIcon />}
        {type === 'logout' && <LogoutIcon />}
      </ButtonStyle>
      <Line />
    </CustomButtonStyle>
  );
};

export default CustomButton;
