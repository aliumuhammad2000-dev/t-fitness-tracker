
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex items-center justify-between border-b bg-white px-6 py-5 sm:px-10">
        <Link href="/" className="text-xl font-bold text-emerald-600">
          T-Fitness Tracker
        </Link>

        <Link
          href="/dashboard"
          className="rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white transition hover:bg-emerald-700"
        >
          Dashboard
        </Link>
      </nav>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          Your fitness journey starts here
        </span>

        <h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Build healthier habits, one workout at a time.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Track your workouts, monitor your activity, and stay motivated
          as you work toward your fitness goals with T-Fitness Tracker.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/workouts"
            className="rounded-lg bg-emerald-600 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
          >
            Record a Workout
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border border-gray-300 bg-white px-7 py-3.5 font-semibold transition hover:bg-gray-100"
          >
            View Dashboard
          </Link>
        </div>

        <div className="mt-20 grid w-full gap-6 text-left sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">🏋️</div>
            <h2 className="mt-4 text-lg font-semibold">Track Workouts</h2>
            <p className="mt-2 text-gray-600">
              Record your activities, workout duration, dates, and notes.
            </p>
            <Link
              href="/workouts"
              className="mt-4 inline-block font-medium text-emerald-700 hover:underline"
            >
              Manage workouts →
            </Link>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">📊</div>
            <h2 className="mt-4 text-lg font-semibold">Monitor Activity</h2>
            <p className="mt-2 text-gray-600">
              Review your total workouts and active minutes on your dashboard.
            </p>
            <Link
              href="/dashboard"
              className="mt-4 inline-block font-medium text-emerald-700 hover:underline"
            >
              View activity →
            </Link>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl">🎯</div>
            <h2 className="mt-4 text-lg font-semibold">Stay on Track</h2>
            <p className="mt-2 text-gray-600">
              Explore your goals, nutrition, and progress pages as these
              features develop.
            </p>
            <Link
              href="/goals"
              className="mt-4 inline-block font-medium text-emerald-700 hover:underline"
            >
              Explore goals →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white px-6 py-6 text-center text-sm text-gray-500">
        © 2026 T-Fitness Tracker. Keep moving forward.
      </footer>
    </main>
  );
}
