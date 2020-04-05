import React from "react";
//Summaries and images from various resources.

const books = [
    {
        title: "Jesus is King",
        author: "Kanye West",
        finished: true,
        inProgress: false,
        "tags": [
            "música",
        ],
        genre: "música",
        audiobook: false,
        isFiction: false,
        coverImg: "https://t2.genius.com/unsafe/1306x0/https%3A%2F%2Fimages.genius.com%2Fdf2d9c960e6d5f00bd2186ed3331312c.1000x1000x1.jpg",
        summary: <div>
            <p role="article">
            <strong>JESUS IS KING</strong> es el noveno álbum de estudio de <strong>Kanye West</strong>, tras su lanzamiento en junio de 2018, ye. El proyecto se estrenó el 25 de octubre de 2019, poco más de un año después de la fecha de lanzamiento inicial de Yandhi, que fue desechado y reelaborado en un álbum de gospel.
            </p>
        </div>
    },
    {
        title: "Mr. Nobody",
        author: "Jaco Van Dormael",
        finished: true,
        inProgress: false,
        "tags": [
            "película",
        ],
        isFiction: false,
        genre: "película",
        coverImg: "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        summary:
            <div>
                <p role="article">
                En 2092 el último humano mortal (Jared Leto) en la Tierra reflexiona en su largo pasado y piensa sobre <strong>las vidas</strong> que él pudo haber llevado.
            </p>
            </div>
    },
    {
        title: "Ruta 66",
        author: "Estados Unidos",
        finished: false,
        inProgress: true,
        "tags": [
            "viajes",
        ],
        genre: "viajes",
        isFiction: false,
        coverImg: "https://media-cdn.tripadvisor.com/media/photo-p/17/7d/4f/88/photo4jpg.jpg",
        summary: <div>
            <p role="article">
            La <strong>Ruta 66</strong>, U.S. 66, también conocida como <strong>The Main Street of America</strong>, The Mother Road y la Will Rogers Highway​, forma parte de la Red de Carreteras Federales de <strong>Estados Unidos</strong>. Una de las rutas federales originales, la U.S. 66, se estableció el 11 de noviembre de 1926, aunque no se señalizó hasta el año siguiente.​
            </p>
        </div>
    },
    {
        title: "Mr. Robot",
        author: "Sam Esmail",
        finished: true,
        inProgress: false,
        "tags": [
            "serie",
        ],
        isFiction: false,
        genre: "serie",
        coverImg: "https://www.dodmagazine.es/wp-content/uploads/2019/08/mr-robot-temporada-4.jpg",
        summary:
            <div>
                <p role="article">
                <strong>Elliot Alderson</strong>, un brillante programador con problemas de <strong>ansiedad social</strong>, trabaja como ingeniero de ciberseguridad de día y como justiciero de noche. Su vida da un giro cuando unos <strong>ciberterroristas</strong> lo reclutan.
            </p>
            </div>
    },
    {
        title: "Taxi Driver",
        author: "Martin Scorsese",
        finished: true,
        inProgress: false,
        "tags": [
            "película",
        ],
        isFiction: false,
        genre: "película",
        coverImg: "https://pics.filmaffinity.com/Taxi_Driver-559150579-mmed.jpg",
        summary:
            <div>
                <p role="article">
                Un <strong>veterano de Vietnam</strong> inicia una confrontación violenta con los <strong>proxenetas</strong> que trabajan en las calles de Nueva York.
            </p>
            </div>
    },
    {
        title: "American Psycho",
        author: "Mary Harron",
        finished: true,
        inProgress: false,
        "tags": [
            "serie",
        ],
        isFiction: false,
        genre: "serie",
        coverImg: "https://pics.filmaffinity.com/American_Psycho-503776720-large.jpg",
        summary:
            <div>
                <p role="article">
                En la década de 1980, <strong>Patrick Bateman</strong> es un hombre exitoso y obsesionado por la competencia y por la <strong>perfección material</strong>, quien utiliza los más caros cosméticos masculinos, equipos de gimnasia, solárium y demás maquinaria estética para lograr un cuerpo atlético y bien acicalado, identificador material del <strong>éxito social</strong>.
            </p>
            </div>
    },
    {
        title: "The Catcher in The Rye",
        author: "J. D. Salinger",
        finished: true,
        inProgress: false,
        "tags": [
            "non-fiction",
            "libro",
        ],
        genre: "libro",
        isFiction: false,
        coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg",
        summary: <div>
            <p role="article">
            <strong>The Catcher in the Rye</strong> ​es una novela del escritor estadounidense J. D. Salinger. Al publicarse en 1951, en los Estados Unidos, la novela provocó numerosas <strong>controversias</strong> por su lenguaje provocador y por retratar sin tapujos la sexualidad y la ansiedad adolescente.
            </p>
        </div>
    },
    {
        title: "Mulholland Drive",
        author: "David Lynch",
        finished: true,
        inProgress: false,
        "tags": [
            "serie",
        ],
        isFiction: false,
        genre: "serie",
        coverImg: "https://pics.filmaffinity.com/Mulholland_Drive-308967071-mmed.jpg",
        summary:
            <div>
                <p role="article">
                Una <strong>mujer</strong> de cabellos oscuros es abandonada amnésica después de un <strong>accidente automovilístico</strong>. Ella recorre las calles de <strong>Los Ángeles</strong> entes de refugiarse en un departamento. Ahí ella es descubierta por Betty, una rubia del medio oeste que ha llegado a la Ciudad de los Ángeles en busca de fama como una actriz. Juntas, las dos intentan resolver el misterio de la <strong>verdadera identidad de Rita</strong>. La historia está ambientada en un lugar de ensueño, sin tráfico y humo.
            </p>
            </div>
    },
    {
        title: "Londres",
        author: "United Kingdom",
        finished: true,
        audiobook: false,
        inProgress: false,
        "tags": [
            "viajes",
        ],
        genre: "viajes",
        isFiction: false,
        coverImg: "https://media-cdn.tripadvisor.com/media/photo-p/15/5a/c4/0b/caption.jpg",
        summary: <div>
            <p role="article">
            <strong>Londres</strong>, la capital de Inglaterra y del <strong>Reino Unido</strong>, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj "Big Ben" y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación <strong>London Eye</strong> ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.</p>
        </div>
    },
    {
        title: "The Silence of the Lambs",
        author: "Jonathan Demme",
        finished: true,
        inProgress: false,
        "tags": [
            "serie",
        ],
        isFiction: false,
        genre: "serie",
        coverImg: "https://fanart.tv/fanart/movies/274/movieposter/the-silence-of-the-lambs-565af9a63ad67.jpg",
        summary:
            <div>
                <p role="article">
                Una <strong>agente en entrenamiento del FBI</strong> busca la ayuda y consejo de un brillante asesino para poder capturar a otro asesino, el doctor <strong>Hannibal Lecter</strong>, un psiquiatra que también es un psicópata violento y <strong>antropófago</strong>.
            </p>
            </div>
    },
    {
        title: "LOST",
        author: "J. J. Abrams y Damon Lindelof",
        finished: true,
        inProgress: false,
        "tags": [
            "serie",
        ],
        isFiction: false,
        genre: "serie",
        coverImg: "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,647,1000_AL_.jpg",
        summary:
            <div>
                <p role="article">
                Los <strong>sobrevivientes de un accidente aéreo</strong> luchan por subsistir en una exuberante y deshabitada <strong>isla</strong>, al mismo tiempo que afloran los secretos personales y salen a la luz extraños hallazgos.
            </p>
            </div>
    },
    {
        title: "Nueva York",
        author: "Estados Unidos",
        finished: false,
        inProgress: true,
        "tags": [
            "viajes",
        ],
        genre: "viajes",
        isFiction: false,
        coverImg: "https://media-cdn.tripadvisor.com/media/photo-p/11/8a/e4/6a/water.jpg",
        summary: <div>
            <p role="article"> 
            <strong>Nueva York</strong> incluye 5 distritos que se ubican donde el río Hudson desemboca en el océano Atlántico. En su centro se encuentra <strong>Manhattan</strong>, un distrito densamente poblado que se encuentra entre los principales centros comerciales, financieros y culturales del mundo. Sus sitios icónicos incluyen rascacielos, como el <strong>Empire State Building</strong>, y el amplio Central Park. El teatro <strong>Broadway</strong> se ubica en la zona del Times Square iluminada con neones.
            </p>
        </div>
    },
    {
        title: "ABBA Gold: Greatest Hits",
        author: "ABBA",
        finished: true,
        inProgress: false,
        "tags": [
            "música",
        ],
        genre: "música",
        isFiction: false,
        coverImg: "https://images-na.ssl-images-amazon.com/images/I/51WHX26rRgL.jpg",
        summary: <div>
            <p role="article">
            <strong>ABBA Gold: Greatest Hits</strong> es una compilación del grupo sueco <strong>ABBA</strong>, fue lanzado el 21 de septiembre de 1992. Fue lanzado por <strong>PolyGram</strong>, siendo la primera compilación en ser lanzada después de que dicha compañía adquiriera <strong>Polar Music</strong> y los derechos sobre las canciones de ABBA.
            </p>
        </div>
    },
    {
        title: "AM",
        author: "Arctic Monkeys",
        finished: true,
        inProgress: false,
        "tags": [
            "música",
        ],
        isFiction: false,
        genre: "música",
        coverImg: "https://images-na.ssl-images-amazon.com/images/I/71hEtk3aCpL._SL1500_.jpg",
        summary: <div>
            <p role="article">
            <strong>AM</strong> es el quinto álbum de estudio de la banda inglesa de Indie Rock, <strong>Arctic Monkeys</strong>. Fue lanzado el 6 de septiembre de 2013, bajo el sello <strong>Domino Records</strong>.​ El 15 de julio de 2013, revelaron la portada del álbum.​ El disco cuenta con las colaboraciones de Josh Homme, Bill Ryder-Jones y Pete Thomas.
            </p>
        </div>
    },
    {
        title: "Be The Worst You Can Be",
        author: "Charles Saatchi",
        finished: true,
        audiobook: false,
        inProgress: false,
        "tags": [
            "libro",
        ],
        isFiction: false,
        genre: "libro",
        coverImg: "https://images-eu.ssl-images-amazon.com/images/I/31Fuy-22ARL.jpg",
        summary: <div>
            <p role="article">
            <strong>Charles Saatchi</strong> es un hombre con fuertes opiniones sobre todo, desde películas hasta moralejas, superstición y suicidio, y en este libro responde a casi <strong>300 preguntas de lectores y periodistas</strong>, ofreciendo mucho para que todos reflexionen.
            </p>
        </div>
    },
    {
        title: "Diseño de Marcas",
        author: "Alina Wheeler",
        finished: true,
        "tags": [
            "libro",
        ],
        isFiction: false,
        genre: "libro",
        coverImg: "https://images-na.ssl-images-amazon.com/images/I/51XCjsWGfqL._SX382_BO1,204,203,200_.jpg",
        summary: <div>
            <p role="article">
            Con independencia de que su objetivo sea revitalizar <strong>una marca</strong> ya existente o lanzar una marca nueva al mercado, presentamos un <strong>sistema en cinco fases</strong>, probado y universal, para aumentar la diferenciación, promover el reconocimiento y crear marcas de éxito.
            </p>
        </div>
    },
    {
        title: "Horn Players",
        author: "Jean Michel Basquiat",
        finished: true,
        inProgress: false,
        "tags": [
            "arte",
        ],
        isFiction: false,
        genre: "arte",
        coverImg: "https://arte.laguia2000.com/wp-content/uploads/2015/11/Horn-Players-439x560.jpg",
        summary: <div>
            <p role="article">
            La pintura de 1983 de <strong>Jean-Michel Basquiat</strong> nos muestra todas las principales características estilísticas que esperamos de este reconocido <strong>artista estadounidense</strong>.
            </p>
        </div>
    },
    {
        title: "After Hours",
        author: "The Weeknd",
        finished: true,
        "tags": [
            "música",
        ],
        isFiction: false,
        genre: "música",
        coverImg: "https://jenesaispop.com/wp-content/uploads/2020/02/theweeknd-after.jpg",
        summary: <div>
            <p role="article">
            <strong>After Hours</strong> es el cuarto álbum de estudio del cantante canadiense <strong>The Weeknd</strong>. El álbum fue lanzado por <strong>XO</strong> y <strong>Republic Records</strong> el 20 de marzo de 2020. El proyecto ha sido apoyado por tres sencillos: "Heartless", "Blinding Lights" e "In Your Eyes".
            </p>
        </div>
    },
    {
        title: "La joven de la Perla",
        author: "Johannes Vermeer",
        finished: "",
        inProgress: false,
        "tags": [
            "arte",
        ],
        isFiction: false,
        genre: "arte",
        coverImg: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
        summary:
            <div>
                <p role="article">
                La joven de la perla, también conocida como <strong>Muchacha con turbante</strong>, <strong>La Mona Lisa holandesa</strong> y <strong>La Mona Lisa del norte</strong>, es una de las obras maestras del pintor neerlandés <strong>Johannes Vermeer</strong> realizada entre 1665 y 1667, y, como el nombre indica, utiliza un pendiente de perla como punto focal.
            </p>
            </div>
    },
    {
        title: "Black Mirror",
        author: "Charlie Brooker",
        finished: true,
        inProgress: false,
        "tags": [
            "serie",
        ],
        isFiction: false,
        genre: "serie",
        coverImg: "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        summary:
            <div>
                <p role="article">
                    El lado oscuro de la <strong>era tecnológica</strong> en la que se vive: la paranoia de ser vigilados como en un panóptico, los usos terroristas de las nuevas herramientas y su relación con la experiencia cotidiana.
                </p>
            </div>
    },
    {
        title: "The Truman Show",
        author: "Peter Weir",
        finished: true,
        inProgress: false,
        "tags": [
            "película",
        ],
        isFiction: true,
        genre: "película",
        coverImg: "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX674_AL_.jpg",
        summary: <div>
            <p role="article">
            <strong>Truman Burbank</strong>, un feliz agente de seguros, cree llevar una vida normal, pero no tiene idea de que las cámaras <strong>lo graban las 24 horas</strong> y que todo lo que hace se ve en televisión.
            </p>
        </div>
    },
    {
        title: "Major Lazer Essentials",
        author: "Major Lazer",
        finished: true,
        inProgress: false,
        "tags": [
            "música",
        ],
        isFiction: true,
        genre: "música",
        coverImg: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201901/25/00105112300560____1__640x640.jpg",
        summary: <div>
            <p role="article">
            <strong>Major Lazer Essentials</strong> es un álbum recopilatorio lanzado por el trío estadounidense de <strong>música electrónica</strong> de baile Major Lazer. Inicialmente se lanzó el 19 de octubre de 2018 a través del sello discográfico de los grupos Mad Decent Records.
            </p>
        </div>
    },
    {
        title: "Veinte poemas de amor y una canción desesperada",
        author: "Pablo Neruda",
        finished: true,
        inProgress: false,
        "tags": [
            "libro",
        ],
        genre: "libro",
        isFiction: true,
        coverImg: "https://static1planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/51/m_libros/veinte-poemas-de-amor-y-una-cancion-desesperada_9788432248429.jpg",
        summary: <div>
            <p role="article">
            <strong>Veinte poemas de amor y una canción desesperada</strong> es una de las más célebres obras del poeta chileno Pablo Neruda. Publicado en 1924, el poemario lanzó a su autor a la fama con apenas 19 años de edad, y es una de las obras literarias de mayor renombre del siglo XX en la lengua castellana.
            </p>
        </div>
    },
    {
        title: "''Insert Complicated Title Here''",
        author: "Virgil Abloh",
        finished: true,
        inProgress: false,
        "tags": [
            "libro",
        ],
        genre: "libro",
        isFiction: true,
        coverImg: "https://images-na.ssl-images-amazon.com/images/I/41964QgE8aL._SX319_BO1,204,203,200_.jpg",
        summary: <div>
            <p role="article">
            <strong>Virgil Abloh</strong> pregunta ¿cuál es mi ADN? a un auditorio desbordante en la <strong>Escuela de Graduados de Diseño de la Universidad de Harvard</strong>. Abloh continúa proporcionando a su audiencia consejos que desearía haber recibido como estudiante. Luego desempaqueta una serie de "atajos" para cultivar un "lenguaje de diseño personal".
            </p>
        </div>
    },
    {
        title: "Outliers",
        author: "Malcolm Gladwell",
        finished: false,
        inProgress: true,
        "tags": [
            "libro",
        ],
        genre: "libro",
        isFiction: false,
        coverImg: "https://images-eu.ssl-images-amazon.com/images/I/4115kqNvVtL._SY346_.jpg",
        summary: <div>
            <p role="article">
            Del máximo gurú de los negocios, autor de <strong>La clave del éxito</strong>. ¿Qué diferencia a quienes consiguen algo especial en la vida de quienes no lo hacen?
            </p>
        </div>
    },
    {
        title: "Dubai",
        author: "Emiratos Árabes Unidos",
        inProgress: true,
        audiobook: false,
        "tags": [
            "viajes",
        ],
        genre: "viajes",
        isFiction: false,
        coverImg: "https://media-cdn.tripadvisor.com/media/photo-p/0e/59/44/dc/dubai-marina-waterfront.jpg",
        summary: <div>
            <p role="article">
            <strong>Dubai</strong> es una ciudad emirato de los <strong>Emiratos Árabes Unidos</strong> conocida por su lujoso comercio, la arquitectura ultramoderna y su vida nocturna animada. <strong>Burj Khalifa</strong>, una torre de 830 m de alto, domina el paisaje lleno de rascacielos. 
            </p>
        </div>
    },
    {
        title: "Until Now",
        author: "Swedish House Mafia",
        inProgress: false,
        audiobook: false,
        "tags": [
            "música",
        ],
        genre: "música",
        isFiction: false,
        coverImg: "https://images-na.ssl-images-amazon.com/images/I/91gQaG3S7wL._SL1400_.jpg",
        summary: <div>
            <p>
            <strong>Until Now</strong> es el segundo álbum compilatorio de la agrupación sueca de música electrónica, <strong>Swedish House Mafia</strong>. Fue lanzado el 23 de octubre de 2012 y será el último álbum del trío antes de su receso, donde seguirán trabajando en proyectos <strong>por separado</strong>.
            </p>
        </div>
    },
];

export default books;
