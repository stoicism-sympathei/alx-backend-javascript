export default function createReportObject(employeesList) {
  const allEmployees = {};

  employeesList.forEach((employee) => {
    const { name, department } = employee;
    if (!(department in allEmployees)) {
      allEmployees[department] = [];
    }
    allEmployees[department].push(name);
  });

  return {
    allEmployees,
    getNumberOfDepartments: () => Object.keys(allEmployees).length,
  };
}
