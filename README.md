# How to run this program
Before you run this web application, you need to input the following commands:
npm install
npm start

# install
react-router-dom
tanstack@react-query

# Abstract
To test out whether it works with the following stack combination:
- react.js, react-query, react-router-dom, redux

HOWEVER, I will not implement Redux till I complete the objectives.

# Planned
Code spliting has been applied over the project to speed up the web app in general. (ex. pages - cart, shop, components)

# Objective
To build a simple cart system, and login auth system. Total : 2.

# How each file work (temporary)
- index.js ✅
This page will pop up initially.

- App.js ✅
A main page to handle everything. 
May load 'react-router-dom' 'routes' here.

in components: ✅ (if necessary) react-router-dom
- Navbar.jsx (either use css or styled-components)

# Info.
- Context.js
Used createContext to compose cart with handling the props simultaneously.
# Understanding of each tech stack
- react-query:
fetching then caching data, so api call will be reduced and server can burden off?
Answer: https://tech.osci.kr/2022/07/13/react-query/

- So, server side for react-query. client side is for Redux.
https://tanstack.com/query/v4/docs/guides/does-this-replace-client-state?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/does-this-replace-client-state

# Quick note (to do list):
1. How to stop decrementing the value if it is less than zero in ReactJS?
https://stackoverflow.com/questions/48961319/how-to-stop-decrementing-the-value-if-it-is-less-than-zero-in-reactjs

2. console - Warning Each child in a list should have a unique "key" prop 
https://stackoverflow.com/questions/71693355/warning-each-child-in-a-list-should-have-a-unique-key-prop

3. Goods.js, Shop.js 
Both need to change all to camel case format. Just follow JS format from now on.

4. For some reason, from cart, item #6 on Shop displays as always. This might be due to recognition error (#1 - #5.) How about #6?

Bonus.
Do 'code spliting (bundled)'

Don't do on this project unless applicable:
- react-query - not for this one. But let me see if any possible implementation spot does exist. Perhaps state?
- axios - well not this time, obviously.
