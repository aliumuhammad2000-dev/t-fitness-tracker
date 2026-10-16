
export type Workout = {
  id: string;
  name: string;
  type: string;
  duration: number;
  date: string;
  notes: string;
};

export type WorkoutInput = Omit<Workout, "id">;
