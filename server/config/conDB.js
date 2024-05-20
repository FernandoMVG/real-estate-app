const mongoose = require('mongoose');
const express = require('express');

const mongoURI = 'mongodb://0.0.0.0:27017/Property';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.err("Connection to db failed", err);
        process.exit(1)
    }
};

module.exports = connectDB;

