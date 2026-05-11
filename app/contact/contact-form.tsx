"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || "CBSS Tutoring — Inquiry",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-background p-8 md:p-10"
      aria-labelledby="contact-form-heading"
    >
      <h2
        id="contact-form-heading"
        className="font-serif text-2xl tracking-tight text-foreground md:text-3xl"
      >
        Send a message
      </h2>
      <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
        Submitting opens your email client with this message addressed to{" "}
        <span className="text-foreground">{site.email}</span>.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-name">Your name</Label>
          <Input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <Label htmlFor="contact-subject">Subject</Label>
        <Input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What's this about?"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          No backend — your default mail app handles delivery.
        </p>
        <Button type="submit">Open in email</Button>
      </div>
    </form>
  );
}
