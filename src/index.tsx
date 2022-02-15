import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';


createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'dev',
          amount: 100,
          type: 'deposit',
          category: 'freela',
          createdAt: new Date('2021-02-01 10:00:00')
        },
        {
          id: 2,
          title: 'agua',
          amount: 200,
          type: 'withdraw',
          category: 'contas a pagar',
          createdAt: new Date('2021-02-05 15:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const transaction = JSON.parse(request.requestBody);
      transaction.createdAt = new Date();
      return schema.create('transaction', transaction);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

