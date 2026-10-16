
"use client";

import Link from "next/link";
import { useWorkouts } from "../../src/hooks/useWorkouts";

export default function DashboardPage() {
  const { workouts, loaded } = useWorkouts();

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const cards = [
    { title: "Total Workouts", value: workouts.length },
    { title: "Active Minutes", value: totalMinutes },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Fitness Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome back! Keep working toward your fitness goals.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className="mt-3 text-3xl font-bold text-emerald-600">
                {loaded ? card.value.toLocaleString() : "…"}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Workouts
          </h2>

          {!loaded ? (
            <p className="mt-3 text-gray-500">Loading workouts...</p>
          ) : workouts.length === 0 ? (
            <p className="mt-3 text-gray-600">
              No workouts recorded yet. Add your first workout to get started.
            </p>
          ) : (
            <div className="mt-4 divide-y">
              {workouts.slice(0, 3).map((workout) => (
                <div key={workout.id} className="py-3">
                  <p className="font-medium text-gray-900">
                    {workout.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {workout.type} · {workout.date} · {workout.duration} minutes
                  </p>
                </div>
              ))}
            </div>
          )}

          <Link
            href="/workouts"
            className="mt-5 inline-block rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700"
          >
            View Workouts
          </Link>
        </div>
      </div>
    </main>
  );
}
