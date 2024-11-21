var menu = `
<nav class="nav nav-masthead justify-content-center">
    <a class="nav-link" id="index" href="./index.html">Home</a>
    <a class="nav-link" id="favourite_biological_plots" href="biology.html">Favourite biological plots</a>
</nav>
`

// var footer = `
// <a href="https://scholar.google.com/citations?user=zhkj1RUAAAAJ">Google Scholar</a>,
// <a href="http://orcid.org/0000-0002-0376-1708">ORCID</a>,
// <a href="http://fb.com/radost.waszkiewicz">Facebook</a>
// `

function setup_header_and_footer(active)
{
    document.getElementById('menu-div').innerHTML = menu;
    if(active != '')
    {
        document.getElementById(active).classList.add('active');
        document.getElementById('footer-div').innerHTML = footer;
    }    
}