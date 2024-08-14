import { useState, useEffect } from 'react'
import { useApi } from '../../hooks';

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [totalusuarios, setTotalUsuarios] = useState(0);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const [getUsers] = useApi({
    endpoint: '/users',
    method: 'get'
  });


  const getUsersList = async () => {
    const response = await getUsers({
      queryString: {
        q: search === "" ? 'a' : search,
        per_page: perPage,
        page: page
      }
    });
    setUsuarios(response.items)
    setTotalUsuarios(response.total_count)
  };

  useEffect(() => {
    getUsersList()
  }, [search, perPage, page]);

  return {
    search,
    setSearch,
    usuarios,
    perPage,
    setPerPage,
    page,
    setPage,
    totalusuarios
  }
}