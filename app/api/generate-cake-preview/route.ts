import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const formData = await req.formData();

  const shape = formData.get("shape");
  const tiers = formData.get("tiers");
  const size = formData.get("size");
  const colour = formData.get("colour");

  console.log("Mock AI preview request:", {
    shape,
    tiers,
    size,
    colour,
  });

  return NextResponse.json({
    success: true,
    image: "/images/cake/cakes-hero.png",
    message: "Mock AI preview generated",
  });
}