import { template } from "./template";

// Pages
import { home } from "./pages/home";

interface Env {};

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {

		const rendered = template(home);

		return new Response(rendered, {
			status: 200,
			headers: {
				"Content-Type": "text/html"
			}
		});
	},
};
