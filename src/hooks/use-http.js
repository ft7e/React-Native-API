import React, {useState} from 'react';
import {Text} from 'react-native';
import axios from 'react-native-axios';
function useHttp() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendRequest = async (requestConfig, pageNum) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await axios.post(requestConfig.url, {
        query: `query {characters(page: ${pageNum}, filter: { name: "rick" }) {
                info {
                  count,
                  pages
                }
                results {
                  name,
                  image,
                  id
                }
              }}`,
      });
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttp;
