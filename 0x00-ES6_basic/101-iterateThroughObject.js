export default function iterateThroughObject(reportWithIterator) {
  const employees = [...reportWithIterator];
  return employees.join(' | ');
}
