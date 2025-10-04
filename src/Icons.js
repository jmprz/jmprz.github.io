const icons = [
    { id: 1, src: process.env.PUBLIC_URL + '/icons/ai.png', title: 'Adobe Illustrator', description: 'ai' },
    { id: 2, src: process.env.PUBLIC_URL + '/icons/ps.png', title: 'Adobe Photoshop', description: 'ps' },
    { id: 3, src: process.env.PUBLIC_URL + '/icons/canva.png', title: 'Canva', description: 'canva' },
    { id: 4, src: process.env.PUBLIC_URL + '/icons/figma.png', title: 'Figma', description: 'figma' },
    { id: 5, src: process.env.PUBLIC_URL + '/icons/gimp.png', title: 'GIMP', description: 'gimp' },
    { id: 6, src: process.env.PUBLIC_URL + '/icons/inkscape.png', title: 'Inkscape', description: 'inkscape' },
    { id: 7, src: process.env.PUBLIC_URL + '/icons/bootstrap.png', title: 'Bootstrap', description: 'bootstrap' },
    { id: 8, src: process.env.PUBLIC_URL + '/icons/html.png', title: 'HTML', description: 'html' },
    { id: 9, src: process.env.PUBLIC_URL + '/icons/js.png', title: 'Javascript', description: 'js' },
    { id: 10, src: process.env.PUBLIC_URL + '/icons/mysql.png', title: 'MySQL', description: 'mysql' },
    { id: 11, src: process.env.PUBLIC_URL + '/icons/php.png', title: 'PHP', description: 'php' },
    { id: 12, src: process.env.PUBLIC_URL + '/icons/react.png', title: 'ReactJS', description: 'react' },
    { id: 13, src: process.env.PUBLIC_URL + '/icons/tw.png', title: 'TailwindCSS', description: 'tw' },
    { id: 14, src: process.env.PUBLIC_URL + '/icons/wp.png', title: 'WordPress', description: 'wp' }
];

function imageLoader() {
    return icons;
}

export default imageLoader;
