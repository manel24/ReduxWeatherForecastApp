import React, { COmponent } from "react";
import { SparkLines, SparkLinesLine } from "react-sparklines";

export default props => {
  return (
    <div>
      <SparkLines height={120} width={180} data={props.data}>
        <SparkLinesLine color={props.color} />
      </SparkLines>
    </div>
  );
};
