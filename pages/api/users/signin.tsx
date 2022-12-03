import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import { PrismaClient } from "@prisma/client";
import twilio from "twilio";

const client = new PrismaClient();
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const test_from_number = process.env.TWILIO_DEV_SENDING_PHONENUMBER;
const test_to_number = process.env.MY_PHONE;

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const { phonenumber, email } = req.body;
	const user = phonenumber ? { phonenumber } : email ? { email } : null;

	// console.log("user", user);

	if (!user) {
		// console.log("!user");
		return res.status(400).json({ isSuccess: false });
	}
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

	if (phonenumber) {
		//phonenumber로 Token 전송
		// const token_message = await twilioClient.messages.create({
		// 	// messagingServiceSid: process.env.TWILIO_MSID,
		// 	from: test_from_number,
		// 	to: test_to_number,
		// 	body: ` Access Token  : ${payload}.`,
		// });
		// console.log("token_message", token_message);
		console.log("phonenumber", phonenumber);
		console.log("token", token);
	} else if (email) {
		// Email로 Token 전송
		console.log("email", email);
		console.log("token", token);
	}

	return res.status(200).json({ isSuccess: true });

	// console.log("newUser", newUser);
}

export default withHandler("POST", handler);
