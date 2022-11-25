import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
	isSuccess: boolean;
	[key: string]: any;
}

export default function fnHandler(
	method: "GET" | "POST" | "DELETE",
	fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
	return async function (req: NextApiRequest, res: NextApiResponse) {
		// console.log("fnHandler req", req.method);
		// console.log(method);
		if (req.method !== method) {
			return res.status(405).end();
		}

		try {
			await fn(req, res);
		} catch (error) {
			console.log(error);
			return res.status(500).json({ error });
		}
	};
}
