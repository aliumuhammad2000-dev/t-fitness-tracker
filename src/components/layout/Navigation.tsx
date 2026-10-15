
import Link from "next/link";

const navigationLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Workouts", href: "/workouts" },
  { name: "Goals", href: "/goals" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Progress", href: "/progress" },
];

export default function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="border-b bg-white px-6 py-3"
    >
      <ul className="flex gap-6 overflow-x-auto">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-gray-600 transition hover:text-emerald-600"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
