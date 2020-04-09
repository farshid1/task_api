const express = require('express');
const router = express.Router();

const TASK_STATUS = Object.freeze({
  TO_DO: 500000007,
  IN_PROGRESS: 500000006,
  READY_FOR_TEST: 500000010,
  DONE: 500000009,
});

const CLUBHOUSE_API_KEY = '5e8d56aa-bcbc-466f-868a-c0d9eaf291e6';
const CLUBHOUSE_ORGANIZATION_ID = '5e8d54ee-9a6f-4a2a-9be1-2d2d48a740a3';
/* GET tasks listing. */
router.get('/', (req, res, next) => {
  /* TODO
   * 1. Fetch data from Clubhouse API
   * 2. Parse and format data
   * 3. Return result to the client
   */
  res.json([]);
});

module.exports = router;
