/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

importScripts('js/libs/sw-toolbox/sw-toolbox.js');

toolbox.options.debug = true;

tool.precache([
    'index.html',
    'js/libs/jquery/jquery.js',
    'produtos.json',
    'view/principal.html',
    'view/produto.html'
]);

toolbox.router.get('index.html', toolbox.cacheFirst);
toolbox.router.get('produtos.json', toolbox.cacheFirst);
toolbox.router.get('js/libs/*', toolbox.cacheFirst);
toolbox.router.get('js/loja.js', toolbox.cacheFirst);
toolbox.router.get('views/*', toolbox.cacheFirst);
toolbox.router.get('icons/*', toolbox.cacheFirst);


toolbox.router.get('*', toolbox.networkFirst);








