"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  reason: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      toast.success(
        "Your message has been submitted successfully. We will get back to you soon",
      );
      form.reset();
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });

  return (
    <section
      className="flex h-full w-full flex-col items-center justify-center bg-[#fff]"
      id="contact"
    >
      <div className="flex h-full w-full max-w-[1300px] flex-col gap-[2.5rem] px-0 py-12 pl-0 md:px-2 md:py-24">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex w-full flex-col gap-8 bg-[#fff] px-6 lg:w-1/2 lg:px-28">
            <div className="flex flex-col gap-8">
              {/* <p className="font-bai text-lg leading-[4px] text-[#194129]">
                Contact Us
              </p> */}
              <h1 className="font-marcellus text-4xl font-medium uppercase tracking-[5px] text-[#194129] md:leading-[50px] lg:text-5xl">
                Get in
                <br /> Touch
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <MapPin className="text-[#679895]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href={"https://g.co/kgs/NyQnxGj"} target="_blank">
                    <p className="font-playfair text-[#679895]">
                      Horsfield St, Bolton BL3 4LU,
                      <br /> United Kingdom
                    </p>
                  </Link>
                  <Link href={"https://g.co/kgs/NyQnxGj"} target="_blank">
                    <p className="flex items-center gap-2 text-sm text-[#679895]">
                      <span className="font-playfair">Get Direction</span>
                      <ArrowRight className="text-[#679895]" />
                    </p>
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Phone />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="tel:+441234567890" className="">+44 1234 567890</Link>
                </div>
              </div> */}
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Phone className="text-[#679895]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="tel:+441204860038"
                    className="font-playfair text-[#679895]"
                  >
                    +44 1204 860038{" "}
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <Link
                  href={"https://www.instagram.com/mevlana_bolton/?hl=en"}
                  target="_blank"
                >
                  <Icons.instagram className="text-[#679895]" />
                </Link>
                <Link
                  href={
                    "https://www.tripadvisor.in/ShowUserReviews-g187053-d30464254-r985280947-Mevlana_Bolton-Bolton_Greater_Manchester_England.html"
                  }
                  target="_blank"
                >
                  <Icons.unknown className="text-[#679895]" />
                </Link>
                <Link href={"https://g.co/kgs/NyQnxGj"} target="_blank">
                  <Icons.google className="text-[#679895]" />
                </Link>
                {/* <Link href='https://www.facebook.com/Istanbulwoolton/'>
                  <Icons.facebook />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#fff] lg:w-1/2 lg:items-center lg:justify-center">
            <div className="w-full px-3 lg:w-4/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-xl bg-[#D9D9D9] text-[#000] placeholder:text-[#000]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 rounded-xl bg-[#D9D9D9] text-[#000] placeholder:text-[#000]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Email"
                                {...field}
                                className="h-12 rounded-xl bg-[#D9D9D9] text-[#000] placeholder:text-[#000]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="font-playfair text-[#679895]">
                              Reason for contacting (optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-32 rounded-xl bg-[#D9D9D9] text-[#000] placeholder:text-[#000]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col pt-7 lg:flex-row">
                    <Button
                      className="font-bai w-full rounded-2xl bg-[#A98151] py-6 text-white hover:bg-[#e9b87c] hover:text-[#fff]"
                      disabled={bookTableMutation.isPending}
                    >
                      Contact US
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2252.2043845604217!2d-2.467085523398032!3d53.5677202723543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba75750cbd5b9%3A0xfcde2517b593e215!2sMevlana%2C%20Bolton!5e1!3m2!1sen!2sin!4v1742995261619!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[500px] w-full"
        ></iframe>
      </div>
      <div className="flex w-full overflow-hidden">
        <Image
          className="h-full w-full object-cover lg:h-[500px]"
          src="/images/about-us/image3.jpg"
          alt="bottom"
          width={966}
          height={96}
        />
      </div>
    </section>
  );
};

export default Contact;
