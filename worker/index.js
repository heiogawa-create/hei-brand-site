export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/tiktokYDYYNJQNdbCOMFTuBarixxeg1MQVneOS.txt') {
      return new Response('tiktok-developers-site-verification=YDYYNJQNdbCOMFTuBarixxeg1MQVneOS\n', {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-store',
        },
      })
    }

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env)
    }

    return env.ASSETS.fetch(request)
  },
}

async function handleContact(request, env) {
  const { name, email, subject, message } = await request.json()

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
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
