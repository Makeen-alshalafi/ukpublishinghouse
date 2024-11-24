/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
            // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle', 'nav-menu')










function submitForm() {
    var searchword = document.getElementById('searchinput').value.trim();
    if (searchword == "" || searchword == "Search" || !isValid(searchword)) {
        alert("Please enter keywords before submitting");
        document.getElementById('searchinput').value = "";
        return false;
    } else {
        document.getElementById('searchinput').value = "";
        return true;
    }

}


function isValid(str) {
    if (str.indexOf('&') != -1 || str.indexOf('<') != -1 || str.indexOf('>') != -1 || str.indexOf('\'') != -1 ||
        str.indexOf('\\') != -1 || str.indexOf('/') != -1 || str.indexOf('"') != -1 ||
        str.indexOf('%') != -1 || str.indexOf('#') != -1) {
        return false;
    }
    return true;
}





//hover link select
document.addEventListener('DOMContentLoaded',
    function() {
        const navItems = document
            .querySelectorAll('.nav__link');
        navItems.forEach(item => {
            item.addEventListener('click',
                function() {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });


document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav__link');
    const loginBtn = document.getElementById('loginBtn'); // Get the login button
    const menu = document.querySelector('.menu ul'); // Get the menu

    // Check if the screen size is small
    function handleResize() {
        if (window.innerWidth <= 768) {
            // If the screen is small, hide the login button from the section and add it to the menu
            if (!document.querySelector('.login-nav-item')) {
                const loginNavItem = document.createElement('li');
                loginNavItem.classList.add('nav__link', 'login-nav-item');
                loginNavItem.textContent = 'Login';
                menu.appendChild(loginNavItem);
            }
        } else {
            // If the screen is large, ensure the login button is in the section
            const loginNavItem = document.querySelector('.login-nav-item');
            if (loginNavItem) {
                menu.removeChild(loginNavItem);
            }
        }
    }

    // Run on page load and window resize
    window.addEventListener('resize', handleResize);
    handleResize();

    // Add active class functionality to the nav items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
        });
    });
});




//  const slider = document.querySelector('.slider');
// // Function to move the slides
// function activate(e) {
// const items = document.querySelectorAll('.item');
// if (e.target.matches('.next')) {
// slider.append(items[0]); // Move the first slide to the end on 'next'
// } else if (e.target.matches('.prev')) {
// slider.prepend(items[items.length - 1]); // Move the last slide to the front on 'prev'
// }
// }

// // Automatically move the slider every 5 seconds
// function autoSlide() {
// const items = document.querySelectorAll('.item');
// slider.append(items[0]); // Move the first slide to the end
// }

// // Set the interval to trigger the automatic slide every 5000ms (5 seconds)
// const slideInterval = setInterval(autoSlide, 7000);

// // Allow manual click navigation
// document.addEventListener('click', activate, false);






// JavaScript to handle scroll event
// window.addEventListener('scroll', function() {
//   const header = document.getElementById('main-header');
//   const headtop = document.getElementById('headertop');
//   const sliderHeight = document.querySelector('.header-section1').offsetHeight;
//   // Check if the user has scrolled beyond the slider
//   if (window.scrollY > sliderHeight) {
//     header.classList.add('scrolled');
//     headtop.classList.add('scrolled');
//   } else {
//     header.classList.remove('scrolled');
//     headtop.classList.remove('scrolled');
//   }
// });




// document.addEventListener('DOMContentLoaded', function () {
//   const navToggle = document.getElementById('nav-toggle');
//   const navMenu = document.getElementById('nav-menu');

//   navToggle.addEventListener('click', function () {
//       navMenu.classList.toggle('active'); // Toggle menu visibility
//       toggleIcons();
//   });

//   function toggleIcons() {
//       // Toggle between burger and close icons
//       const burgerIcon = document.querySelector('.nav__burger');
//       const closeIcon = document.querySelector('.nav__close');
//       burgerIcon.style.display = burgerIcon.style.display === 'none' ? 'inline-block' : 'none';
//       closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline-block' : 'none';
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed.");

    var navbar = document.getElementById("mainNavbar");
    if (!navbar) {
        console.error("Element with ID 'mainNavbar' not found.");
        return;
    }

    console.log("Navbar found:", navbar);

    var sticky = 200; // Scroll threshold

    function handleScroll() {
        console.log("Scroll position:", window.pageYOffset);
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky-top");
            document.body.classList.add("fixed-nav");
        } else {
            navbar.classList.remove("sticky-top");
            document.body.classList.remove("fixed-nav");
        }
    }

    window.onscroll = handleScroll;
});