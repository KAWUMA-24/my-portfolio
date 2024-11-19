// Smooth scrolling for navigation links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

// Adding a welcome message that fades in
window.onload = function() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Welcome to My Portfolio!";
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "50%";
    welcomeMessage.style.left = "50%";
    welcomeMessage.style.transform = "translate(-50%, -50%)";
    welcomeMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    welcomeMessage.style.color = "#fff";
    welcomeMessage.style.padding = "1rem 2rem";
    welcomeMessage.style.borderRadius = "10px";
    welcomeMessage.style.opacity = "0";
    welcomeMessage.style.transition = "opacity 2s";

    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.style.opacity = "1";
    }, 500);

    setTimeout(() => {
        welcomeMessage.style.opacity = "0";
        document.body.removeChild(welcomeMessage);
    }, 4000);
};

// Autoplay project images (slideshow)
const projectImages = document.querySelectorAll('.project img[_{{{CITATION{{{_1{](https://github.com/NathanaelZuchuon/royal-bank/tree/1390470fb8eb23ed6532e2e1e5aca8299ad0d29d/views%2Fhead.php)[_{{{CITATION{{{_2{](https://github.com/onkardighe/newrepo/tree/ef0a8e28326dae7ff899fd4de25bd2918373c3c9/index.php)[_{{{CITATION{{{_3{](https://github.com/cosimobarbato/cabin-contractors-landing-page/tree/ab2a437e88f9553eaff0f97f8cd45c4cd5529bd6/cabin-contractors%2Findex.php)[_{{{CITATION{{{_4{](https://github.com/Muh-Sidik/materi-pondokit/tree/5dc58f3b215dd07dfba164cd31700144e8711f64/sprint-7%2Fproject%2Fresources%2Fviews%2Fport%2Fportfolio.blade.php)[_{{{CITATION{{{_5{](https://github.com/SRV-KILLER/Saksham-s-Portfolio/tree/c5c44ba9bb39a0e7969c477e3cdb411c59fdb302/README.md)[_{{{CITATION{{{_6{](https://github.com/mjbovee/mjbovee-pwp/tree/afbeebe9dd3ad68afc0bf88ef60a49b126e31ae2/public_html%2Findex.php)[_{{{CITATION{{{_7{](https://github.com/AdeFathiAmirrasyid/phpmvc/tree/85fa39d281e6d34262f389efae763666168dcc87/rest-api%2Fportofolio%2Findex.php)[_{{{CITATION{{{_8{](https://github.com/irsyadulibad/searchnime/tree/ef8a65907f07d97b45104821b08cbebb8dcd9c25/application%2Fviews%2Ftemplates%2Ffooter.php)[_{{{CITATION{{{_9{](https://github.com/venemexcoin/cursocompletolaravel8/tree/0fb11283a31da0c84afedef3562347de9d094015/resources%2Fviews%2Fpost54.blade.php)[_{{{CITATION{{{_10{](https://github.com/themrzlyv/movieland/tree/e10cbc7fda8f8cf1ef44fd0328e11ba52715d0bd/src%2Fpages%2F_document.js)[_{{{CITATION{{{_11{](https://github.com/SantiSL5/ANGULARJS_FW_PHP_MVC_OO/tree/2fd91086fa2eea7c56948aaa023a1c5c0ece9e1b/frontend%2Fassets%2Finc%2Ftop_page_cart.php)[_{{{CITATION{{{_12{](https://github.com/fatimatisha/web_dev_project/tree/a4f0431bab943d1f2c1cc38ed74e7dc9828945c6/Pedidoctor.php)[_{{{CITATION{{{_13{](https://github.com/Rohitms/dhisha/tree/039a2e7c4850ed9ed823ae400c47dcdffaafed98/public%2Fjs%2Fscroll.js)[_{{{CITATION{{{_14{](https://github.com/eaakamy/BJ/tree/ed4223b91dd8c5990478b865fdf8443f7053b0ca/scripts.js)[_{{{CITATION{{{_15{](https://github.com/grifffin/Web-Platform-for-Labeling-Audio/tree/fe57619b67bdfafd4eb59e9126cc146bf66999fd/crowdLabel%2Fmain%2Fstatic%2Fmain%2Fjs%2Ftheme2.js)[_{{{CITATION{{{_16{](https://github.com/farruxzokirov466/coffeshop/tree/a891b1d2734cb02be01c7848ce5d1b09e142611f/index.js)