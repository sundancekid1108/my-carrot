import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
// import prismaclient from "../../libs/prismaclient";

const client = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// await client.user.create({
	// 	data: {
	// 		email: "hi",
	// 		name: "hi",
	// 	},
	// });
	res.json({
		ok: true,
	});
}
