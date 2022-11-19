import {useEffect} from 'react';
import useHttp from './use-http';

const useData = (setData, setPageNumbers) => {
  const {sendRequest, error, isLoading} = useHttp();

  /**
   * returns data from server
   */
  const getData = async (page = 1) => {
    const response = await sendRequest(
      {
        url: 'https://rickandmortyapi.com/graphql',
      },
      page,
    );

    return {
      numberPages: response.data.data.characters.info.pages,
      data: response.data.data.characters.results,
    };
  };

  useEffect(() => {
    getData().then(res => {
      setPageNumbers(res.numberPages);
      setData(res.data);
    });
  }, []);

  const handlePageChange = async num => {
    getData(num).then(res => {
      setPageNumbers(res.numberPages);
      setData(res.data);
    });
  };

  return {handlePageChange, error, isLoading};
};

export default useData;
