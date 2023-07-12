"use client"
import { useState, useEffect } from 'react';

export const useZustandStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
    console.log('useEffect is called', result)
  }, [result]);

  return data;
};