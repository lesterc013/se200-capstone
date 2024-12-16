"use server";

import { db } from "@/db";

export async function getTotalCustomers() {
  return await db.policyHolder.count();
}
