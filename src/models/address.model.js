import Sequelize from "sequelize";
import { connection } from "../db-conn.js";

const Address = connection.define("Addresses", {
    id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    line1: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [2, 60],
        trim: true,
    },
    line2: {
        type: Sequelize.STRING,
        len: [2, 50],
        trim: true,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [2, 50],
        trim: true,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [2, 50],
        trim: true,
    },
    zip: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [2],
        trim: true,
    },
    fullAddress: {
        type: Sequelize.CITEXT,
        allowNull: false,
        len: [2, 400],
        trim: true,
        unique: true
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    },
});

export default Address;
