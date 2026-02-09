"use client";

import { useMemo, useState } from "react";
import { CITIES } from "@/lib/eventura-data";
import { useRouter } from "next/navigation";

export default function HeroSearch() {
  const router = useRouter();
  const [city, setCity] = useState("Ahmedabad");
  const [type, setType] = useState("Wedding");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [guests, setGuests] = useState("200");

  const query = useMemo(() => {
    const p = new URLSearchParams();
    p.set("city", city);
    p.set("type", type);
    if (start) p.set("start", start);
    if (end) p.set("end", end);
    if (guests) p.set("guests", guests);
    return p.toString();
  }, [city, type, start, end, guests]);

  return (
    <div className="card cardPadLg">
      <div className="searchGrid">
        <div style={{ display: "grid", gap: 6 }}>
          <div className="label">City</div>
          <select className="input" value={city} onChange={(e) => setCity(e.target.value)}>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <div className="label">Event type</div>
          <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
            {["Wedding","Engagement","Reception","Corporate","Birthday","Other"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <div className="label">Start date</div>
          <input className="input" type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <div className="label">End date</div>
          <input className="input" type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <div className="label">Guests</div>
          <input className="input" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="e.g. 200" />
          <button className="btn btnSolid" onClick={() => router.push(`/venues?${query}`)}>
            Check Availability
          </button>
        </div>
      </div>

      <div className="small" style={{ marginTop: 10 }}>
        Demo search (static). Next step: connect to your inquiry form & real availability.
      </div>
    </div>
  );
}
