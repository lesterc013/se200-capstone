"use server";

import { db } from "@/db";

export async function getAllPoliciesNameAndId() {
  const policyList = await db.insurancePolicy.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return policyList;
}
