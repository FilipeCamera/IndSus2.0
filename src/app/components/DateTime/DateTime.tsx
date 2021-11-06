import React, {useState} from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Platform} from 'react-native';
import {DateTimeButton, DateTimeContainer, DateTimeInContainer} from './styles';
import {Text} from 'components';
import moment from 'moment';
import {Colors} from '@styles';

import CalendarIcon from 'assets/svg/calendarIconWhite.svg';

interface DateTimeProps {
  createDate: any;
  setCreateDate: any;
  error: any;
}

const DateTime = ({createDate, setCreateDate, error}: DateTimeProps) => {
  const [date, setDate] = useState(createDate);
  const [currentDate, setCurrentDate] = useState<any>();
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const current = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(current);
    setCurrentDate(current);
    setCreateDate(current);
  };

  return (
    <>
      <DateTimeContainer>
        <DateTimeInContainer>
          <Text
            title={moment(currentDate).format('DD/MM/YYYY')}
            size={14}
            weight={500}
            color={Colors.textGray}
            center
          />
        </DateTimeInContainer>
        <DateTimeButton onPress={() => setShow(true)}>
          <CalendarIcon />
        </DateTimeButton>
      </DateTimeContainer>
      {!!show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          dateFormat="shortdate"
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default DateTime;
