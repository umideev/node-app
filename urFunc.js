const reverser = (e) => {
  if (!e) return;
  const res = e.toString();
  return [...res].reverse().join('');
}

export default reverser;
