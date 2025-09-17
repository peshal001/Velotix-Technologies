const dotenv = require('dotenv');
dotenv.config({ path: '../src/.env' });

console.log('Email Service:', process.env.EMAIL_SERVICE);
console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
    const { fullName, helpType, industry, email, phone, country, company, message, newsletter, terms } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE || 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from:process.env.EMAIL_USER,
            to: email, 
            subject: 'New Contact Form Submission',
            html: `
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Help Type:</strong> ${helpType}</p>
                <p><strong>Industry:</strong> ${industry}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <p><strong>Newsletter Subscription:</strong> ${newsletter ? 'Yes' : 'No'}</p>
                <p><strong>Terms & Conditions Agreed:</strong> ${terms ? 'Yes' : 'No'}</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent to user:', info.response);
        res.json({ success: true, message: 'Form submitted successfully and confirmation sent to ' + email });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Error sending email.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});