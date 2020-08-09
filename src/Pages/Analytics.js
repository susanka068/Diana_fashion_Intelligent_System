import React, { Component } from 'react'
import NordStormData from '../data/stage_4.json'
import { Chart } from 'react-google-charts'
export class Analytics extends Component {
    render() {
        var dataArray = NordStormData.most_concern
        dataArray = [['keywords', 'appearance'] , ...dataArray ];
        console.log(dataArray)
        return (
            
            <div>
                <Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={dataArray}
  options={{
    hAxis: {
      title: 'Keywords',
    },
    vAxis: {
      title: 'Apperance',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
            </div>
        )
    }
}

export default Analytics
