import { render, screen } from '@testing-library/react';
import App from './App';
import getAge from './helpers/getAge';

test('renders learn react link', () => {
  const linkElement = getAge(new Date())
  expect(linkElement).toBe(0);
  const linkElement1 = getAge(new Date("2000-01-01"))
  expect(linkElement1).toBe(23);
  const linkElement3 = getAge(new Date("2001-01-01"))
  expect(linkElement3).toBe(22);
  const linkElement4 = getAge(new Date("2002-01-01"))
  expect(linkElement4).toBe(21);
  const linkElement5 = getAge(new Date("2003-01-01"))
  expect(linkElement5).toBe(20);
});
