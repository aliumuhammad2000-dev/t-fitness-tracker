
"use client";

import type { Workout } from "../../types/index";

type WorkoutItemProps = {
  workout: Workout;
  onEdit: (workout: Workout) => void;
  onDelete: (id: string) => void;
};

export default function WorkoutItem({
  workout,
  onEdit,
  onDelete,
}: WorkoutItemProps) {
  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            {workout.type}
          </span>

          <h3 className="mt-3 text-lg font-semibold text-gray-900">
            {workout.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {workout.date} · {workout.duration} minutes
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onEdit(workout)}
            className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => {
              if (window.confirm("Delete this workout?")) {
                onDelete(workout.id);
              }
            }}
            className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>

      {workout.notes && (
        <p className="mt-4 whitespace-pre-wrap text-sm text-gray-600">
          {workout.notes}
        </p>
      )}
    </article>
  );
}
