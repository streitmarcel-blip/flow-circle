export const calculateDuration = (start, end) => {
    if (!start || !end) return '60 min';
    const [h1, m1] = start.split(':').map(Number);
    const [h2, m2] = end.split(':').map(Number);
    let diff = (h2 * 60 + m2) - (h1 * 60 + m1);
    if (diff < 0) diff += 24 * 60; // Handle overnight
    return `${diff} min`;
};

export const calculateEndTime = (start, durationStr) => {
    if (!start || !durationStr) return '10:00';
    const durationMins = parseInt(durationStr);
    const [h, m] = start.split(':').map(Number);
    let totalMins = h * 60 + m + durationMins;

    // Handle overflow 24h
    totalMins = totalMins % (24 * 60);

    const newH = Math.floor(totalMins / 60);
    const newM = totalMins % 60;

    return `${newH.toString().padStart(2, '0')}:${newM.toString().padStart(2, '0')}`;
};

export const isTimePast = (checkTimeStr, currentTimeStr) => {
    if (!checkTimeStr || !currentTimeStr) return false;
    const [h1, m1] = checkTimeStr.split(':').map(Number);
    const [h2, m2] = currentTimeStr.split(':').map(Number);
    return (h2 * 60 + m2) > (h1 * 60 + m1);
};
