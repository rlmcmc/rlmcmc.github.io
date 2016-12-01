var exp = require ('express'),
    mstE = require('mustache-express'),
    bdPars = require('body-parser'),
    methodOverride = require('method-override'),
    pgp = require('pg-promise')(),
    db = pgp('postgres://robertmathewsiii@localhost:5432/zoology_db'),
    app = exp(),
    Yelp = require('yelp'),
    fetch = require('node-fetch'),
    session = require('express-session');

app.engine('html', mstE());
app.set('view engine','html');
app.set('views',__dirname + '/views');
app.use('/', exp.static(__dirname + '/public'));
app.use(methodOverride('_method'))
app.use(bdPars.urlencoded({ extended: false }));
app.use(bdPars.json());

app.use(session({
  secret: 'theTruthIsOutThere51',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//home page
app.get('/', function(req, res){
  // var logged_in;
  // var email;

  // if(req.session.user){
  //   logged_in = true;
  //   email = req.session.user.email;
  // }

  // var data = {
  //   "logged_in": logged_in,
  //   "email": email
  // }
  res.render('home/index')
});

//sign up page
app.get("/sign-up", function(req, res){
  res.render('sign-up/index')
});

// app.post('/sign-up', function(req, res){
//   var data = req.body;

//   bcrypt.hash(data.password, 10, function(err, hash){
//     db.none(
//       "INSERT INTO users (email, password_digest) VALUES ($1, $2)",
//       [data.email, hash]
//     ).then(function(){
//       res.send('User created!');
//     })
//   });
// })

//sign in page

app.get('/sign-in', function(req, res){
  res.render('sign-in/index')
});

// app.post('/login', function(req, res){
//   var data = req.body;

//   db.one(
//     "SELECT * FROM users WHERE email = $1",
//     [data.email]
//   ).catch(function(){
//     res.send('Email/Password not found.')
//   }).then(function(user){
//     bcrypt.compare(data.password, user.password_digest, function(err, cmp){
//       if(cmp){
//         req.session.user = user;
//         res.redirect('/');
//       } else {
//         res.send('Email/Password not found.')
//       }
//     });
//   });
// });

//states page
app.get('/states', function(req, res){
    res.render('states/index');

  });

app.post('/info', function(req, res){

   var state = req.body.state
  // console.log(req.body)
  fetch('https://developer.nps.gov/api/v0/parks?stateCode='+state, {
    method: 'GET',
    headers: { "Authorization": "6047EBD8-4C76-4996-9A3D-C4746F229420"},
  })
   .then(function(data){
    // console.log(data.blob())
    return data.json()
   })
   .then(function(json){
    console.log(json.data)
    res.render('states/index', {stateChosen: json.data})
    //res.json(json)
   })
   .catch(function(err){
    console.log('err' + err);
   })
})

app.listen(3000, function(){
  console.log('magic on 3k');
});




