// import PatientController

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient

router.get(`/patients`, PatientController.index);

// router.post(`/patients`, PatientController.store);

// router.put(`/patients/:id`, PatientController.update);

// router.delete(`patients/:id`, PatientController.destroy);

// router.get(`/patients/:id`, patientController.show);

// router.get(patients/search/:name, patientController.search);

// router.get(/patients/status/positive, patientController.positive);

// router.get(/patients/status/recovered, patientController.recovered);

// router.get(/patients/status/dead, patientController.dead);

// export router
module.exports = router;
