import main from "./server";

const _PORT = Number(process.env.APOLLO_SERVER_PORT) || 4000;

main()
	.listen(_PORT)
	.then(({ url }) => {
		console.log(`🚀 Server ready at ${url}`);
	});
