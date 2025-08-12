export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 opacity-80">The page you’re looking for doesn’t exist.</p>
      <a href="/" className="mt-6 inline-block btn btn-primary">Back to homepage</a>
    </div>
  );
}
