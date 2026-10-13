const API_BASE = '/api';

export interface ContactPayload {
  name: string;
  email: string;
  service: string;
  message: string;
  budget?: string;
  website?: string; // honeypot
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export async function submitContact(data: ContactPayload): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const json: ApiResponse = await response.json();
  return json;
}
