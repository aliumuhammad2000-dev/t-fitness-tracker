
"use client";

import { useState } from "react";

type Workout = {
  id: number;
  name: string;
  date: string;
  duration: number;
  calories: number;
};

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  function addWorkout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setWorkouts((current) => [
      ...current,
      {
        id: Date.now(),
        name,
        date,
        duration: Number(duration),
        calories: Number(calories),
      },
    ]);

    setName("");
    setDuration("");
    setCalories("");
    setShowForm(false);
  }

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.calories,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-900 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">My Workouts</h1>
            <p className="mt-2 text-gray-600">
              Track your activities and celebrate your progress.
            </p>
          </div>

          <button
            onClick={() => {
              if (!showForm) {
                setDate(new Date().toISOString().split("T")[0]);
              }
              setShowForm(!showForm);
            }}
            className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            {showForm ? "Cancel" : "+ Add Workout"}
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <SummaryCard title="Total Workouts" value={workouts.length} />
          <SummaryCard title="Active Minutes" value={totalMinutes} />
          <SummaryCard
            title="Calories Burned"
            value={totalCalories.toLocaleString()}
          />
        </div>

        {showForm && (
          <form
            onSubmit={addWorkout}
            className="mt-8 grid gap-4 rounded-xl border bg-white p-6 shadow-sm sm:grid-cols-2"
          >
            <h2 className="text-xl font-semibold sm:col-span-2">
              Add a Workout
            </h2>

            <label className="grid gap-2 text-sm font-medium">
              Workout name
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Running"
                className="rounded-lg border p-3"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Date
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-lg border p-3"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Duration (minutes)
              <input
                required
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="rounded-lg border p-3"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Calories burned
              <input
                required
                type="number"
                min="0"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="rounded-lg border p-3"
              />
            </label>

            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 sm:col-span-2"
            >
              Save Workout
            </button>
          </form>
        )}

        <section className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Workout History</h2>

          {workouts.length === 0 ? (
            <div className="py-12 text-center">
              <div className="text-4xl">🏋️</div>
              <p className="mt-4 font-semibold">No workouts yet</p>
              <p className="mt-2 text-sm text-gray-500">
                Add your first workout to start tracking your activity.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-5 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
              >
                Add Your First Workout
              </button>
            </div>
          ) : (
            <div className="mt-4 divide-y">
              {workouts.map((workout) => (
                <div
                  key={workout.id}
                  className="flex flex-wrap items-center justify-between gap-4 py-4"
                >
                  <div>
                    <h3 className="font-semibold">{workout.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {workout.date} · {workout.duration} minutes
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">
                      {workout.calories} kcal
                    </span>
                    <button
                      onClick={() =>
                        setWorkouts((current) =>
                          current.filter((item) => item.id !== workout.id)
                        )
                      }
                      aria-label={`Delete ${workout.name}`}
                      className="text-sm font-medium text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-3 text-3xl font-bold text-emerald-600">
        {value}
      </p>
    </div>
  );
}
