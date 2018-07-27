import React, { Component } from "react";
import { View, ART } from "react-native";
import * as d3shape from "d3-shape";

const { Surface, Group, Shape } = ART;
const ARTText = ART.Text;

type Props = {};
export default class App extends Component<Props> {
  render() {
    const arcs = d3shape.pie().value(item => item.number)(this.props.pieData);
    const pieCharts = arcs.map(arc => {
      const path = d3shape
        .arc()
        .outerRadius(90)
        .padAngle(0.05)
        .innerRadius(30)(arc);
      const points = d3shape
        .arc()
        .outerRadius(90)
        .innerRadius(30)
        .centroid(arc);
      const { name } = arc.data;
      const { color } = arc.data;
      return { path, points, name, color };
    });
    const width = 200;

    return (
      <View style={{ alignItems: "center" }}>
        <Surface width={width} height={width}>
            {pieCharts.map((item, index) => (
              <Group x={width / 2} y={width / 2}>
                <Shape
                  key={`pie_shape_${index}`}
                  fill={item.color}
                  stroke={item.color}
                  d={item.path}
                />
                <ARTText
                  font={`13px "Helvetica Neue", "Helvetica", Arial`}
                  fill="#fff"
                  alignment="center"
                  x={item.points[0]}
                  y={item.points[1]}
                >
                  {item.name}
                </ARTText>
              </Group>
            ))}
        </Surface>
      </View>
    );
  }
}
