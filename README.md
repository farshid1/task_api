# Clubhouse API Integration
Sample Express application used for integrating with Clubhouse API

## Installation
1. Make sure you have [npx](https://www.npmjs.com/package/npx)
1. Clone/Fork the repo
1. `npm install`
1. `npm start`
1. Navigate to [http://localhost:3001/](http://localhost:3001/) to verify the express server is running

## Exercises
1. Checkout Clubhouse API [documentation](https://clubhouse.io/api/rest/v3/)
1. Fetch all the tasks for the project with id `13` in the `/tasks` endpoint
1. Format the output to the following format and return the list to the client
```
{
  assignee: 'Amy Wong',
  id: '47',
  title: 'Task 47',
  status: 'Done',
}
```
