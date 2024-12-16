"use server";

import { db } from "@/db";

export async function getTotalPolicies() {
  return await db.insurancePolicy.count();
}
