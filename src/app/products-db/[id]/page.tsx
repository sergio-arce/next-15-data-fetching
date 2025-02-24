import { getProduct } from "@/app/prisma-db";
import EditProductForm from "./product-edit-form";
import { notFound } from "next/navigation";
import { Product } from '@/app/products-db/page';

export default async function EditProductPage({ params }: { params: Promise<{ id: string }>}) {

  const { id } = await params

  const product: Product | null = await getProduct(parseInt(id))

  if (!product) {
    notFound()
  }

  return <EditProductForm product={product} />
}