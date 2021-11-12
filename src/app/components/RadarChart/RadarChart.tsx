import {Colors} from '@styles';
import {Card, Space, Text} from 'components';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, processColor, View} from 'react-native';
import {RadarChart} from 'react-native-charts-wrapper';
import {RadarChartContainer} from './styles';
import update from 'immutability-helper';

interface RadarChartProps {
  radarData: any;
  loading: boolean;
  title: string;
}

const RadarChartView = ({radarData, loading, title}: RadarChartProps) => {
  const [data, setData] = useState({data: {}, xAxis: {}});

  useEffect(() => {
    console.tron.log('Radar:', radarData);
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
                values: [
                  {value: Number(radarData[0].fnpk)},
                  {value: Number(radarData[1].as)},
                  {value: Number(radarData[2].mo)},
                  {value: Number(radarData[3].pm)},
                  {value: Number(radarData[4].cpe)},
                  {value: Number(radarData[5].rlapp)},
                  {value: Number(radarData[6].eap)},
                  {value: Number(radarData[7].bv)},
                  {value: Number(radarData[8].da)},
                  {value: Number(radarData[9].pai)},
                  {value: Number(radarData[10].id)},
                  {value: Number(radarData[11].cdc)},
                  {value: Number(radarData[12].idac)},
                  {value: Number(radarData[13].epm)},
                  {value: Number(radarData[14].ui)},
                  {value: Number(radarData[15].ploap)},
                  {value: Number(radarData[16].nice)},
                  {value: Number(radarData[17].apdas)},
                  {value: Number(radarData[18].das)},
                  {value: Number(radarData[19].gtx)},
                  {value: Number(radarData[20].pcso)},
                  {value: Number(radarData[21].aa)},
                  {value: Number(radarData[22].abp)},
                  {value: Number(radarData[23].mof)},
                  {value: Number(radarData[24].ddi)},
                  {value: Number(radarData[25].drosp)},
                  {value: Number(radarData[26].orpa)},
                  {value: Number(radarData[27].pfap)},
                  {value: Number(radarData[28].rppsap)},
                  {value: Number(radarData[29].irinr)},
                  {value: Number(radarData[30].ecpm)},
                  {value: Number(radarData[31].phec)},
                  {value: Number(radarData[32].cgr)},
                  {value: Number(radarData[33].dp)},
                  {value: Number(radarData[34].bp)},
                  {value: Number(radarData[35].dii)},
                ],
              },
            ],
          },
        },
        xAxis: {
          $set: {
            valueFormatter: [
              'FNPK',
              'AS',
              'MO',
              'PM',
              'CPE',
              'RLAPP',
              'EAP',
              'BV',
              'DA',
              'PAI',
              'ID',
              'CDC',
              'IDAC',
              'EPM',
              'UI',
              'PLOAP',
              'NICE',
              'APDAS',
              'DAS',
              'GTX',
              'PCSO',
              'AA',
              'ABP',
              'MOF',
              'DDI',
              'DROSP',
              'ORPA',
              'PFAP',
              'RPPSAP',
              'IRINR',
              'ECPM',
              'PHEC',
              'CGR',
              'DP',
              'BP',
              'DII',
            ],
          },
        },
      }),
    );
  }, [radarData]);
  return (
    <Card style={{width: '100%'}}>
      {!!loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={Colors.blue} />
        </View>
      )}
      {!loading && (
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
      )}
    </Card>
  );
};

export default RadarChartView;
