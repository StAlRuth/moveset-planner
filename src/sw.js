import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

const urlsToCache = getFiles();
urlsToCache.push({ url: '/data/learnsets.json', revision: '2021-02-06' });

setupRouting();
setupPrecaching(urlsToCache);
