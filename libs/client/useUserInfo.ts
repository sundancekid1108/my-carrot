import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

//data fetch하는 hook(데이터가 변경되면 자동으로 데이터를 변경)

export default function useUserInfo() {
	const { data, error } = useSWR("/api/users/me/myinfo");

	// console.log("useUser data", data);
	const router = useRouter();
	useEffect(() => {
		if (data && !data.isSuccess) {
			router.replace("/signin");
		}
	}, [data, router]);
	return { user: data?.profile, isLoading: !data && !error };
}

