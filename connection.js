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

app.get('/addtable5item1', (req, res) => {
	let alchemy = {product_name='Battle Axe', size_code='1.76', damage_code'1% critical hit chance
22 armor piercing', product_id='12345'};
	let sql = 'INSERT INTO Alchemy Ingredients ?';
	let query = db.query(sql, alchemy,(err, result) => {
		if(err) throw err;
		res.send('Item1 for table5 created')
})

app.get('/addtable5item2', (req, res) => {
	let alchemy = {product_name='CrossBow', size_code='0.77', damage_code'+101% attack power', product_id='45637'};
	let sql = 'INSERT INTO Alchemy Ingredients ?';
	let query = db.query(sql, alchemy,(err, result) => {
		if(err) throw err;
		res.send('Item2 for table5 created')
})

app.get('/addtable5item3', (req, res) => {
	let alchemy = {product_name='Heavy Mace', size_code='6.26', damage_code'+28-34 bludgeoning damage', product_id='91234'};
	let sql = 'INSERT INTO Alchemy Ingredients ?';
	let query = db.query(sql, alchemy,(err, result) => {
		if(err) throw err;
		res.send('Item3 for table5 created')
})

app.get('/addtable5item4', (req, res) => {
	let alchemy = {product_name='Poker', size_code='1.51', damage_code'+29 bludgeoning damage', product_id='23297'};
	let sql = 'INSERT INTO Alchemy Ingredients ?';
	let query = db.query(sql, alchemy,(err, result) => {
		if(err) throw err;
		res.send('Item4 for table5 created')
})

app.get('/addtable5item5', (req, res) => {
	let alchemy = {product_name='Wooden Sword', size_code='0.28', damage_code'+20-24 bludgeoning damage', product_id='34556'};
	let sql = 'INSERT INTO Alchemy Ingredients ?';
	let query = db.query(sql, alchemy,(err, result) => {
		if(err) throw err;
		res.send('Item5 for table5 created')
})

app.get('/addtable6item1', (req, res) => {
	let cc = {product_name='Black Pearl', source_code='Buy sea shells, have them dismantles, then sell the pearl for a profit.', value_code'130', product_id='12343'};
	let sql = 'INSERT INTO Crafting Components ?';
	let query = db.query(sql, cc,(err, result) => {
		if(err) throw err;
		res.send('Item1 for table6 created')
})

app.get('/addtable6item2', (req, res) => {
	let cc = {product_name='Diamond', source_code='You can win a diamond from Zoltan in your first drinking contest with him.', value_code'132', product_id='46786'};
	let sql = 'INSERT INTO Crafting Components ?';
	let query = db.query(sql, cc,(err, result) => {
		if(err) throw err;
		res.send('Item2 for table6 created')
})

app.get('/addtable6item3', (req, res) => {
	let cc = {product_name='Dragon Scales', source_code='In Dethmold’s chest during Of His Blood and Bone', value_code'75', product_id='91235'};
	let sql = 'INSERT INTO Crafting Components ?';
	let query = db.query(sql, cc,(err, result) => {
		if(err) throw err;
		res.send('Item3 for table6 created')
})

app.get('/addtable6item4', (req, res) => {
	let cc = {product_name='Flawless ruby', source_code='loot', value_code'400', product_id='23219'};
	let sql = 'INSERT INTO Crafting Components ?';
	let query = db.query(sql, cc,(err, result) => {
		if(err) throw err;
		res.send('Item4 for table6 created')
})


app.get('/addtable6item5', (req, res) => {
	let cc = {product_name='Infused crystal', source_code='loot', value_code'120', product_id='34557'};
	let sql = 'INSERT INTO Crafting Components ?';
	let query = db.query(sql, cc,(err, result) => {
		if(err) throw err;
		res.send('Item5 for table6 created')
})


app.get('/addtable7item1', (req, res) => {
	let ch = {product_name='First Weapon', size_code='', damage_code'', product_id='12348'};
	let sql = 'INSERT INTO Geralt ?';
	let query = db.query(sql, ch,(err, result) => {
		if(err) throw err;
		res.send('Item1 for table7 created')
})


app.get('/addtable7item2', (req, res) => {
	let ch = {product_name='Quest Items', size_code='', damage_code'', product_id='46782'};
	let sql = 'INSERT INTO Geralt ?';
	let query = db.query(sql, ch,(err, result) => {
		if(err) throw err;
		res.send('Item2 for table7 created')
})

app.get('/addtable7item3', (req, res) => {
	let ch = {product_name='Armor', size_code='', damage_code'', product_id='91236'};
	let sql = 'INSERT INTO Geralt ?';
	let query = db.query(sql, ch,(err, result) => {
		if(err) throw err;
		res.send('Item3 for table7 created')
})

app.get('/addtable7item4', (req, res) => {
	let ch = {product_name='Alchemy', size_code='', damage_code'', product_id='32799'};
	let sql = 'INSERT INTO Geralt ?';
	let query = db.query(sql, ch,(err, result) => {
		if(err) throw err;
		res.send('Item4 for table7 created')
})


app.get('/addtable7item5', (req, res) => {
	let ch = {product_name='Crafting Components', size_code='', damage_code'', product_id='63726'};
	let sql = 'INSERT INTO Geralt ?';
	let query = db.query(sql, ch,(err, result) => {
		if(err) throw err;
		res.send('Item5 for table7 created')
})
//app.listen(3000);