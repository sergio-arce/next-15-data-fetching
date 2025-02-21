import { addProduct } from "@/app/prisma-db"

export async function POST(req: Request) {
  const body = await req.json()
  const { title, price, description } = body

  const product = await addProduct(title, parseInt(price), description)
  return new Response(JSON.stringify(product), { 
    headers: { "Content-Type": "application/json" }
  })
}
