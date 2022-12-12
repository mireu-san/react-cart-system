# How to run this program


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

