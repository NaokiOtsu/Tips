# Gruntで Connect Watch Livereload Compass
Gruntの
- [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [connect-livereload](https://github.com/intesso/connect-livereload)
- [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)

を使って、ローカルサーバーの立ち上げとファイル監視、Compassコンパイル、変更の際にブラウザ自動更新(livereload)機能を実装。

## 実装の際の注意点

connect-livereloadは、下記のChrome Extensionが必要だった。  
[LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)  
このExtentionを入れて、ONにしておかないと動かない。  

connect-livereloadは、loadNpmTasksしなくてよかったが、  
事前に npm install --save-dev connect-livereload をしておく必要がある。    
```javascript
grunt.loadNpmTasks('connect-livereload'); #これは書かなくて良い
```

