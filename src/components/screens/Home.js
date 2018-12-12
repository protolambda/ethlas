import React from "react";
import CytoscapeComponent from 'react-cytoscapejs';

const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
];

const Home = () => (
  <div style={{height: '100%', width: '100%'}}>
      <CytoscapeComponent elements={elements} style={{width: '100%', height: '100%'}} pan={{x: 100, y: 100}}/>
  </div>
);

export default Home;