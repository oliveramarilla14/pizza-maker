# Pizza Maker app

## Tech and libraries
- Redux/toolkit
- Material UI
- Firestore
- React Hook Form
- React Router

## Pages
- Register and login (Firestore or Auth)
- Pizza maker 
  - Ingredients selection
  - Price increment
  - Groups (pizza crust, cheese, toppings)[some obligatory]
  - Send to Direction
  - Reset
  - finish button (for preview, using redux)
- Preview and save Section
  - List selected ingredients and price
  - save pizza
- Adress list
  - list all adress
  - add new adress (form)
- Saved Pizza
   - list pizza by name and ingredients with price


  ## Store
- Users
  - name
  - uuid
  - passsword
  - email
  - gender

- Saved Pizza
  - owner:uuid
  - pizza: {ingredients}
- Adress
  - name: "house"
  - owner:uuid
  - street
  - number
  - city

[Repository](https://github.com/oliveramarilla14/pizza-maker)