/**
import { getFiles, setupPrecaching } from 'preact-cli/sw/';

const urlsToCache = getFiles();
urlsToCache.push({ url: '/data/learnsets.json', revision: '2021-01-29' });

setupPrecaching(urlsToCache);
*/

import { getFiles, setupPrecaching } from 'preact-cli/sw/';

setupPrecaching(getFiles());
