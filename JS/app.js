$(function(){

	// ハンバーガーメニュー
	$('#q7-btn').on('click',function(){
		let isActive = $(this).hasClass('on');
		toggleDrower(isActive);
	});


	// ドロワー
	function toggleDrower(isActive) {
	    $('.js-hamburger')
	    if (isActive) {
	      $('#drower-bg').fadeOut(600);
	    } else {
	      $('#drower-bg').fadeIn(600);
	    }
	    $('.js-hamburger').toggleClass('on');
	    $('.js-drower').toggleClass('on');
	  }

	// モーダル
	// 新規登録、ログインでモーダル
	




});