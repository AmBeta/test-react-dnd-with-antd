import React from 'react';
import ReactDom from 'react-dom';
import { Table } from 'antd';
import DragSortingTable from './DragSortingTable';

import 'antd/dist/antd.css';

ReactDom.render(
  <div>
    <h1>Table 1</h1>
    <DragSortingTable />
    <h1>Table 2</h1>
    <DragSortingTable />
  </div>,
  document.getElementById('container')
);