import express from 'express';
import * as userApi from '../../controller/user/usercontroller.js';

const userRouter = express.Router();

// userRouter.post('/signup', userApi.createUser);

userRouter.get('/user', userApi.getUserInfo)

userRouter.post('/createuser', userApi.createUser);



userRouter.get('/userlist', userApi.getUserList)



export default userRouter;