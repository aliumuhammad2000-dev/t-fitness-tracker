
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <Link href="/" className="text-2xl font-bold text-emerald-600">
        T-Fitness
      </Link>

      <p className="hidden text-sm text-gray-500 sm:block">
        Your journey to a healthier lifestyle.
      </p>

      <Link
        href="/dashboard"
        className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
      >
        Get Started
      </Link>
    </header>
  );
}
