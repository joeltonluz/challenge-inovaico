const db = require('../database/db');

module.exports = {
  all() {
    const qry = `
      SELECT schedules.id, id_patient, patients.name as name_patient, date, notes
      FROM schedules
      INNER JOIN patients on patients.id = schedules.id_patient`;

    return db.query(qry);
  },

  findById(id) {
    const qry = `
      SELECT schedules.id, id_patient, patients.name as name_patient, date, notes
      FROM schedules
      INNER JOIN patients on patients.id = schedules.id_patient
      WHERE schedules.id = $1`;

    return db.query(qry,[id]);
  },

  post(data) {
    const qry = `
      INSERT INTO schedules
        (id_patient, date, notes)
      VALUES
        ($1, $2, $3)`;

    const values = [
      data.id_patient,
      data.date,
      data.notes
    ];

    return db.query(qry,values);
  },

  put(id, notes) {
    const qry = `
      UPDATE schedules
      SET notes = $2
      WHERE id = $1`;

    return db.query(qry,[id,notes]);
  }
}