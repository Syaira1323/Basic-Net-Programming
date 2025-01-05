const db = require('../koneksi');

// Mendapatkan semua data
const getAllDatas = (req, res) => {
    const query = 'SELECT * FROM biodata_mahasiswa';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Mendapatkan data berdasarkan ID
const getDataById = (req, res) => {
    const query = 'SELECT * FROM biodata_mahasiswa WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]);
    });
};

//Menambahkan data baru
const addData = (req, res) => {
    const { id, name, email, username, password } = req.body;
    const query = 'INSERT INTO biodata (id, name, email, username, password) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [id, name, email, username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id, name, email, username, password });
    });
};


// Memperbarui data
const updateData = (req, res) => {
    const { id, name, email, username, password } = req.body;
    const query = 'UPDATE biodata SET id = ?, name = ?, email = ?, username = ?, password = ? WHERE id = ?';
    db.query(query, [id, name, email, username, password, req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Data updated successfully' });
    });
};

// Menghapus data
const deleteData = (req, res) => {
    const query = 'DELETE FROM biodata WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Data deleted successfully' });
    });
};

module.exports = { getAllDatas, getDataById, addData, updateData, deleteData };
