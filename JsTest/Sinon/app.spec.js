import assert from 'assert';
import { loadServerHTML } from './app.js';
import sinon from 'sinon';

describe('loadServerHTML', function() {
  it('サーバーのHTMLを読み込める', function() {
    document.body.innerHTML = __html__['hoge.html'];
    
    let server = sinon.fakeServer.create();
    
    let container = document.querySelector('.js-container');
    
    assert.equal(container.innerHTML, '', '最初は何も存在しない');
    
    loadServerHTML(container, '/path/to/server_html');
    
    assert.equal(container.innerHTML, 'loading', 'リクエストを送ったら中身がloadingに');
    
    server.respondWith([
      200, { 'Content-Type': 'text/html' }, '<p>サーバーから返したHTMLです</p>'
    ]);
    server.respond();
    
    assert.equal(container.innerHTML, '<p>サーバーから返したHTMLです</p>', '返ってきたHTMLがロードされる');
    
    server.restore();
  });
});