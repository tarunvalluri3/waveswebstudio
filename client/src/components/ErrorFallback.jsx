const ErrorFallback = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-red-600 uppercase tracking-[0.2em] text-xs">
        Something Went Wrong
      </span>

      <h1 className="mt-4 text-4xl font-medium">
        Unexpected Error
      </h1>

      <p className="mt-4 max-w-md text-neutral-600">
        An unexpected error occurred while loading this page.
        Please refresh and try again.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="
          mt-8
          px-6
          py-3
          bg-red-600
          text-white
          rounded-full
          hover:bg-red-700
          transition-colors
        "
      >
        Refresh Page
      </button>
    </div>
  );
};

export default ErrorFallback;