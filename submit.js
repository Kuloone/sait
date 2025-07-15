export default async (req, res) => {
  const { name, phone } = req.body;
  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      text: `Новая заявка: ${name}, ${phone}`,
    }),
  });
  res.status(200).send("OK");
};
