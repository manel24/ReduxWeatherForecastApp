import React, { COmponent } from "react";
//import { SparkLines, SparkLinesLine, SparkLinesReferenceLine } from "react-sparklines";

function average(data) {

    return _.round(_.sum(data) / data.length)
    
}
export default props => {
  return undefined; //(

  // <div>
  //   <SparkLines height={120} width={180} data={props.data}>
  //     <SparkLinesLine color={props.color} />
  //     <SparkLinesReferenceLine type="avg" />
  //   </SparkLines>
  //   <div>{average(props.data)} {props.units} </div>;
  // </div>
  //);
};
