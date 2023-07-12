import React from "react";
import { useRouter } from "next/navigation";
import _ from "lodash";
import {formatDate, formatEmail} from '../../utils'
import { IJoke } from "@/jokes/type";

interface ITableBody{
  data:IJoke[] | [],
  style:{
    title?:string,
    td?:string, 
    tbody?:string, 
    tomato?:string, orange?:string, yellow?:string, green?:string,
  }

}
const TableBody = (props:ITableBody)=>{
  const router = useRouter()
  const { data, style } = props;
  const viewsStyle = (view:number)=>{
    if(_.inRange(view, 0, 25))return 'tomato'
    if(_.inRange(view, 26, 50))return 'orange'
    if(_.inRange(view, 51, 75))return 'yellow'
    if(_.inRange(view, 76, 100))return 'green'
    return 'td'
  }

  return (
    <tbody className={style.tbody}>
      {data.map((item:IJoke) => (
        <tr key={item.id}>
          <td onClick={()=>router.push(`jokes/${item.id}`)} className={style.title}>{item.title}</td>
          <td className={style.td}>{formatEmail(item.author)}</td>
          <td className={style.td}>{formatDate(item.createdAt?.toString())}</td>
          <td className={style[viewsStyle(parseInt(item.views))]}>{item.views}</td>
        </tr>
      ))}
    </tbody>
  );

}



export default TableBody;