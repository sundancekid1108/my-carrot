import { withIronSessionApiRoute } from "iron-session/next";

const cookiePassword = process.env.COOKIE_PASSWORD;

declare module "iron-session" {
	interface IronSessionData {
		user?: {
			id: number;
		};
	}
}

const cookieOptions = {
	cookieName: "my_carrot_session",
	password: cookiePassword!,
};

export function withApiSession(fn: any) {
	return withIronSessionApiRoute(fn, cookieOptions);
}
