# ReactJS Challenge

Create a database populated with data using a schema similar to below:

| Table | Field |
| ------ | ------ |
| Departments | name |

| Table | Field |
| ------ | ------ |
| Products | name |
|  | price |
|  | department_id |

| Table | Field |
| ------ | ------ |
| ProductsPromotions | product_id |
|  | promotion_id |

| Table | Field |
| ------ | ------ |
| Promotions | code |
|  | active |
|  | discount |

The requirements for this Application are:

- A paginated list of all products in the database showing their name and price, and showing a products current promotion and discounted price if one is active.

- Department filter: Selecting a department will display all of the products within that department.

- Promotion filter: User can filter products that have the entered promotion_code.

- Simple partial text search based on product name

- Based on these requirements we need to have a working prototype.

Your deliverables for the challenge have to fulfill the below requirements:

- The backend has to be built as a consumable API using a suitable backend e.g. NodeJS, Rails

- The frontend should be built using ReactJS.

# Bonus

- Well documented readme to run the project 
- Create the frontend using separate components utilizing React Hooks
- Style the frontend using React styled components
- Add backend and frontend tests utilizing jest
- Dockerize backend and frontend and make it easy to start the project using `docker compose`