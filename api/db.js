import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'123456789Minu',
    database:'asocdatabase'
})

db.connect(err => {
    if(err) console.log(err)
    else console.log("Connected to database")
})
