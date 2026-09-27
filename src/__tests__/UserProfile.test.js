import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from '../components/UserProfile';

test('renders user name when user prop is provided', () => {
  render(<UserProfile user={{ name: 'Alice' }} />);
  expect(screen.getByText('Name: Alice')).toBeInTheDocument();
});

test('renders Guest when user prop is null', () => {
  render(<UserProfile user={null} />);
  expect(screen.getByText('Name: Guest')).toBeInTheDocument();
});

test('renders Guest when user prop is undefined', () => {
  render(<UserProfile />);
  expect(screen.getByText('Name: Guest')).toBeInTheDocument();
});

test('updates displayed name when user prop changes', () => {
  const { rerender } = render(<UserProfile user={{ name: 'Alice' }} />);
  expect(screen.getByText('Name: Alice')).toBeInTheDocument();

  rerender(<UserProfile user={{ name: 'Bob' }} />);
  expect(screen.getByText('Name: Bob')).toBeInTheDocument();
});

test('renders User Profile heading', () => {
  render(<UserProfile user={{ name: 'Alice' }} />);
  expect(screen.getByRole('heading', { name: /user profile/i })).toBeInTheDocument();
});
