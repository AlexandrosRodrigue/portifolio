document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const toggleSwitch = document.getElementById('toggleSwitch');

    document.documentElement.setAttribute('data-theme', savedTheme);

    if (savedTheme === 'dark') {
        toggleSwitch.checked = true;
    } else {
        toggleSwitch.checked = false;
    }
});

function toggleTheme() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const newTheme = toggleSwitch.checked ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

let dropdownEventAdded = false; 

function toggleLanguageDropdown(event) {
    event.preventDefault();
    const languageDropdown = document.getElementById('languageDropdown');

    languageDropdown.classList.toggle('show-dropdown');

    function removeClassesOnClickOutside(event) {
        if (!languageDropdown.contains(event.target) && !event.currentTarget.contains(event.target)) {
            languageDropdown.classList.remove('show-dropdown');
            document.removeEventListener('click', removeClassesOnClickOutside);
            dropdownEventAdded = false;
        }
    }

    if (!dropdownEventAdded) {
        document.addEventListener('click', removeClassesOnClickOutside);
        dropdownEventAdded = true;
    }
}

let certificadoEventAdded = false; 

function toggleCertificado(event) {
    event.preventDefault();
    const conteudo = document.getElementById('toggleConteudo');

    conteudo.classList.toggle('show-dropdown');

    function removeClassesOnClickOutside(event) {
        if (!conteudo.contains(event.target) && !event.currentTarget.contains(event.target)) {
            conteudo.classList.remove('show-dropdown');
            document.removeEventListener('click', removeClassesOnClickOutside);
            certificadoEventAdded = false;
        }
    }

    if (!certificadoEventAdded) {
        document.addEventListener('click', removeClassesOnClickOutside);
        certificadoEventAdded = true;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("titulos");
    const subtitulo = document.getElementById("subTitulos");

    function mostrarTexto() {
        titulo.style.opacity = "1";
        subtitulo.style.opacity = "1";
        titulo.classList.add("luz-verde");
        subtitulo.classList.add("luz-verde");

        setTimeout(() => {
            titulo.classList.remove("luz-verde");
            subtitulo.classList.remove("luz-verde");
        }, 700);

        setTimeout(() => {
            titulo.style.opacity = "0";
            subtitulo.style.opacity = "0";
        }, 6750);
    }

    setTimeout(() => {
        mostrarTexto(); 
        setInterval(mostrarTexto, 14000);
    }, 5000);
});

function carregarIdioma() {
    const idiomaSalvo = localStorage.getItem('idiomaSelecionado');
    const titulos = document.getElementById('titulos');
    const subTitulos = document.getElementById('subTitulos');
    const certificados = document.getElementById('certificados');
    const subCertificados = document.getElementById('subCertificados');
    const experiencias = document.getElementById('experiencias');
    const subExperiencias = document.getElementById('subExperiencias');
    const ferramentas = document.getElementById('ferramentas');
    const subFerramentas = document.getElementById('subFerramentas');
    const projetos = document.getElementById('projetos');
    const subProjetos = document.getElementById('subProjetos');
    const sobre = document.getElementById('sobre');
    const subSobre = document.getElementById('subSobre');

    if (idiomaSalvo) {
        if (idiomaSalvo === 'Português') {
            titulos.innerText = 'Olá, Sou Alexandros';
            subTitulos.innerText = 'Desenvolvedor Fullstack.';
            certificados.innerHTML = 'Certificados';
            subCertificados.innerText = 'Veja meus certificados de formação';
            experiencias.innerText = 'Expêriencias Profissionais';
            subExperiencias.innerText = 'Confira minhas experiências profissionais';
            ferramentas.innerText = 'Ferramentas e Linguagens';
            subFerramentas.innerText = 'Confira minhas habilidades de programação';
            projetos.innerText = 'Projetos';
            subProjetos.innerText = 'Olhe meus projetos criados';
            sobre.innerText = 'Sobre';
            subSobre.innerText = 'Conheça mais sobre mim';
        } else if (idiomaSalvo === 'English') {
            titulos.innerText = 'Hello, I am Alexandros';
            subTitulos.innerText = 'Fullstack Developer.';
            certificados.innerHTML = 'Certificates';
            subCertificados.innerText = 'View my training certificates';
            experiencias.innerText = 'Professional Experiences';
            subExperiencias.innerText = 'Check out my professional experiences';
            ferramentas.innerText = 'Tools and Languages';
            subFerramentas.innerText = 'Check out my programming skills';
            projetos.innerText = 'Projects';
            subProjetos.innerText = 'Look at my created projects';
            sobre.innerText = 'About me';
            subSobre.innerText = 'Get to know me better';
        } else if (idiomaSalvo === 'Español') {
            titulos.innerText = 'Hola, Soy Alexandros';
            subTitulos.innerText = 'Desarrollador Fullstack.';
            certificados.innerHTML = 'Certificados';
            subCertificados.innerText = 'Ver mis certificados de formación';
            experiencias.innerText = 'Experiencias profesionales';
            subExperiencias.innerText = 'Conoce mis experiencias profesionales';
            ferramentas.innerText = 'Herramientas y lenguajes';
            subFerramentas.innerText = 'Mira mis habilidades de programación';
            projetos.innerText = 'Proyectos';
            subProjetos.innerText = 'Mira mis proyectos creados';
            sobre.innerText = 'Acerca de mí';
            subSobre.innerText = 'Conóceme mejor';
        }
    }
}

window.onload = carregarIdioma;


function idiomaSelecionado(idioma) {
    const titulos = document.getElementById('titulos');
    const subTitulos = document.getElementById('subTitulos');
    const certificados = document.getElementById('certificados');
    const subCertificados = document.getElementById('subCertificados');
    const experiencias = document.getElementById('experiencias');
    const subExperiencias = document.getElementById('subExperiencias');
    const ferramentas = document.getElementById('ferramentas');
    const subFerramentas = document.getElementById('subFerramentas');
    const projetos = document.getElementById('projetos');
    const subProjetos = document.getElementById('subProjetos');

    if (idioma === 'Português') {
        titulos.innerText = 'Olá, Sou Alexandros';
        subTitulos.innerText = 'Desenvolvedor Fullstack.';
        certificados.innerHTML = 'Certificados';
        subCertificados.innerText = 'Veja meus certificados de formação';
        experiencias.innerText = 'Expêriencias Profissionais';
        subExperiencias.innerText = 'Confira minhas experiências profissionais';
        ferramentas.innerText = 'Ferramentas e Linguagens';
        subFerramentas.innerText = 'Confira minhas habilidades de programação';
        projetos.innerText = 'Projetos';
        subProjetos.innerText = 'Olhe meus projetos criados';
    } else if (idioma === 'English') {
        titulos.innerText = 'Hello, I am Alexandros';
        subTitulos.innerText = 'Fullstack Developer.';
        certificados.innerHTML = 'Certificates';
        subCertificados.innerText = 'View my training certificates';
        experiencias.innerText = 'Professional Experiences';
        subExperiencias.innerText = 'Check out my professional experiences';
        ferramentas.innerText = 'Tools and Languages';
        subFerramentas.innerText = 'Check out my programming skills';
        projetos.innerText = 'Projects';
        subProjetos.innerText = 'Look at my created projects';
        sobre.innerText = 'About me';
        subSobre.innerText = 'Get to know me better';
    } else if (idioma === 'Español') {
        titulos.innerText = 'Hola, Soy Alexandros';
        subTitulos.innerText = 'Desarrollador Fullstack.';
        certificados.innerHTML = 'Certificados';
        subCertificados.innerText = 'Ver mis certificados de formación';
        experiencias.innerText = 'Experiencias profesionales';
        subExperiencias.innerText = 'Conoce mis experiencias profesionales';
        ferramentas.innerText = 'Herramientas y lenguajes';
        subFerramentas.innerText = 'Mira mis habilidades de programación';
        projetos.innerText = 'Proyectos';
        subProjetos.innerText = 'Mira mis proyectos creados';
        sobre.innerText = 'Acerca de mí';
        subSobre.innerText = 'Conóceme mejor';
    }

    localStorage.setItem('idiomaSelecionado', idioma);
}
