import { Book } from './classes/Book.js';
import { User } from './classes/User.js';


window.addEventListener("DOMContentLoaded", function(e){
    let books = [];
    let users = [];

    let firstBook = new Book(1, "L/'herbe bleue", "Beatrice Sparks", "30/11/01", 224, "L'herbe bleue est le récit du journal d'une adolescente de 15 ans mal dans sa peau.", "https://www.babelio.com/couv/CVT_LHerbe-bleue_8546.jpg");
    let secondBook = new Book(2 , "Moi, Christiane F., 13 ans, droguée, prostituée…", " Kai Hermann et Horst Rieck", "13/01/1983", 339, "Ce que raconte cette jeune fille sensible et intelligente, qui, moins de deux ans après avoir fumé son premier joint, se prostitue à la sortie de l'école pour gagner de quoi payer sa dose quotidienne d'héroïne", "https://www.babelio.com/couv/CVT_Moi-Christiane-F-13-ans-droguee-prostituee_474.jpeg");
    let thirdBook = new Book(3, "Flash ou le grand voyage", "Charles Duchaussois", "08/01/1974", 709, "Janvier 1970 : Charles, « le drogué français de Katmandou », sauvé in extremis, regagne la France. Les journaux lui consacrent de nombreux articles. Qui est ce garçon de trente ans ? Qu'a-t-il fait ? Un an plus tard, soigné, désintoxiqué, Charles Duchaussois nous livre, lui-même son histoire, qui est un formidable roman d'aventures vécues", "https://www.babelio.com/couv/CVT_Flash-ou-le-grand-voyage_874.jpg");

    let firstUser = new User(1, "Valmonzo", "valmonzo@outlook.fr", "bliblobla", "Valmont", "PEHAUT-PIETRI", "https://pbs.twimg.com/profile_images/1402645114531586050/Ho2rKG4i_400x400.jpg");
    let secondUser = new User(2, "Jackie", "Jackie@bobo.fr", "clioTuningRs", "Jacques", "GOMEZ", "https://www.atmosfetes.com/wp-content/uploads/2021/02/B11526_Perruque_Jacky_Tuning.jpg");
    let thirdUser = new User(3, "Jacquelinedu05", "jacquelinejaja@coucou.fr", "BookLifeOnly", "Jacqueline", "MASSON", "https://www.radiofrance.com/sites/default/files/2020-02/jacqueline_baudrier_pdg_radiofrance.jpg");

    books.push(firstBook);
    books.push(secondBook);
    books.push(thirdBook);
    users.push(firstUser);
    users.push(secondUser);
    users.push(thirdUser);


    let jsonBooks = JSON.stringify(books);
    let jsonUsers = JSON.stringify(users);

    sessionStorage.setItem("books", jsonBooks);
    sessionStorage.setItem("users", jsonUsers);

    let booksStorage = JSON.parse(sessionStorage.getItem("books"));
    let usersStorage = JSON.parse(sessionStorage.getItem("users"));

    let newBooks = [];
    let newUsers = [];


    for(let i = 0 ; i < booksStorage.length; i++) {
        let parseData = JSON.parse(booksStorage[i]);
        let newBook = new Book(parseData.id, parseData.title, parseData.author, parseData.publicationDate, parseData.totalPages, parseData.excerpt, parseData.coverImage);
        newBooks.push(newBook);
    }

    for(let i = 0; i < usersStorage.length; i++) {
        let parseData = JSON.parse(usersStorage[i]);
        let newUser = new User(parseData.id, parseData.username, parseData.email, parseData.password, parseData.firstName, parseData.lastName, parseData.profileImage);
        newUsers.push(newUser);
    }

    console.log(newBooks);
    console.log(newUsers);


})