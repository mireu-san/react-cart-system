# How to run this program
Before you run this web application, you need to input the following commands:
npm install
npm start

# install
react-router-dom

# Abstract
To test out whether it works with the following stack combination:
- react.js, react-router-dom


# Planned
Code spliting has been applied over the project to speed up the web app in general. (ex. pages - cart, shop, components)

# Objective
Build a cart system in react.

# Info.
- Context.js
Used createContext to compose cart with handling the props simultaneously.
# Quick note (to do list):
1. How to stop decrementing the value if it is less than zero in ReactJS?
https://stackoverflow.com/questions/48961319/how-to-stop-decrementing-the-value-if-it-is-less-than-zero-in-reactjs

2. console - Warning Each child in a list should have a unique "key" prop 
https://stackoverflow.com/questions/71693355/warning-each-child-in-a-list-should-have-a-unique-key-prop

3. Goods.js, Shop.js 
Both need to change all to camel case format. Just follow JS format from now on.

4. For some reason, from cart, item #6 on Shop displays as always. This might be due to recognition error (#1 - #5.) How about #6?

Don't do on this project unless applicable:
- react-query, axios
