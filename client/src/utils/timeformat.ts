import moment from 'moment'


export default function timeAndDateFormater(time:Date | string){
    if(!time) return
    return moment(time).fromNow();
}