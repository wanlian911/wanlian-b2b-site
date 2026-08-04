export const onRequestPost: PagesFunction = async (context) => {
  try {
    const data = await context.request.json() as any;
    const { name, email, country, product, message, 'cf-turnstile-response': turnstileResponse } = data;

    // 1. 基础验证
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    // 2. 验证 Cloudflare Turnstile (防垃圾邮件)
    // 实际项目中应从 context.env 宏获取 TURNSTILE_SECRET_KEY
    const SECRET_KEY = '1x0000000000000000000000000000000AA'; // 测试密钥
    const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${SECRET_KEY}&response=${turnstileResponse}`,
    });

    const verifyResult = await verifyResponse.json() as any;
    if (!verifyResult.success) {
      return new Response(JSON.stringify({ message: "Security check failed. Please try again." }), { status: 403 });
    }

    // 3. 处理询盘 (例如：发送邮件或存入数据库)
    // 方案 A: 使用 Resend/EmailJS API 发送邮件
    // 方案 B: 存入 Cloudflare D1 或 KV
    console.log("Inquiry Received:", data);

    // 这里我们可以接入一个免费的邮件通知服务，如 Formspree 的转发或 Resend API
    // 为了演示，我们直接返回成功
    return new Response(JSON.stringify({ 
      message: "Inquiry received successfully",
      id: crypto.randomUUID()
    }), { status: 200 });

  } catch (err) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
};
