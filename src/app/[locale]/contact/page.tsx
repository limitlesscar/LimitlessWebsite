"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

export default function Page() {
  const t = useTranslations("contact");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      // Exemple: envoie vers une API interne ou un service externe
      await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      setStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <><div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            {t("title")}
          </h1>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
              {t("formTitle")}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="prenom"
                    placeholder={t("firstName")}
                    required
                    aria-label={t("firstName")}
                    className="form-input" />
                  <input
                    type="text"
                    name="nom"
                    placeholder={t("lastName")}
                    required
                    aria-label={t("lastName")}
                    className="form-input" />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder={t("email")}
                  required
                  aria-label={t("email")}
                  className="form-input" />

                <input
                  type="tel"
                  name="telephone"
                  placeholder={t("phone")}
                  pattern="^[+0-9\s\-]{6,20}$"
                  required
                  aria-label={t("phone")}
                  className="form-input" />

                <select
                  name="type-probleme"
                  required
                  aria-label={t("selectPlaceholder")}
                  className="form-input"
                  defaultValue=""
                >
                  <option value="" disabled>{t("selectPlaceholder")}</option>
                  <option value="location-arretee">{t("stoppedRental")}</option>
                  <option value="voiture-volee">{t("carStolen")}</option>
                  <option value="probleme-technique">{t("technicalIssue")}</option>
                  <option value="probleme-paiement">{t("paymentIssue")}</option>
                  <option value="probleme-application">{t("appIssue")}</option>
                  <option value="probleme-locataire">{t("userIssue")}</option>
                  <option value="autre">{t("other")}</option>
                </select>

                <textarea
                  name="details"
                  rows={4}
                  placeholder={t("details")}
                  required
                  aria-label={t("details")}
                  className="form-input"
                ></textarea>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent ${status === "success"
                      ? "bg-green-600"
                      : "bg-[#32bb78] hover:opacity-90"} text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32bb78] dark:focus:ring-offset-neutral-900`}
                >
                  {status === "loading" ? t("sending") : t("submit")}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-3 text-sm text-green-600 text-center">
                  {t("successMessage")}
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-600 text-center">
                  {t("errorMessage")}
                </p>
              )}

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  {t("responseTime")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .form-input {
          @apply py-2.5 sm:py-3 px-4 w-full border border-gray-200 rounded-lg sm:text-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#32bb78] focus:border-[#32bb78] transition;
        }
      `}</style>
    </div></>
  );
}
