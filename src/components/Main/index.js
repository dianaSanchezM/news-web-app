import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { categories } from '../../data';
import CardsList from '../CardsList';

const Main = () => {
    return(
        <Switch>
            <Route exact
                path="/categories/:categorieId"
                render={({ match }) => {
                    //console.log('cateogrie id', match.params.categorieId)
                    const param = categories.find(a => a.id === match.params.categorieId);
                    //console.log('param', param)
                    return <CardsList category={param} />;
                }}
            />
            <Route
                path="/categories/search/:word"
                render={({ match }) => {
                    //console.log('cateogrie id', match.params.categorieId)
                    const params = { name: 'search', path:'/search/'+match.params.word};
                    //console.log('param', match.params.word)
                    return <CardsList category={params} />;
                }}
            />
        </Switch>
    )
}

export default Main;