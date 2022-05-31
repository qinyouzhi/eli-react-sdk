import { useEffect, useState } from 'react';
import axiosRequest from '../utils/request';

export const useRequest = (url: string, method: string = 'GET', data: any) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const request = async () => {
    setLoading(true);
    try {
      const result = await axiosRequest({
        url,
        params: data,
        method,
      });
      setResult(result.data);
    } catch (reason: any) {
      setError(reason);
    }
    setLoading(false);
  };

  useEffect(() => {
    request();
  }, []);

  return {
    loading,
    result,
    error,
  };
}