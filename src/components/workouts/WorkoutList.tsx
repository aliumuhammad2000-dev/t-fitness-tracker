
"use client";

import type { Workout } from "../../types/index";
import WorkoutItem from "./WorkoutItem";

type WorkoutListProps = {
  workouts: Workout[];
  onEdit: (workout: Workout) => void;
  onDelete: (id: string) => void;
};

export default function WorkoutList({
  workouts,
  onEdit,
  onDelete,
}: WorkoutListProps) {
  if (workouts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center">
        <p className="font-medium text-gray-700">No workouts yet</p>
        <p className="mt-2 text-sm text-gray-500">
          Add your first workout to start tracking your fitness journey.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          workout={workout}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
