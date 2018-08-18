
const moment = require('moment');



export function getPublishedInfo(publishedDate) {

    if (publishedDate === '') return '';

    var now = moment(new Date());
    var end = moment(publishedDate);
    var duration = moment.duration(now.diff(end));
    var hours = duration.asHours();

    if (hours >= 24) {
        return end.format('MMM DD, YYYY');
    } else if (hours < 1) {
        return `${Math.round(hours * 60).toString()} minutes ago`;
    }
    return `${Math.round(hours).toString()} hours ago `;
}
