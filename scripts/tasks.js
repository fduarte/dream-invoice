
Vue.component('card', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        };
    },
    template: `
        <div class="card" v-show="isVisible" @click="close">
            <h3 class="card-header">{{ title }}
            <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </h3>
            <div class="card-block">
            <p class="card-text">{{ body }}</p>
            </div>
        </div>
  
  `,
    methods: {
        close() {
            this.isVisible = false
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>',
});

Vue.component('task-list', {
    data: function() {
        return {
            tasks: tasks
        }
    },
    template: `
    <ul class="list-unstyled"> 
        <task v-for="task in tasks">
            <input type="checkbox" v-model="task.completed"> 
            {{ task.title }}
        </task>
    </ul>
    `,
});

var tasks = [
    { title: 'Buy paint', completed: true },
    { title: 'Go to the Mall', completed: false },
];

new Vue({
    el: '#main',
    data: {
        newTask: '',
        message: 'Greetings!',
        task: [''],
        tasks: tasks
    },
    mounted() {
        this.isDisabled = false;
    },
    methods: {
        addTask() {
            this.tasks.push({ title: this.newTask, completed: false });
            this.newTask = '';
        },
        completeTask() {
            this.task.completed = true;
        }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        },
        completeTasks() {
            return this.tasks.filter(task => task.completed);
        },
        incompleteTasks() {
            return this.tasks.filter(task => ! task.completed);
        }
    }
});


