import { NextApiRequest, NextApiResponse } from "next";
import fnHandler, { ResponseType } from "@libs/server/fnHandler";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const { token } = req.body;
	console.log(token);
	return res.status(200).end();
}

export default fnHandler("POST", handler);
