import connectToDB from "@/lib/database/database";
import Product from "@/lib/database/models/Product";
import { querySchema } from "@/lib/schemas/dashboardProductQuerySchema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const creator = url.searchParams.get("creator" || undefined);

  const parsedQuery = querySchema.safeParse({ creator });

  if (!parsedQuery.success) {
    return new NextResponse(
      JSON.stringify({
        errors: parsedQuery.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),
      }),
      { status: 400 }
    );
  }

  try {
    await connectToDB();

    const products = await Product.find(
      parsedQuery.data.creator ? { creator: parsedQuery.data.creator } : {}
    );
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Input validation error:", error.issues);
      return new NextResponse(
        JSON.stringify({ error: error.issues[0].message }),
        { status: 400 }
      );
    } else {
      console.error("Error during fetch products:", error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch product" }),
        { status: 500 }
      );
    }
  }
}
