import {Colors} from '@styles';
import {Card, Space, Text} from 'components';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {
  VictoryChart,
  VictoryGroup,
  VictoryArea,
  VictoryPolarAxis,
  VictoryLabel,
} from 'victory-native';
import {RadarChartContainer} from './styles';

interface RadarChartProps {
  radarData: any[];
}

const RadarChart = ({radarData}: RadarChartProps) => {
  const [dataRadar, setDataRadar] = useState<any[]>([]);
  const [maxima, setMaxima] = useState<any>();
  const [loading, setLoading] = useState(true);

  function getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map(d => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  function processData(data) {
    const maxByGroup = getMaxima(data);
    const makeDataArray = d => {
      return Object.keys(d).map(key => {
        return {x: key, y: d[key] / maxByGroup[key]};
      });
    };
    return data.map(datum => makeDataArray(datum));
  }

  useEffect(() => {
    if (loading) {
      const data = processData(radarData);
      const max = getMaxima(radarData);
      setDataRadar(data);
      setMaxima(max);
      if (dataRadar.length !== 0) {
        setLoading(false);
      }
    }
  }, [dataRadar]);
  console.tron.log('GraphRadar:', dataRadar);
  console.tron.log('MaxRadar:', maxima);
  return (
    <Card>
      {!!loading && <ActivityIndicator size="large" color={Colors.blue} />}
      {!loading && (
        <RadarChartContainer>
          <VictoryChart polar domain={{y: [0, 1]}}>
            <VictoryGroup style={{data: {fillOpacity: 0.2, strokeWidth: 2}}}>
              {dataRadar.map((data, i) => {
                return <VictoryArea key={i} data={data} />;
              })}
            </VictoryGroup>
            {Object.keys(maxima).map((key, i) => {
              return (
                <VictoryPolarAxis
                  key={i}
                  dependentAxis
                  style={{
                    axisLabel: {padding: 10},
                    axis: {stroke: 'none'},
                    grid: {stroke: 'grey', strokeWidth: 0.25, opacity: 0.5},
                  }}
                  tickLabelComponent={
                    <VictoryLabel labelPlacement="vertical" />
                  }
                  labelPlacement="perpendicular"
                  axisValue={i + 1}
                  label={key}
                  tickFormat={t => Math.ceil(t * maxima[key])}
                  tickValues={[0.25, 0.5, 0.75]}
                />
              );
            })}
            <VictoryPolarAxis
              labelPlacement="parallel"
              tickFormat={() => ''}
              style={{
                axis: {stroke: 'none'},
                grid: {stroke: 'grey', opacity: 0.5},
              }}
            />
          </VictoryChart>
        </RadarChartContainer>
      )}
    </Card>
  );
};

export default RadarChart;
