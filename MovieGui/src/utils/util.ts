
export interface IActor{
    name:string;
    role:string;
}
export interface IMovie {
  id: number;
  title: string;
  actors: IActor[]; 
}

export const defaultMovie : IMovie = {
    id: 0,
    title: "",
    actors: [{ name: "", role: "" }],
}