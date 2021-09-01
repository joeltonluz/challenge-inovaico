const db = require('../database/db');

module.exports = {
  all() {  //Todos os Pacientes
    const qry = `
      SELECT id, name, birth_date, 
      case
        when gender='M' then 'Masculino'
        else 'Feminino'
      end as gender, 
      phone 
      FROM patients
      ORDER BY id`;

    return db.query(qry);
  },

  findById(id) {
    const qry = `
      SELECT id, name, birth_date, 
      case
        when gender='M' then 'Masculino'
        else 'Feminino'
      end as gender, 
      phone  
      FROM patients 
      WHERE id = $1`;

    return db.query(qry,[id]);
  },

  create(data) {
    const qry = `
      INSERT INTO patients
        (name, phone, email, birth_date, gender, height, weight)
      VALUES
        ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id`

    const values = [
      data.name,
      data.phone,
      data.email,
      data.birth_date,
      data.gender,
      data.height,
      data.weight
    ];

    return db.query(qry,values);
  },

  update(data, idPatient) {
    const qry = `
      UPDATE patients SET 
        name = ($1),
        phone = ($2),
        email = ($3),
        birth_date = ($4),
        gender = ($5),
        height = ($6),
        weight = ($7)
      WHERE
        id = ($8)`;
    
      const values = [
        data.name,
        data.phone,
        data.email,
        data.birth_date,
        data.gender,
        data.height,
        data.weight,
        idPatient
      ];

    return db.query(qry, values);
  },

  delete(idPatient) {
    const qry = `DELETE FROM patients WHERE ID = $1`;

    return db.query(qry,[idPatient]);
  }
}