const request = require('supertest');
const express = require('express');
const app = require('./app'); // Asegúrate de exportar tu app en app.js

describe('API Tests', () => {
    it('should return "¡Hola, mundo!" on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('¡Hola, mundo!');
    });

    it('should return a greeting message on GET /saludo/:nombre', async () => {
        const nombre = 'Juan';
        const response = await request(app).get(`/saludo/${nombre}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ mensaje: `¡Hola, ${nombre}!` });
    });
});
