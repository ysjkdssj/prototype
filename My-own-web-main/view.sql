CREATE or REPLACE VIEW v_employees as SELECT employee_id, first_name, email  FROM employees;
CREATE or REPLACE view v_emp_dept  as SELECT e.first_name, d.department_name FROM employees e, departments d  where e.department_id = d.department_id;

SELECT * FROM v_emp_dept;
SELECT * FROM v_employees;
SELECT * FROM v_emp_sal;

SELECT d.department_id, d.department_name, e.sal FROM v_emp_sal e, departments d where e.department_id = d.department_id;

CREATE or REPLACE view v_emp_sal as SELECT department_id, max(salary) sal from employees  GROUP by department_id;