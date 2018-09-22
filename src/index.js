import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import View from './view';
import registerServiceWorker from './registerServiceWorker';

import { observable, computed } from 'mobx';

class ObservableTodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get report() {
        if (this.todos.length === 0)
            return "<none>";
        return `Next todo: "${this.todos[0].task}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
}


const observableTodoStore = new ObservableTodoStore();

ReactDOM.render(<View store={observableTodoStore}/>, document.getElementById('root'));
registerServiceWorker();
