import { useState, useEffect } from 'react'
import { useApi } from '../../hooks';

export const useRepositorios = () => {
  const [repositorios, setRepositorios] = useState([]);
  const [totalRepositorios, setTotalRepositorios] = useState(0);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const [getRepositories] = useApi({
    endpoint: '/repositories',
    method: 'get'
  });


  const getRepositoriesList = async () => {
    const response = await getRepositories({
      queryString: {
        q: search === "" ? 'a' : search,
        per_page: perPage,
        page: page
      }
    });
    setRepositorios(response.items)
    setTotalRepositorios(response.total_count)
  };

  useEffect(() => {
    getRepositoriesList()
  }, [search, perPage, page]);

  return {
    search,
    setSearch,
    repositorios,
    perPage,
    setPerPage,
    page,
    setPage,
    totalRepositorios
  }
}