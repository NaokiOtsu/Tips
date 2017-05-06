import $      from 'jquery';

class CountDown {
	constructor(year, month, day, hour, minute, second) {
		this.$countdown = $('.countdown-container');
		
		year = year || 2020;
		month = month || 1;
		day = day || 1;
		hour = hour || 0;
		minute = minute;
		second = second || 0;
		
		this.goal_date = new Date(year, month, day, hour, minute, second);
		
		this.init();
	}
	
	init() {
		setInterval(this.render.bind(this), 1 * 1000);
	}
	
	render() {
		let now_date = new Date();
		let diff = this.goal_date - now_date;
		let a_day         = 24 * 60 * 60 * 1000; // 24HのMillisecond
		let remain_day    = Math.floor(diff / a_day); // 残りの日
		let remain_hour   = Math.floor((diff % a_day) / (60 * 60 * 1000)); // 残り時間
		let remain_minute = Math.floor((diff % a_day) / (60 * 1000)) % 60; // 残りの分
		let remain_second = Math.floor((diff % a_day) / 1000) % 60 % 60; // 残りの秒数
		
		this.$countdown.html('あと'+ remain_day +'日'+ remain_hour +'時間'+ remain_minute +'分'+ remain_second +'秒');
		
	}
}

module.exports = CountDown;