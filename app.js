console.log('hello world');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
    console.log('registered sw.js');
}