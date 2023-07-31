<script>
	const numbers = [1, 2, 3, 4];

	const addNumber = () => {
		// numbers.push(numbers.length + 1);
		// numbers = numbers; // Sveltのリアクティビティは代入によってトリガーされるので、このような代入が必要になる

		// 以下も上記と同じように動作する
		// numbers = [...numbers, numbers.length + 1];

		numbers[numbers.length] = numbers.length + 1;
	};

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}> Add a number </button>
