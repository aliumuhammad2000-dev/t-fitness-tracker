
"use client";

import { useState } from "react";
import type { Workout, WorkoutInput } from "../../types/index";

type WorkoutFormProps = {
  initialWorkout?: Workout | null;
  onSave: (input: WorkoutInput) => void;
  onCancel: () => void;
};

export default function WorkoutForm({
  initialWorkout,
  onSave,
  onCancel,
}: WorkoutFormProps) {
  const [name, setName] = useState(initialWorkout?.name ?? "");
  const [type, setType] = useState(initialWorkout?.type ?? "Strength");
  const [duration, setDuration] = useState(
    String(initialWorkout?.duration ?? 30)
  );
  const [date, setDate] = useState(
    initialWorkout?.date ?? new Date().toISOString().slice(0, 10)
  );
  const [notes, setNotes] = useState(initialWorkout?.notes ?? "");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const minutes = Number(duration);

    if (!name.trim() || !date || !Number.isFinite(minutes) ||
        minutes <= 0 || !Number.isInteger(minutes)) {
      return;
    }

    onSave({
      name: name.trim(),
      type,
      duration: minutes,
      date,
      notes: notes.trim(),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-bold">
        {initialWorkout ? "Edit Workout" : "Add New Workout"}
      </h2>

      <div>
        <label htmlFor="workout-name" className="mb-1 block text-sm font-medium">
          Workout name
        </label>
        <input
          id="workout-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="e.g. Morning Run"
          required
          maxLength={100}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label htmlFor="workout-type" className="mb-1 block text-sm font-medium">
          Workout type
        </label>
        <select
          id="workout-type"
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="w-full rounded-lg border p-3"
        >
          <option>Strength</option>
          <option>Cardio</option>
          <option>Running</option>
          <option>Cycling</option>
          <option>Yoga</option>
          <option>Other</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="duration" className="mb-1 block text-sm font-medium">
            Duration (minutes)
          </label>
          <input
            id="duration"
            type="number"
            min="1"
            max="1440"
            step="1"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label htmlFor="workout-date" className="mb-1 block text-sm font-medium">
            Date
          </label>
          <input
            id="workout-date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
            className="w-full rounded-lg border p-3"
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1 block text-sm font-medium">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="How did your workout go?"
          maxLength={1000}
          rows={3}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-700"
        >
          {initialWorkout ? "Save Changes" : "Add Workout"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border px-5 py-2.5 font-medium hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
