import connectToDB from "@/lib/database/database";
import Product from "@/lib/database/models/Product";
import { getErrorMessage } from "@/lib/hooks/getErrorMessage";
import { productIdSchema } from "@/lib/schemas/productIdSchema";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

type Props = {
  params: {
    id: string;
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
