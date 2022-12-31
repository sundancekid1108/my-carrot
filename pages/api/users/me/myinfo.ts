import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import { withApiSession } from "@libs/server/session";
import client from "@libs/server/client";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	console.log(req.session.user);
	const profile = await client.user.findUnique({
		where: { id: req.session.user?.id },
	});
	return res.json({
		isSuccess: true,
		profile,
	});
}

export default withApiSession(
	withHandler({
		methods: ["GET"],
		handler,
	})
);
