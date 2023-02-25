import { Router } from "express";

const router = Router();



router.post("/", (req, res) => {
  
  const { userName, name, email, message } = req.body;
  console.log("req", req.body);
  try {
    const sendContact = { userName, name, email, message };
    res.send("Mensaje enviado correctamente ✅");
  } catch (err) {
    res.status(501).send(err);
  };
});

export default router;