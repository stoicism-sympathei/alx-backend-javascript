export default function createReportObject(list) {
  return {
    allEmployees: {
      ...list,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
