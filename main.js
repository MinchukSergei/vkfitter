if (window.innerWidth < 1920 / 2) {
	document.getElementById('im_dialogs').style.width = '170px';
	getElByCl('im-page--dialogs').style.width = '170px';
	getElByCl('im-page--history').style.marginLeft = '171px';
	getElByCl('im-page--history').style.width = '410px';
	getElByCl('im-page--chat-body-abs').style.width = '410px';

	for (let f of document.styleSheets) {
		if (f.href && f.href.includes('im.css')) {
			f.insertRule(".nim-peer.nim-peer_small .im_grid img, .nim-peer.nim-peer_small .nim-peer--photo>img { margin-left: 0 !important; margin-bottom: 0 !important;}", 0);
			f.insertRule(".nim-peer .im_grid img, .nim-peer .nim-peer--photo>img { margin-left: 0 !important; margin-bottom: 0 !important;}", 0);
			f.insertRule(".nim-peer .nim-peer--photo { margin-left: 0 !important; margin-bottom: 0 !important;}", 0);

			f.insertRule(".nim-peer.nim-peer_small .nim-peer--photo .im_grid>img, .nim-peer.nim-peer_small .nim-peer--photo>img { width: 30px !important; height: 30px !important;}", 0);
			f.insertRule(".nim-peer.nim-peer_small { width: 30px !important; height: 30px !important;}", 0);

			f.insertRule(".nim-peer .nim-peer--photo .im_grid>img, .nim-peer .nim-peer--photo>img { width: 35px !important; height: 35px !important;}", 0);
			f.insertRule(".nim-peer { width: 35px !important; height: 35px !important;}", 0);

			f.insertRule(".nim-dialog .nim-dialog--name { margin-bottom: 2px !important; margin-top: 3px !important;}", 0);
			f.insertRule(".nim-dialog .nim-dialog--cw { padding: 3px 0 !important;}", 0);
			f.insertRule(".nim-dialog .nim-dialog--content { margin-left: 43px !important; padding-right: 10px !important;}", 0);
			f.insertRule(".nim-dialog .nim-dialog--photo { padding: 9px 0px 0px 0 !important;}", 0);
			f.insertRule(".nim-dialog { padding: 0 0 0 5px !important; height: 52px !important; }", 0);

			f.insertRule(".im-mess-stack .im-mess-stack--content .im-mess-stack--pname { left: 42px !important; }", 0);
			f.insertRule(".im-mess .im-mess--text { margin: 0 49px 0 43px !important; }", 0);
			f.insertRule(".im-mess-stack .im-mess-stack--photo { top: 12px !important; left: 10px !important; }", 0);
			f.insertRule(".im-mess .im-mess--check { left: 0px !important; }", 0);
			f.insertRule(".im-mess { margin: 0px 0px !important; }", 0);

			f.insertRule(".im-page--aside-photo { margin: 0 0 0 0px !important; }", 0);
			f.insertRule(".im-page--aside { padding: 0 0px 0 0px !important; min-width: 70px !important; }", 0);
			f.insertRule(".im-page--header-more .ui_actions_menu_icons { width: 20px !important; }", 0);
			f.insertRule(".im-page--header-more { width: 20px !important; }", 0);
			f.insertRule(".im-page--header-icon { width: 23px !important; }", 0);
			f.insertRule(".im-page--title { padding: 15px 5px !important; }", 0);
			f.insertRule(".im-page--title-meta { font-size: 11px !important; }", 0);

			f.insertRule(".im-chat-input .im-chat-input--send { right: -25px !important }", 0);
			f.insertRule(".im-send-btn { padding: 31px 3px !important; width: 20px !important }", 0);
			f.insertRule(".im-chat-input .im-chat-input--textarea { margin: 0 7px 0 25px !important; }", 0);
			f.insertRule(".im-chat-input .im-chat-input--selector { left: -47px !important; }", 0);
			f.insertRule(".im-chat-input .im-chat-input--textarea { width: 345px !important; }", 0);

			f.insertRule("#page_body { font-size: 17px !important; }", 0);
			f.insertRule(".im-replied--text { font: 17px/18px -apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important; }", 0);

			f.insertRule(".body_im .side_bar { margin-left: -55px !important; }", 0);
			f.insertRule(".side_bar_inner { width: 70px !important; }", 0);
			f.insertRule(".side_bar { width: 70px !important; }", 0);

			f.insertRule(".ads_ad_box4 { display: none !important; }", 0);
			f.insertRule(".ads_ads_box4 { display: none !important; }", 0);
			f.insertRule("#ads_left { display: none !important; }", 0);

			f.insertRule("#side_bar .left_icon { width: 23px !important; }", 0);
			f.insertRule("#side_bar .left_label { font-size: 11.5px !important; }", 0);

			f.insertRule("#side_bar ol li { margin-left: 17px !important; }", 0);

			f.insertRule(".im-page .im-page--dialogs-filter.im-page--dialogs-filter_disabled { font-size: 11.5px !important; }", 0);
			f.insertRule(".im-page .im-page--dialogs-filter { padding: 17px 5px !important; }", 0);
			f.insertRule(".fakeinput, div[contenteditable=true], input.big_text, input.file, input.search, input.text, input[type=button], input[type=password], input[type=search], input[type=submit], input[type=text], input[type~=email], input[type~=password], input[type~=search], input[type~=text], textarea { font-size: 17px !important; }", 0);

		}
	}
}

function getElByCl(clN) {
	return document.getElementsByClassName(clN)[0];
}