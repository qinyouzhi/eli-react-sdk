import { useEffect, useState, useCallback } from 'react';
import { AxiosRequestConfig } from 'axios';
import axiosRequest from '../utils/request';

interface optionsProps {
  manual?: boolean; // 是否需要手动触发，若为false则立刻产生请求，若为true
  ready?: boolean; // 当manual为true时生效，为true时才产生请求
  onSuccess?: (result: any) => void; // 请求成功回调
  onError?: (error: any) => void; // 请求失败回调
}

const defaultOptions = { manual: true, ready: true }; // 默认配置

export const useRequest = (reqConfig: AxiosRequestConfig, options: optionsProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const { manual, ready, onSuccess, onError } = { ...defaultOptions, ...options };

  const request = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axiosRequest(reqConfig);
      setResult(data);
      onSuccess && onSuccess(data);
    } catch (reason: any) {
      setError(reason);
      onError && onError(reason);
    }
    setLoading(false);
  }, [onError, onSuccess, reqConfig]);

  const run = () => {
    if (ready) {
      request();
    }
  };

  useEffect(() => {
    if (!manual || (!manual && ready)) {
      request();
    }
  }, [manual, ready, request]);

  return {
    run,
    result,
    loading,
    error,
  };
};
