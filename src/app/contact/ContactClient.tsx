"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Send, Instagram } from "lucide-react";
import { CrayonTitle } from "@/components/ui/CrayonTitle";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, siteConfig } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
  website: "",
};

const contactTopics = [
  {
    title: "児童館・地域施設からのご相談",
    copy: "文京区周辺で幼児・小学生向けの英語イベントを開きたい場合、対象年齢、人数、会場、希望時間に合わせて内容を相談できます。",
  },
  {
    title: "ボランティア参加について",
    copy: "絵本制作、イベント運営、広報、外部連携など、学生メンバーとして関われる役割があります。英語力だけでなく、子どもと向き合う姿勢を大切にしています。",
  },
  {
    title: "団体連携・取材について",
    copy: "教育団体、学生団体、地域イベント、メディア取材など、Happy Hearts Englishの活動に関する連携相談も受け付けています。",
  },
];

const faqs = [
  {
    question: "Happy Hearts Englishにはどんな相談ができますか？",
    answer: "児童館や地域施設での子ども向け英語イベント、英語絵本を使った読み聞かせ、学生ボランティア参加、教育団体や地域イベントとの連携について相談できます。",
  },
  {
    question: "活動エリアはどこですか？",
    answer: "主に東京都文京区を中心に活動しています。内容や日程によって、周辺地域のイベントや団体連携も相談できます。",
  },
  {
    question: "英語が得意でない学生でも参加できますか？",
    answer: "参加できます。Happy Hearts Englishでは、英語力だけでなく、子どもたちと向き合う姿勢、企画を準備する力、チームで動く力を大切にしています。",
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "お問い合わせ", path: "/contact" },
  ]);
  const faqJsonLd = buildFaqJsonLd(faqs);

  const validate = (data: FormState) => {
    const nextErrors: Errors = {};

    if (!data.name.trim()) nextErrors.name = "お名前を入力してください。";
    if (!data.email.trim()) nextErrors.email = "メールアドレスを入力してください。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = "メールアドレスの形式で入力してください。";
    if (!data.message.trim()) nextErrors.message = "メッセージを入力してください。";
    else if (data.message.trim().length < 10) nextErrors.message = "メッセージは10文字以上でお願いします。";

    return nextErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value };
    setFormData(next);
    if (errors[name as keyof FormState]) {
      setErrors(validate(next));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    if (formData.website) {
      setStatus("success");
      setFormData(initialForm);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(initialForm);
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[var(--paper)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Section>
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
          <CrayonTitle as="h1" className="display-title--hero mb-6">
            お問い合わせ
          </CrayonTitle>
          <p className="body-xl">
            ボランティア参加、活動提携、イベント相談など、
            どうぞお気軽にご連絡ください。
          </p>
          <p className="body-lg mt-4 md:mt-6">
            児童館での英語イベント、英語絵本の読み聞かせ、地域イベントとの連携、学生メンバーとしての参加など、
            Happy Hearts Englishに関する相談を受け付けています。
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="surface-card relative overflow-hidden rounded-[var(--r-lg)] p-5 md:p-8">
            {status === "success" ? (
              <div role="status" aria-live="polite" className="grid min-h-[32rem] place-items-center text-center">
                <div>
                  <CrayonTitle as="h2" className="mb-6">
                    ありがとうございます
                  </CrayonTitle>
                  <p className="body-lg mx-auto">
                    メッセージを受け取りました。内容を確認し、必要に応じてご返信します。
                  </p>
                </div>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {[
                {
                  id: "name",
                  labelJa: "お名前",
                  type: "text",
                  autoComplete: "name",
                  placeholder: "山田 花子",
                },
                {
                  id: "email",
                  labelJa: "メールアドレス",
                  type: "email",
                  autoComplete: "email",
                  placeholder: "example@email.com",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-3 block pl-1">
                    <span className="block text-sm font-black text-[var(--foreground)]">{field.labelJa}</span>
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    name={field.id}
                    value={formData[field.id as keyof FormState]}
                    onChange={handleChange}
                    required
                    autoComplete={field.autoComplete}
                    spellCheck={field.id !== "email"}
                    aria-invalid={Boolean(errors[field.id as keyof FormState])}
                    aria-describedby={errors[field.id as keyof FormState] ? `${field.id}-error` : undefined}
                    className={`w-full rounded-[var(--r-md)] border bg-[var(--paper)] px-4 py-3.5 font-medium outline-none transition-[background-color,border-color,box-shadow] duration-200 focus-visible:border-[var(--pink-deep)] focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)]/25 sm:px-5 sm:py-4 ${
                      errors[field.id as keyof FormState]
                        ? "border-red-300"
                        : "border-[var(--line-soft)]"
                    }`}
                    placeholder={field.placeholder}
                  />
                  {errors[field.id as keyof FormState] && (
                    <p id={`${field.id}-error`} className="mt-2 text-sm font-medium text-red-500">
                      {errors[field.id as keyof FormState]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="mb-3 block pl-1">
                  <span className="block text-sm font-black text-[var(--foreground)]">メッセージ</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  autoComplete="off"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full resize-none rounded-[var(--r-md)] border bg-[var(--paper)] px-4 py-3.5 font-medium outline-none transition-[background-color,border-color,box-shadow] duration-200 focus-visible:border-[var(--pink-deep)] focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)]/25 sm:px-5 sm:py-4 ${
                    errors.message ? "border-red-300" : "border-[var(--line-soft)]"
                  }`}
                  placeholder="イベント相談の場合は、対象年齢・人数・希望時期・会場の場所も分かる範囲でご記入ください。"
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm font-medium text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {status === "error" && Object.keys(errors).length === 0 && (
                <div
                  role="alert"
                  className="rounded-[var(--radius-md)] bg-red-50 p-4 text-center text-sm font-black text-red-500"
                >
                  送信に失敗しました。時間をおいて再度お試しください。
                </div>
              )}

              <Button type="submit" size="lg" className="w-full py-5 text-lg" isLoading={status === "sending"}>
                送信する <Send className="ml-3" size={18} />
              </Button>
            </form>
            )}
          </div>

          <div className="grid gap-5">
            <div className="surface-card p-5 sm:p-7">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 rounded-[var(--r-md)] transition-colors hover:text-[var(--pink-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-4"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--blush)] text-[var(--pink-deep)]">
                  <Mail size={20} />
                </span>
                <div className="min-w-0">
                  <p className="mt-1 break-all font-bold text-[var(--foreground)]">{siteConfig.email}</p>
                </div>
              </a>
            </div>

            <div className="surface-card p-5 sm:p-7">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[var(--r-md)] transition-colors hover:text-[var(--pink-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-4"
                aria-label="Happy Hearts EnglishのInstagramを開く"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--blush)] text-[var(--pink-deep)]">
                  <Instagram size={20} />
                </span>
                <div>
                  <p className="mt-1 font-bold text-[var(--foreground)]">@happy.hearts.english</p>
                </div>
              </a>
            </div>

            <div className="surface-card p-5 sm:p-7">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--sun)]/25 text-[var(--ink)]">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="mt-1 font-bold text-[var(--foreground)]">東京都 文京区</p>
                </div>
              </div>
            </div>

            <div className="soft-panel p-5 sm:p-7">
              <p className="mt-2 text-base leading-7 text-[var(--foreground)]/72 sm:mt-3 sm:text-lg sm:leading-8">
                児童館、教育団体、地域イベントなどとの連携相談も歓迎しています。
                内容がまだ決まっていない段階でも、子どもたちに届けたい体験や会場の雰囲気から一緒に考えられます。
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="mb-10 max-w-4xl">
          <CrayonTitle>相談できること</CrayonTitle>
          <p className="body-lg mt-6">
            Happy Hearts Englishは、英語教室ではなく、高校生メンバーによる地域ボランティア活動です。
            子どもたちが英語にふれるきっかけをつくりたい施設、活動に参加したい学生、連携を考えている団体の方は、下記の内容を参考にご連絡ください。
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {contactTopics.map((topic) => (
            <article key={topic.title} className="surface-card p-5 sm:p-7">
              <h2 className="title-h3 text-[var(--ink)]">{topic.title}</h2>
              <p className="mt-4 text-[0.96rem] leading-7 text-[var(--ink)]/72 sm:mt-5 sm:text-base sm:leading-8">{topic.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="pink">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <CrayonTitle>よくある質問</CrayonTitle>
            <p className="body-lg mt-6">
              活動相談や参加前に知っておきたい内容をまとめました。
              ここにない内容も、お問い合わせフォームから気軽に送ってください。
            </p>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="surface-card p-5 sm:p-6">
                <h2 className="text-lg font-black leading-7 text-[var(--ink)] sm:text-xl sm:leading-8">{faq.question}</h2>
                <p className="mt-3 text-[0.96rem] leading-7 text-[var(--ink)]/72 sm:text-base sm:leading-8">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
