import { NowRequest, NowResponse } from "@now/node"

const handlePost = (req, res) => {
  const { challenge } = req.body
  return challenge ? handleChallenge(req, res) : handleEvent(req, res)
}

const handleEvent = (req, res) => {
  res.json({})
}

export default (req: NowRequest, res: NowResponse) => {
  switch (req.method) {
    case "POST":
      return handlePost(req, res)
    case "GET":
      return handleGet(req, res)
    default:
      return res.json({ error: "unsupported request method" })
  }
}

const handleChallenge = (req, res) => {
  res.json({ challenge: res.body.challenge })
}

const handleGet = (req, res) => {
  res.json({ didItWork: true })
}
