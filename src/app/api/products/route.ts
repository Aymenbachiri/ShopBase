import connectToDB from "@/lib/database/database";
import Product from "@/lib/database/models/Product";
import { productSchema } from "@/lib/schemas/productSchema";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const products = await Product.find();

    return new NextResponse(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch all products:", error);
    return new NextResponse("Failed to fetch all products", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsedBody = productSchema.safeParse(body);

    if (!parsedBody.success) {
      return new NextResponse(
        JSON.stringify({
          errors: parsedBody.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
        }),
        { status: 400 }
      );
    }

    const { title, price, description, category, imageurl, creator } =
      parsedBody.data;

    await connectToDB();

    const newProduct = new Product({
      title,
      price,
      description,
      category,
      imageurl,
      creator,
    });

    await newProduct.save();

    return new Response("Product has been created", { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Input validation error:", error.issues);
      return new NextResponse(
        JSON.stringify({ error: error.issues[0].message }),
        { status: 400 }
      );
    } else {
      console.error("Error during product creation:", error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to create product" }),
        { status: 500 }
      );
    }
  }
}
