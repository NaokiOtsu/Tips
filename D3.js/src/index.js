import * as d3 from 'd3';

const data = [10, 20, 40, 60, 80, 100];

const margin = {
  top: 10,
  left: 30,
  bottom: 10,
  right: 30
};

const width = 500 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

// X軸のスケール
const xScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, width]);

// y軸のスケール
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([height, 0]);

//
// Portrait Bar 縦の棒グラフ
//
const portrait_bar = d3.select('#portrait-bar');
const svg = portrait_bar
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);
svg.selectAll()
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 30)
  .attr('y', (d) => yScale(d))
  .attr('width', 15)
  .attr('height', d => height - yScale(d))
  .attr('fill', 'red');

//
// x軸の線
//
const yAxis = d3.axisLeft(yScale);

portrait_bar.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)
  .call(yAxis)

//
// Landscape Bar 横の棒グラフ
//
const landscape_bar = d3.select('#landscape-bar');
landscape_bar.attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);
landscape_bar.selectAll()
  .data(data)
  .enter()
  .append('rect')
  .attr('x', 0)
  .attr('y', (d, i) => i * 30)
  .attr('width', d => xScale(d))
  .attr('height', 15)
  .attr('fill', 'red');


