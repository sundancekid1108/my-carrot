import User from '../../database/model/user/user.js'
import fs from 'fs'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const { ObjectId } = mongoose.Types;

//회원가입
export const createUser = (req, res) => {
    const { ...body } = req.body
    console.log(body.length)

    if (Object.keys(body).length !== 0) {
        return res.json(body)
    } else {
        return res.json({ response: 'Empty body' });
    }

}

export const getUserInfo = async (req, res) => {
    try {

        // const { name, type } = req.body;
        console.log(req.body)
    } catch (error) {
        console.log(error);
        res.json({ response: 'getUserInfo Error' });
    } finally {
        res.json({ response: 'getUserInfo success' });
    }
}

// Admin 유저 리스트 조회
export const getUserList = async (req, res) => {
    try {
        const users = await User.find({}, null, { sort: { _id: -1 } });
        res.json(users).status(200);

    } catch (e) {
        console.log(e);
        res.json({ response: 'getUserList Error' });
    }
};