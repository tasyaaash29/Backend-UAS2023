// import database
const db = require("../config/database");

// membuat class Patient
class Patient {
  static all() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM patients";
        db.query(query, (err, results) => {
            resolve(results);
        });
    });
  }

  static find (id) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM patients WHERE id = ?";
        db.query(sql, id, (err, results) => {
            const patient = results;
            resolve(patient);
        });
    });
  }

  static async create(data) {
      const id = await new Promise((resolve, reject) => {

      const sql = "INSERT INTO patients SET ?";
        db.query(sql, data, (err, results) => {
          resolve(results.insertId);
        });
    });
    
    const patient = await this.find(id);
    return patient;
  }

  static async update (id, data) {
    await new Promise((resolve, reject) => {
        const sql = `UPDATE patients SET ? WHERE id = ?`;
        db.query(sql, [data, id], (err, results) => {
            resolve(results);
        });
    })

    const patient = await this.find(id);
    return patient;
  }

  static async delete (id) {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM patients WHERE id = ?`;
        db.query(sql, id, (err, result) => {
            resolve(result);
        });
    })
  }

  static search (name) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM patients WHERE name = ?";
        db.query(sql, name, (err, results) => {
            const patient = results;
            resolve(patient);
        });
    });
  }

  static positive() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM patients WHERE status = 'positive'";
        db.query(sql, (err, results) => {
            const patient = results;
            resolve(patient);
        });
    });
  }

  static recovered() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM patients WHERE status = 'recovered'";
        db.query(sql, (err, results) => {
            const patient = results;
            resolve(patient);
        });
    });
  }

  static dead() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM patients WHERE status = 'dead'";
        db.query(sql, (err, results) => {
            const patient = results;
            resolve(patient);
        });
    });
  }
}


// export class Patient
module.exports = Patient;