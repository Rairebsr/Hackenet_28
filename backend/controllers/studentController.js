import StudentResult from "../model/StudentResult.js";

export const addone = async (req, res) => {
  try {
    const result = await StudentResult.create(req.body);
    res.status(201).json({ message: 'Result added', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding result' });
  }
};

export const addbulk = async (req, res) => {
  try {
    const inserted = await StudentResult.insertMany(req.body);
    res.status(201).json({ message: 'Bulk results added', inserted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Bulk insert failed' });
  }
};
