

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
        id: '1',
        path: 'latest/'+formatDate(),
        name : 'HOME'
    },
    {   
        id: '2',
        path: 'news/category/1',
        name : 'POLITICA',
    }, 
    {   
        id: '3',
        path: 'news/category/2',
        name : 'INTERNACIONAL',
    }, 
    {   
        id: '4',
        path: 'news/category/3',
        name : 'TECNOLOGIA',
    }, 
    {   
        id: '5',
        path: 'news/category/4',
        name : 'ESPECTACULOS',
    }, 
    {   
        id: '6',
        path: 'news/category/5',
        name : 'DEPORTES',
    }, 
    {   
        id: '7',
        path: 'news/category/6',
        name : 'DISENO',
    }
];