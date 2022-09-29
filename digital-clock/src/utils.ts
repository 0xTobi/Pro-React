export const getCurrentTime = () => {
    const currentTimeDate = new Date()
    // console.log(currentTimeDate)

    const currentTime = [
        currentTimeDate.getHours(),
        currentTimeDate.getMinutes(),
        currentTimeDate.getSeconds()
    ];

    return currentTime.map((time, index) => `${("0" + time).slice(-2)}${index + 1 === currentTime.length ? "" : ":"}`).join('');
}