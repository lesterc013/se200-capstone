"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { addPolicy } from "@/actions/addPolicy";

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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  id: z
    .string()
    .regex(/^IP\d{3,}$/, {
      message: "ID must start with 'IP' followed by at least 3 digits",
    })
    .min(5, {
      message:
        "ID must be at least 5 characters - IP followed by 3 numbers e.g. 999",
    }),
  name: z.string().min(1, { message: "Name cannot be empty" }),
  price: z.number().min(1, { message: "Number must be more than 0" }),
  type: z.string().min(1, { message: "Must select a type" }),
});

export default function AddPolicyForm() {
  const router = useRouter();

  const policyTypes = [
    { id: 1, type: "Travel Insurance" },
    { id: 2, type: "Health Insurance" },
    { id: 3, type: "Home Insurance" },
    { id: 4, type: "Business Insurance" },
    { id: 5, type: "Car Insurance" },
    { id: 6, type: "Life Insurance" },
    { id: 7, type: "Personal Accident" },
    { id: 8, type: "Critical Illness" },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      price: 0,
      type: "",
    },
  });

  async function submitForm(values: z.infer<typeof formSchema>) {
    try {
      const createdPolicy = await addPolicy(values);
      router.push("/policies");
      console.log(createdPolicy);
    } catch (error) {
      console.log("Error adding ", error.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Add Policy</CardTitle>
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
                      <Input placeholder="IPXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input placeholder="Basic Health Coverage" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value ? parseFloat(e.target.value) : 0
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {policyTypes.map((policyType) => (
                          <SelectItem
                            key={policyType.id}
                            value={policyType.type}
                          >
                            {policyType.type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
