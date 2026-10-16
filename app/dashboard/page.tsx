

"use client";

import Link from "next/link";
import { useWorkouts } from "../../src/hooks/useWorkouts";

export default function DashboardPage() {
  const { workouts } = useWorkouts();

  const totalMinutes = workouts.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + Number(workout.calories || 0),
    0
  );

  const cards = [
    { title: "Total Workouts", value: workouts.length },
    { title: "Active Minutes", value: totalMinutes },
    { title: "Calories Burned", value: totalCalories },
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className="mt-3 text-3xl font-bold text-emerald-600">
                {card.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Get Started
          </h2>
          <p className="mt-2 text-gray-600">
            Record your workouts and keep track of your activity.
          </p>

          <Link
            href="/workouts"
            className="mt-4 inline-block rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700"
          >
            View Workouts
          </Link>
        </div>
      </div>
    </main>
  );
}