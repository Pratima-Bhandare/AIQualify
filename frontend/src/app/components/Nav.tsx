"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  return (
    <>
      <div>
        <nav className="py-8 px-16">
          <div className="flex justify-between align-center">
            <div className="flex items-center">
              <Link className="pl-10 text-4xl font-extrabold text-sky-800" href="/">
                AIQualify
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                className={`${
                  router.pathname === "/about" ? "text-sky-800" : "text-gray-400"
                } text-lg font-bold text-gray-400 hover:text-gray-800 mr-16`}
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-lg font-bold text-gray-400 hover:text-gray-800 mr-16"
                href="/case-study"
              >
                Case Study
              </Link>
              <Link
                className="text-lg font-bold text-gray-400 hover:text-gray-800 mr-16"
                href="/auth"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
