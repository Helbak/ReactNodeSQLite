
// import '../styles/style.less';
// import { controller } from './controller/controller.js';
import * as initReact from './reactComponents/initReact.jsx';
console.log('loaded function init()');
function init() {
    console.log('loaded first init');
    initReact.init();
};
window.onload = () => {
    init();
};