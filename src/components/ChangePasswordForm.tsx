"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  changePassSchema,
  changePassType
} from "@/lib/validation/profileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {};

export default function ChangePasswordForm({}: Props) {
  const form = useForm<changePassType>({
    resolver: zodResolver(changePassSchema),
    defaultValues: {
      currentPass: "",
      newPass: "",
      confirmPass: "",
    },
  });
  const formError = form.formState.errors
  console.log("🚀 ~ file: ChangePasswordForm.tsx:32 ~ ChangePasswordForm ~ formError:", formError)
  function onSubmit(data: changePassType) {
    console.log(
      "🚀 ~ file: ChangePasswordForm.tsx:37 ~ onSubmit ~ data:",
      data
    );
  }

  return (
    <Form {...form}>
      <h1 className="text-lg font-semibold">Change Password</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="currentPass"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="current password"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPass"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="new password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPass"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="confirm password" {...field} />
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

