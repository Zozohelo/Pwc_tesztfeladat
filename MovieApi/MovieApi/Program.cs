using MovieApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS beállítás
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll");

//Alap adat létrehozása a film listába
var movies = new List<Movie>
{
    new Movie
    {
        Id = 1,
        Title = "Interstellar",
        Actors = new List<Actor>
        {
            new Actor { Name = "Matthew McConaughey", Role = "főszerep" },
            new Actor { Name = "Casey Affleck", Role = "mellékszerep" },
            new Actor { Name = "Michael Caine", Role = "mellékszerep" }
        }
    }
};

// Végpontok:

//Összes film-> GET
app.MapGet("/movies", () => Results.Ok(movies));



//Új film létrehozása-> POST
app.MapPost("/movies", (Movie movie) =>
{
    movie.Id = movies.Any() ? movies.Max(m => m.Id) + 1 : 1;
    movies.Add(movie);
    return Results.Created($"/movies/{movie.Id}", movie);
});

app.Run();
