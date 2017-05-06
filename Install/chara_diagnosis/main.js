$(function() {
  'use string';

  var types = ['勇者', '魔法使い', '戦士', '遊び人'];
  var characters = ['賢い', '勇ましい', 'かわいい', '情けない'];

  var name = $('#name');
  var btn = $('#getResult');
  var result = $('#result');
  var tweet = $('#tweet');

  btn.on('click', function() {
    var input_name = name.val();

    if (input_name === '') {
      alert('名前を入力してください');
      return;
    }
    
    var type = types[Math.floor(Math.random() * types.length)];
    var character = characters[Math.floor(Math.random() * characters.length)];
    var result_text = input_name + 'さんは、' + character + type + 'タイプです。'; 
    
    result.html(result_text);

    var tweetLink = '<a href="https://twitter.com/intent/tweet?text='+ encodeURIComponent(result_text) +'&hashtags=naoki" target="_blank">ツイートする</a>';
    tweet.html(tweetLink);
  });  
});