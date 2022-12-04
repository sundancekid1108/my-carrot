import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<SWRConfig
				value={{
					fetcher: (url: string) =>
						fetch(url).then((response) => response.json()),
				}}>
				<div className="w-full mx-auto ">
					<Component {...pageProps} />
				</div>
			</SWRConfig>
		</>
	);
}

export default MyApp;
