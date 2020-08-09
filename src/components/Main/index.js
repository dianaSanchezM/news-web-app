import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { categories } from '../../data';
import CardsList from '../CardsList';

const Main = () => {
    return(
        <Switch>
            <Route
                path="/categories/:categorieId"
                render={({ match }) => {
                    console.log('cateogrie id', match.params.categorieId)
                    const param = categories.find(a => a.id === match.params.categorieId);
                    console.log('param', param)
                    return <CardsList category={param} />;
                }}
            />
        </Switch>
    )
}

export default Main;