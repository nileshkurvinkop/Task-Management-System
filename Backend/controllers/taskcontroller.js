const { poolPromise, sql } = require('../db');

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const pool = await poolPromise;
    const tasks = await pool.request()
      .input('UserId', sql.Int, 1) //  Hardcoded UserId for testing
      .query('SELECT * FROM Tasks WHERE UserId=@UserId');
    res.json(tasks.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
  // res.send('Backend rg');
};

// Add a new task
exports.addTask = async (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('UserId', sql.Int, 1) // Hardcoded UserId
      .input('Title', sql.NVarChar, title)
      .input('Description', sql.NVarChar, description)
      .input('DueDate', sql.DateTime, dueDate)
      .input('Priority', sql.NVarChar, priority)
      .input('Status', sql.NVarChar, status)
      .query(`INSERT INTO Tasks (UserId, Title, Description, DueDate, Priority, Status, CreatedAt)
              VALUES (@UserId,@Title,@Description,@DueDate,@Priority,@Status, GETDATE())`);
    res.status(201).json({ message: 'Task added' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  
  const { title, description, dueDate, priority, status } = req.body;
  const taskId = req.params.id;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('TaskId', sql.Int, taskId)
      .input('UserId', sql.Int, 1) // Hardcoded UserId
      .input('Title', sql.NVarChar, title)
      .input('Description', sql.NVarChar, description)
      .input('DueDate', sql.DateTime, dueDate)
      .input('Priority', sql.NVarChar, priority)
      .input('Status', sql.NVarChar, status)
      .query(`UPDATE Tasks 
              SET Title=@Title, Description=@Description, DueDate=@DueDate, Priority=@Priority, Status=@Status 
              WHERE TaskId=@TaskId AND UserId=@UserId`);
    res.json({ message: 'Task updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('TaskId', sql.Int, taskId)
      .input('UserId', sql.Int, 1) // ✅ Hardcoded UserId
      .query('DELETE FROM Tasks WHERE TaskId=@TaskId AND UserId=@UserId');
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
