import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { categories } from '../../data';
import News from '../../containers/news';

const Main = () => {

    return(
        <Switch>
            <Route exact
                path="/"
                render={() => {
                    return <News category={categories[0]} />;
                }}
            />
            <Route exact
                path="/categories/:categorieId"
                render={({ match }) => {
                    const param = categories.find(a => a.id === match.params.categorieId);
                    return <News category={param} />;
                }}
            />
            <Route
                path="/categories/search/:word"
                render={({ match }) => {
                    const params = { name: 'search', path:'/search/'+match.params.word};
                    return <News category={params} />;
                }}
            />
        </Switch>
    )
}

export default Main;