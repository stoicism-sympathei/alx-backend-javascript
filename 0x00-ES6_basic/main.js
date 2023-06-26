// main.js

// Function: createEmployeesObject
export default function createEmployeesObject(departmentName, employees) {
  const obj = {
    [departmentName]: employees,
  };
  return obj;
}

// Function: createReportObject
export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return report;
}

// Function: appendToEachArrayValue
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }
  return newArray;
}

// Function: getFullBudgetObject
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
  return fullBudget;
}

// Function: getBudgetForCurrentYear
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
  return budget;
}

// Function: getBudgetObject
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  return budget;
}

// Function: getSanFranciscoDescription
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };
  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}

// Function: concatArrays
export default function concatArrays(array1, array2, string) {
  const concatenatedArray = [...array1, ...array2, ...string];
  return concatenatedArray;
}

// Function: createIteratorObject
export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = departments.reduce((acc, curr) => [...acc, ...curr], []);
  let index = 0;

  const iterator = {
    next() {
      if (index < employees.length) {
        const value = employees[index];
        index++;
        return { value, done: false };
      } else {
        return { done: true };
      }
    },
  };

  return iterator;
}

// Function: iterateThroughObject
export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  const iterator = reportWithIterator.next();

  while (!iterator.done) {
    result += iterator.value + ' | ';
    iterator.next();
  }

  return result.slice(0, -3);
}
