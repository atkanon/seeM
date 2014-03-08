/**
 * 最初に読み込む
 */
$(document).ready(function() {
	$('#showTL').click(function() {
		show_TL();
	});


	setInterval('add_CM_clip()', 5000);
	setInterval('add_program_clip()', 1000);
});

/**
 * クリック属性をつける
 *
 * クリップをクリックしたら詳細を表示
 * 詳細を表示したらクリップTLを表示
 */
function set_action() {
	$('.clip').each(function() {
		$(this).click(function() {
			var str = $(this).attr('id');
			var id_num = get_clip_id_num(str);
			show_clip_details(id_num);
		});
	});
}


/**
 * id名から番号を取得
 * clip1 -> 1を取得
 *
 * @param str
 * @returns
 */
function get_clip_id_num(str) {
	var res = str.match(/^clip(\d+)$/);
	if (res) {
		return res[1];
	} else {
		return false;
	}
}


/**
 * クリップを追加する
 */
function add_CM_clip() {
	var cld = $('#TL').children();
	var latest = $(cld[0]);
	var id_num = get_clip_id_num(latest.attr('id'));

	id_num++; // 新しく追加するid番号

	/**
	 * TLに挿入
	 */
	var clip = get_CM_clip(id_num);
	 clip.insertBefore(latest);

	/**
	 * 詳細情報を挿入
	 */
	 var details = get_CM_details_clip(id_num);
	details.insertAfter($('#TL'));

	/**
	 * 全体にクリック属性を付け直す
	 */
	set_action();
}

function add_program_clip() {
	var cld = $('#TL').children();
	var latest = $(cld[0]);
	var id_num = get_clip_id_num(latest.attr('id'));

	id_num++; // 新しく追加するid番号

	/**
	 * TLに挿入
	 */
	var clip = get_program_clip(id_num);
	 clip.appendTo($('#TL'));

	/**
	 * 詳細情報を挿入
	 */
	 var details = get_program_details_clip(id_num);
	details.insertAfter($('#TL'));

	/**
	 * 全体にクリック属性を付け直す
	 */
	set_action();
}

function get_program_clip(id_num) {
	var clip = $('<div></div>').attr({
		'id': 'clip' + id_num,
		'class': 'clip'
	}).html('番組clip' + id_num);
	return clip;
}

function get_CM_clip(id_num) {
	var clip = $('<div></div>').attr({
		'id': 'clip' + id_num,
		'class': 'clip'
	}).html('CMclip' + id_num);
	return clip;
}

function get_program_details_clip(id_num) {
	var details = $('<div></div>').attr({
		'id': 'details' + id_num,
		'class': 'details'
	});

	// 詳細情報のタイトル
	var title = $('<div class="title"></div>').html('details' + id_num);
	title.appendTo(details);
	// 詳細情報の中身
	var contents = $('<div class="contents"></div>').html('この番組は' + id_num + 'です');
	contents.appendTo(details);
	return details;
}

function get_CM_details_clip(id_num) {
	var details = $('<div></div>').attr({
		'id': 'details' + id_num,
		'class': 'details'
	});

	// 詳細情報のタイトル
	var title = $('<div class="title"></div>').html('details' + id_num);
	title.appendTo(details);
	// 詳細情報の中身
	var contents = $('<div class="contents"></div>').html('この商品は' + id_num + 'です');
	contents.appendTo(details);
	return details;
}

/**
 * クリップの詳細を表示する
 */
function show_clip_details(id) {
	$('#TL').hide();
	$('#showTL').show();

	var id_name = 'details' + id;
	$('#' + id_name).show();
}

/**
 * TLを表示する
 */
function show_TL() {
	$('#showTL').hide();
	$('.details').each(function() {
		$(this).hide();
	});
	$('#TL').show();
}