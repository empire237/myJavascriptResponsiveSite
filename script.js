// Get variables from HTML Document -

const sidebarCloseBtn = document.querySelector('.sidebar__close-icon');
const sidebarMenuBtn = document.querySelector('.sidebar__menu-btn');
const sidebarContainer = document.querySelector('.sidebar__container');



// Event listener for Menu Button

sidebarMenuBtn.addEventListener('click', function(){
        sidebarContainer.classList.remove('sidebar-status');
        sidebarCloseBtn.addEventListener('click', function (){
            sidebarContainer.classList.add('sidebar-status');
        })
});




/*
MY ARTICLE TASKS
Get and define variables
*/


// Get All button elements

const allArticlesBtnContainer = document.querySelector('.article__container-btn');

const allArticlesBtn = document.querySelector('.main__all-btn');
const htmlCssArticlesBtn = document.querySelector('.main__htmlcss-btn');
const javascriptArticlesBtn = document.querySelector('.main__javascript-btn');
const reactArticlesBtn = document.querySelector('.main__react-btn');
const nodejsArticlesBtn = document.querySelector('.main__nodejs-btn');
const solidityArticlesBtn = document.querySelector('.main__solidity-btn');



// console.log(allArticleBtn.children);


/* 
    CREATE AN ARRAY OBJECT TO FOR THE ITEMS
*/


const articles = [
    {
        title: 'HTML5',
        image: "/images/HTML5_logo.png",
        price:  0.90,
        content: 'HTML5, short for HyperText Markup Language 5, is the latest iteration of the standard markup language used for creating web pages. It provides the structure and content of a web page, defining elements like headings, paragraphs, links, images, forms, and more. HTML5 introduced many new features and enhancements, such as support for multimedia elements, improved semantics, and better compatibility with modern web technologies.',
        tag: 'htmlcss',
    },
    {
        title: 'CSS',
        image: "/images/CSS3_logopng.png",
        price:  1.99,
        content: 'CSS, or Cascading Style Sheets, is a stylesheet language used for describing the visual presentation of web pages written in HTML and XML. CSS defines the layout, colors, fonts, and other design aspects of a web page, allowing web designers and developers to control the appearance and layout of elements on a website.',
        tag: 'htmlcss',
    },
    {
        title: 'JAVASCRIPT',
        image: "/images/javascript.jpg",
        price:  4.99,
        content: 'JavaScript is a versatile and widely-used programming language for web development. It enables developers to add interactivity and dynamic behavior to web pages. JavaScript can be executed in web browsers and on the server (via technologies like Node.js) and is essential for creating responsive and engaging web applications.',
        tag: 'javascript',
    },
    {
        title: 'REACT',
        image: "/images/reactjs.png",
        price:  2.99,
        content: "React is a popular open-source JavaScript library developed by Facebook for building user interfaces (UI) in web applications. It's often used for creating single-page applications and provides a component-based architecture, making it easier to manage and update UI elements. React allows developers to efficiently build interactive and dynamic web applications.",
        tag: 'frontend',
    },
    {
        title: 'NODEJS',
        image: "/images/590px-Node.js_logo.svg.png",
        price:  2.50,
        content: "Node.js is an open-source, server-side runtime environment for executing JavaScript code. It allows developers to create server applications, APIs, and networked applications using JavaScript. Node.js is known for its non-blocking, event-driven architecture, making it well-suited for building scalable and high-performance web applications.",
        tag: 'backend',
    },
    {
        title: 'SOLIDITY',
        image: "/images/solidity.png",
        price:  15.99,
        content: "Solidity is a high-level, statically-typed programming language designed for developing smart contracts on the Ethereum blockchain. Smart contracts are self-executing contracts with the terms of the agreement directly written into code. Solidity is essential for creating decentralized applications (DApps) and automating transactions and processes on the Ethereum network.",
        tag: 'blockchain',
    },
    {
        title: 'BOOTSTRAP',
        image: "/images/Bootstrap_logo.svg.png",
        price:  "0.00",
        content: "Bootstrap is a widely-used front-end framework for web development. It provides a collection of pre-designed HTML, CSS, and JavaScript components that simplify the process of building responsive and mobile-friendly websites. Bootstrap helps developers save time and maintain consistent design across web projects.",
        tag: 'htmlcss',
    },
    {
        title: 'TAILWIND',
        image: "/images/Tailwind_CSS_Logo.svg.png",
        price:  0.99,
        content: "Tailwind CSS is a utility-first CSS framework that simplifies web development by providing a set of pre-defined classes that can be used to style web elements. It focuses on the composition of classes rather than writing custom CSS, making it highly customizable and efficient for creating responsive and visually appealing web designs." ,
        tag: 'htmlcss',
    },
];





/* 
    I will have to load all the content at this level
*/

window.addEventListener('DOMContentLoaded', function (){
    loadAllArticleItems(articles);
});



function loadAllArticleItems(items) {

    
   const displayArticles = items.map(items => {
    return `<div class="items-container" id=${items.title}>
    <div>
        <img src= ${items.image} width="70" height="70">
    </div>
    <div>
        <div>
            <h3 class="article-title">${items.title}</h3>
            <p class="article-price">$ ${items.price}</p>
        </div>
        <p class="main__item-content">
            ${items.content}
        </p>
    </div>
</div>`;
});

// Convert the Array into a string and display to the main item container
// Get the html element first

const mainItemContainer = this.document.querySelector('.main__item-container');

let newDisplayArticles = displayArticles.join("");
mainItemContainer.innerHTML = newDisplayArticles;

} 



/* 
    Using event delegation on the buttons 
    This will avoid using the addeventListener for every button

*/

allArticlesBtnContainer.addEventListener('click', function(e){
    
    let filteredArticles;

    if(e.target.classList.contains('main__htmlcss-btn')){

        console.log('HTML/CSS');
        filteredArticles = articles.filter( item => {

            return item.tag == 'htmlcss';
        });

        loadAllArticleItems(filteredArticles);


    } else if(e.target.classList.contains('main__javascript-btn')){

        console.log('Javascript');
        filteredArticles = articles.filter( item => {

            return item.tag == 'javascript';
        });

        loadAllArticleItems(filteredArticles);


    } else if(e.target.classList.contains('main__react-btn')){

        console.log('Frontend');
        filteredArticles = articles.filter( item => {
    
        return item.tag == 'frontend';
        });
            
            loadAllArticleItems(filteredArticles);


    } else if(e.target.classList.contains('main__nodejs-btn')){

            console.log('backend');
            const filteredArticles = articles.filter( item => {
    
                return item.tag == 'backend';
            });
            
            loadAllArticleItems(filteredArticles);

    } else if(e.target.classList.contains('main__solidity-btn')){

        console.log('Blockchain');
        const filteredArticles = articles.filter( item => {
    
            return item.tag == 'blockchain';
        });
        
        loadAllArticleItems(filteredArticles);

     } else {

        console.log('All');
        loadAllArticleItems(articles);
     }

})

