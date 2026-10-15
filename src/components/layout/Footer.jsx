
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-gray-500">
          © 2026 T-Fitness Tracker
        </p>

        <div className="flex gap-4 text-sm text-gray-500">
          <Link href="/dashboard" className="hover:text-emerald-600">
            Dashboard
          </Link>
          <Link href="/workouts" className="hover:text-emerald-600">
            Workouts
          </Link>
          <a href="mailto:support@tfitnesstracker.example" className="hover:text-emerald-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
