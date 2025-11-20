export interface TeamMember {
  name: string;
  rm: string;
}

export interface DataPoint {
  t: number; // Time
  val: number; // Value of the function
  label?: string; // Optional label for tooltip
}
