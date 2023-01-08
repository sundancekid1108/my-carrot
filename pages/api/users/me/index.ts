import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import { withApiSession } from "@libs/server/session";
import client from "@libs/server/client";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	if (req.method === "GET") {
		// console.log(req.session.user);
		const profile = await client.user.findUnique({
			where: { id: req.session.user?.id },
		});
		return res.json({
			isSuccess: true,
			profile,
		});
	}

	if (req.method === "POST") {
		const {
			session: { user },
			body: { email, phonenumber, name },
		} = req;

		console.log("req body", req.body);

		const currentUser = await client.user.findUnique({
			where: {
				id: user?.id,
			},
		});

		console.log("currentUser", currentUser);

		if (email && email !== currentUser?.email) {
			const alreadyExists = Boolean(
				await client.user.findUnique({
					where: {
						email,
					},
					select: {
						id: true,
					},
				})
			);
			if (alreadyExists) {
				res.json({
					isSuccess: false,
					error: "Email already taken.",
				});
			}

			await client.user.update({
				where: {
					id: user?.id,
				},
				data: {
					email,
				},
			});
			// res.json({ isSuccess: true });
		}

		if (phonenumber && phonenumber !== currentUser?.phonenumber) {
			const alreadyExists = Boolean(
				await client.user.findUnique({
					where: {
						phonenumber,
					},
					select: {
						id: true,
					},
				})
			);

			if (alreadyExists) {
				res.json({
					isSuccess: false,
					error: "Phonenumber already taken.",
				});
			}

			await client.user.update({
				where: {
					id: user?.id,
				},
				data: {
					phonenumber,
				},
			});

			// res.json({ isSuccess: true });
		}

		if (name) {
			await client.user.update({
				where: {
					id: user?.id,
				},
				data: {
					name,
				},
			});

			// res.json({ isSuccess: true });
		}

		return res.json({ isSuccess: true });
	}
}

export default withApiSession(
	withHandler({
		methods: ["GET", "POST"],
		handler,
	})
);
