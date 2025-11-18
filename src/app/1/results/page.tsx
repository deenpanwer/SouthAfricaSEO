"use client";

import React from "react";
import { ResultsDisplay } from "../components/ResultsDisplay";

export default function ResultsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ResultsDisplay />
    </main>
  );
}
