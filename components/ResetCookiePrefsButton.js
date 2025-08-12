'use client';

export default function ResetCookiePrefsButton() {
  return (
    <button
      className="btn btn-outline"
      onClick={() => {
        try {
          localStorage.removeItem('bc-consent-analytics');
          location.reload();
        } catch {}
      }}
    >
      Reset cookie preferences
    </button>
  );
}
