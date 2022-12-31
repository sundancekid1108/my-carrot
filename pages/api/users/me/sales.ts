import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const {
		session: { user },
	} = req;

	const sales = await client.sale.findMany({
		where: {
			userId: user?.id,
		},
		include: {
			product: {
				include: {
					_count: {
						select: {
							favorite: true,
						},
					},
				},
			},
		},
	});
	res.json({
		isSuccess: true,
		sales,
	});
}

export default withApiSession(
	withHandler({
		methods: ["GET"],
		handler,
	})
);
