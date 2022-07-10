import {Colors} from '@styles';
import {Card, Space, Text} from 'components';
import React, {useEffect, useState} from 'react';
import {Dimensions, processColor} from 'react-native';
import {RadarChart} from 'react-native-charts-wrapper';
import {RadarChartContainer} from './styles';
import update from 'immutability-helper';

interface RadarChartProps {
  radarData: any;
  loading: boolean;
  title: string;
}

const RadarChartView = ({radarData, title}: RadarChartProps) => {
  const [data, setData] = useState({data: {}, xAxis: {}});

  useEffect(() => {
    setData(
      update(data, {
        data: {
          $set: {
            dataSets: [
              {
                label: title,
                config: {
                  color: processColor(Colors.blue),
                  drawFilled: true,
                  fillColor: processColor(Colors.blue),
                  fillAlpha: 100,
                  lineWidth: 2,
                },
                values: radarData.map((radar: any) => Number(radar.value)),
              },
            ],
          },
        },
        xAxis: {
          $set: {
            valueFormatter: radarData.map((radar: any) => radar.sigla),
          },
        },
      }),
    );
  }, [radarData]);
  return (
    <Card style={{width: '100%'}}>
      <RadarChartContainer>
        <RadarChart
          style={{
            flex: 1,
            width: Dimensions.get('window').width - 20,
            height: Dimensions.get('window').height - 280,
            marginTop: 20,
            marginBottom: 10,
          }}
          data={data.data}
          xAxis={data.xAxis}
          yAxis={{drawLabels: false}}
          chartDescription={{text: 'Área'}}
          legend={{
            enabled: false,
            textSize: 14,
            form: 'CIRCLE',
            wordWrapEnabled: true,
          }}
          drawWeb={true}
          webLineWidth={1}
          webLineWidthInner={1}
          webAlpha={255}
          webColor={processColor('gray')}
          webColorInner={processColor('gray')}
          skipWebLineCount={0}
        />
      </RadarChartContainer>
    </Card>
  );
};

export default RadarChartView;
