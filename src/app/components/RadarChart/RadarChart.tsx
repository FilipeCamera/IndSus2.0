import {Colors} from '@styles';
import {Card, Space, Text} from 'components';
import React, {useState} from 'react';

import {
  VictoryChart,
  VictoryGroup,
  VictoryArea,
  VictoryPolarAxis,
  VictoryLabel,
} from 'victory-native';
import {RadarChartContainer} from './styles';

interface RadarChartProps {
  data: any[];
}

const characterData = [
  {
    strength: 1,
    intelligence: 250,
    luck: 8,
    stealth: 40,
    charisma: 50,
    test: 10,
  },
  {
    strength: 5,
    intelligence: 210,
    luck: 4,
    stealth: 48,
    charisma: 30,
    test: 10,
  },
];

const RadarChart = ({}: RadarChartProps) => {
  const [data, setData] = useState(processData(characterData));
  const [maxima, setMaxima] = useState(getMaxima(characterData));

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

  function processData(data: any) {
    const maxByGroup = getMaxima(data);
    const makeDataArray = d => {
      return Object.keys(d).map(key => {
        return {x: key, y: d[key] / maxByGroup[key]};
      });
    };
    return data.map(datum => makeDataArray(datum));
  }
  return (
    <Card>
      <RadarChartContainer>
        <VictoryChart polar domain={{y: [0, 1]}}>
          <VictoryGroup
            colorScale={['blue', 'green', 'tomato', 'red', 'orange']}
            style={{data: {fillOpacity: 0.2, strokeWidth: 2}}}>
            {data.map((data, i) => {
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
                tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
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
    </Card>
  );
};

export default RadarChart;
