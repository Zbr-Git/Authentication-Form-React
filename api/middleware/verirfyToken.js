import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, "secret-key", async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
    // payload/decoder ma jo id mile gi token verification honay par,
    // usay req ma aik neya object userId bana k thok do
    req.userId = payload.id;

    next();
  });
}; 
