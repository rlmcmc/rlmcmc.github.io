var exp = require ('express'),
    mstE = require('mustache-express'),
    bdPars = require('body-parser'),
    methodOverride = require('method-override'),
    pgp = require('pg-promise')(),
    db = pgp('postgres://robertmathewsiii@localhost:5432/zoology_db'),
    app = exp(),
    Yelp = require('yelp'),
    fetch = require('node-fetch');

app.engine('html', mstE());
app.set('view engine','html');
app.set('views',__dirname + '/views');
app.use('/', exp.static(__dirname + '/public'));
app.use(methodOverride('_method'))
app.use(bdPars.urlencoded({ extended: false }));
app.use(bdPars.json());

//home page
app.get('/', function(req, res){
  res.render('home/index')
});

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
    console.log('POST DATA', json);
    // res.redirect('/');
    //console.log(json.data)
    res.render('states/index', json)
   })
   .catch(function(err){
    console.log('err');
   })
})

app.listen(3000, function(){
  console.log('magic on 3k, yo.');
});




