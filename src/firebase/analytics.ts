import { getAnalytics, logEvent } from "firebase/analytics";
import type { FirebaseApp } from "firebase/app";
import type {
	Analytics,
	EventParams,
	AnalyticsCallOptions,
} from "firebase/analytics";

export function initAnalytics(app: FirebaseApp) {
	return getAnalytics(app);
}

export function setEvent(analytics: Analytics, event: Event) {
	// Log the event
	logEvent(analytics, event.name, event.params, event.options);
}

// Google Analytics 4 event parameters
// Ref > https://developers.google.com/analytics/devguides/collection/ga4/reference/events?hl=ja&client_type=gtag
// add_payment_info ユーザーが支払情報を送信したことを示す
// add_shipping_info ユーザーが配送情報を送信したことを示す
// add_to_cart カートに商品が追加されたことを示す
// add_to_wishlist ウィッシュリストに商品が追加されたことを示す
// begin_checkout ユーザーが購入手続きを開始したことを示す
// earn_virtual_currency ユーザーが仮想通貨を獲得したことを示す
// generate_lead ユーザーがリードを生成したことを示す
// join_group ユーザーがグループに参加したことを示す
// level_end ユーザーがレベルを終了したことを示す
// level_start ユーザーがレベルを開始したことを示す
// level_up ユーザーがレベルアップしたことを示す
// login ユーザーがログインしたことを示す
// post_score ユーザーがスコアを投稿したことを示す
// purchase ユーザーが購入したことを示す
// refund 購入が返金されたことを示す
// remove_from_cart カートから商品が削除されたこを示す
// search ユーザーが検索を実行したことを示す
// select_content ユーザーがコンテンツを選択したことを示す
// select_item ユーザーがアイテムを選択したことを示す
// select_promotion ユーザーがプロモーションを選択したことを示す
// share ユーザーがコンテンツを共有したことを示す
// sign_up ユーザーがサインアップしたことを示す
// spend_virtual_currency ユーザーが仮想通貨を使ったことを示す
// tutorial_begin ユーザーがチュートリアルを開始したことを示す
// tutorial_complete ユーザーがチュートリアルを完了したことを示す
// unlock_achievement ユーザーが実績を解除したことを示す
// view_cart ユーザーがカートを表示したことを示す
// view_item ユーザーがアイテムを表示したことを示す
// view_item_list ユーザーがアイテムリストを表示したことを示す
// view_promotion ユーザーがプロモーションを表示したことを示す

type Event = {
	name: AnalyticsEvents;
	params?: {
		// ref > https://developers.google.com/analytics/devguides/collection/ga4/reference/events?hl=ja&client_type=gtag
		affiliation?: EventParams["affiliation"];
		checkout_option?: EventParams["checkout_option"];
		checkout_step?: EventParams["checkout_step"];
		content_type?: EventParams["content_type"];
		coupon?: EventParams["coupon"];
		currency?: EventParams["currency"];
		description?: EventParams["description"];
		event_category?: EventParams["event_category"];
		event_label?: EventParams["event_label"];
		fatal?: EventParams["fatal"];
		firebase_screen_class?: EventParams["firebase_screen_class"];
		firebase_screen?: EventParams["firebase_screen"];
		item_id?: EventParams["item_id"];
		item_list_id?: EventParams["item_list_id"];
		item_list_name?: EventParams["item_list_name"];
		items?: EventParams["items"];
		method?: EventParams["method"];
		number?: EventParams["number"];
		page_location?: EventParams["page_location"];
		page_path?: EventParams["page_path"];
		page_title?: EventParams["page_title"];
		payment_type?: EventParams["payment_type"];
		promotion_id?: EventParams["promotion_id"];
		promotion_name?: EventParams["promotion_name"];
		promotions?: EventParams["promotions"];
		screen_name?: EventParams["screen_name"];
		search_term?: EventParams["search_term"];
		shipping_tier?: EventParams["shipping_tier"];
		shipping?: EventParams["shipping"];
		tax?: EventParams["tax"];
		transaction_id?: EventParams["transaction_id"];
		value?: EventParams["value"];
	};
	options?: AnalyticsCallOptions;
};

export type AnalyticsEvents = "init_app";
