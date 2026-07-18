import { useEffect, useState } from "react";
import {
  getNextFireAt,
  getSettings,
  saveSettings
} from "../shared/storage";
import type { ReminderSettings } from "../shared/types";

function WaterDropIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2.75C12 2.75 5.5 9.1 5.5 14.25a6.5 6.5 0 0 0 13 0C18.5 9.1 12 2.75 12 2.75Z"
        fill="currentColor"
      />
      <path
        d="M9 15.2a3.2 3.2 0 0 0 3.2 3.2"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.5v5l3.25 1.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M19.3 15.2A8 8 0 0 1 8.8 4.7 8 8 0 1 0 19.3 15.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 15.25A3.25 3.25 0 1 0 12 8.75a3.25 3.25 0 0 0 0 6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m19.2 13.2 1.15 1.1-1.8 3.1-1.55-.45a7.7 7.7 0 0 1-1.8 1.05l-.4 1.55h-3.6L10.8 18a7.7 7.7 0 0 1-1.8-1.05l-1.55.45-1.8-3.1 1.15-1.1a7.1 7.1 0 0 1 0-2.4L5.65 9.7l1.8-3.1L9 7.05A7.7 7.7 0 0 1 10.8 6l.4-1.55h3.6L15.2 6A7.7 7.7 0 0 1 17 7.05l1.55-.45 1.8 3.1-1.15 1.1a7.1 7.1 0 0 1 0 2.4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 8a8 8 0 1 0 .6 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M19 4v4h-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Toggle(props: {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}) {
  return (
    <button
      aria-label={props.checked ? "Disable reminders" : "Enable reminders"}
      aria-pressed={props.checked}
      className={
        "relative inline-flex h-7 w-12 items-center rounded-full border transition " +
        (props.checked
          ? "border-cyan-300 bg-gradient-to-r from-sky-500 to-cyan-400"
          : "border-sky-200 bg-sky-100") +
        (props.disabled ? " cursor-not-allowed opacity-60" : "")
      }
      disabled={props.disabled}
      onClick={props.onChange}
      type="button"
    >
      <span
        className={
          "inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform " +
          (props.checked ? "translate-x-6" : "translate-x-1")
        }
      />
    </button>
  );
}

function formatClock(epochMs: number | null): string {
  if (!epochMs) return "Not scheduled";

  return new Date(epochMs).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

function getCountdown(
  nextFireAt: number | null,
  now: number
): { value: string; label: string } {
  if (!nextFireAt) {
    return {
      value: "—",
      label: "scheduling"
    };
  }

  const difference = nextFireAt - now;

  if (difference <= 0) {
    return {
      value: "Now",
      label: "time to hydrate"
    };
  }

  const minutes = Math.ceil(difference / 60_000);

  return {
    value: String(minutes),
    label: minutes === 1 ? "minute" : "minutes"
  };
}

function isInQuietHours(
  settings: ReminderSettings,
  currentDate: Date
): boolean {
  if (!settings.quietHoursEnabled) return false;

  const [startHour, startMinute] = settings.quietStart
    .split(":")
    .map(Number);

  const [endHour, endMinute] = settings.quietEnd
    .split(":")
    .map(Number);

  if (
    [startHour, startMinute, endHour, endMinute].some(Number.isNaN)
  ) {
    return false;
  }

  const start = startHour * 60 + startMinute;
  const end = endHour * 60 + endMinute;
  const current = currentDate.getHours() * 60 + currentDate.getMinutes();

  if (start <= end) {
    return current >= start && current < end;
  }

  return current >= start || current < end;
}

function formatStoredTime(value: string): string {
  const [hours, minutes] = value.split(":").map(Number);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return value;
  }

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

export default function PopupApp() {
  const [settings, setSettings] = useState<ReminderSettings | null>(null);
  const [nextFireAt, setNextFireAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setError(null);

    try {
      const [storedSettings, storedNextFireAt] = await Promise.all([
        getSettings(),
        getNextFireAt()
      ]);

      setSettings(storedSettings);
      setNextFireAt(storedNextFireAt);
      setNow(Date.now());
    } catch (loadError: unknown) {
      console.error("Failed to refresh SipTime popup:", loadError);
      setError("Unable to refresh reminder information.");
    }
  }

  useEffect(() => {
    let isMounted = true;

    void Promise.all([getSettings(), getNextFireAt()])
      .then(([storedSettings, storedNextFireAt]) => {
        if (!isMounted) return;

        setSettings(storedSettings);
        setNextFireAt(storedNextFireAt);
      })
      .catch((loadError: unknown) => {
        console.error("Failed to load SipTime popup state:", loadError);

        if (isMounted) {
          setError("Unable to load reminder information.");
        }
      });

    const handler: Parameters<
      typeof chrome.storage.onChanged.addListener
    >[0] = (changes, area) => {
      if (area !== "sync") return;

      if (changes.waterReminderSettings) {
        setSettings(
          changes.waterReminderSettings.newValue as ReminderSettings
        );
      }

      if (changes.waterReminderNextFireAt) {
        const value = changes.waterReminderNextFireAt.newValue;
        setNextFireAt(typeof value === "number" ? value : null);
      }
    };

    chrome.storage.onChanged.addListener(handler);

    return () => {
      isMounted = false;
      chrome.storage.onChanged.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(Date.now());
    }, 1_000);

    return () => window.clearInterval(timer);
  }, []);

  async function toggleEnabled() {
    if (!settings || isUpdating) return;

    const previousSettings = settings;
    const updatedSettings = {
      ...settings,
      enabled: !settings.enabled
    };

    setIsUpdating(true);
    setError(null);
    setSettings(updatedSettings);

    try {
      await saveSettings(updatedSettings);
    } catch (saveError: unknown) {
      console.error("Failed to update reminder status:", saveError);
      setSettings(previousSettings);
      setError("Unable to update reminder status.");
    } finally {
      setIsUpdating(false);
    }
  }

  const countdown = getCountdown(nextFireAt, now);
  const quietNow = settings
    ? isInQuietHours(settings, new Date(now))
    : false;

  const statusText = !settings
    ? "Loading"
    : !settings.enabled
      ? "Paused"
      : quietNow
        ? "Quiet hours"
        : "Active";

  const modeText =
    settings?.reminderType === "INTERVAL"
      ? `Every ${settings.intervalMinutes} minutes`
      : `${settings?.fixedTimes.length ?? 0} fixed times`;

  const quietHoursText = settings?.quietHoursEnabled
    ? `${formatStoredTime(settings.quietStart)} – ${formatStoredTime(
        settings.quietEnd
      )}`
    : "Turned off";

  return (
    <main className="water-background relative min-h-[540px] w-[380px] p-4 text-sky-950">
      <div
        aria-hidden="true"
        className="water-bubble right-7 top-20 h-7 w-7"
      />
      <div
        aria-hidden="true"
        className="water-bubble left-5 top-44 h-4 w-4"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        aria-hidden="true"
        className="water-bubble bottom-28 right-12 h-5 w-5"
        style={{ animationDelay: "2.4s" }}
      />

      <div aria-hidden="true" className="water-wave water-wave-one" />
      <div aria-hidden="true" className="water-wave water-wave-two" />

      <section className="water-glass rounded-[28px] p-4">
        <header className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-300/40">
              <WaterDropIcon />
            </div>

            <div className="min-w-0">
              <h1 className="text-lg font-bold tracking-tight text-sky-950">
                SipTime
              </h1>
              <p className="truncate text-xs text-sky-700">
                Hydration that fits your day
              </p>
            </div>
          </div>

          <Toggle
            checked={settings?.enabled ?? false}
            disabled={!settings || isUpdating}
            onChange={() => {
              void toggleEnabled();
            }}
          />
        </header>

        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/65 px-3 py-1.5 text-xs font-semibold text-sky-800">
            <span
              className={
                "h-2 w-2 rounded-full " +
                (!settings
                  ? "bg-sky-300"
                  : settings.enabled && !quietNow
                    ? "bg-emerald-400"
                    : "bg-amber-400")
              }
            />
            {statusText}
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="water-timer">
            <div aria-hidden="true" className="water-timer-liquid" />

            <div className="water-timer-content">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-700">
                {!settings?.enabled ? "Reminders" : "Next sip in"}
              </p>

              <div className="mt-1 text-5xl font-bold tracking-tight text-sky-950">
                {!settings?.enabled ? "Off" : countdown.value}
              </div>

              <p className="mt-1 text-sm font-semibold text-sky-700">
                {!settings?.enabled ? "paused" : countdown.label}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm font-semibold text-sky-950">
            {settings?.enabled
              ? `Next reminder at ${formatClock(nextFireAt)}`
              : "Enable reminders when you are ready"}
          </p>

          <p className="mt-1 text-xs text-sky-700">
            {quietNow
              ? "Notifications are currently suppressed by quiet hours."
              : "A few regular sips can make hydration easier."}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/70 bg-white/60 p-3 shadow-sm">
            <div className="flex items-center gap-2 text-sky-600">
              <ClockIcon />
              <span className="text-[11px] font-bold uppercase tracking-wider">
                Schedule
              </span>
            </div>

            <p className="mt-2 text-sm font-semibold text-sky-950">
              {settings ? modeText : "Loading…"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/60 p-3 shadow-sm">
            <div className="flex items-center gap-2 text-sky-600">
              <MoonIcon />
              <span className="text-[11px] font-bold uppercase tracking-wider">
                Quiet hours
              </span>
            </div>

            <p className="mt-2 text-sm font-semibold text-sky-950">
              {settings ? quietHoursText : "Loading…"}
            </p>
          </div>
        </div>

        {error ? (
          <div
            className="mt-3 rounded-2xl border border-rose-200 bg-rose-50/90 px-3 py-2 text-xs font-medium text-rose-700"
            role="alert"
          >
            {error}
          </div>
        ) : null}

        <div className="mt-4 flex gap-2">
          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-sky-300/40 transition hover:from-sky-700 hover:to-cyan-600"
            onClick={() => chrome.runtime.openOptionsPage()}
            type="button"
          >
            <SettingsIcon />
            Open settings
          </button>

          <button
            aria-label="Refresh reminder information"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/80 bg-white/70 text-sky-700 shadow-sm transition hover:bg-white"
            onClick={() => {
              void load();
            }}
            type="button"
          >
            <RefreshIcon />
          </button>
        </div>

        <p className="mt-3 text-center text-[11px] text-sky-700/80">
          Your reminder settings remain in your browser.
        </p>
      </section>
    </main>
  );
}