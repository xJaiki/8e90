import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Error Boundary component to catch JavaScript errors anywhere in the component tree
 * and display a fallback UI instead of crashing the whole app
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    this.setState({ errorInfo });
    console.error('Error caught by ErrorBoundary:', error, errorInfo);

  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full">
            <div className="text-center">
              <div className='inline-flex items-center justify-center w-16 h-16  mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129.56 115.83">
                  <defs>
                    <style>{`.cls-1{fill:#f01169;}.cls-2{fill:#BABABA;}`}</style>
                  </defs>
                  <g id="Livello_2" data-name="Livello 2">
                    <g id="Guide">
                      <circle class="cls-1" cx="64.78" cy="57.92" r="11.42" />
                      <path class="cls-2"
                        d="M64.78,84.81C33.38,84.81,0,75.39,0,57.92S33.38,31,64.78,31s64.78,9.42,64.78,26.9S96.18,84.81,64.78,84.81Zm0-46.79C30.73,38,7,48.5,7,57.92S30.73,77.81,64.78,77.81s57.78-10.48,57.78-19.89S98.83,38,64.78,38Z" />
                      <path class="cls-2"
                        d="M90.2,115.83c-15,0-35.24-21.13-48.72-44.47-8.39-14.53-14.12-29.5-16.15-42.14-2.21-13.77.3-23.5,7.06-27.4,15.14-8.74,40,15.45,55.68,42.65h0c15.7,27.19,24.23,60.81,9.1,69.54A13.72,13.72,0,0,1,90.2,115.83ZM39.34,7a6.73,6.73,0,0,0-3.45.84c-3.95,2.28-5.31,9.84-3.65,20.23,1.9,11.82,7.33,25.94,15.31,39.75,17,29.49,38,44.8,46.12,40.09S99,77.45,82,48h0C67,22,49,7,39.34,7Z" />
                      <path class="cls-2"
                        d="M39.36,115.83a13.7,13.7,0,0,1-7-1.82c-6.76-3.9-9.27-13.63-7.06-27.4C27.36,74,33.09,59,41.48,44.47,57.19,17.27,82-6.92,97.17,1.82s6.6,42.35-9.1,69.54h0C74.6,94.7,54.38,115.83,39.36,115.83ZM90.22,7C80.56,7,62.54,22,47.55,48c-8,13.81-13.41,27.93-15.31,39.75-1.66,10.39-.3,18,3.65,20.23C44,112.66,65,97.35,82,67.86s19.81-55.28,11.66-60A6.76,6.76,0,0,0,90.22,7Z" />
                      <path class="cls-1"
                        d="M102.82,35.91s0,0,0,0c-.53,2.19-1.17,4.42-1.9,6.68A138.52,138.52,0,0,1,95,57.92c-1.26,2.75-2.6,5.49-4,8.19q-1.39,2.65-2.9,5.25T85,76.5c-1.62,2.58-3.32,5.12-5.08,7.58a137.83,137.83,0,0,1-10.27,12.8q-2.4,2.64-4.84,5l-.49.47c-8.61,8.2-17.43,13.48-24.94,13.48a13.66,13.66,0,0,1-7-1.82c-6.76-3.9-9.27-13.63-7.06-27.4.35-2.17.8-4.41,1.37-6.71s1.16-4.43,1.89-6.71c2.12.61,4.38,1.19,6.75,1.7,0,0,0,0,0,0-.73,2.27-2.82,10.81-3.13,12.79-1.67,10.39-.3,18,3.65,20.23,4.75,2.75,13.88-1.33,24-11.07q2.39-2.3,4.85-5c2-2.2,4-4.59,6-7.18C72.53,82.42,74.3,80,76,77.41c2-3,4-6.18,6-9.55s3.71-6.7,5.29-10q2-4.2,3.67-8.2c1.24-3,2.3-5.94,3.21-8.74,0,0,0,0,0,0-2.87-.63-5.94-1.16-9.17-1.6-2.86-.38-5.84-.69-8.94-.91-3.61-.26-7.37-.4-11.27-.4s-7.66.14-11.26.4q-4.6.31-8.87.9a0,0,0,0,1,0,0h0a17.44,17.44,0,0,1,14.07-8.14h.1q3-.11,6-.11c2,0,4,0,6,.11,3.06.12,6.11.32,9.13.61a139.47,139.47,0,0,1,16.19,2.49C98.41,34.73,100.66,35.29,102.82,35.91Z" />
                    </g>
                  </g>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Gooood, something went wrong as expected</h2>
              <p className="text-gray-600 mb-6">
                Weird feeling about being happy for an error, but here we are! The error boundary works as expected. <br /><br />
                Now if you are in development mode, you can see the error details below. Otherwise, nope :)
              </p>

              {process.env.NODE_ENV !== 'production' && (
                <div className="bg-red-50 p-4 rounded-md text-left mb-6 overflow-auto max-h-56">
                  <p className="text-red-800 font-medium mb-2">Incredibile error details:</p>
                  <pre className="text-xs text-red-700 whitespace-pre-wrap">
                    {this.state.error?.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              )}

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                >
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;