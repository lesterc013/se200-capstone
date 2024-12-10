"use server";

import { db } from "@/db";

export async function addPolicy(data) {
  return db.insurancePolicy.create({
    data: {
      id: data.id,
      name: data.name,
      price: data.price,
      type: data.type,
    },
  });
}
