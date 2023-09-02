// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import validateCategory from "@/handlers/category.handler";
function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      return validateCategory(req, res);
    default:
      return res.status(404).json({
        success: false,
        message: `Not found`,
      });
  }
}

export default handler;
