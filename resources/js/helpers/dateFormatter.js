import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
const time = new TimeAgo('en-US');


export function timeAgo(date) {
    return time.format(
        Date.now() - (Date.now() - new Date(date).getTime())
    )
}