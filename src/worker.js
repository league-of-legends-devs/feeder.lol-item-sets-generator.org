import death from 'death';
import runTask from './cronTask';
import generator from './cronTasks/generator';
import { disconnectMongo } from './db';
import queue from './kue';
import * as statsd from './statsd';
import config from './config';

console.log('__ AUTOMATED GENERATION __');

const { version } = require('../package.json');

console.log(`Running worker version : ${version}.`);

// ==== Generator ====

const onDeath = death({ uncaughtException: true });
onDeath(async (/* signal, err */) => {
  console.log('Shutting down MongoDB connection ...');
  await disconnectMongo();
  console.log('Shuting down Kue ...');

  queue.shutdown(5000, (err) => {
    if (err) {
      console.log('Kue shutdown error : ', err);
    }
    statsd.stopGenerationTimer();
    statsd.registerGeneration();
    statsd.close();

    console.log('Exiting ...');
    process.exit(0);
  });
});

runTask(generator, config.cron);
