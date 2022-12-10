import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/handler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/session";
import product from "@components/product";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
){
    const{id} = req.query;
    console.log("id", id)
    const productInfo = await client.product.findUnique({
        where: {
            id: +id.toString(),
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    avatar: true,
                },
            },
        },
    });
    console.log("productInfo", productInfo);
    res.json({ isSuccess: true, productInfo });



}


export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
    })
);
