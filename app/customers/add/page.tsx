"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/multi-select";
const frameworksList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];

import { useRouter } from "next/navigation";
import { db } from "@/db";
import { getAllPoliciesNameAndId } from "@/actions/getAllPoliciesNameAndId";
import { addPolicyHolder } from "@/actions/addPolicyHolder";

const formSchema = z.object({
  id: z
    .string()
    .regex(/^PH\d{3,}$/, {
      message: "ID must start with 'PH' followed by at least 3 digits",
    })
    .min(5, {
      message:
        "ID must be at least 5 characters - PH followed by 3 numbers e.g. 999",
    }),
  email: z.string().email("Enter valid email address"),
  firstName: z.string().min(1, { message: "First name cannot be empty" }),
  lastName: z.string().min(1, { message: "Last name cannot be empty" }),
  insurancePolicies: z
    .array(z.string())
    .min(1, { message: "Select at least one policy" }),
});

export default function AddPolicyHolderForm() {
  const router = useRouter();

  // useState and useEffect to get the latest insurance policy names and ids -- should someone add/delete
  const [policyList, setPolicyList] = useState(null);
  useEffect(() => {
    async function executeGetAllPoliciesNameAndId() {
      const policyList = await getAllPoliciesNameAndId();
      setPolicyList(policyList);
    }
    executeGetAllPoliciesNameAndId();
    console.log("policyList ", policyList);
  }, []);

  // Transform into the structure MultiSelect requires
  const policyIdAndName = [];
  if (policyList) {
    policyList.forEach((policyObject) => {
      policyIdAndName.push({
        value: policyObject.id,
        label: policyObject.name,
      });
    });
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      insurancePolicies: [],
    },
  });

  async function submitForm(values: z.infer<typeof formSchema>) {
    try {
      await addPolicyHolder(values);
      router.push("/customers");
    } catch (error) {
      console.log("Error adding ", error.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Add Policy Holder</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitForm)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID</FormLabel>
                    <FormControl>
                      <Input placeholder="PHXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="abc@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="cba" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="insurancePolicies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Insurance Policies</FormLabel>
                    <FormControl>
                      <MultiSelect
                        options={policyIdAndName}
                        onValueChange={(values) => {
                          field.onChange(values);
                        }}
                        defaultValue={field.value}
                        placeholder="Select policies"
                        variant="default"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Add</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
