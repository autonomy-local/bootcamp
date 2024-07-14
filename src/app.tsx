import { getFirebaseApp } from "./firebase/init";
import { setEvent, initAnalytics } from "./firebase/analytics";

export const App = () => {
	const app = getFirebaseApp();
	setEvent(initAnalytics(app), {
		name: "init_app",
	});
	return <div>Hello, World!</div>;
};
