import React, { useMemo, useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { colors } from "../../utils/colors";
import { Icons } from "../../utils/icons";
type AMPM = "AM" | "PM";
type Props = {
  initial?: Date;
  timezoneLabel?: string;        // e.g. "IST"
  title?: string;                 // "Publish"
  onChange?: (d: Date) => void;   // fires whenever date/time changes
  minDate?: string;               // "2025-01-01"
  maxDate?: string;
  didClickCross?:() => void;
};


export default function InlinePublishSchedulerCal({
  initial = new Date(),
  timezoneLabel = "IST",
  title = "Publish",
  onChange,
  minDate,
  maxDate,
  didClickCross,
}: Props) {
  const seed = new Date(initial);
  const seedHour24 = seed.getHours();

  // date state (YYYY-MM-DD for the calendar)
  const [dateStr, setDateStr] = useState(formatYMD(seed));

  // time state
  const [hour, setHour] = useState(((seedHour24 + 11) % 12) + 1); // 1..12
  const [minute, setMinute] = useState(seed.getMinutes() - (seed.getMinutes() % 5));
  const [ampm, setAmpm] = useState<AMPM>(seedHour24 >= 12 ? "PM" : "AM");

  // full Date value
  const selectedDate = useMemo(() => {
    const [y, m, d] = dateStr.split("-").map((n) => parseInt(n, 10));
    const h24 = to24h(hour, ampm);
    return new Date(y, m - 1, d, h24, minute, 0, 0);
  }, [dateStr, hour, minute, ampm]);

  useEffect(() => onChange?.(selectedDate), [selectedDate]); // eslint-disable-line

  const marks = useMemo(
    () => ({
      [dateStr]: {
        selected: true,
        selectedColor: colors.accentBorder,
        selectedTextColor: "#021018",
      },
    }),
    [dateStr]
  );

  return (
    <View style={styles.card}>
      <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={didClickCross}>
          <Image
          source={Icons.cancelIcon}
          style={{width:24,height:24}}
          />
        </TouchableOpacity>
      </View>

      {/* Time */}
      <Text style={styles.sectionLabel}>Time</Text>
      <View style={styles.timeRow}>
        <NeonField label={`${pad2(hour)} : ${pad2(minute)}`} />
        <Segmented
          options={["AM", "PM"]}
          value={ampm}
          onChange={(v) => setAmpm(v as AMPM)}
        />
        <Text style={styles.tz}>{timezoneLabel}</Text>
      </View>

     

      <View style={styles.steppersRow}>
        <Stepper label="Hour" value={hour} min={1} max={12} onChange={setHour} />
        <Stepper
          label="Minute"
          value={minute}
          min={0}
          max={55}
          step={5}
          pad
          onChange={setMinute}
        />
      </View>

      {/* Date */}
      <Text style={[styles.sectionLabel, { marginTop: 18 }]}>Date</Text>

      <Calendar
        current={dateStr}
        minDate={minDate}
        maxDate={maxDate}
        onDayPress={(d: any) => setDateStr(d.dateString)}
        markedDates={marks}
        firstDay={1} // Monday like your UI
        theme={{
          backgroundColor: colors.black,
          calendarBackground: colors.black,
          textSectionTitleColor: colors.lightGray,
          monthTextColor: colors.white,
          dayTextColor: colors.white,
          todayTextColor: colors.accentBorder,
          selectedDayBackgroundColor: colors.accentBorder,
          selectedDayTextColor: "#021018",
          selectedDotColor: "#021018",
          arrowColor: colors.white,
          textDisabledColor: "#55616B",
        }}
        renderArrow={(direction : any) => (
          <View style={styles.navBtn}>
            <Text style={styles.navArrow}>{direction === "left" ? "←" : "→"}</Text>
          </View>
        )}
        style={styles.calendar}
      />

      {/* Summary */}
      <View style={styles.summaryRow}>
        <Text style={styles.summary}>{formatHuman(selectedDate)}</Text>
      </View>
    </View>
  );
}

/* --------------------------- Presentational bits --------------------------- */

function NeonField({ label }: { label: string }) {
  return (
    <View style={styles.neonField}>
      <Text style={styles.neonText}>{label}</Text>
    </View>
  );
}

function Segmented({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <View style={styles.segmented}>
      {options.map((opt) => {
        const active = opt === value;
        return (
          <Pressable
            key={opt}
            style={[styles.segment, active && styles.segmentActive]}
            onPress={() => onChange(opt)}
          >
            <Text style={[styles.segmentText, active && styles.segmentTextActive]}>
              {opt}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function Stepper({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  pad = false,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step?: number;
  pad?: boolean;
}) {
  return (
    <View style={styles.stepper}>
      <Text style={styles.stepperLabel}>{label}</Text>
      <View style={styles.stepperRow}>
        <Pressable style={styles.stepBtn} onPress={() => onChange(loop(value - step, min, max, step))}>
          <Text style={styles.stepIcon}>–</Text>
        </Pressable>
        <Text style={styles.stepValue}>{pad ? pad2(value) : value}</Text>
        <Pressable style={styles.stepBtn} onPress={() => onChange(loop(value + step, min, max, step))}>
          <Text style={styles.stepIcon}>＋</Text>
        </Pressable>
      </View>
    </View>
  );
}

/* --------------------------------- Styles --------------------------------- */

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.accentBorder,
    backgroundColor: colors.black,
    padding: 16,
    marginHorizontal:19,
    marginTop:12
  },
  title: { color: colors.white, fontSize: 16, fontWeight: "600", marginBottom: 6 },
  sectionLabel: {
    color: colors.white,
    opacity: 0.9,
    fontSize: 14,
    marginTop: 8,
    marginBottom: 10,
    fontWeight: "400",
  },
  timeRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  tz: { color: colors.white, marginLeft: "auto", opacity: 0.8 },

  neonField: {
    // minWidth: 120,
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: colors.accentBorder,
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
  },
  neonText: { color: colors.white, fontSize: 14, fontWeight: "600" },

  segmented: {
    borderRadius: 16,
    padding: 3,
    borderWidth: 1.5,
    borderColor: colors.accentBorder,
    flexDirection: "row",
    backgroundColor: colors.black,
    // height:48
  },
  segment: {
    paddingHorizontal: 16,
    height: 30,
    // minWidth: 64,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentActive: { backgroundColor: colors.accentBorder },
  segmentText: { color: colors.white, fontWeight: "400",fontSize:12 },
  segmentTextActive: { color: colors.black },

  steppersRow: { flexDirection: "row", gap: 12, marginTop: 10 },
  stepper: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.accentBorder,
    backgroundColor: colors.black,
    borderRadius: 12,
    padding: 10,
    marginTop:10
  },
  stepperLabel: { color: colors.lightGray, marginBottom: 6, fontSize: 12 },
  stepperRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 },
  stepBtn: {
    width: 48,
    height: 30,
    borderRadius: 8,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.2,
    borderColor: colors.accentBorder,
    
  },
  stepIcon: { color: colors.white, fontSize: 12, fontWeight: "400" },
  stepValue: { color: colors.white, fontSize: 12, fontWeight: "400", letterSpacing: 0.5 },

  navBtn: {
    width: 36,
    height: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.accentBorder,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  navArrow: { color: colors.white, fontSize: 14 },

  calendar: {
    // borderRadius: 16,
    borderWidth: 1.5,
    // borderColor: colors.accentBorder,
    overflow: "hidden",
  },

  summaryRow: { marginTop: 10 },
  summary: { color: colors.lightGray, fontSize: 13 },
});

/* --------------------------------- Utils ---------------------------------- */
function pad2(n: number) { return String(n).padStart(2, "0"); }
function to24h(h12: number, ampm: AMPM) { return ampm === "AM" ? (h12 % 12) : (h12 % 12) + 12; }
function loop(n: number, min: number, max: number, step: number) {
  if (n < min) return max - ((min - n - 1) % (max - min + step));
  if (n > max) return min + ((n - max - 1) % (max - min + step));
  return n;
}
function formatYMD(d: Date) {
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function formatHuman(d: Date) {
  const m = d.toLocaleString(undefined, { month: "short" });
  const dow = d.toLocaleString(undefined, { weekday: "short" });
  const hh = d.getHours();
  const mm = d.getMinutes();
  const ampm = hh >= 12 ? "PM" : "AM";
  const h12 = ((hh + 11) % 12) + 1;
  return `${pad2(h12)}:${pad2(mm)} ${ampm} • ${dow}, ${m} ${d.getDate()}, ${d.getFullYear()}`;
}
