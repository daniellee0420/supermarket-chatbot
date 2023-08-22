import { withSwagger } from "next-swagger-doc";

const swaggerHandler = withSwagger({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Watson Shop Public API",
      version: "0.1.0",
    },
    servers:
      process.env.NODE_ENV === "development"
        ? [
            {
              url: "http://localhost:3000/api",
            },
          ]
        : [
            {
              url: "https://watson-shop-v2.vercel.app",
            },
          ],
  },
  apiFolder: "pages/api",
});
export default swaggerHandler();
