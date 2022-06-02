import {Colors} from '@styles';
import {Space, Text, Vertical} from 'components';
import React from 'react';
import {
  HeaderButton,
  HeaderStyle,
  HeaderCommonButton,
  HeaderCommonStyle,
} from './styles';

import AlertIcon from 'assets/svg/alert.svg';
import BackIcon from 'assets/svg/back.svg';
import AddIcon from 'assets/svg/add.svg';
import {useSelector} from 'react-redux';
import {Avatar} from 'react-native-paper';
import {View} from 'react-native';

interface HeaderProps {
  mode?: string;
  alert?: boolean;
  back?: boolean;
  add?: boolean;
  onAdd?: () => any;
  onBack?: () => any;
  title?: string;
}

const Header = ({
  title,
  mode,
  alert,
  back,
  add,
  onBack,
  onAdd,
}: HeaderProps) => {
  const user = useSelector((state: any) => state.auth.user);

  if (mode === 'common') {
    return (
      <HeaderCommonStyle>
        {!!back && (
          <HeaderCommonButton back={back} onPress={onBack}>
            <BackIcon />
          </HeaderCommonButton>
        )}
        <View style={{width: '75%'}}>
          <Text
            title={title}
            size={20}
            weight={700}
            color={Colors.textBlack}
            center
          />
        </View>
        {!!alert && (
          <HeaderCommonButton alert={alert} onPress={() => {}}>
            <AlertIcon />
          </HeaderCommonButton>
        )}
        {!!add && (
          <HeaderCommonButton alert={add} onPress={onAdd}>
            <AddIcon />
          </HeaderCommonButton>
        )}
      </HeaderCommonStyle>
    );
  }

  if (mode === 'profile') {
    return (
      <HeaderCommonStyle>
        <Text title="Perfil" size={20} weight={700} color={Colors.textBlack} />
        {!!alert && (
          <HeaderCommonButton alert={alert} onPress={() => {}}>
            <AlertIcon />
          </HeaderCommonButton>
        )}
      </HeaderCommonStyle>
    );
  }

  return (
    <HeaderStyle>
      {mode === 'avatar' && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avatar.Image size={46} source={{uri: user.avatar}} />
            <Space horizontal={4} />
            <Vertical>
              <Text
                title={user.name}
                size={16}
                weight={700}
                color={Colors.textBlack}
              />
              <Text
                title={user.work}
                size={14}
                weight={500}
                color={Colors.textBlack}
              />
            </Vertical>
          </View>
          <HeaderButton onPress={() => {}}>
            <AlertIcon />
          </HeaderButton>
        </View>
      )}
      {!mode && (
        <>
          <Vertical>
            <Text
              title="IndSus"
              size={16}
              weight={700}
              color={Colors.textBlack}
            />
            <Text
              title="Indicador de Sustentabilidade"
              size={14}
              weight={500}
              color={Colors.textBlack}
            />
          </Vertical>
          <HeaderButton onPress={() => {}}>
            <AlertIcon />
          </HeaderButton>
        </>
      )}
    </HeaderStyle>
  );
};

export default Header;
