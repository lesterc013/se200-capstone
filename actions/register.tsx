"use server";

import { db } from "@/db";
import { hashSync } from "bcrypt";

export async function register(data) {
  const password = data.password;
  const hashPw = hashSync(password, 10);

  try {
    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashPw,
      },
    });
  } catch (error) {
    return { error: "Error registering" };
  }
}
