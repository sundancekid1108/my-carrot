import { useState } from "react";

// <> => 제네릭 <T> 타입변수(Type variables)

interface UseMutationState<T> {
	loading: boolean;
	data?: T;
	error?: object;
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
	url: string
): UseMutationResult<T> {
	const [state, setState] = useState<UseMutationState<T>>({
		loading: false,
		data: undefined,
		error: undefined,
	});

	console.log("state", state);

	function mutation(data: any) {
		setState((prev) => ({ ...prev, loading: true }));

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json().catch(() => {}))

			.then((data) => setState((prev) => ({ ...prev, data, loading: false })))

			.catch((error) =>
				setState((prev) => ({ ...prev, error, loading: false }))
			);
	}

	console.log(mutation);
	return [mutation, { ...state }];
}