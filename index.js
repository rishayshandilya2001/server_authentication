const bodyParser = require('body-parser');
const express = require('express');
const PORT = 3000;
const app = express();
let users=[];
app.use(bodyParser.json())
function checkifexist(un)
{
    for(let i=0;i<users.length;i++)
    {
        if(users[i].username==un)
        return true;
    }
    return false;
}


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/signup', (req, res) => {
    let username=req.body.username;
    if(checkifexist(username))
    {
        res.status(400).send("username allready exists")
    }
    else{
        users.push(req.body)
        console.log("users are this:- ",users)
        res.send("user added")
    }
  });



  //login feature

  function checkvaliduser(usernames,passwords)
  {
    for(let i=0;i<users.length;i++)
    {
        if(users[i].username==usernames)
        {
            if(users[i].password==passwords)
            {
                return true
            }
            else{
                return false;
            }
        }
    }
    return false;
  }

  app.post("/login",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    if(checkvaliduser(username,password))
    {
        res.status(200).send("user valid")
    }
    else{
        res.status(400).send("user invaid")
    }

  })

  //data retrieve or get feature
  app.get("/data", (req, res) => {
    console.log(users)
    res.send(users);
  });


  app.get('*', (req, res) => {
    res.status(404).send('404 Not Found');
  });
