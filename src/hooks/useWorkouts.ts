
"use client";

import { useEffect, useState } from "react";
import type { Workout, WorkoutInput } from "../types/index";

const STORAGE_KEY = "t-fitness-workouts";

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load saved workouts from the browser.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed: unknown = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setWorkouts(parsed as Workout[]);
        }
      }
    } catch {
      console.error("Unable to load saved workouts.");
    } finally {
      setLoaded(true);
    }
  }, []);

  // Save workouts after loading is complete.
  useEffect(() => {
    if (!loaded) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
    } catch {
      console.error("Unable to save workouts.");
    }
  }, [workouts, loaded]);

  function addWorkout(input: WorkoutInput) {
    const workout: Workout = {
      ...input,
      id: crypto.randomUUID(),
    };

    setWorkouts((current) => [workout, ...current]);
  }

  function updateWorkout(id: string, input: WorkoutInput) {
    setWorkouts((current) =>
      current.map((workout) =>
        workout.id === id ? { ...input, id } : workout
      )
    );
  }

  function deleteWorkout(id: string) {
    setWorkouts((current) =>
      current.filter((workout) => workout.id !== id)
    );
  }

  return {
    workouts,
    loaded,
    addWorkout,
    updateWorkout,
    deleteWorkout,
  };
}
