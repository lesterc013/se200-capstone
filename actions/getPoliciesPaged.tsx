"use server";

import { db } from "@/db";

/// Server action to make GET the policies within that offset
/// Returns the policies, nextOffset (for the nextPage button to reference), and the totalPosts (since things might change)
export async function getPoliciesPaged(
  currentOffset: number,
  rowsPerPage: number
) {
  let policies;
  try {
    policies = await db.insurancePolicy.findMany({
      skip: currentOffset,
      take: rowsPerPage,
    });
  } catch {
    console.log("Error retrieving");
  }

  const nextOffset = currentOffset + rowsPerPage;
  const totalPosts = await db.insurancePolicy.count();

  return { policies, nextOffset, totalPosts };
}
