const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');


const ADMIN_CODE = 'isgaareyoufree'; // Define the admin code

exports.registerAdmin = async (req, res) => {
    const { name, userId, email, password, adminCode } = req.body;

    try {
        if (adminCode !== ADMIN_CODE) {
            return res.status(400).json({ message: 'Invalid admin code' });
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const admin = new Admin({
            name,
            userId,
            email,
            password,
        });

        await admin.save();

        // Send confirmation email
        sendConfirmationEmail(email, name);

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
// Admin Login
exports.loginAdmin = async (req, res) => {
    const { email, userId, password } = req.body;

    try {
        const admin = await Admin.findOne({ $or: [{ email }, { userId }] });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        if (password !== admin.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
