import { create } from "zustand";

interface SettingsStoreState {
	checkAnswers: boolean;
	showAnswers: boolean;
	strictMode: boolean;
}

export const useSettingsStore = create<SettingsStoreState>()((_set) => ({
	checkAnswers: false,
	showAnswers: false,
	strictMode: false,
}));

export function loadSettings() {
	const settings = localStorage.getItem("settings");

	if (settings) {
		const parsedSettings = JSON.parse(settings);

		useSettingsStore.setState({
			checkAnswers: parsedSettings.checkAnswers,
			strictMode: parsedSettings.strictMode,
		});
	}
}

// https://github.com/pmndrs/zustand/issues/938
export function saveSettings(state: SettingsStoreState) {
	localStorage.setItem(
		"settings",
		JSON.stringify({ ...state, showAnswers: null })
	);
}

export const toggleCheckAnswers = () => {
	useSettingsStore.setState((state) => ({
		checkAnswers: !state.checkAnswers,
	}));

	saveSettings(useSettingsStore.getState());
};

export const toggleShowAnswers = () => {
	useSettingsStore.setState((state) => ({ showAnswers: !state.showAnswers }));

	saveSettings(useSettingsStore.getState());
};

export const toggleStrictMode = () => {
	useSettingsStore.setState((state) => ({ strictMode: !state.strictMode }));

	saveSettings(useSettingsStore.getState());
};

export const setShowAnswers = (showAnswers: boolean) => {
	useSettingsStore.setState({ showAnswers });

	saveSettings(useSettingsStore.getState());
};
