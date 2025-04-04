export function getPositionOnTimeline(date, oldestDate, range) {
  return ((date - oldestDate) / range) * 100;
}
export function formatDate(date) {
  return date < 0 ? Math.abs(date) + " av. J.-C." : date + " ap. J.-C.";
}