var listaAnimes = [  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg",                        "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/a9d4c1493f80703fe86dd83fb3b37623.jpe",  "https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2022/12/spy-x-family-parte-2.jpg",              "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpe",                   "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/7e023c55c6cb63b2ecbb31b6aae9bf12.jpe",  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/59dd9785564f46c3cf2a18b38149f5a1.jpe"             
];

var nomesAnimes = ["One Piece","Attack on Titan", "SpyxFamily", "Naruto", "My Hero Academia", "Overlord"]

var i = 0  
 while (i<listaAnimes.length) {
   if (listaAnimes[i].endsWith("jpg") || listaAnimes[i].endsWith("jpe")) {
     document.write('<div class="titulos"><img src=' + listaAnimes[i] + '>' + nomesAnimes[i] + '</div>');
   i++;
   }
 }