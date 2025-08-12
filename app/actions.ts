"use server"

export async function subscribe(_prevState: { ok: boolean; message: string } | undefined, formData: FormData) {
  const email = String(formData.get("email") ?? "").trim()

  // Basic validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return { ok: false, message: "Please enter a valid email address." }
  }

  // Simulate a network call
  await new Promise((r) => setTimeout(r, 800))

  // Here you'd persist to your DB or email provider
  console.log("New subscriber:", email)

  return { ok: true, message: "Thanks! Please check your inbox to confirm." }
}
