import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
	isSuccess: boolean;
	[key: string]: any;
}

interface ConfigType {
	method: "GET" | "POST" | "DELETE";
	handler: (req: NextApiRequest, res: NextApiResponse) => void;
	isPrivate?: boolean;
}

//GET, POST, DELETE만 실행
export default function withHandler({
	method,
	isPrivate = true,
	handler,
}: ConfigType) {
	return async function (
		req: NextApiRequest,
		res: NextApiResponse
	): Promise<any> {
		// console.log("handler req", req.method);
		// console.log(method);

		if (req.method !== method) {
			return res.status(405).end();
		}

		if (isPrivate && !req.session.user) {
			return res
				.status(401)
				.json({ isSuccess: false, error: "Sign In User Only" });
		}

		try {
			await handler(req, res);
		} catch (error) {
			console.log(error);
			return res.status(500).json({ error });
		}
	};
}
// NextJS는 withHandler가 Return하는것을 실행