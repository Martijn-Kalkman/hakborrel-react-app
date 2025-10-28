export const useFetchWithErrorHandling = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<{ data: T | null; error: string | null }> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    if (error.name === 'AbortError') {
      return { data: null, error: 'Request was aborted due to timeout' };
    }
    
    if (error.message?.includes('Premature close')) {
      return { data: null, error: 'Connection was closed prematurely' };
    }
    
    if (error.message?.includes('aborted')) {
      return { data: null, error: 'Request was aborted' };
    }

    return { data: null, error: error.message || 'An unknown error occurred' };
  }
};
