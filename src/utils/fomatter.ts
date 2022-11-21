import moment from "moment";

export function relativeDateFomatter(date: string){
  return moment(date).fromNow();
}