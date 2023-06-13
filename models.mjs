


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "my_api"
})

db.connect(function (error) {
    // if (error) {
    //     console.log("Error: ", error);
    // }
    // else {
        console.log("Connected")
    // }
})
//   const sql = "CREATE TABLE first_po1 (id int, address VARCHAR(255))";
//   db.query(sql, function(err , result){
//     if(err) throw err ;

//     console.log("Create");
//   })
//   const sql1 = "INSERT INTO first_po (id, address) VALUES (14, 'HydraBaad')";
//   db.query(sql1, function(err , result){
//     if(err) throw err ;

//     console.log("Create");
//   })

// const sql1 = "DELETE FROM first_po WHERE id=10";
// db.query(sql1, function(err , result){
//   if(err) throw err ;

//   console.log("Create");
// })

// const sql1 = "UPDATE first_po SET address = 'IslamaBaad' WHERE id = 10";
//   db.query(sql1, function(err , result){
//     if(err) throw err ;

//     console.log("Create");
//   })

// const sql1 = "SELECT * FROM first_po";
//   db.query("SELECT * FROM first_po", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })

//   const sql1 = "SELECT address FROM first_po WHERE id=10";
//   db.query(sql1, function(err , result){
//     if(err) console.log( "err" , err);


//     console.log("result" , result);
//   })

//   const sql1 = "SELECT * FROM first_po WHERE id=10";
//   db.query(sql1, function(err , result){
//     if(err) console.log( "err" , err);


//     console.log("result" , result);
//   })

//   const sql1 = "SELECT * FROM first_po  WHERE id=10 AND address='karachi'";
//   db.query(sql1, function(err , result){
//     if(err) console.log( "err" , err);


//     console.log("result" , result);
//   })
// const sql1 = "SELECT * FROM first_po  WHERE id=10 address='karachi'";
//   db.query(sql1, function(err , result){
//     if(err) console.log( "err" , err);


//     console.log("result" , result);
//   })

// const sql1 = "SELECT * FROM first_po  WHERE NOT address='karachi'";
//   db.query(sql1, function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })

// db.query("SELECT * FROM first_po ORDER BY address", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })

// db.query("SELECT * FROM first_po ORDER BY address DESC", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })

// db.query("SELECT * FROM first_po ORDER BY address, id", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })

// db.query("SELECT * FROM first_po ORDER BY address ASC, id DESC", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })


// db.query("SELECT id FROM first_po WHERE address IS NULL", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })

////////////// NOT WORKING //////////////

// db.query("SELECT TOP 3 * FROM first_po", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })


// db.query("SELECT * FROM first_po LIMIT 3", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })

////////////// NOT WORKING //////////////

//   db.query("SELECT * FROM Customers FETCH FIRST 3 ROWS ONLY", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })

////////////// NOT WORKING //////////////

//   db.query("SELECT TOP 50 PERCENT * FROM first_po", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })


//   db.query("SELECT * FROM first_po WHERE address='Islamabaad' LIMIT 3", function(err , result){
//     if(err) console.log( "err" , err);

//     console.log("result" , result);
//   })


export default db;

