// import Model Patient
const Patient = require("../models/Patient");

// buat class PatientController
class PatientController {
  async index(req, res) {
    const patients = await Patient.all();

    if (patients.length > 0) {
        const data = {
            message :`Get All Resource`,
            data : patients
        };
        res.status(200).json(data);
    }
    else {
        const data = {
        message : `Data is Empty`,
    };

        res.status(200).json(data);
    }
  }
  async store(req, res) {
    const patient = await Patient.create(req.body);

    const data = {
        message :`Resource is added successfully`,
        data : patient
    };

    return res.status(201).json(data);
  }

  async update (req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    if (patient) {
        const patient = await Patient.update(id, req.body);
        const data = {
            message :`Resource is updated successfully`,
            data : patient
        };
        res.status(200).json(data);
    }
    else {
    const data = {
        message :` Resource not found`,
    };

        res.status(404).json(data);
    }
  }

  async destroy (req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    if (patient) {
        await Patient.delete(id);
        const data = {
            message : `Resource is deleted successfully`,
        };
        res.status(200).json(data);
    }
    else {
    const data = {
        message : `Resource not found`,
    };

        res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    if (patient) {
        const data = {
            message : `Get Resource By Id`,
            data : patient
        };
        res.status(200).json(data);
    }
    else {
    const data = {
        message : `Patient not found`,
    };

        res.status(404).json(data);
    }
  }
  async search(req, res) {
    const { name } = req.params;
    
    const patients = await Patient.search(name);
    if (patients.length > 0) {
      const data = {
        message: `Get Resource By resource name`,
        data: patients,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Resource not found`,
      };
      res.status(404).json(data);
    }
  }

  async positive(req, res) {
    const patients = await Patient.positive();

    if (patients.length > 0) {
        const data = {
            message :`Get Resource`,
            data : patients
        };
        res.status(200).json(data);
    }
    else {
        const data = {
        message : `Data is Empty`,
    };

        res.status(200).json(data);
    }
  }

  async recovered(req, res) {
    const patients = await Patient.recovered();

    if (patients.length > 0) {
        const data = {
            message :`Get recovered Resource`,
            data : patients
        };
        res.status(200).json(data);
    }
    else {
        const data = {
        message : `Data is Empty`,
    };

        res.status(200).json(data);
    }
  }

  async dead(req, res) {
    const patients = await Patient.dead();

    if (patients.length > 0) {
        const data = {
            message :`Get dead Resource`,
            data : patients
        };
        res.status(200).json(data);
    }
    else {
        const data = {
        message : `Data is Empty`,
    };

        res.status(200).json(data);
    }
  }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;