import { useTranslations } from "next-intl";
import React, { useState } from "react";

export default function NavSearchTwo() {
  const t = useTranslations('aidePage')
  const [activeCategory, setActiveCategory] = useState<"host" | "renter">("host");
  const [searchTerm, setSearchTerm] = useState("");

  const topics = {
    host: [
      {
        question: "How do I list a car?",
        answer: "You can list a car from your dashboard.",
      },
      {
        question: "Can I edit my listing?",
        answer: "Yes, go to your listings to edit them.",
      },
      {
        question: "How do I delete a listing?",
        answer: "Go to your listings and delete the one you want.",
      },
      {
        question: "How many cars can I list?",
        answer: "You can list an unlimited number of cars.",
      },
    ],
    renter: [
      {
        question: "How do I book a car?",
        answer: "Search for a car and click the book button.",
      },
      {
        question: "What should I do if I'm late?",
        answer: "Contact the host to inform them of the delay.",
      },
      {
        question: "How do I know if the car is available?",
        answer: "The car's availability is indicated on the listing page.",
      },
      {
        question: "What happens if the host cancels my booking?",
        answer: "We will offer you an alternative or a refund.",
      },
    ],
  };

  const filteredQuestions = topics[activeCategory].filter((q) =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white">
      {/* Top Bar Switch */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 rounded-full ${
            activeCategory === "host"
              ? "bg-[#32bb78] text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => setActiveCategory("host")}
        >
          For Hosts
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-full ${
            activeCategory === "renter"
              ? "bg-[#32bb78] text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={() => setActiveCategory("renter")}
        >
          For Renters
        </button>
      </div>

   

      {/* Questions and Answers */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredQuestions.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {item.question}
            </h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
