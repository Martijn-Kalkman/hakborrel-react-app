export default defineNuxtPlugin(() => {
  // Global error handler for fetch requests
  const originalFetch = window.fetch;
  
  window.fetch = async (...args) => {
    try {
      const response = await originalFetch(...args);
      
      // Handle premature close errors
      if (!response.ok && response.status === 0) {
        throw new Error('Connection was closed prematurely');
      }
      
      return response;
    } catch (error: any) {
      // Log fetch errors for debugging
      console.warn('Fetch error:', error.message);
      
      // Re-throw the error to be handled by the calling code
      throw error;
    }
  };

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason?.message?.includes('aborted') || 
        event.reason?.message?.includes('Premature close')) {
      console.warn('Unhandled fetch error:', event.reason.message);
      event.preventDefault(); // Prevent the error from being logged to console
    }
  });
});
