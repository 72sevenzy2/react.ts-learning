import { useState, type JSX } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface pokeapi {
  name: string;
  height: number;
  abilities: { ability: { name: string } }[];
}

const Pokemon = (): JSX.Element => {

  const [args, setter] = useState<string>("");
  const [queryname, setquery] = useState<string | null>(null);

  const { data, isError, error, refetch, isLoading } = useQuery<pokeapi>({
    queryKey: ["blahab", queryname],
    enabled: !!queryname,
    queryFn: async (): Promise<pokeapi> => {``
      const name = queryname!.toLowerCase().trim();
      const response = await axios.get<pokeapi>(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name)}`);
      return response.data;
    },
    retry: 1
  });

  return (
    <div>
      <h1>pokemon</h1>
      <input type="text" value={args} onChange={(e) => { setter(e.target.value) }} placeholder='pokemon' />
      <button onClick={() => { setquery(args) }}>Search</button>
      <button onClick={() => { setquery(null); setter("") }}>Clear</button>

      {isLoading && <p>Loading...</p>}
      {isError && <p>error: {(error as Error).message}</p>}

      {data && (
        <div>
          <h1>pokemon res</h1>
          <p>name: {data.name}</p>
          <p>height: {data.height}</p>
          <p>{data.abilities.map(a => a.ability.name).join(", ")}</p>
          <button onClick={() => refetch()}>refetch data</button>
        </div>
      )}

    </div>
  )
}

export default Pokemon;