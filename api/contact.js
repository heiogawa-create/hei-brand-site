export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'お問い合わせ <onboarding@resend.dev>',
      to: 'heiogawa@gmail.com',
      reply_to: email,
      subject: subject || 'サイトからのお問い合わせ',
      text: `お名前: ${name}\nメールアドレス: ${email}\n\n${message}`,
    }),
  })

  if (response.ok) {
    return res.status(200).json({ success: true })
  }
  return res.status(500).json({ error: '送信に失敗しました' })
}
