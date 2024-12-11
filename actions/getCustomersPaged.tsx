"use server";

import { db } from "@/db";

export async function getCustomersPaged(
  currentOffset: number,
  rowsPerPage: number
) {
  let customers;
  try {
    customers = await db.policyHolder.findMany({
      skip: currentOffset,
      take: rowsPerPage,
      include: { insurancePolicies: true },
    });
  } catch {
    console.log("Error retrieving");
  }

  const nextOffset = currentOffset + rowsPerPage;
  const totalPosts = await db.policyHolder.count();

  return { customers, nextOffset, totalPosts };
}
