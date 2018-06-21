/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import Audio from '../audio/Audio';
import CreateArticle from '../article/createArticle';
import Articles from '../article/Articles';
import Article from '../article/Article';
import Flow from '../flow/SimpleFlow';
import Gante from '../gantt/Gantt';
import Ui from '../ui/Ui';
import Table from '../table/Table';
import Form from '../form/Form';
import Layer from '../layer/Ui3';
// import HelloCon from '../test/HelloCon.tsx';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Route path="/home/audio" component={Audio}/>
                <Route path="/home/flow" component={Flow}/>
                <Route path="/home/createArticle" component={CreateArticle}/>
                <Route path="/home/articles" component={Articles}/>
                <Route path="/home/article/:id" component={Article}/>
                <Route path="/home/gante" component={Gante}/>
                <Route path="/home/ui" component={Ui}/>
                <Route path="/home/table" component={Table}/>
                <Route path="/home/form" component={Form}/>
                <Route path="/home/layer" component={Layer}/>
            </div>
        )
    }
}
export default Content;