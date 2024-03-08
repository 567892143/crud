const express = require('express');
const app = express();
const { Pool } = require('pg');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'auth',
    password: 'dinesh2003',
    port: 5432,
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the API</h1><h2>hiii</h2>');
});

app.get('/users',  async (req,res) => {
     
    pool.query("SELECT * FROM users", (err, resp)=>{
        if(err){
            console.log(err);
            return ;
        }
        else{
            res.send(resp.rows);

        }


})
});

app.delete('/users/:name', async (req, res) => {
    const { name } = req.params;
    try {
       
        const user = await pool.query('SELECT * FROM users WHERE name = $1', [name]);
        if (user.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

       
        await pool.query('DELETE FROM users WHERE name = $1', [name]);
        
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Error deleting user' });
    }
});



app.post('/users', async (req, res) => {
    try {
      const { name, email, dateOfBirth, phoneNumber } = req.body;
      const query = 'INSERT INTO users (name, email, date_of_birth, phone_number) VALUES ($1, $2, $3, $4)';
      await pool.query(query, [name, email, dateOfBirth, phoneNumber]);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'An internal server error occurred' });
    }
  });

  app.patch('/users', async (req, res) => {
    try {
        const { name, email, dateOfBirth, phoneNumber } = req.body;
        const query = 'UPDATE users SET email = $2, date_of_birth = $3, phone_number = $4 WHERE name = $1;';
        await pool.query(query, [name, email, dateOfBirth, phoneNumber]);
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
      }
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
