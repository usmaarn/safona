


export default {
    date_diff(date){
        let time = '';
        date = new Date(date);
        const date_diff = Date.now() - date.getTime();
        const sec = Math.floor(date_diff / 1000);
        const min = Math.floor(date_diff / (60 * 1000));
        const hr = Math.floor(date_diff / (60 * 60 * 1000))

        if(sec < 60){
            time = 'now';
        }else if(min < 60){
            time = min + ' munites ago';
        }else if(hr < 24){
            time = hr + ' hours ago';
        }else {
            time = date.toDateString()
        }
        return time;
    }
}