"use server";

import { db } from "@/db";

export async function getPolicySales() {
  const queriedPolicies = await db.insurancePolicy.findMany({
    select: {
      // Include these fields in the query result
      id: true,
      name: true,
      price: true,
      _count: {
        // Use _count to get counts of related records.
        select: {
          policyHolders: true, // Count how many policy holders are associated with this policy - _count: {policyHolders: _the amount of policy holders with this IP_ }
        },
      },
    },
  });

  const policySales = queriedPolicies.map((policy) => ({
    id: policy.id,
    name: policy.name,
    sale: policy._count.policyHolders * policy.price,
  }));

  // console.log("policySales: ", policySales);

  return policySales;
}
