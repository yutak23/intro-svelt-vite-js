const getRandomNumber = async () => {
	const randomNumber = Math.floor(Math.random() * 100);
	const result = await new Promise((resolve, reject) => {
		setTimeout(() => {
			if (randomNumber > 50) resolve(randomNumber);
			reject(new Error('Request failed'));
		}, 1000);
	});
	return result;
};

// eslint-disable-next-line import/prefer-default-export
export { getRandomNumber };
