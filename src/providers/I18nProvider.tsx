"use client"; // Ensure this is a client-side component

import React, { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n"; // Your initialized i18n instance

const I18nProvider = ({ children }: { children: ReactNode }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export default I18nProvider;
