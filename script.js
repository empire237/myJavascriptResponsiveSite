// Get variables from HTML Document 

const sidebarCloseBtn = document.querySelector('.sidebar__close-icon');
const sidebarMenuBtn = document.querySelector('.sidebar__menu-btn');
const sidebarContainer = document.querySelector('.sidebar__container');



// Event listener for Menu Button

sidebarMenuBtn.addEventListener('click', function(){
        sidebarContainer.classList.toggle('sidebar-status');
        sidebarCloseBtn.addEventListener('click', function (){
            sidebarContainer.classList.add('sidebar-status');
        })
});

