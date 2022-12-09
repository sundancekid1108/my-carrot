import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
	isSuccess: boolean;
	[key: string]: any;
}

type method = "GET" | "POST" | "DELETE";
interface ConfigType {
	methods: method[];
	handler: (req: NextApiRequest, res: NextApiResponse) => void;
	isPrivate?: boolean;
}

//GET, POST, DELETE만 실행
export default function withHandler({
	methods,
	isPrivate = true,
	handler,
}: ConfigType) {
	return async function (
		req: NextApiRequest,
		res: NextApiResponse
	): Promise<any> {
		// console.log("handler req", req.method);
		// console.log(method);

		if (req.method && !methods.includes(req.method as any)) {
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

//as any => 형변환