import React, {useState} from 'react';

import {Row, Text, Button, Space} from 'components';
import {BoardStyle, ButtonTap, styles} from './styles';
import {View} from 'react-native';
import {Colors} from '@styles';

interface BoardProps {
  title: string;
  navigation: any;
}

const Board = ({title, navigation}: BoardProps) => {
  const [active, setActive] = useState({
    today: true,
    week: false,
  });
  return (
    <BoardStyle style={styles.shadow}>
      <Row noMargin>
        <Text title={title} size={20} weight={600} color="#090A0A" />
        <Button
          title="Visualizar todos"
          size={13}
          weight={500}
          mode="text"
          color={Colors.blue}
          onPress={() => navigation.navigate('Researches')}
        />
      </Row>
      <Space vertical={6} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ButtonTap
          active={active.today}
          onPress={() => setActive({today: true, week: false})}>
          <Text
            title="Hoje"
            size={15}
            weight={500}
            color={active.today ? Colors.blue : Colors.secundaryTextGray}
          />
        </ButtonTap>
        <ButtonTap
          active={active.week}
          onPress={() => setActive({today: false, week: true})}>
          <Text
            title="Semana"
            size={15}
            weight={500}
            color={active.week ? Colors.blue : Colors.secundaryTextGray}
          />
        </ButtonTap>
      </View>
    </BoardStyle>
  );
};

export default Board;
