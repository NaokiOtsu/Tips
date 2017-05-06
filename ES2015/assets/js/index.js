import $         from 'jquery';
import Tap       from 'Tap';
import CountDown from 'CountDown';

$(() => {
	init();
});

const init = () => {
	new Tap();
	new CountDown(2017, 1, 1, 0, 0, 0);
};
