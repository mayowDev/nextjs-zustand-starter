import React from 'react';
import styles from '../../styles/Table.module.scss'

import TableBody from "./tableBody";
import { IJoke } from '@/jokes/type';

const Table = ({ data }:{data:IJoke[]}) => {
  const columns =['Tilte', 'Author',  'Created date', 'Views']
  return (

    <table  className={styles.table}>
      <thead className={styles.thead} >
        <tr className={styles.tr}>
          {columns.map(item=><th key={item} className={styles.th}>{item} </th>)}
        </tr>
    </thead>
      <TableBody style={styles}  data={data} />
    </table>

  );
};



export default Table;