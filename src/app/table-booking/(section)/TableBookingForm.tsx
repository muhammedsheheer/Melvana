"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import {
  TableBookingValidation,
  type TableFormValues,
} from "./Table-Validation";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import TimeForm from "./TimeForm";
import CustomerDetails from "./CustomerDetails";
import { useRouter } from "next/navigation";

export default function TableBookingForm() {
  const router = useRouter();
  const [page, setPage] = useState<number>(0);
  const form = useForm<TableFormValues>({
    resolver: zodResolver(TableBookingValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "",
      time: "",
      request: "",
    },
  });

  const bookTableMutation = useMutation({
    mutationFn: async (values: TableFormValues) => {
      return await axios.post("/api/table-booking", values);
    },
    onSuccess: () => {
      toast(
        (t) => (
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center">
              Your reservation request has been successfully submitted to the
              restaurant!
            </p>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                form.reset();
                router.push("/");
              }}
              className="rounded bg-primary px-4 py-2 text-white"
            >
              OK
            </button>
          </div>
        ),
        { duration: Infinity },
      );
    },
    onError: () => {
      toast.error(
        "There was a problem submitting your booking. Please try again.",
      );
    },
  });

  const onSubmit = (values: TableFormValues) => {
    bookTableMutation.mutate(values);
  };

  return (
    <div className="w-full space-y-6 px-4">
      {page === 0 ? (
        <div className="w-full">
          <TimeForm mainform={form} setpage={setPage} />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CustomerDetails
              form={form}
              bookTableMutation={bookTableMutation}
              setpage={setPage}
            />
          </form>
        </Form>
      )}
    </div>
  );
}
