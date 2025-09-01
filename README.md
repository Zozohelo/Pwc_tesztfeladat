# Pwc_tesztfeladat

ASP.NET Core Web Api

-Movie API futtatásához szükséges lépések:

Szükséges eszközök:

-Visual Studio 2022
- .NET 9

Futtatás Visual Studio-n keresztül:

1. Nyisd meg a .sln fájlt Visual Studio-ban.

2. Állítsd be az Startup Project-et a projektre (jelen esetben MovieApi).

3. Nyomj Ctrl+F5-öt az indításhoz.

Alapértelmezés szerint az API a következő címen fut:
- http://localhost:5022/movies

Swagger elérése:
- http://localhost:5022/swagger

----------------------------------------------------------------------------------

Vite + React frontend futtatásához szükséges lépések:

1. Nyisd meg a Visual Studio Code-ot.

2. Válaszd a File → Open Folder… menüpontot, és nyisd meg a projekt mappáját.
   
3. Nyiss egy terminált a VS Code-on belül, majd futtatsd a következő parancsokat:

   -npm install (Megjegyzés: a Tailwind CSS és egyéb függőségek az `npm install` parancs során automatikusan települnek.)
   -npm run dev

A következő címen érhető el indítás után:
 - http://localhost:5173/
   
---------------------------------------------------------------------------------

## AI használata

A feladat során többnyire saját utánajárással (YouTube videók, dokumentációk) dolgoztam, mivel korábban nem használtam ASP.NET Core-t. Az AI-t inkább kiegészítő segítségként vettem igénybe bizonyos döntési pontoknál. Például hasznos volt abban, hogy átlássam a Minimal API és az MVC Controller közötti különbségeket, illetve amikor mérlegeltem, hogy Swagger vagy OpenAPI lenne megfelelőbb számomra – végül a Swagger mellett döntöttem, mivel egyszerűen integrálható ASP.NET Core környezetben, és nagyon jó felületet biztosít arra, hogy lássam az endpointokat és tesztelhessem őket. 

React frontendnél előjött a CORS probléma, amit az AI javaslataival sikerült egyszerűen megoldanom. Ezen kívül a felhasználói felületnél is segített egy apró funkció kialakításában: amikor új filmhez lehet szereplőket hozzáadni, a + gomb megnyomására jelenjenek meg új inputmezők és egy bezáró gomb.  

Összességében az AI inkább gyorsította a munkámat és segített átlátni azokat a részeket amikbe még nem volt tapasztalatom, ötleteket adott, de a megoldásokat mindig átnéztem, testreszabtam és a dokumentáció alapján is ellenőriztem.

