"use client";

import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import SocialIcons from "./SocialIcons";
import SectionTitle from "./SectionTitle";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      try {
        const response = await fetch("https://formspree.io/f/xpwlvqan", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          setStatus("თქვენ შეტყობინება წარმატებით გაიგზავნა ✅");
          form.reset();

          // 3 წამში შეტყობინების გაქრობა
          setTimeout(() => {
            setStatus(null);
          }, 3000);
        } else {
          const data = await response.json();
          setStatus(data.error || "დაფიქსირდა შეცდომა ❌");
        }
      } catch (error) {
        setStatus("დაფიქსირდა შეცდომა ❌");
      }
    });
  };

  return (
    <section id="contact" className="mb-[100px]">
      <SectionTitle title="კონტაქტი" width={60} />
      <div className="grid grid-cols-2 mt-[65px] max-lg:grid-cols-1 max-lg:mb-12">
        <div className="mt-0 md:mt-12">
          <div className="px-4 pb-[6px] rounded-[12px] py-[4px] bg-yellow-400 inline-block items-center gap-3">
            <p className="text-[14px] max-lg:text-[13px] text-[#333] tracking-wide">webnotes</p>
          </div>
          <h4 className="text-[28px] upper-case max-sm:text-xl max-xl:text-2xl uppercase mt-5 max-xl:mb-8 mb-14 font-bold tracking-wide text-[#333]">
            <span>დაგვიკავშირდით</span> დღესვე
          </h4>

          <div className="flex flex-col gap-8">
            <div>
              <span className="text-[#333]/60 text-lg max-xl:text-base">ტელეფონი:</span>
              <p className="text-xl max-xl:text-base font-manrope mt-1 text-[#333]/95">
                +(995) 511 199 826
              </p>
            </div>
            <div>
              <span className="text-[#333]/60 max-xl:text-base text-lg">ელ.ფოსტა:</span>
              <p className="text-xl font-manrope max-xl:text-base mt-1 text-[#333]/95">
                webnotes.office@gmail.com
              </p>
            </div>

            <div className="mt-4 max-xl:mt-0">
              <span className="text-[#333]/60 text-lg max-xl:text-base">გამოგვყევი:</span>
              <div className="mt-[-5px]">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <label className="text-[#333] max-xl:text-sm text-[15px] uppercase" htmlFor="name">
                  სახელი
                </label>
                <Input
                  name="name"
                  className="peer text-[17px] max-xl:text-sm"
                  placeholder="* სახელი"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#333] text-[15px] uppercase" htmlFor="lastname">
                  გვარი
                </label>
                <Input
                  name="lastname"
                  required
                  className="max-xl:text-sm"
                  placeholder="* გვარი"
                  type="text"
                  id="lastname"
                />
              </div>
            </div>

            <div className="flex mt-6 flex-col w-full gap-3">
              <label className="text-[#333] text-[15px] uppercase" htmlFor="email">
                ელ.ფოსტა
              </label>
              <Input
                name="email"
                required
                className="max-xl:text-sm"
                placeholder="* თქვენი ელ.ფოსტა"
                type="email"
                id="email"
              />
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <label htmlFor="textarea" className="text-[#333] text-[15px] uppercase">
                შეტყობინება
              </label>
              <Textarea
                name="message"
                id="textarea"
                className="min-h-[200px] max-h-[250px] max-xl:text-sm"
                placeholder="* დატოვეთ შეტყობინება ✍️"
                required
              />
            </div>

            <div className="mt-4">
              <Button
                type="submit"
                disabled={isPending}
                className="w-full max-xl:text-base text-lg py-4 h-12 uppercase"
              >
                {isPending ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    იტვირთება...
                  </>
                ) : (
                  "გაგზავნა ⚡"
                )}
              </Button>
            </div>
          </form>

          {status && (
            <p className="mt-4 max-sm:text-sm bg-green-50 text-lg py-3 rounded-[12px] text-green-600 font-[400] text-center transition-opacity duration-500">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
