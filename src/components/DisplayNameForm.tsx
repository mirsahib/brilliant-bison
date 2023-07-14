"use client"
import React from "react";
import {
  displayNameSchema,
  displayNameType,
} from "@/lib/validation/profileSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

export default function DisplayNameForm({}: Props) {
  const form = useForm<displayNameType>({
    resolver: zodResolver(displayNameSchema),defaultValues:{
      username:""
    }
  });

  function onSubmit(data: displayNameType) {
    console.log("🚀 ~ file: DisplayNameForm.tsx:28 ~ onSubmit ~ data:", data)
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }
  return (
    <Form {...form} >
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 my-5">
      <h1 className="text-lg font-semibold">Display Name</h1>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="display name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
