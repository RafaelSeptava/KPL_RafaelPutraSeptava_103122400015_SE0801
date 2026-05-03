import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Film Pribadi",
            version: "1.0.0",
            description: "API sederhana untuk menyimpan film pribadi",
        },
    },
    apis: ["./app.js"],
};

const specs = swaggerJsdoc(option);

export {
    specs,
    swaggerUi,
}