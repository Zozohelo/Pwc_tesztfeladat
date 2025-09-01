import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { defaultMovie, type IMovie, type IActor } from "../utils/util";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const { addMovie } = useContext(MovieContext);
  const [newMovie, setNewMovie] = useState<IMovie>(defaultMovie);
  const navigate = useNavigate();

  function handleActorChange(
    index: number,
    field: keyof IActor,
    value: string
  ) {
    const updated = [...newMovie.actors];
    updated[index] = { ...updated[index], [field]: value };
    setNewMovie({ ...newMovie, actors: updated });
  }

  function addActorField() {
    setNewMovie((prev) => ({
      ...prev,
      actors: [...prev.actors, { name: "", role: "" }],
    }));
  }

  function removeActorField(index: number) {
    setNewMovie((prev) => ({
      ...prev,
      actors: prev.actors.filter((_, i) => i !== index),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await addMovie(newMovie);
    if (result.success) navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-xl font-bold p-2 text-white">
          New Movie
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={newMovie.title}
              onChange={(e) =>
                setNewMovie({ ...newMovie, title: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          {/* Actors */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium text-gray-200">Actors</h2>
              <button
                type="button"
                onClick={addActorField}
                className="text-sm text-blue-400 hover:underline"
              >
                + Add Actor
              </button>
            </div>

            {newMovie.actors.map((actor, index) => (
              <div key={index} className="flex gap-2 mb-2 p-2 rounded-lg">
                <input
                  type="text"
                  placeholder="Name"
                  value={actor.name}
                  onChange={(e) =>
                    handleActorChange(index, "name", e.target.value)
                  }
                  className="flex-1 p-2 rounded bg-gray-50 text-sm text-gray-900"
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={actor.role}
                  onChange={(e) =>
                    handleActorChange(index, "role", e.target.value)
                  }
                  className="flex-1 p-2 rounded bg-gray-50 text-sm text-gray-900"
                />
                <button
                  type="button"
                  onClick={() => removeActorField(index)}
                  className="px-3 rounded bg-red-600 text-white text-sm"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
