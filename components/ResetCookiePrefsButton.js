'use client';
import { useState } from 'react';

export default function ResetCookiePrefsButton() {
  const [done, setDone] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => {
          try {
            localStorage.removeItem('bc-consent-analytics');
            setDone(true);
            // Uncomment if you want to force the banner to re-check on next load:
            // location.reload();
          } catch (e) {
            console.error(e);
          }
        }}
        className="btn btn-secondary"
      >
        Reset cookie preferences
      </button>

      {done && (
        <p className="mt-2 text-sm opacity-80">
          Preferences reset. If optional cookies are used in future, you’ll be asked again.
        </p>
      )}
    </div>
  );
}
