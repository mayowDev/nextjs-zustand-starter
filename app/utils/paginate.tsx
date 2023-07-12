import _ from "lodash";
import { IJoke } from "../jokes/type";


export function paginate(items:IJoke[] | undefined, pageNumber:number, pageSize:number) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}