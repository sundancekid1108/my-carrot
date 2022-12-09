import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import withHandler, { ResponseType } from "@libs/server/handler";
import { withApiSession } from "@libs/server/session";
import client from "@libs/server/client";


async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const { token } = req.body;
	console.log(token);
	const existsToken = await client.token.findUnique({
		where: {
			payload: token,
		},
	});

	//토큰 없으면 돌려보냄
	if (!existsToken) {
		return res.status(404).end();
	}

	//있으면 세션에 저장
	req.session.user = {
		id: existsToken?.userId,
	};
	await req.session.save();

	await client.token.deleteMany({
		where: {
			userId: existsToken.userId,
		},
	});

	return res.status(200).json({ isSuccess: true });
}

export default withApiSession(
	withHandler({ methods: ["POST"], handler, isPrivate: false })
);