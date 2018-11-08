# Ruby Challenge

Create a database populated by a seeds.rb file you write using https://github.com/stympy/faker/blob/master/doc/v1.9.1/commerce.md

The requirements for this Application are:

- A paginated list of all products in the database showing their name and price, and showing a products current promotion and discounted price if one is active.

- Department filter: Selecting a department will display all of the products within that department.

- Promotion filter: User can filter products that have the entered promotion_code.

- Simple partial text search on product name (no need to implement complex text, search SQL "like" or similar is enough)

- Based on these requirements we need to have a working prototype.

Your deliverables for the challenge have to fulfill the below requirements:

- The backend has to be built as a consumable API using Ruby on Rails

- The frontend can be built with any front-end framework of your choice (preferably ember.js).

#Bonus

- Well documented readme to run the project
- Build docker containers to run the project locally on docker.
- Build CI/CD using gitlab / github pipeline that deploys to AWS Free tier account. 
- Build automated test.