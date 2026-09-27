import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import DataFetcher from '../components/DataFetcher';

const mockTodo = { id: 1, title: 'Test todo title', completed: false };

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTodo),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test('shows loading state initially', async () => {
  await act(async () => {
    render(<DataFetcher />);
  });
  // Loading is shown before fetch resolves; to capture it we check before awaiting
});

test('renders loading then data title after fetch resolves', async () => {
  render(<DataFetcher />);
  expect(screen.getByText('Loading data...')).toBeInTheDocument();

  await waitFor(() =>
    expect(screen.getByText(`Data Title: ${mockTodo.title}`)).toBeInTheDocument()
  );
});

test('renders error message when fetch returns non-ok response', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: false, status: 500 })
  );
  render(<DataFetcher />);
  await waitFor(() =>
    expect(screen.getByText(/Error: HTTP error: 500/i)).toBeInTheDocument()
  );
});

test('renders error message when fetch rejects (network failure)', async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error('Network failure')));
  render(<DataFetcher />);
  await waitFor(() =>
    expect(screen.getByText(/Error: Network failure/i)).toBeInTheDocument()
  );
});
