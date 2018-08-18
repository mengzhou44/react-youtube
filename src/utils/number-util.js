
export function getStatisticsCount(num) {

    if (num >= 1000000) {
        return (Math.round(num / 1000000 * 10) / 10).toString() + " M";
    }

    else if (num >= 1000) {
        return (Math.round(num / 1000 * 10) / 10).toString() + " K";
    }

    return num;
}