"use server";

import { db } from "@/db";

export async function addPolicyHolder(data) {
  console.log("submitted: ", data);
  return db.policyHolder.create({
    data: {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      insurancePolicies: {
        connect: data.insurancePolicies.map((policyId) => ({ id: policyId })),
      },
    },
  });
}
