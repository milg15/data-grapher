/*import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";*/
import React from 'react';

import PieChart, {
  Legend,
  Series,
  Tooltip,
} from 'devextreme-react/pie-chart';


function Graph({ data }){

  function customizeTooltip(arg) {
    return {
      text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`
    };
  }

  function createData(){
      return data.map(
        ({ firstName, lastName, participation }) => 
        ({ name:`${firstName} ${lastName}`, participation: participation})
      )
  }
  const graphData = createData()

  return (
      <PieChart
        id="pie"
        type="doughnut"
        palette="Bright"
        dataSource={graphData}
      >
        <Series argumentField="name" valueField="participation">
        </Series>
        <Legend
          margin={0}
          horizontalAlignment="right"
          verticalAlignment="top"
        />
        <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
        </Tooltip>
      </PieChart>
    );
}

export default Graph;
