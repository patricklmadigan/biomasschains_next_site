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
        className="px-4 py-2 border border-gray-400 rounded-md text-sm font-medium 
                   bg-transparent hover:bg-gray-700 hover:text-white 
                   transition-colors duration-200"
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
