import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const {
		body: { name, price, description },
		session: { user },
	} = req;

	const product = await client.product.create({
		data: {
			name,
			price: price,
			description,
			image: "imagesample",
			user: {
				connect: {
					id: user?.id,
				},
			},
		},
	});

	console.log("product", product);
	res.json({
		isSuccess: true,
		product,
	});
}
export default withApiSession(
	withHandler({
		method: "POST",
		handler,
	})
);
