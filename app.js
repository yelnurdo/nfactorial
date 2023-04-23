const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/mydb';
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Database connected!');
  db.close();
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db('mydb');
    dbo.createCollection('customers', function(err, res) {
      if (err) throw err;
      console.log('Collection created!');
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db('mydb');
  const myobj = { name: 'John Doe', address: '123 Main St' };
  dbo.collection('customers').insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log('1 document inserted');
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db('mydb');
    dbo.collection('customers').find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
  