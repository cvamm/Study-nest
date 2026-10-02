import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  /** Optional fallback UI — defaults to the built-in error card. */
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Catches unhandled React render errors and prevents the entire app from
 * white-screening. Wrap around major page sections so a crash in one area
 * (e.g. corrupted localStorage data rendering PYQs) doesn't take down the
 * whole application.
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary] Caught render error:", error, info.componentStack);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-rose-200 bg-rose-50 p-8 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
            <AlertTriangle className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-navy-900">
              Something went wrong
            </h3>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-navy-500">
              This section encountered an unexpected error. Your data is safe — try
              refreshing the section or the page.
            </p>
            {this.state.error ? (
              <p className="mt-2 max-w-md truncate rounded-lg bg-navy-50 px-3 py-1.5 font-mono text-[11px] text-navy-400">
                {this.state.error.message}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={this.handleRetry}
            className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-navy-700"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
