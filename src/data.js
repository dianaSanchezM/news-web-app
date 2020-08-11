

function formatDate() {
    let date = new Date(),
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export const categories = [
    {
        id: 'home',
        path: 'latest/'+formatDate(),
        name : 'INICIO'
    },
    {   
        id: 'politics',
        path: 'news/category/1',
        name : 'POLITICA',
    }, 
    {   
        id: 'international',
        path: 'news/category/2',
        name : 'INTERNACIONAL',
    }, 
    {   
        id: 'tech',
        path: 'news/category/3',
        name : 'TECNOLOGIA',
    }, 
    {   
        id: 'shows',
        path: 'news/category/4',
        name : 'ESPECTACULOS',
    }, 
    {   
        id: 'sports',
        path: 'news/category/5',
        name : 'DEPORTES',
    }, 
    {   
        id: 'design',
        path: 'news/category/6',
        name : 'DISEÑO',
    }
];