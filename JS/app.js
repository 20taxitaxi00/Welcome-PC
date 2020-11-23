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
	$('.js-register, .js-login').on('click', function(){
		let isRegister = $(this).hasClass('js-register');
		showModal(isRegister);
	});

	// モーダルを閉じる
	$('.js-modal-close').on('click', function(){
		closeModal();
	});

	// モーダル関数
	function showModal(isRegister) {
		let btn = $('#js-modal-form-btn');
		if (isRegister) {
			btn.text('登録');
			btn.removeClass('login').addClass('register');
		} else {
			btn.text('ログイン');
			btn.removeClass('register').addClass('login');	
		}

		$('#modal-bg').fadeIn(600);
		$('.modal-content').fadeIn(800);
	}

	function closeModal() {
		$('#modal-bg').fadeOut(800);
		$('.modal-content').fadeOut(600);
	}


});