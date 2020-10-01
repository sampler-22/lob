import Address from "../models/address.model.js";
import {
    parseNullValue,
    getCachedData,
    addDataToCache,
} from "./controller.helper.js";
import Sequelize from "sequelize";

const Op = Sequelize.Op;

const joinAddress = (body) => {
    const joined = body.line2
        ? `${parseNullValue(body.line1)} ${parseNullValue(
              body.line2
          )} ${parseNullValue(body.city)} ${parseNullValue(
              body.state
          )} ${parseNullValue(body.zip)}`
        : `${parseNullValue(body.line1)} ${parseNullValue(
              body.city
          )} ${parseNullValue(body.state)} ${parseNullValue(body.zip)}`;

    return joined;
};

export const addresses = async (req, res) => {
    try {
        const _key = "_lob_" + req.originalUrl || req.url;
        const _cached = getCachedData(_key);

        if (_cached) {
            _cached.message = "fetched from cache";
            return res.send(_cached);
        }

        let _data = await Address.findAll();

        if (_data) {
            const _result = addDataToCache(
                _key,
                "Addresses fetched successfully",
                _data
            );

            res.status(200).json(_result);
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const filterAddress = async (req, res) => {
    try {
        const _key = "_lob_" + req.originalUrl || req.url;
        const _cached = getCachedData(_key);

        if (_cached) {
            _cached.message = "fetched from cache";
            return res.send(_cached);
        }

        let _data = await Address.findAll({
            limit: 5,
            where: {
                fullAddress: {
                    [Op.like]: `%${req.params.val}%`,
                },
            },
        });

        if (_data) {
            const _result = addDataToCache(_key, "filtered addresses", _data);

            res.status(200).json(_result);
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const address = async (req, res) => {
    try {
        const _key = "_lob_" + req.originalUrl || req.url;
        const _cached = getCachedData(_key);

        if (_cached) {
            _cached.message = "fetched from cache";
            return res.send(_cached);
        }

        let _data = await Address.findOne({ where: { id: req.params.id } });

        if (_data) {
            const _result = addDataToCache(
                _key,
                "Address fetched successfully",
                _data
            );

            res.status(200).json(_result);
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const createAddress = async (req, res) => {
    try {
        const joined = joinAddress(req.body);

        const result = await Address.create({
            line1: req.body.line1,
            line2: req.body.line2 ? req.body.line2 : "",
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            fullAddress: joined,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });

        if (result) {
            res.status(201).json({
                success: false,
                message: "Address created successfully",
                data: result,
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateAddress = async (req, res) => {
    try {
        const joined = joinAddress(req.body);

        let _data = await Address.update(
            {
                line1: req.body.line1,
                line2: req.body.line2 ? req.body.line2 : "",
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                fullAddress: joined,
                updatedAt: Date.now(),
            },
            { returning: true, where: { id: req.params.id } }
        );

        if (_data) {
            res.status(200).json({
                success: true,
                message: "Address updated successfully",
                data: _data,
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteAddress = async (req, res) => {
    try {
        const _data = await Address.destroy({ where: { id: req.params.id } });

        if (_data) {
            res.status(204).json({
                success: true,
                message: "Address delete successfully",
                data: _data,
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
