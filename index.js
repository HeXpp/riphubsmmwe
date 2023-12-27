window.$docsify = {
    name: "SMM:WE Rip Hub",
    nameLink: {
        "/": "/",
        "/es-es/": "/es-es/",
    },
    loadSidebar: true,
    subMaxLevel: 3,
    loadNavbar: true,
    plugins: [
        function addPageBottom(hook, vm) {
            hook.afterEach((html) => {
                const currentDocPath = vm.route.file;
                const localizedPageBottoms = {
                    'es-es': '<div align="center">2021-2023 Por HeXp (con la ayuda de Kirikaze Chiyuki) y el equipo de SMM:WE con 💗</div>'
                }
                for (const lang in localizedPageBottoms) {
                    if (currentDocPath.includes(lang)) {
                        return html + localizedPageBottoms[lang];
                    }
                }
                return html + '<div align="center">2023 By HeXp (with the help of Kirukaze Chiyuki) and SMM:WE team with 💗</div>';
            });
        }
    ],
    fallbackLanguages: ['es-es', 'zh-cn'],

};
