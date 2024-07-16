import { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import AuthForm from "./components/AuthForm";

export const metadata: Metadata = {
  title: "Sign Up",
  ...NO_INDEX_PAGE,
};

export default function AuthPage() {
  return <AuthForm />;
}
