import Storage from './Storage';

class AuthStorage extends Storage {
	get loggedIn() {
		return (async () => {
			try {
				const value = await this.getValue();
				return Promise.resolve(!!value && !!value.token && !!value.userId);
			} catch (error) {
				return Promise.reject(error);
			}
		})();
	}

	get token() {
		return (async () => {
			try {
				const value = await this.getValue();
				return Promise.resolve(!!value && value.token);
			} catch (error) {
				return Promise.reject(error);
			}
		})();
	}

	get userId() {
		return (async () => {
			try {
				const value = await this.getValue();
				return Promise.resolve(!!value && value.userId);
			} catch (error) {
				return Promise.reject(error);
			}
		})();
	}
}

export default new AuthStorage('AUTH');
