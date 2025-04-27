const Client = require("../models/Client");
const Program = require("../models/Program");
const { encrypt, decrypt } = require("../utils/encryption");

exports.createClient = async (req, res) => {
  try {
    const encryptedData = {
      ...req.body,
      contactNumber: encrypt(req.body.contactNumber),
      address: encrypt(req.body.address),
      medicalHistory: req.body.medicalHistory
        ? encrypt(req.body.medicalHistory)
        : encrypt(""),
    };

    const client = new Client(encryptedData);
    await client.save();

    // Decrypt fields before sending response
    const decryptedClient = {
      ...client.toObject(),
      contactNumber: decrypt(client.contactNumber),
      address: decrypt(client.address),
      medicalHistory: decrypt(client.medicalHistory),
    };

    res.status(201).json(decryptedClient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getClients = async (req, res) => {
  
  try {
    const clients = await Client.find();

    const decryptedClients = clients.map((client) => {
      try {
        return {
          ...client.toObject(),
          contactNumber: decrypt(client.contactNumber),
          address: decrypt(client.address),
          medicalHistory: decrypt(client.medicalHistory),
        };
      } catch (error) {
        console.error("Error decrypting client data:", error);
        return client; // Or handle error as needed
      }
    });
    

    res.json(decryptedClients);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch clients" });
  }
};

exports.getClientProfile = async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientId).populate(
      "enrolledPrograms"
    );
    if (!client) return res.status(404).json({ message: "Client not found" });

    const decryptedClient = {
      ...client.toObject(),
      contactNumber: decrypt(client.contactNumber),
      address: decrypt(client.address),
      medicalHistory: decrypt(client.medicalHistory),
    };

    res.json(decryptedClient);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch client profile" });
  }
};

exports.searchClients = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q)
      return res.status(400).json({ error: "Search query (q) is required" });

    const clients = await Client.find({
      fullName: { $regex: q, $options: "i" },
    });

    const decryptedClients = clients.map((client) => ({
      ...client.toObject(),
      contactNumber: decrypt(client.contactNumber),
      address: decrypt(client.address),
      medicalHistory: decrypt(client.medicalHistory),
    }));

    res.json(decryptedClients);
  } catch (err) {
    res.status(500).json({ error: "Failed to search clients" });
  }
};

exports.enrollPrograms = async (req, res) => {
  try {
    const { clientId } = req.params;
    const { programIds } = req.body;

    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ message: "Client not found" });

    programIds.forEach((pid) => {
      if (!client.enrolledPrograms.includes(pid)) {
        client.enrolledPrograms.push(pid);
      }
    });

    await client.save();

    const decryptedClient = {
      ...client.toObject(),
      contactNumber: decrypt(client.contactNumber),
      address: decrypt(client.address),
      medicalHistory: decrypt(client.medicalHistory),
    };

    res.json(decryptedClient);
  } catch (err) {
    res.status(500).json({ error: "Failed to enroll programs" });
  }
};
