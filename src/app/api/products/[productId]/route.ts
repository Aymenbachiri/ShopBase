import connectToDB from "@/lib/database/database";
import Product from "@/lib/database/models/Product";
import { getErrorMessage } from "@/lib/helpers/getErrorMessage";
import { editProductSchema } from "@/lib/schemas/editProductSchema";
import { productIdSchema } from "@/lib/schemas/productIdSchema";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

type Props = {
  params: {
    productId: string;
  };
};

export const GET = async (req: NextRequest, { params }: Props) => {
  const parsedParams = productIdSchema.safeParse(params);

  if (!parsedParams.success) {
    return new NextResponse(
      JSON.stringify({
        errors: parsedParams.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),
      }),
      { status: 400 }
    );
  }

  const { productId } = parsedParams.data;

  try {
    await connectToDB();

    const product = await Product.findById(productId);
    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Error during fetch product:", errorMessage);

    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify({ error: errorMessage }), {
        status: 400,
      });
    } else {
      return new NextResponse(JSON.stringify({ error: errorMessage }), {
        status: 500,
      });
    }
  }
};

export const PATCH = async (req: NextRequest, { params }: Props) => {
  const parsedParams = productIdSchema.safeParse(params);

  if (!parsedParams.success) {
    return new NextResponse(
      JSON.stringify({
        errors: parsedParams.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),
      }),
      { status: 400 }
    );
  }
  const { productId } = parsedParams.data;

  const body = await req.json();

  const parsedBody = editProductSchema.safeParse(body);

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

  try {
    await connectToDB();
    // Find the exisitingProduct
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return new Response("Product not found", { status: 404 });
    }

    // Update the product with the new data
    Object.assign(existingProduct, parsedBody.data);
    await existingProduct.save();

    return new Response("Product updated successfully", { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Input validation error:", error.issues);
      return new NextResponse(
        JSON.stringify({ error: error.issues[0].message }),
        { status: 400 }
      );
    } else {
      console.error("Error during product updating:", error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to update product" }),
        { status: 500 }
      );
    }
  }
};
