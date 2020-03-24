import { NowRequest, NowResponse } from "@now/node"

export default (req: NowRequest, res: NowResponse) => {
  console.log("body:", req.body)
  res.json({ name: "John", email: "john@example.com" })
}
