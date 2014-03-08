/**
 * 最初に読み込む
 */
$(document).ready(function() {
	$('#showTL').click(function() {
		show_TL();
	});


//	setInterval('add_CM_clip()', 2000);
	setInterval('add_program_clip()', 2000);
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
 * CMのログを追加する
 */
function add_CM_clip(json_data) {
	var cld = $('#TL').children();
	var len = cld.length;
	var latest = $(cld[len-1]);
	var id_num = get_clip_id_num(latest.attr('id'));

	id_num++; // 新しく追加するid番号

	var sum_path = './img/sum.gif';
	var title = 'うなぎ王国の崩壊';
	var expln = 'うなぎが美味しくさばける包丁';

	/**
	 * TLに挿入
	 */
	var clip = get_CM_clip(id_num, sum_path, title, expln);
	clip.appendTo($('#TL'));

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

/**
 * 番組のログを追加
 */
function add_program_clip(json_data) {
	/**
	 * idを決める
	 */
	var cld = $('#TL').children();
	var len = cld.length;
	var latest = $(cld[len-1]);
	var id_num = get_clip_id_num(latest.attr('id'));

	id_num++; // 新しく追加するid番号

	var sum_path = './img/sum.gif';
	var title = 'うなぎ王国の崩壊';
	var expln = 'うなぎが美味しくさばける包丁';
	var time = '１０：００～１４：００';

	/**
	 * TLに挿入
	 */
	var clip = get_program_clip(id_num, sum_path, title, expln, time);
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

/**
 * id_numberを指定して番組のログのタグを作成
 * @param id_num
 * @returns
 */
function get_program_clip(id_num, sum_path, title, expln, time) {
	var table = $('<table></table>').attr({
		'id': 'clip' + id_num,
		'class': 'clip program_clip'
	});

	var tr1 = $('<tr></tr>').appendTo(table);
	$('<td rowspan="3"><img src="./img/sum.gif"' +
			'alt="" /></td><td class="title"><img src="./img/program.gif" alt="" /><br />情熱大陸 ～うなぎの生態をめぐって～</td>').appendTo(tr1);

	var tr2 = $('<tr></tr>').appendTo(table);
	$('<td>うなぎはどこからやってくるのか？うなぎの生まれをたしかめるために・・・</td>').appendTo(tr2);

	var tr3 = $('<tr></tr>').appendTo(table);
	$('<td>10:00～13:00</td>').appendTo(tr3);

	return table;
}

function get_CM_clip(id_num, sum_path, title, expln) {
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