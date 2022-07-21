// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

type Employee = {
  name: string
  code: number
}

let employee: Employee = {
  name: "John",
  code: 10
}
