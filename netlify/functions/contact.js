export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  const { name, email, subject, message } = JSON.parse(event.body)

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'HEI公式サイト <onboarding@resend.dev>',
      to: 'heiogawa@gmail.com',
      reply_to: email,
      subject: subject || 'サイトからのお問い合わせ',
      text: `お名前: ${name}\nメールアドレス: ${email}\n\n${message}`,
    }),
  })

  if (response.ok) {
    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  }
  return { statusCode: 500, body: JSON.stringify({ error: '送信に失敗しました' }) }
}
