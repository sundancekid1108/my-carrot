import { NextApiRequest, NextApiResponse } from "next";
import fnHandler from "../../../libs/server/fnHandler";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.body);
	return res.status(200).end();
}

export default fnHandler("POST", handler);
