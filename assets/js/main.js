import dva from 'dva';
import example from './models/example';
import RouterConfig from './router';

// 1. Initialize
const app = dva({
  initialState: {
    examples: [
      {name: 'dva1', id: 1},
      {name: 'dva2', id: 2},
      {name: 'dva3', id: 3},
    ],
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(example);

// 4. Router
// app.router(require('./router'));
app.router(RouterConfig);

// 5. Start
app.start('#root');
