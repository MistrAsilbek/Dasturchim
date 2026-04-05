export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Maydonlar to'liq emas" });
  }

  const BOT_TOKEN = process.env.TG_BOT_TOKEN;
  const CHAT_ID = process.env.TG_CHAT_ID;

  const text =
    `📩 Yangi xabar!\n\n` +
    `👤 Ism: ${name}\n` +
    `📧 Email: ${email}\n` +
    `🎯 Maqsad: ${subject}\n\n` +
    `📝 Xabar:\n${message}`;

  const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text
    })
  });

  if (!tgRes.ok) {
    return res.status(500).json({ message: "Telegram error" });
  }

  return res.json({ ok: true });
}