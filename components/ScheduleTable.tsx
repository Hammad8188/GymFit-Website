import { classes } from "@/data/classes";

export function ScheduleTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-zinc-900"><tr><th className="p-3">Class</th><th>Day</th><th>Time</th><th>Trainer</th><th>Level</th></tr></thead>
        <tbody>{classes.map((c) => <tr key={c.name+c.day} className="border-t border-zinc-800"><td className="p-3">{c.name}</td><td>{c.day}</td><td>{c.time}</td><td>{c.trainer}</td><td>{c.level}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
