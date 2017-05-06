(() => {

  const GOAL_TIME = '2016/11/22 5:00';
  const DATE = {
    day    : '日',
    hour   : '時間',
    minute : '分',
    second : '秒'
  };

  class CountDown {
    
    constructor() {
      this.timer_id;
      this.is_goal = false;
      
      this.init();
    }

    // 初期化
    init() {
      this.build();
    }

    // HTMLを作る
    build() {
      var date = this.getDate();

      // 達してる時は処理しない
      if (this.is_goal) return;

      this.createDomElement(date, 'day');
      this.createDomElement(date, 'hour');
      this.createDomElement(date, 'minute');
      this.createDomElement(date, 'second');
    };

    // DOM要素を作ってHTMLに追加する
    createDomElement(date, str) {
      var container = document.getElementById('countdown-container');
      
      for (var i = 0; i < date[str].length; i++) {
        var span = document.createElement('span');
        span.className = `countdown-sprite num-${date[str].charAt(i)}`;
        this[`${str}_${i}`] = span;

        container.appendChild(span);
      }

      var text = document.createElement('span');
      text.className = 'countdown-text';
      text.textContent = DATE[str];
      
      container.appendChild(text);
    };

    // 今の時間からゴール日までの日付を返す
    getDate() {
      var diff;
      var diff_time = new Date(GOAL_TIME) - Date.now();
      var day = Math.floor(diff_time / (24 * 60 * 60 * 1000));
      diff = diff_time % (24 * 60 * 60 * 1000);
      var hour = Math.floor(diff / (60 * 60 * 1000));
      diff = diff % (60 * 60 * 1000);
      var minute = Math.floor(diff / (60 * 1000));
      diff = diff % (60 * 1000);
      var second = Math.floor(diff / 1000);

      // ゴールに達したら
      if (diff_time < 0) {
        console.log('達したよん');
        this.is_goal = true;
        return;
      }

      // 桁を揃える
      day = String(day);
      hour   = (`00${hour}`).slice(-2);
      minute = (`00${minute}`).slice(-2);
      second = (`00${second}`).slice(-2);

      return {
        day    : day,
        hour   : hour,
        minute : minute,
        second : second
      };
    };

    // カウントダウンをスタート
    start() {
      // 達してる時は処理しない
      if (this.is_goal) return;

      this.timer_id = setInterval(()=> {
        this.update();
      }, 100);
    };

    // 一定時間でDOMを更新する
    update() {
      var date = this.getDate();

      this.updateDomElement(date, 'day');
      this.updateDomElement(date, 'hour');
      this.updateDomElement(date, 'minute');
      this.updateDomElement(date, 'second');
    };

    // DOM要素を更新する
    updateDomElement(date, str) {
      for (var i = 0; i < date[str].length; i++) {
        this[`${str}_${i}`].className = `countdown-sprite num-${date[str].charAt(i)}`;
      }
    };

  }

  window.addEventListener('DOMContentLoaded', ()=> {
    const countdown = new CountDown();
    countdown.start();
  });
  
})();
