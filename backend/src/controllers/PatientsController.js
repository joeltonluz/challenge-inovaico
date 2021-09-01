const express = require('express');
const Patient = require('../models/Patient');
//const { post } = require('../routes');


module.exports = {
  create(req, res) {
    let results = Patient.create(req)

    return res.send('Vou enviar para uma pagina de CRIAÇAO com os campos (Post será nessa pagina)');
  },

  async index(req, res) {
    const results = await Patient.all();
    let allPatients = results.rows;
    
    return res.json({allPatients});
    //return res.send(`Quantidade de Pacientes: ${results.rows[0]}`);
  },

  async show(req, res) {
    let results = await Patient.findById(req.params.id);
    let patient = results.rows;

    return res.json({patient});
  },

  async edit(req, res) {
    const results = await Patient.findById(req.params.id);

    return res.send('Vou enviar para uma pagina de edição com os campos (Sem PUT)');
  },

  async post(req, res) {  
    await Patient.create(req.body);

    return res.json([req.body]);
  },

  async put(req, res) {
    const { id } = req.headers;
    
    //Atualizar as informações do Chef, com o ID novo
    await Patient.update(req.body,req.headers.id);

    return res.redirect(`/patients/${req.headers.id}`);
  }, 

  async delete(req, res) {
    await Patient.delete(req.headers.id);

    return res.redirect('/');
  }
};