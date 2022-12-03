import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
	const [userInfo, setUserInfo] = useState();
	const router = useRouter();
	useEffect(() => {
		fetch("/api/users/myinfo")
			.then((response) => response.json())
			.then((data) => {
				if (!data.isSuccess) {
					return router.replace("/signin");
				}
				setUserInfo(data.profile);
			});
	}, [router]);
	return userInfo;
}
