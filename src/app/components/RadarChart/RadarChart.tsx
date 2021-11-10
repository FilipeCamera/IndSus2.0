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
}

const RadarChartView = ({radarData, loading}: RadarChartProps) => {
  const [data, setData] = useState({data: {}, xAxis: {}});

  useEffect(() => {
    console.log(radarData);
    setData(
      update(data, {
        data: {
          $set: {
            dataSets: [
              {
                label: 'Área 1',
                config: {
                  color: processColor(Colors.blue),
                  drawFilled: true,
                  fillColor: processColor(Colors.blue),
                  fillAlpha: 100,
                  lineWidth: 2,
                },
                values: [
                  {value: radarData.fnpk},
                  {value: radarData.as},
                  {value: radarData.mo},
                  {value: radarData.pm},
                  {value: radarData.cpe},
                  {value: radarData.rlapp},
                  {value: radarData.eap},
                  {value: radarData.bv},
                  {value: radarData.da},
                  {value: radarData.pai},
                  {value: radarData.id},
                  {value: radarData.cdc},
                  {value: radarData.idac},
                  {value: radarData.epm},
                  {value: radarData.ui},
                  {value: radarData.ploap},
                  {value: radarData.nice},
                  {value: radarData.apdas},
                  {value: radarData.das},
                  {value: radarData.gtx},
                  {value: radarData.pcso},
                  {value: radarData.aa},
                  {value: radarData.abp},
                  {value: radarData.mof},
                  {value: radarData.ddi},
                  {value: radarData.drosp},
                  {value: radarData.orpa},
                  {value: radarData.pfap},
                  {value: radarData.rppsap},
                  {value: radarData.irinr},
                  {value: radarData.ecpm},
                  {value: radarData.phec},
                  {value: radarData.cgr},
                  {value: radarData.dp},
                  {value: radarData.bp},
                  {value: radarData.dii},
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
  }, []);
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
