var express = require('express');
var mysql = require('mysql');
var app = express();

var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'sampleDB'
});

connection.connect(function(error) {
	if(!!error) {
		console.log('Error');
	} else {
		console.log('Connected');
	}
});

const app = express();
app.get('/createdb', (req,res) => {
	let sql = 'CREATE DATABASE sampleDB';
	db.query(sql, (err, result) => {
		if(err) throw err;
		res.send('database created...')

app.get('/table1', (req, res) => {
	let sql = 'CREATE TABLE ARMOR(product_name varchar(20), weight_code float, damage_code varchar(180), PRIMARY KEY int (product_ID))'
	db.query(sql, (err, result) => {
		if(err) throw err;
		res.send('Armor table created')
})

app.get('/table2', (req, res) => {
	let sql = 'CREATE TABLE WEAPONS(product_name varchar(20), weight_code float, damage_code varchar(180), PRIMARY KEY int (product_ID))'
	db.query(sql, (err, result) => {
		if(err) throw err;
		res.send('Weapons table created')
})

app.get('/table3', (req, res) => {
	let sql = 'CREATE TABLE Quest_Items(product_name varchar(20), weight_code float, source_code varchar(180), PRIMARY KEY int (product_ID))'
	db.query(sql, (err, result) => {
		if(err) throw err;
		res.send('Quest_Items table created')
})

app.get('/table4', (req, res) => {
	let sql = 'CREATE TABLE Trophies(product_name varchar(20), source_code float, effect_code varchar(180), PRIMARY KEY int (product_ID))'
	db.query(sql, (err, result) => {
		if(err) throw err;
		res.send('Trophies table created')
})

app.get('/table5', (req, res) => {
	let sql = 'CREATE TABLE Alchemy_Ingredients(product_name varchar(20), size_code float, damage_code varchar(180), PRIMARY KEY int (product_ID))'
	db.query(sql, (err, result) => {
		if(err) throw err;
		res.send('Alchemy_Ingredients table created')
})

app.get('/table6', (req, res) => {
	let sql = 'CREATE TABLE Crafting_Components(product_name varchar(20), size_code float, damage_code varchar(180), PRIMARY KEY int (product_ID))'
	db.query(sql, (err, result) => {
		if(err) throw err;
		res.send('Crafting_Components table created')
})

app.get('/table7', (req, res) => {
	let sql = 'CREATE TABLE Geralt(product_name varchar(20), size_code float, damage_code varchar(180), PRIMARY KEY int (product_ID))'
	db.query(sql, (err, result) => {
		if(err) throw err;
		res.send('Geralt table created')
})


app.get('/addtable1item1', (req, res) => {
	let armor = {product_name='Angrenian Cuirass (magic)', weight_code='6.59',damage_code='+25% Resistance to piercing damage +25% Resistance to bludgeoning damage +35-38% Resistance to slashing damage +3% Resistance to damage from monsters', product_id='1234'};
	let sql = 'INSERT INTO ARMOR ?';
	let query = db.query(sql, armor,(err, result) => {
		if(err) throw err;
		res.send('Item1 for table1 created')
})

app.get('/addtable1item2', (req, res) => {
	let armor = {product_name='Enhanced Legendary Feline Armor (light)', weight_code='6.31', damage_code='+24% Attack Power +14% Resistance to piercing damage +20% Resistance to slashing damage +20% Resistance to damage from monsters +47% Resistance to elemental damage', product_id='4678'};
	let sql = 'INSERT INTO ARMOR ?';
	let query = db.query(sql, armor,(err, result) => {
		if(err) throw err;
		res.send('Item2 for table1 created')
})

app.get('/addtable1item3', (req, res) => {
	let armor = {product_name='Griffin Armor', weight_code='3.35', damage_code'+5% Sign intensity +5% Resistance to piercing damage +5% Resistance to bludgeoning damage +10% Resistance to slashing damage +15% Resistance to damage from monsters', product_id='9123'};
	let sql = 'INSERT INTO ARMOR ?';
	let query = db.query(sql, armor,(err, result) => {
		if(err) throw err;
		res.send('Item3 for table1 created')
})

app.get('/addtable1item4', (req, res) => {
	let armor = {product_name='Undvik Armor (Heavy)', weight_code='6.01', damage_code'+35% Resistance to piercing damage +35% Resistance to bludgeoning damage +40% Resistance to slashing damage +10% Resistance to damage from monsters +10% Resistance to elemental damage', product_id='2329'};
	let sql = 'INSERT INTO ARMOR ?';
	let query = db.query(sql, armor,(err, result) => {
		if(err) throw err;
		res.send('Item4 for table1 created')
})

app.get('/addtable1item5', (req, res) => {
	let armor = {product_name='Eternal Fire Executioner’s armor', weight_code='6.38', damage_code'+20% Resistance to piercing damage +20% Resistance to bludgeoning damage +30% Resistance to slashing damage', product_id='3455'};
	let sql = 'INSERT INTO ARMOR ?';
	let query = db.query(sql, armor,(err, result) => {
		if(err) throw err;
		res.send('Item5 for table1 created')
})

app.get('/addtable2item1', (req, res) => {
	let weapons = {product_name='Battle Axe', weight_code='1.76', damage_code'1% critical hit chance 22 armor piercing', product_id='1234'};
	let sql = 'INSERT INTO Weapons ?';
	let query = db.query(sql, weapons,(err, result) => {
		if(err) throw err;
		res.send('Item1 for table2 created')
})

app.get('/addtable2item2', (req, res) => {
	let weapons = {product_name='CrossBow', weight_code='0.77', damage_code'+101% attack power', product_id='4678'};
	let sql = 'INSERT INTO Weapons ?';
	let query = db.query(sql, weapons,(err, result) => {
		if(err) throw err;
		res.send('Item2 for table2 created')
})

app.get('/addtable2item3', (req, res) => {
	let weapons = {product_name='Heavy Mace', weight_code='6.26', damage_code'+28-34 bludgeoning damage', product_id='9123'};
	let sql = 'INSERT INTO Weapons ?';
	let query = db.query(sql, weapons,(err, result) => {
		if(err) throw err;
		res.send('Item3 for table2 created')
})

app.get('/addtable2item4', (req, res) => {
	let weapons = {product_name='Poker', weight_code='1.51', damage_code'+29 bludgeoning damage', product_id='2329'};
	let sql = 'INSERT INTO Weapons ?';
	let query = db.query(sql, weapons,(err, result) => {
		if(err) throw err;
		res.send('Item4 for table2 created')
})


app.get('/addtable2item5', (req, res) => {
	let weapons = {product_name='Wooden Sword', weight_code='0.28', damage_code'+29 bludgeoning damage', product_id='2329'};
	let sql = 'INSERT INTO Weapons ?';
	let query = db.query(sql, weapons,(err, result) => {
		if(err) throw err;
		res.send('Item5 for table2 created')
})


app.get('/addtable3item1', (req, res) => {
	let questItems = {product_name='Albino Bruxa Tongue', weight_code='0', source_code'Table in Kaer Morhen Keep', product_id='1234'};
	let sql = 'INSERT INTO Quest Items ?';
	let query = db.query(sql, questItems,(err, result) => {
		if(err) throw err;
		res.send('Item1 for table3 created')
})

app.get('/addtable3item2', (req, res) => {
	let questItems = {product_name='Agate', weight_code='.01', source_code'Loot from Phillipa’s Hideout', product_id='4678'};
	let sql = 'INSERT INTO Quest Items ?';
	let query = db.query(sql, questItems,(err, result) => {
		if(err) throw err;
		res.send('Item2 for table3 created')
})


app.get('/addtable3item3', (req, res) => {
	let questItems = {product_name='Bird Mask', weight_code='.06', source_code'Purchase', product_id='9123'};
	let sql = 'INSERT INTO Quest Items ?';
	let query = db.query(sql, questItems,(err, result) => {
		if(err) throw err;
		res.send('Item3 for table3 created')
})


app.get('/addtable3item4', (req, res) => {
	let questItems = {product_name='Botchling Blood', weight_code='0.01', source_code'Botchling', product_id='2329'};
	let sql = 'INSERT INTO Quest Items ?';
	let query = db.query(sql, questItems,(err, result) => {
		if(err) throw err;
		res.send('Item4 for table3 created')
})

app.get('/addtable3item5', (req, res) => {
	let questItems = {product_name='Botchling Blood', weight_code='0.01', source_code'Botchling', product_id='2329'};
	let sql = 'INSERT INTO Quest Items ?';
	let query = db.query(sql, questItems,(err, result) => {
		if(err) throw err;
		res.send('Item5 for table3 created')
})

app.get('/addtable4item1', (req, res) => {
	let trophies = {product_name='Ekhidna Trophy', source_code='Melusine', effect_code'5% Bonus gold', product_id='1234'};
	let sql = 'INSERT INTO Trophies ?';
	let query = db.query(sql, trophies,(err, result) => {
		if(err) throw err;
		res.send('Item1 for table4 created')
})

app.get('/addtable4item2', (req, res) => {
	let trophies = {product_name='Griffin Trophy', source_code='The Beast of White Orchard', effect_code'10% Chance to dismember', product_id='1234'};
	let sql = 'INSERT INTO Trophies ?';
	let query = db.query(sql, trophies,(err, result) => {
		if(err) throw err;
		res.send('Item2 for table4 created')
})

app.get('/addtable4item3', (req, res) => {
	let trophies = {product_name='Leshen Trophy', source_code='Kernun Woodland Spirit', effect_code'5% Bonus experience from monsters', product_id='9123'};
	let sql = 'INSERT INTO Trophies ?';
	let query = db.query(sql, trophies,(err, result) => {
		if(err) throw err;
		res.send('Item3 for table4 created')
})

app.get('/addtable4item4', (req, res) => {
	let trophies = {product_name='Succubus Trophy', source_code='Salma Succubi', effect_code'5% Bonus gold', product_id='2329'};
	let sql = 'INSERT INTO Trophies ?';
	let query = db.query(sql, trophies,(err, result) => {
		if(err) throw err;
		res.send('Item4 for table4 created')
})

app.get('/addtable4item5', (req, res) => {
	let trophies = {product_name='Forktail trophy', source_code='The Dragon of Fyresdal', effect_code'5% bonus experience from monsters', product_id='3455'};
	let sql = 'INSERT INTO Trophies ?';
	let query = db.query(sql, trophies,(err, result) => {
		if(err) throw err;
		res.send('Item5 for table4 created')
})

//app.listen(3000);