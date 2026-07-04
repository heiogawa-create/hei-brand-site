export async function onRequestPost(context) {
  const { name, email, subject, message } = await context.request.json()

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
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
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
  return new Response(JSON.stringify({ error: '送信に失敗しました' }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' },
  })
}
