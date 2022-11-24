import { NextApiRequest, NextApiResponse } from "next";
import fnHandler, { ResponseType } from "@libs/server/fnHandler";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { phonenumber, email } = req.body;

	console.log(typeof phonenumber);
	console.log(typeof email);

	const user = phonenumber ? { phonenumber } : email ? { email } : null;

	console.log("user", user);

	if (!user) {
		console.log("!user");
		return res.status(400).json({ ok: false });
	} else {
		const payload = String(Math.floor(100000 + Math.random() * 900000) + "");
		const token = await client.token.create({
			data: {
				payload,
				user: {
					connectOrCreate: {
						where: {
							...user,
						},
						create: {
							name: "newuser",
							...user,
						},
					},
				},
			},
		});
		console.log(token);
		return res.status(200).json({ ok: true });
	}

	// console.log("newUser", newUser);
	return res.status(200).end();
}

export default fnHandler("POST", handler);
