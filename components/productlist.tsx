import useSWR from "swr";
import Item from "./item";
import { Product } from "@prisma/client";

interface ProductWithCount extends Product {
	_count: {
		favorite: number;
	};
}

interface ProductListProps {
	kind: "favorites" | "sales" | "purchases";
}

interface Record {
	id: number;
	product: ProductWithCount;
}

interface ProductListResponse {
	[key: string]: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
	const { data } = useSWR<ProductListResponse>(`/api/users/me/${kind}`);
	if (data) {
		return (
			<>
				{data[kind]?.map((record) => (
					<Item
						id={record.product.id}
						key={record.id}
						title={record.product.name}
						price={record.product.price}
						hearts={record.product._count.favorite}
					/>
				))}
			</>
		);
	} else {
		return null;
	}
}
