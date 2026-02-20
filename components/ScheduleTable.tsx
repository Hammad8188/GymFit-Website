import { classes } from "@/data/classes";

export function ScheduleTable() {
  return (
    <div className="fade-up overflow-x-auto glass-card p-1">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="p-4 font-semibold text-brand-500">Class</th>
            <th className="p-4 font-semibold text-brand-500">Day</th>
            <th className="p-4 font-semibold text-brand-500">Time</th>
            <th className="p-4 font-semibold text-brand-500">Trainer</th>
            <th className="p-4 font-semibold text-brand-500">Level</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c) => (
            <tr key={c.name + c.day} className="schedule-row border-t border-zinc-800/40">
              <td className="p-4 font-medium text-zinc-100">{c.name}</td>
              <td className="p-4 text-zinc-300">{c.day}</td>
              <td className="p-4 text-zinc-300">{c.time}</td>
              <td className="p-4 text-zinc-300">{c.trainer}</td>
              <td className="p-4"><span className="badge">{c.level}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
