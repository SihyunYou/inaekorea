export function generateGreenGradient(steps) {
  const start = [120, 200, 120];
  const end = [0, 168, 108];
  return Array.from({ length: steps }, (_, i) => {
    const r = Math.round(start[0] + ((end[0] - start[0]) / (steps - 1)) * i);
    const g = Math.round(start[1] + ((end[1] - start[1]) / (steps - 1)) * i);
    const b = Math.round(start[2] + ((end[2] - start[2]) / (steps - 1)) * i);
    return `rgb(${r},${g},${b})`;
  });
}